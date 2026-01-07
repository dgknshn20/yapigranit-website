import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload?.name?.trim();
    const email = payload?.email?.trim();
    const message = payload?.message?.trim();
    const subject = payload?.subject?.trim() || "teklif";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Eksik alanlar mevcut." },
        { status: 400 }
      );
    }

    const loweredMessage = message.toLowerCase();
    if (
      loweredMessage.includes("http://") ||
      loweredMessage.includes("https://") ||
      loweredMessage.includes("www.")
    ) {
      return NextResponse.json(
        { error: "Spam şüphesi tespit edildi." },
        { status: 400 }
      );
    }

    console.log(
      "Form verisi Python Backend'e gönderildi (simüle):",
      {
        name,
        email,
        subject,
        message
      }
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Form başarıyla iletildi."
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
