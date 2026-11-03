from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="Hidden Forest Studio API", version="0.1.0")

# Development origins only; configure allowed origins explicitly before hosting.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["Content-Type"],
)


class Video(BaseModel):
    id: str
    title: str
    platform: str = "youtube"
    url: str
    status: str = "sample"
    description: str = ""


class DashboardSummary(BaseModel):
    studio: str = "Hidden Forest Studio"
    website: str = "https://hiddenforeststudio.com"
    connected_accounts: int = 0
    imported_videos: int = 0
    pending_approvals: int = 0
    publishing_enabled: bool = False


class VideoList(BaseModel):
    items: list[Video] = Field(default_factory=list)
    source: str = "sample"


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/dashboard", response_model=DashboardSummary)
def dashboard() -> DashboardSummary:
    # Deliberately no fabricated business metrics.
    return DashboardSummary()


@app.get("/api/videos", response_model=VideoList)
def videos() -> VideoList:
    # Real inventory will be added after YouTube API integration.
    return VideoList()


@app.get("/api/capabilities")
def capabilities() -> dict[str, bool]:
    return {
        "youtube_connected": False,
        "facebook_connected": False,
        "ai_analysis_enabled": False,
        "publishing_enabled": False,
    }
