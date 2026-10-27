"""Tests for the /api/login endpoint and its email/password input validation."""

from types import SimpleNamespace

import pytest
from supabase import AuthApiError

import app as app_module


@pytest.fixture()
def client():
    app_module.app.config["TESTING"] = True
    with app_module.app.test_client() as test_client:
        yield test_client


@pytest.fixture()
def mock_supabase(monkeypatch):
    """Replace the Supabase client with a mock and return its auth interface."""
    auth = SimpleNamespace(sign_in_with_password=lambda credentials: None)
    client = SimpleNamespace(auth=auth)
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: client)
    return auth


# --- Validation of mock email/password input ---------------------------------


@pytest.mark.parametrize(
    "payload",
    [
        {},  # no fields at all
        {"email": "user@example.com"},  # missing password
        {"password": "hunter2"},  # missing email
        {"email": "", "password": "hunter2"},  # empty email
        {"email": "user@example.com", "password": ""},  # empty password
        {"email": "   ", "password": "hunter2"},  # whitespace-only email
        {"email": None, "password": "hunter2"},  # null email
        {"email": "user@example.com", "password": None},  # null password
    ],
    ids=[
        "empty_body",
        "missing_password",
        "missing_email",
        "empty_email",
        "empty_password",
        "whitespace_email",
        "null_email",
        "null_password",
    ],
)
def test_login_rejects_missing_or_blank_credentials(client, payload):
    response = client.post("/api/login", json=payload)

    assert response.status_code == 400
    assert response.get_json()["error"] == "Email and password are required"


def test_login_rejects_non_json_body(client):
    response = client.post("/api/login", data="email=user@example.com")

    assert response.status_code == 400
    assert "error" in response.get_json()


@pytest.mark.parametrize(
    "payload",
    [["user@example.com"], "user@example.com"],
    ids=["array_body", "string_body"],
)
def test_login_rejects_non_object_json(client, payload):
    response = client.post("/api/login", json=payload)

    assert response.status_code == 400
    assert response.get_json()["error"] == "Email and password are required"


def test_login_strips_whitespace_from_email(client, mock_supabase):
    received = {}

    def fake_sign_in(credentials):
        received.update(credentials)
        return SimpleNamespace(user=SimpleNamespace(id="u-1", email=credentials["email"]))

    mock_supabase.sign_in_with_password = fake_sign_in

    response = client.post(
        "/api/login",
        json={"email": "  user@example.com  ", "password": "hunter2"},
    )

    assert response.status_code == 200
    assert received["email"] == "user@example.com"


# --- /api/login endpoint behavior --------------------------------------------


def test_health_endpoint_reports_ok(client):
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.get_json() == {"status": "ok"}


def test_login_success_returns_user(client, mock_supabase):
    mock_supabase.sign_in_with_password = lambda credentials: SimpleNamespace(
        user=SimpleNamespace(id="abc-123", email="user@example.com")
    )

    response = client.post(
        "/api/login",
        json={"email": "user@example.com", "password": "hunter2"},
    )

    body = response.get_json()
    assert response.status_code == 200
    assert body["message"] == "Login successful"
    assert body["user"] == {"id": "abc-123", "email": "user@example.com"}


def test_login_with_wrong_password_returns_401(client, mock_supabase):
    def raise_auth_error(credentials):
        raise AuthApiError("Invalid login credentials", 400, None)

    mock_supabase.sign_in_with_password = raise_auth_error

    response = client.post(
        "/api/login",
        json={"email": "user@example.com", "password": "wrong-password"},
    )

    assert response.status_code == 401
    assert response.get_json()["error"] == "Invalid email or password"


def test_login_returns_401_when_no_user_in_response(client, mock_supabase):
    mock_supabase.sign_in_with_password = lambda credentials: SimpleNamespace(user=None)

    response = client.post(
        "/api/login",
        json={"email": "user@example.com", "password": "hunter2"},
    )

    assert response.status_code == 401
    assert response.get_json()["error"] == "Invalid email or password"


def test_login_returns_503_when_supabase_not_configured(client, monkeypatch):
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: None)

    response = client.post(
        "/api/login",
        json={"email": "user@example.com", "password": "hunter2"},
    )

    assert response.status_code == 503
    assert response.get_json()["error"] == "Supabase is not configured"


def test_login_returns_502_on_unexpected_error(client, mock_supabase):
    def explode(credentials):
        raise RuntimeError("connection reset")

    mock_supabase.sign_in_with_password = explode

    response = client.post(
        "/api/login",
        json={"email": "user@example.com", "password": "hunter2"},
    )

    assert response.status_code == 502
    assert response.get_json()["error"] == "Authentication service is unavailable"