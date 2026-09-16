# Backend Setup

The backend uses Python and Flask.

## Create a virtual environment

From the project root:

```bash
cd backend
python3 -m venv env
```

## Activate the environment

```bash
source env/bin/activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run

```bash
python app.py
```

## Test

Open:

```text
http://127.0.0.1:5000/api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

## Stop the server

Press:

```text
Ctrl + C
```

## Exit the virtual environment

```bash
deactivate
```