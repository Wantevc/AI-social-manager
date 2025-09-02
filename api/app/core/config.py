from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    ENV: str = "dev"
    DEBUG: bool = True

    class Config:
        env_file = ".env"

settings = Settings()
