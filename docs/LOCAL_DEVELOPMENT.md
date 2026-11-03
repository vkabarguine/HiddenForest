# Local development

## Prerequisites
- Python 3.11+ (3.12 recommended)
- Node.js 22+
- Git

## Start backend

From repository root:

```bash
cd backend
python -m venv .venv
# macOS/Linux: source .venv/bin/activate
# Windows PowerShell: .venv\\Scripts\\Activate.ps1
python -m pip install -e ".[dev]"
uvicorn app.main:app --reload --port 8000
```

Check http://127.0.0.1:8000/api/health and API docs at http://127.0.0.1:8000/docs.

## Start frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000. The frontend calls the backend server-side at `API_BASE_URL` (default http://127.0.0.1:8000). Keep both processes running.

## Tests

```bash
cd backend
pytest -q
ruff check .
```

```bash
cd frontend
npx tsc --noEmit
npm run lint
npm run build
```

## Important limitations

This is a working foundation, not a connected production app. Data is intentionally empty. There is no authentication, persistent database, YouTube/Facebook connection, AI processing, or publishing endpoint yet. Do not deploy publicly until authentication and production security controls are implemented.

No real video files or credentials are needed to run the scaffold.
