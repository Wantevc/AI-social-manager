from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(title="AI Social SaaS API", version="0.1.0")


@app.get("/health", tags=["system"])
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/version", tags=["system"])
def version() -> dict[str, str | bool]:
    return {"version": app.version, "env": settings.ENV, "debug": settings.DEBUG}
