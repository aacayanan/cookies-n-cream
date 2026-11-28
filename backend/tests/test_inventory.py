"""Tests for authentication on data endpoints and the /api/inventory read."""

from types import SimpleNamespace

import pytest
from supabase import AuthApiError

import app as app_module

fake_user = SimpleNamespace(id="u-1", email="user@example.com")


@pytest.fixture()
def client():
    app_module.app.config["TESTING"] = True
    with app_module.app.test_client() as test_client:
        yield test_client


@pytest.fixture()
def mock_supabase(monkeypatch):
    """Replace the Supabase client with a mock; returns the auth interface."""
    auth = SimpleNamespace(get_user=lambda token: None)
    client = SimpleNamespace(
        auth=auth,
        table=lambda name: SimpleNamespace(
            select=lambda cols: SimpleNamespace(
                execute=lambda: SimpleNamespace(data=[])
            )
        ),
    )
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: client)
    return auth


def auth_get_user_ok(token):
    return SimpleNamespace(user=fake_user)


def auth_get_user_rejects(token):
    raise AuthApiError("Invalid token", 401, "bad_jwt")


# --- /api/inventory requires authentication ----------------------------------


def test_inventory_rejects_missing_authorization_header(client, mock_supabase):
    response = client.get("/api/inventory")

    assert response.status_code == 401
    assert response.get_json()["error"] == "Authentication required"


@pytest.mark.parametrize(
    "header",
    [
        "",  # empty header
        "token-without-scheme",  # no Bearer prefix
        "Basic abc123",  # wrong scheme
        "Bearer ",  # empty token
        "Bearer    ",  # whitespace-only token
    ],
    ids=["empty", "no_scheme", "wrong_scheme", "empty_token", "whitespace_token"],
)
def test_inventory_rejects_malformed_authorization_header(
    client, mock_supabase, header
):
    response = client.get("/api/inventory", headers={"Authorization": header})

    assert response.status_code == 401


def test_inventory_rejects_invalid_token(client, mock_supabase):
    mock_supabase.get_user = auth_get_user_rejects

    response = client.get(
        "/api/inventory", headers={"Authorization": "Bearer not-a-real-token"}
    )

    assert response.status_code == 401
    assert response.get_json()["error"] == "Invalid or expired token"


def test_inventory_returns_items_for_valid_token(client, monkeypatch):
    requested_tables = []

    def table(name):
        requested_tables.append(name)
        return SimpleNamespace(
            select=lambda cols: SimpleNamespace(
                execute=lambda: SimpleNamespace(
                    data=[{"id": "i-1", "sku": "SKU-001", "name": "Widget"}]
                )
            )
        )

    mock_auth = SimpleNamespace(get_user=auth_get_user_ok)
    app_client = SimpleNamespace(auth=mock_auth, table=table)
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: app_client)

    response = client.get(
        "/api/inventory", headers={"Authorization": "Bearer good-token"}
    )

    assert response.status_code == 200
    assert response.get_json()["data"] == [
        {"id": "i-1", "sku": "SKU-001", "name": "Widget"}
    ]
    # Reads must come from the real schema table, not the old "Inventory" name.
    assert requested_tables == ["inventory_items"]


def test_inventory_returns_503_when_supabase_not_configured(
    client, monkeypatch
):
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: None)

    response = client.get(
        "/api/inventory", headers={"Authorization": "Bearer some-token"}
    )

    assert response.status_code == 503
    assert response.get_json()["error"] == "Supabase is not configured"


# --- Public endpoints stay public ---------------------------------------------


def test_health_stays_public(client):
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}


def test_login_and_signup_stay_public(client):
    # Both endpoints validate input before touching Supabase, so bad input
    # proving they were reached without any Authorization header.
    login = client.post("/api/login", json={})
    signup = client.post("/api/signup", json={})

    assert login.status_code == 400
    assert signup.status_code == 400


# --- CORS allowlist -----------------------------------------------------------


def test_cors_allows_configured_origin(client):
    response = client.get(
        "/api/health",
        headers={"Origin": "http://localhost:5173"},
    )

    assert response.headers.get("Access-Control-Allow-Origin") == (
        "http://localhost:5173"
    )


def test_cors_rejects_unlisted_origin(client):
    response = client.get(
        "/api/health",
        headers={"Origin": "http://evil.example.com"},
    )

    assert response.headers.get("Access-Control-Allow-Origin") is None
