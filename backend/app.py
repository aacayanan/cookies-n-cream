import os

from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
from supabase import AuthApiError, Client, create_client


load_dotenv()

app = Flask(__name__)
CORS(app)

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")


def get_supabase_client() -> Client | None:
    if not supabase_url or not supabase_key:
        return None

    return create_client(supabase_url, supabase_key)


@app.get("/api/health")
def health():
    return {"status": "ok"}, 200


@app.post("/api/login")
def login():
    request_data = request.get_json(silent=True) or {}

    email = request_data.get("email", "").strip()
    password = request_data.get("password", "")

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
        }, 200

    except AuthApiError:
        return {"error": "Invalid email or password"}, 401
    except Exception:
        app.logger.exception("Unable to complete login")
        return {"error": "Authentication service is unavailable"}, 502


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