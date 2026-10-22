import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from supabase import Client, create_client


load_dotenv()

app = Flask(__name__)
CORS(app)

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")

supabase: Client | None = None

if supabase_url and supabase_key:
    supabase = create_client(supabase_url, supabase_key)


@app.get("/api/health")
def health():
    return {"status": "ok"}, 200


@app.get("/api/inventory")
def get_inventory():
    if supabase is None:
        return {"error": "Supabase is not configured"}, 503

    try:
        response = supabase.table("Inventory").select("*").execute()
        return {"data": response.data}, 200
    except Exception:
        app.logger.exception("Unable to retrieve inventory")
        return {"error": "Unable to retrieve inventory"}, 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)