import os

from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
from supabase import (
    AuthApiError,
    AuthWeakPasswordError,
    Client,
    create_client,
)


load_dotenv()

app = Flask(__name__)
CORS(app)

supabase_url = os.getenv("SUPABASE_URL")
# SUPABASE_KEY kept as a fallback so older local setups still work; the
# canonical names are in .env.example (publishable = anon, secret = service_role).
supabase_key = os.getenv("SUPABASE_SECRET_KEY") or os.getenv("SUPABASE_KEY")


def get_supabase_client() -> Client | None:
    if not supabase_url or not supabase_key:
        return None

    return create_client(supabase_url, supabase_key)


def serialize_session(session) -> dict | None:
    """Shape a supabase-py Session for JSON; None means "no session yet"
    (e.g. auto sign-in after signup failed)."""
    if session is None:
        return None

    return {
        "access_token": session.access_token,
        "refresh_token": session.refresh_token,
        # unix timestamp (seconds) — the frontend uses it to refresh before expiry
        "expires_at": session.expires_at,
        "token_type": session.token_type,
    }


@app.get("/api/health")
def health():
    return {"status": "ok"}, 200


@app.post("/api/login")
def login():
    request_data = request.get_json(silent=True) or {}
    if not isinstance(request_data, dict):
        return {"error": "Email and password are required"}, 400

    email = (request_data.get("email") or "").strip()
    password = request_data.get("password") or ""

    if not email or not password:
        return {"error": "Email and password are required"}, 400

    try:
        supabase = get_supabase_client()

        if supabase is None:
            return {"error": "Supabase is not configured"}, 503

        response = supabase.auth.sign_in_with_password(
            {
                "email": email,
                "password": password,
            }
        )

        if response.user is None:
            return {"error": "Invalid email or password"}, 401

        return {
            "message": "Login successful",
            "user": {
                "id": str(response.user.id),
                "email": response.user.email,
            },
            "session": serialize_session(response.session),
        }, 200

    except AuthApiError as error:
        # Report auth failures honestly instead of masking them all as
        # "invalid credentials".
        if error.code == "email_not_confirmed":
            return {"error": "Confirm your email before signing in"}, 403
        if error.code == "invalid_credentials":
            return {"error": "Invalid email or password"}, 401
        return {"error": error.message}, 401
    except Exception:
        app.logger.exception("Unable to complete login")
        return {"error": "Authentication service is unavailable"}, 502


@app.post("/api/signup")
def signup():
    request_data = request.get_json(silent=True) or {}
    if not isinstance(request_data, dict):
        return {"error": "Full name, email and password are required"}, 400

    full_name = (request_data.get("full_name") or "").strip()
    email = (request_data.get("email") or "").strip()
    password = request_data.get("password") or ""

    if not full_name:
        return {"error": "Full name is required"}, 400
    if not email:
        return {"error": "Email and password are required"}, 400
    if len(password) < 8:
        return {"error": "Password must be at least 8 characters"}, 400

    try:
        supabase = get_supabase_client()

        if supabase is None:
            return {"error": "Supabase is not configured"}, 503

        # We don't do email verification: create the user already confirmed
        # via the admin API so they can sign in immediately, even when the
        # project's "confirm email" setting is on.
        created = supabase.auth.admin.create_user(
            {
                "email": email,
                "password": password,
                "email_confirm": True,
                # The profiles trigger reads full_name from raw_user_meta_data.
                "user_metadata": {"full_name": full_name},
            }
        )

        if created.user is None:
            return {"error": "Account creation failed"}, 502

        # Sign in so the frontend gets a session right away. If this fails the
        # account still exists — tell the user to sign in instead of failing.
        try:
            signin = supabase.auth.sign_in_with_password(
                {"email": email, "password": password}
            )
            session = serialize_session(signin.session)
            message = "Account created"
        except AuthApiError:
            app.logger.exception("Signup: user created but auto sign-in failed")
            session = None
            message = "Account created — sign in to continue"

        return {
            "message": message,
            "user": {
                "id": str(created.user.id),
                "email": created.user.email,
            },
            "session": session,
        }, 201

    except AuthWeakPasswordError as error:
        return {"error": str(error)}, 400
    except AuthApiError as error:
        if error.code in ("email_exists", "user_already_exists"):
            return {"error": "An account with that email already exists"}, 409
        return {"error": error.message}, 400
    except Exception:
        app.logger.exception("Unable to complete signup")
        return {"error": "Account creation is unavailable"}, 502


@app.get("/api/inventory")
def get_inventory():
    try:
        supabase = get_supabase_client()

        if supabase is None:
            return {"error": "Supabase is not configured"}, 503

        response = supabase.table("Inventory").select("*").execute()
        return {"data": response.data}, 200

    except Exception:
        app.logger.exception("Unable to retrieve inventory")
        return {"error": "Unable to retrieve inventory"}, 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)