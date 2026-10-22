# ICE TRACK

ICE TRACK is a web application for managing customers, orders, inventory, shipments, and trouble tickets.

## Technology

- React and Vite
- JavaScript
- React Router
- Python 3.11
- Flask
- PostgreSQL through Supabase
- Docker Compose

## Project Structure

```text
cookies-n-cream/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
├── meeting-notes/
├── docker-compose.yml
└── README.md
```

## Requirements

Install:

- Node.js 24
- npm 11
- Python 3.11
- Git
- Docker Desktop (optional)

Check your versions:

```bash
node -v
npm -v
python3 --version
git --version
```

## First-Time Setup

Clone the repository:

```bash
git clone https://github.com/aacayanan/cookies-n-cream.git
cd cookies-n-cream
```

### Frontend

```bash
cd frontend
npm ci
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

### Backend

Open a second Terminal from the project root:

```bash
cd backend
python3 -m venv env
source env/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python app.py
```

The backend runs at:

```text
http://127.0.0.1:5000
```

## API Endpoints

| Method | Endpoint | Purpose | Supabase required? |
|---|---|---|---|
| GET | `/api/health` | Confirms the backend is running | No |
| GET | `/api/inventory` | Retrieves inventory records | Yes |

Test the health endpoint:

```bash
curl http://127.0.0.1:5000/api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

The root address `/` currently has no route. Receiving `404 Not Found` at `http://127.0.0.1:5000/` is expected.

## Supabase Configuration

Database routes require the team’s Supabase credentials.

Create `backend/.env`:

```env
SUPABASE_URL=your-project-url
SUPABASE_KEY=your-project-key
```

Important:

- Request the values from the teammate managing Supabase.
- Never commit `.env`.
- Never post the credentials in GitHub, Slack, screenshots, or messages.
- The current inventory route expects a Supabase table named `Inventory`.

Without valid credentials, `/api/inventory` returns:

```json
{
  "error": "Supabase is not configured"
}
```

## Starting the Project Again

Frontend Terminal:

```bash
cd frontend
npm run dev
```

Backend Terminal:

```bash
cd backend
source env/bin/activate
python app.py
```

Stop either server with `Control + C`.

Exit the Python environment with:

```bash
deactivate
```

## Docker

Make sure Docker Desktop is running.

From the project root:

```bash
docker compose up --build
```

Services:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

Stop the containers:

```bash
docker compose down
```

## Team Git Workflow

Do not develop directly on `main`.

Before starting new work:

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/short-description
```

Examples:

```text
feature/inventory-api
fix/backend-configuration
docs/update-readme
```

Check your branch:

```bash
git branch --show-current
```

Review changes before committing:

```bash
git status
git diff
git diff --check
```

Create a focused commit:

```bash
git add .
git commit -m "Brief description of the change"
git push -u origin your-branch-name
```

Then open a pull request into `main`.

## Before Opening a Pull Request

Confirm that:

- The frontend starts successfully.
- The backend starts successfully.
- `/api/health` returns `{"status":"ok"}`.
- No credentials or `.env` files are included.
- `git diff --check` reports no problems.
- The README is updated when setup steps change.
- The pull request explains what changed and how it was tested.

## Common Problems

### `ModuleNotFoundError`

Activate the backend environment and reinstall the requirements:

```bash
cd backend
source env/bin/activate
python -m pip install -r requirements.txt
```

### `/api/inventory` returns `503`

The backend is running, but Supabase is not configured. Check `backend/.env`.

### The frontend dependencies changed unexpectedly

Use:

```bash
npm ci
```

Use `npm install` only when intentionally adding or updating a frontend dependency.

### Port 5000 is already in use

Stop the other process using port 5000, then restart the Flask backend.