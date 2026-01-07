"use client";

import { useState } from "react";

type ProjectType = "home" | "corporate";

type ContactFormProps = {
  defaultProjectType?: ProjectType;
};

export default function ContactForm({
  defaultProjectType = "home"
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [projectType, setProjectType] =
    useState<ProjectType>(defaultProjectType);

  const resetFormState = () => {
    setProjectType(defaultProjectType);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        throw new Error("Bir hata oluştu");
      }

      setStatus("success");
      e.currentTarget.reset();
      resetFormState();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md">
      <h3 className="text-2xl font-serif font-bold text-white mb-6">
        Bize Ulaşın
      </h3>

      {status === "success" ? (
        <div className="bg-green-900/30 border border-green-500 text-green-200 p-6 text-center">
          <p className="font-bold text-lg mb-2">Mesajınız Alındı!</p>
          <p className="text-sm">
            Proje ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              resetFormState();
            }}
            className="mt-4 text-xs underline hover:text-white"
          >
            Yeni mesaj gönder
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <input type="hidden" name="projectType" value={projectType} />

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-gold">
              Proje Türü
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setProjectType("home")}
                aria-pressed={projectType === "home"}
                className={`border px-4 py-3 text-xs uppercase tracking-widest transition-colors ${
                  projectType === "home"
                    ? "border-gold bg-gold text-stone"
                    : "border-white/20 text-gray-300 hover:border-gold hover:text-white"
                }`}
              >
                Evim İçin (Mutfak/Banyo)
              </button>
              <button
                type="button"
                onClick={() => setProjectType("corporate")}
                aria-pressed={projectType === "corporate"}
                className={`border px-4 py-3 text-xs uppercase tracking-widest transition-colors ${
                  projectType === "corporate"
                    ? "border-gold bg-gold text-stone"
                    : "border-white/20 text-gray-300 hover:border-gold hover:text-white"
                }`}
              >
                Kurumsal Proje (Otel/Cephe)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-bold uppercase tracking-widest text-gold"
              >
                Ad Soyad
              </label>
              <input
                required
                name="name"
                id="name"
                type="text"
                className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                placeholder="İsim Soyisim"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-widest text-gold"
              >
                E-posta
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                placeholder="info@yapigranit.com"
              />
            </div>
          </div>

          {projectType === "home" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="homeArea"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  Alan
                </label>
                <select
                  required
                  name="homeArea"
                  id="homeArea"
                  className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
                >
                  <option value="mutfak">Mutfak</option>
                  <option value="banyo">Banyo</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="estimatedSize"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  Tahmini Ölçü
                </label>
                <input
                  required
                  name="estimatedSize"
                  id="estimatedSize"
                  type="text"
                  className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="Örn: 3.2m x 0.65m"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="stoneColor"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  Taş Rengi / Doku
                </label>
                <input
                  name="stoneColor"
                  id="stoneColor"
                  type="text"
                  className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                  placeholder="Beyaz damar, açık gri, siyah vb."
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="companyName"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    Şirket Adı
                  </label>
                  <input
                    required
                    name="companyName"
                    id="companyName"
                    type="text"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Firma adı"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="companyRole"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    Ünvan / Görev
                  </label>
                  <input
                    required
                    name="companyRole"
                    id="companyRole"
                    type="text"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="Proje Müdürü, Satın Alma..."
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="companyPhone"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    Telefon
                  </label>
                  <input
                    required
                    name="companyPhone"
                    id="companyPhone"
                    type="tel"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
                    placeholder="0 258 372 22 50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="corporateScope"
                    className="text-xs font-bold uppercase tracking-widest text-gold"
                  >
                    Proje Tipi
                  </label>
                  <select
                    name="corporateScope"
                    id="corporateScope"
                    className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    <option value="otel">Otel</option>
                    <option value="cephe">Cephe</option>
                    <option value="avm">AVM</option>
                    <option value="konut">Konut</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="projectFile"
                  className="text-xs font-bold uppercase tracking-widest text-gold"
                >
                  DWG / PDF Dosyası
                </label>
                <input
                  name="projectFile"
                  id="projectFile"
                  type="file"
                  accept=".pdf,.dwg"
                  className="w-full text-sm text-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-white hover:file:bg-gold hover:file:text-stone"
                />
                <p className="text-[11px] text-gray-500">
                  DWG veya PDF dosyası yükleyebilirsiniz. (Opsiyonel)
                </p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-xs font-bold uppercase tracking-widest text-gold"
            >
              Konu
            </label>
            <select
              name="subject"
              id="subject"
              className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none"
            >
              <option value="teklif">Proje Teklifi Almak İstiyorum</option>
              <option value="bilgi">Ürünler Hakkında Bilgi</option>
              <option value="randevu">Showroom Randevusu</option>
              <option value="diger">Diğer</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs font-bold uppercase tracking-widest text-gold"
            >
              Mesajınız
            </label>
            <textarea
              required
              name="message"
              id="message"
              rows={4}
              className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-gold focus:outline-none transition-colors"
              placeholder="Proje detayları, metraj veya özel istekleriniz..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-stone font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Gönderiliyor..." : "Teklif İste"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Bir hata oluştu. Lütfen tekrar deneyiniz.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
