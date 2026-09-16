# Cookies-n-Cream / ICE TRACK

ICE TRACK is a web app for managing orders, inventory, shipments, and trouble tickets.

## Tech Stack

- Frontend: React + Vite
- Language: JavaScript
- Routing: React Router
- Backend: Python + Flask
- Database: To be confirmed

# Setup

## Requirements

Make sure you have:

- Node.js  [v24.11.1]
- Python 3  [python 3.11.9]
- Git
- npm      [v11.6.2]

Check with:

```bash
node -v
npm -v
python3 --version
git --version
```

## Clone the Repository

```bash
git clone --branch tony https://github.com/aacayanan/cookies-n-cream.git
cd cookies-n-cream
```

# Frontend

## Install dependencies

```bash
cd frontend
npm install
```

## Run frontend

```bash
npm run dev
```

Usually runs at:

```text
http://localhost:5173
```

Stop it with:

```text
Ctrl + C
```

# Backend

Open a second terminal.

## Create virtual environment

```bash
cd backend
python3 -m venv env
```

## Activate it

macOS / Linux:

```bash
source env/bin/activate
```

Windows:

```bash
env\Scripts\activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run backend

```bash
python app.py
```

Usually runs at:

```text
http://127.0.0.1:5000
```

Test it at:

```text
http://127.0.0.1:5000/api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

Stop it with:

```text
Ctrl + C
```

Exit the virtual environment with:

```bash
deactivate
```

# Run Both

Frontend terminal:

```bash
cd frontend
npm run dev
```

Backend terminal:

```bash
cd backend
source env/bin/activate
python app.py
```

# Create Your Own Branch

Start from `tony`:

```bash
git fetch origin
git switch tony
git pull origin tony
git switch -c your-branch-name
```

Example:

```bash
git switch -c teammate
```

Check your branch:

```bash
git branch --show-current
```
