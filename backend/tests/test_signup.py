"""Tests for the /api/signup endpoint and its input validation."""

from types import SimpleNamespace

import pytest
from supabase import AuthApiError, AuthWeakPasswordError

import app as app_module

fake_session = SimpleNamespace(
    access_token="access-token-123",
    refresh_token="refresh-token-456",
    expires_at=1767225600,
    token_type="bearer",
)


@pytest.fixture()
def client():
    app_module.app.config["TESTING"] = True
    with app_module.app.test_client() as test_client:
        yield test_client


@pytest.fixture()
def mock_supabase(monkeypatch):
    """Replace the Supabase client with a mock and return its auth interface.

    Signup uses admin.create_user (confirmed immediately, no email
    verification) followed by sign_in_with_password to get a session.
    """
    admin = SimpleNamespace(create_user=lambda attributes: None)
    auth = SimpleNamespace(
        admin=admin,
        sign_in_with_password=lambda credentials: SimpleNamespace(
            user=SimpleNamespace(id="new-1", email="jane@example.com"),
            session=fake_session,
        ),
    )
    client = SimpleNamespace(auth=auth)
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: client)
    return auth


valid_payload = {
    "full_name": "Jane Doe",
    "email": "jane@example.com",
    "password": "super-secret-1",
}


# --- Validation -------------------------------------------------------------


@pytest.mark.parametrize(
    "payload, expected_error",
    [
        ({"email": "user@example.com", "password": "super-secret-1"}, "Full name is required"),
        ({"full_name": "  ", "email": "user@example.com", "password": "super-secret-1"}, "Full name is required"),
        ({"full_name": "Jane", "password": "super-secret-1"}, "Email and password are required"),
        ({"full_name": "Jane", "email": "", "password": "super-secret-1"}, "Email and password are required"),
        ({"full_name": "Jane", "email": "user@example.com", "password": "short"}, "Password must be at least 8 characters"),
        ({"full_name": "Jane", "email": "user@example.com"}, "Password must be at least 8 characters"),
    ],
    ids=[
        "missing_name",
        "blank_name",
        "missing_email",
        "empty_email",
        "short_password",
        "missing_password",
    ],
)
def test_signup_rejects_invalid_payload(client, payload, expected_error):
    response = client.post("/api/signup", json=payload)

    assert response.status_code == 400
    assert response.get_json()["error"] == expected_error


def test_signup_rejects_non_object_json(client):
    response = client.post("/api/signup", json=["not", "an", "object"])

    assert response.status_code == 400
    assert "error" in response.get_json()


# --- Endpoint behavior ------------------------------------------------------


def test_signup_returns_503_when_supabase_not_configured(client, monkeypatch):
    monkeypatch.setattr(app_module, "get_supabase_client", lambda: None)

    response = client.post("/api/signup", json=valid_payload)

    assert response.status_code == 503
    assert response.get_json()["error"] == "Supabase is not configured"


def test_signup_creates_confirmed_user_and_returns_session(client, mock_supabase):
    received = {}

    def fake_create_user(attributes):
        received.update(attributes)
        return SimpleNamespace(
            user=SimpleNamespace(id="new-1", email="jane@example.com"),
        )

    mock_supabase.admin.create_user = fake_create_user

    response = client.post("/api/signup", json=valid_payload)

    body = response.get_json()
    assert response.status_code == 201
    assert body["message"] == "Account created"
    assert body["user"] == {"id": "new-1", "email": "jane@example.com"}
    assert body["session"]["access_token"] == "access-token-123"
    # No email verification: user is created confirmed.
    assert received["email_confirm"] is True
    # full_name travels in metadata so the profiles trigger can pick it up.
    assert received["user_metadata"]["full_name"] == "Jane Doe"
    assert received["email"] == "jane@example.com"


def test_signup_still_succeeds_when_auto_signin_fails(client, mock_supabase):
    def fake_create_user(attributes):
        return SimpleNamespace(
            user=SimpleNamespace(id="new-2", email="jane@example.com"),
        )

    def raise_auth_error(credentials):
        raise AuthApiError("Invalid login credentials", 400, "invalid_credentials")

    mock_supabase.admin.create_user = fake_create_user
    mock_supabase.sign_in_with_password = raise_auth_error

    response = client.post("/api/signup", json=valid_payload)

    body = response.get_json()
    assert response.status_code == 201
    assert "sign in" in body["message"]
    assert body["session"] is None
    assert body["user"] == {"id": "new-2", "email": "jane@example.com"}


def test_signup_duplicate_email_returns_409(client, mock_supabase):
    def raise_exists(attributes):
        raise AuthApiError("User already registered", 422, "email_exists")

    mock_supabase.admin.create_user = raise_exists

    response = client.post("/api/signup", json=valid_payload)

    assert response.status_code == 409
    assert response.get_json()["error"] == "An account with that email already exists"


def test_signup_weak_password_returns_400(client, mock_supabase):
    def raise_weak(attributes):
        raise AuthWeakPasswordError("Password is too weak", 422, "weak_password")

    mock_supabase.admin.create_user = raise_weak

    response = client.post("/api/signup", json=valid_payload)

    assert response.status_code == 400
    assert "error" in response.get_json()


def test_signup_returns_502_on_unexpected_error(client, mock_supabase):
    def explode(attributes):
        raise RuntimeError("connection reset")

    mock_supabase.admin.create_user = explode

    response = client.post("/api/signup", json=valid_payload)

    assert response.status_code == 502
    assert response.get_json()["error"] == "Account creation is unavailable"