"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const initialMessages: Message[] = [
  {
    role: "user",
    text: "Limonu çok kullanırım, tezgahım bozulur mu?"
  },
  {
    role: "assistant",
    text:
      "Limon asidik olduğu için mermer yüzeylerde matlaşma yapabilir. Sizin için asitlere tam dirençli Porselen veya Kuvars tezgahlarımızı öneririm. İlgili koleksiyonu görmek ister misiniz?"
  }
];

const assistantReply =
  "Kullanım alışkanlığınıza göre Porselen veya Kuvars seçenekleri daha güvenli olacaktır. Size uygun renkleri göndermemi ister misiniz?";

export default function StoneAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: assistantReply }
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[320px] md:w-[360px] rounded-2xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Taş Uzmanı
              </p>
              <p className="text-[11px] text-gray-400">AI destekli danışman</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Kapat
            </button>
          </div>

          <div className="max-h-72 overflow-y-auto px-4 py-4 space-y-4 text-sm">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-gold text-stone"
                      : "bg-white/10 text-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Sorunuzu yazın..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.2em] text-gold hover:text-white transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full bg-gold text-stone px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-white transition-colors"
        aria-expanded={isOpen}
      >
        Taş Uzmanı
      </button>
    </div>
  );
}
