# Bu dosya referans amaçlıdır. Python ortamında çalıştırılmalıdır.
# Gereksinimler: pip install fastapi uvicorn pydantic

from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Yapıgranit API", version="1.0.0")


class ContactForm(BaseModel):
    name: str
    email: str
    subject: str = "teklif"
    message: str


class ChatRequest(BaseModel):
    question: str
    context: Optional[str] = None


@app.get("/")
def read_root():
    return {"message": "Yapıgranit AI & Backend Servisi Çalışıyor"}


@app.post("/api/v1/contact")
async def handle_contact(form: ContactForm):
    print(f"Yeni Form: {form.name} ({form.email}) - {form.subject}")
    return {"status": "success", "message": "Form alındı"}


@app.post("/api/v1/assistant/chat")
async def chat_with_ai(request: ChatRequest):
    mock_response = {
        "answer": "Calacatta Viola mermerimiz İtalya menşeilidir ve mutfak tezgahlarında kullanıma uygundur. Ancak asitli yiyeceklere dikkat edilmelidir.",
        "sources": ["urun-katalogu-sayfa-12", "teknik-foy-calacatta"],
    }
    return mock_response


# Çalıştırmak için: uvicorn main:app --reload
