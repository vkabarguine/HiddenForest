from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_dashboard_is_truthful():
    data = client.get("/api/dashboard").json()
    assert data["studio"] == "Hidden Forest Studio"
    assert data["connected_accounts"] == 0
    assert data["publishing_enabled"] is False


def test_videos_are_empty_until_imported():
    response = client.get("/api/videos")
    assert response.status_code == 200
    assert response.json() == {"items": [], "source": "sample"}


def test_no_publishing_capability():
    assert client.get("/api/capabilities").json()["publishing_enabled"] is False
