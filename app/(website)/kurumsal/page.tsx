import Image from "next/image";

import CorporateContactSection from "@/components/contact/CorporateContactSection";
import Navbar from "@/components/layout/Navbar";
import MachineCarousel from "@/components/ui/MachineCarousel";
import ReferenceShowcase from "@/components/ui/ReferenceShowcase";
import XRayScanner from "@/components/ui/XRayScanner";

export default function CorporatePage() {
  const whatsappMessage = encodeURIComponent(
    "Merhaba, kurumsal proje için teknik bilgi ve teklif almak istiyorum."
  );
  const whatsappHref = `https://wa.me/905327443271?text=${whatsappMessage}`;
  const stackCardBase =
    "relative w-full rounded-[2.5rem] border shadow-2xl overflow-hidden isolate mx-4 md:mx-6";

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            alt="Yapıgranit üretim tesisi"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 mt-20">
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            Kurumsal Teknoloji
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Taşta Mühendislik Disiplini
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            Mimarlar ve müteahhitler için; hassas üretim, kontrollü montaj ve
            sürdürülebilir cephe çözümlerini tek çatı altında sunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.1) 1px, transparent 1px)",
              backgroundSize: "36px 36px"
            }}
          />
          <div className="absolute -top-32 right-10 h-72 w-72 rounded-full bg-gold/10 blur-[140px]" />
          <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-gold/10 blur-[140px]" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
              Makine Parkuru
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
              Taşı{" "}
              <span className="text-gold">
                Teknolojiyle
              </span>{" "}
              İşliyoruz
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Doğal taşı, uzay endüstrisi standartlarında işleyen hassas
              teknolojilerimizle tanışın.
            </p>
          </div>

          <MachineCarousel />

          <div className="mt-16 text-center opacity-50 hover:opacity-100 transition-opacity duration-700">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-500">
              Sıfır Hata Toleransı • Yüksek Standartlar
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24">
        <div className="relative space-y-16">
          <section
            className={`${stackCardBase} border-white/10 bg-black text-white shadow-black/70`}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/katalog.avif"
                alt="Dijital hizmet kataloğu arka planı"
                fill
                className="object-cover opacity-50"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
              <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-gold/20 blur-[140px]" />
              <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-gold/10 blur-[160px]" />
            </div>
            <div className="absolute inset-0 texture-overlay opacity-30" />
            <div className="relative z-10 container mx-auto px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase">
                    HİZMETLERİMİZ
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                    Dijital Hizmet Kataloğu
                  </h2>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Hizmetlerimizi tek bir akışta, tutarlı kartlar ve net
                    hiyerarşiyle sunuyoruz. Her bölüm kendi içeriğine odaklanır;
                    kayma ya da üst üste binme olmadan akıcı bir deneyim sağlar.
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-gold/70">
                    <span className="rounded-full border border-gold/30 bg-black/40 px-3 py-1">
                      Dengeli Akış
                    </span>
                    <span className="rounded-full border border-gold/30 bg-black/40 px-3 py-1">
                      Net Hiyerarşi
                    </span>
                    <span className="rounded-full border border-gold/30 bg-black/40 px-3 py-1">
                      Stabil Geçiş
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-black/70 p-5">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                      Katalog İndeksi
                    </div>
                    <div className="mt-4 divide-y divide-white/10 text-sm text-white/80">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gold/70 font-semibold">01</span>
                        <span>Dış Cephe</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gold/70 font-semibold">02</span>
                        <span>Mutfak &amp; Banyo</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gold/70 font-semibold">03</span>
                        <span>Taş Mobilya</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gold/70 font-semibold">04</span>
                        <span>Dekoratif</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${stackCardBase} border-slate-700/70 bg-slate-900 text-white shadow-black/70`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
              <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-slate-700/30 blur-[140px]" />
              <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-slate-700/20 blur-[160px]" />
            </div>
            <div className="absolute inset-0 texture-overlay opacity-25" />
            <div className="relative z-10 container mx-auto px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-12 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                      <path d="m2 12 10 5 10-5" />
                      <path d="m2 17 10 5 10-5" />
                    </svg>
                    <span>Bölüm 01</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
                    Dış Cephe ve Mimari Kaplama
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Yapıların dış kabuğunda güvenlik, yalıtım ve estetiği
                    birleştiren mühendislik çözümleri.
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-300">
                    <span className="rounded-full border border-slate-600/70 bg-slate-800/60 px-3 py-1">
                      Mekanik Sistem
                    </span>
                    <span className="rounded-full border border-slate-600/70 bg-slate-800/60 px-3 py-1">
                      Split Face
                    </span>
                    <span className="rounded-full border border-slate-600/70 bg-slate-800/60 px-3 py-1">
                      Kaplama Çözümleri
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                  <div className="group page-flip-card rounded-2xl border border-slate-700/70 bg-slate-800/70 p-6 shadow-xl shadow-black/40 transition-transform duration-500 hover:-translate-y-1">
                    <div className="page-flip-image">
                      <Image
                        src="/images/mekanikcephe.avif"
                        alt="Mekanik cephe sistemleri"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-slate-950/70" />
                    <div className="page-flip-sheet page-flip-sheet-dark" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600/60 bg-slate-700/40 text-slate-200">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold">
                          Mekanik Cephe Sistemleri
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        Çok katlı yapılarda yapıştırma yerine 304/316 paslanmaz
                        çelik ankrajlarla güvenli montaj sağlıyoruz. Taş ile bina
                        arasında bırakılan hava boşluğu havalandırmalı cephe
                        etkisi yaratır.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        <span className="rounded-full border border-slate-600/70 bg-slate-900/40 px-3 py-1">
                          304/316 Çelik
                        </span>
                        <span className="rounded-full border border-slate-600/70 bg-slate-900/40 px-3 py-1">
                          Deprem Güvenli
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="group page-flip-card rounded-2xl border border-slate-700/70 bg-slate-800/70 p-6 shadow-xl shadow-black/40 transition-transform duration-500 hover:-translate-y-1">
                    <div className="page-flip-image">
                      <Image
                        src="/images/patlatma5.avif"
                        alt="Patlatma kaplama dokusu"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-slate-950/70" />
                    <div className="page-flip-sheet page-flip-sheet-dark" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600/60 bg-slate-700/40 text-slate-200">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m12 3 1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3z" />
                            <path d="m19 16 0.8 2.4L22 19l-2.2 0.7L19 22l-0.8-2.3L16 19l2.2-0.6L19 16z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold">
                          Patlatma (Split Face)
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                        Doğal taşın ham dokusunu koruyan, ışık-gölge oyunlarıyla
                        cepheye derinlik katan dekoratif kaplamalar. Dış mekan
                        ve bahçe duvarlarında rustik görünüm sağlar.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        <span className="rounded-full border border-slate-600/70 bg-slate-900/40 px-3 py-1">
                          Derin Doku
                        </span>
                        <span className="rounded-full border border-slate-600/70 bg-slate-900/40 px-3 py-1">
                          Işık-Gölge
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="group page-flip-card sm:col-span-2 rounded-2xl border border-slate-700/70 bg-slate-800/70 p-6 shadow-xl shadow-black/40 transition-transform duration-500 hover:-translate-y-1">
                    <div className="page-flip-image">
                      <Image
                        src="/images/zemin.avif"
                        alt="Zemin ve duvar kaplama"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-slate-950/70" />
                    <div className="page-flip-sheet page-flip-sheet-dark" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-white">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600/60 bg-slate-700/40 text-slate-200">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold">
                          Zemin, Duvar ve Tavan Kaplama
                        </h4>
                      </div>
                      <div className="mt-4 grid gap-3 text-sm text-slate-200">
                        <div className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>
                            <span className="font-semibold text-white">
                              Zemin:
                            </span>{" "}
                            Yoğun yaya trafiğine dayanıklı granit ve mermer
                            döşemeler.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>
                            <span className="font-semibold text-white">
                              Duvar:
                            </span>{" "}
                            İç ve dış mekanlarda bookmatch veya serbest boy
                            kaplamalar.
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>
                            <span className="font-semibold text-white">
                              Tavan:
                            </span>{" "}
                            Hafifletilmiş taş paneller veya kompozit destekli
                            güvenli tavan çözümleri.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${stackCardBase} border-slate-200 bg-white text-slate-900 shadow-black/30`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_55%)]" />
              <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-slate-200 blur-[140px]" />
              <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-slate-100 blur-[160px]" />
            </div>
            <div className="absolute inset-0 texture-overlay opacity-20" />
            <div className="relative z-10 container mx-auto px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-12 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
                    <svg
                      className="h-4 w-4 text-slate-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3c2.755 0 5 2.245 5 5 0 3.866-2.4 6.5-5 9-2.6-2.5-5-5.134-5-9 0-2.755 2.245-5 5-5z" />
                    </svg>
                    <span>Bölüm 02</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">
                    Mutfak &amp; Banyo Çözümleri
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Islak hacimlerde hijyen, dayanıklılık ve fonksiyonelliğin
                    buluşması.
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-slate-500">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                      Hijyen
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                      Dayanıklılık
                    </span>
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                      Fonksiyon
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 grid gap-6 md:grid-cols-2">
                  <div className="group page-flip-card rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg">
                    <div className="page-flip-image">
                      <Image
                        src="/images/mutfakkahvee.avif"
                        alt="Mutfak tezgahı"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-white/75" />
                    <div className="page-flip-sheet page-flip-sheet-light" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="6" rx="2" />
                            <path d="M7 10v10M17 10v10" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-slate-900">
                          Mutfak Tezgahı
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        Çizilmez, leke tutmaz ve ısıya dayanıklı Porselen
                        (Neolith, Dekton, Laminam) ve Kuvars (Çimstone, Belenco)
                        tezgah uygulamaları. Asitlere karşı üstün direnç
                        sağlayan sinterlenmiş taş teknolojisi.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          Porselen
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          Kuvars
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          Sinter
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="group page-flip-card rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg">
                    <div className="page-flip-image">
                      <Image
                        src="/images/ada1.avif"
                        alt="Ada mutfak ve kahve köşesi"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-white/75" />
                    <div className="page-flip-sheet page-flip-sheet-light" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 8h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" />
                            <path d="M16 9h2a3 3 0 0 1 0 6h-2" />
                            <path d="M7 4h2M11 4h2" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-slate-900">
                          Ada Mutfak &amp; Kahve Köşesi
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        Waterfall (şelale) kenar detaylarıyla zemine kadar inen
                        ada tasarımları ve evinize özel, şık kahve istasyonları.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          Waterfall
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                          Özel Tasarım
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="group page-flip-card rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg">
                    <div className="page-flip-image">
                      <Image
                        src="/images/banyoislakz1.avif"
                        alt="Banyo ve ıslak hacim"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-white/75" />
                    <div className="page-flip-sheet page-flip-sheet-light" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 3c2.755 0 5 2.245 5 5 0 3.866-2.4 6.5-5 9-2.6-2.5-5-5.134-5-9 0-2.755 2.245-5 5-5z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-slate-900">
                          Banyo ve Islak Hacim
                        </h4>
                      </div>
                      <div className="mt-3 space-y-2 text-sm text-slate-600">
                        <p>Mermer ve oniks duş tekneleri, duvar kaplamaları.</p>
                        <p>
                          Hilton lavabo tezgahları ve neme dayanıklı yüzeyler.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group page-flip-card rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-lg">
                    <div className="page-flip-image">
                      <Image
                        src="/images/levye2.avif"
                        alt="Entegre evye sistemleri"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-white/75" />
                    <div className="page-flip-sheet page-flip-sheet-light" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="5" width="18" height="12" rx="2" />
                            <circle cx="12" cy="11" r="2" />
                            <path d="M7 17h10" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-slate-900">
                          Entegre Evye Sistemleri
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        Tezgahla aynı malzemeden üretilen, ek yeri belli
                        olmayan, hijyenik ve modern bütünleşik evye
                        uygulamaları.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${stackCardBase} border-[#c8b392] bg-[#d8c7a5] text-[#3d2c1a] shadow-black/30`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]" />
              <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-[#c6ad85] blur-[140px]" />
              <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#b99770] blur-[160px]" />
            </div>
            <div className="absolute inset-0 texture-overlay opacity-30" />
            <div className="relative z-10 container mx-auto px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-12 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#5c4630]">
                    <svg
                      className="h-4 w-4 text-[#6b4f33]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 8a2 2 0 0 0-1-1.7l-8-4a2 2 0 0 0-2 0l-8 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.7l8 4a2 2 0 0 0 2 0l8-4a2 2 0 0 0 1-1.7Z" />
                      <path d="m2 8 10 5 10-5" />
                      <path d="m12 13 0 9" />
                    </svg>
                    <span>Bölüm 03</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#2f2215]">
                    Özel Tasarım Taş Mobilya
                  </h3>
                  <p className="text-[#5c4630] text-lg leading-relaxed">
                    CNC ve Waterjet teknolojisiyle şekillenen, kişiye özel
                    butik ürünler.
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-[#6b4f33]">
                    <span className="rounded-full border border-[#b9986e] bg-[#e7d7ba]/70 px-3 py-1">
                      Butik Üretim
                    </span>
                    <span className="rounded-full border border-[#b9986e] bg-[#e7d7ba]/70 px-3 py-1">
                      CNC + Waterjet
                    </span>
                    <span className="rounded-full border border-[#b9986e] bg-[#e7d7ba]/70 px-3 py-1">
                      Sıcak Doku
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                  <div className="group page-flip-card rounded-2xl border border-[#c1a27a] bg-[#e7d7ba]/80 p-6 shadow-xl shadow-black/20 transition-transform duration-500 hover:-translate-y-1">
                    <div className="page-flip-image">
                      <Image
                        src="/images/masa.avif"
                        alt="Masa ve sehpa"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-[#e7d7ba]/75" />
                    <div className="page-flip-sheet page-flip-sheet-warm" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-[#2f2215]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c1a27a] bg-[#d8c7a5] text-[#6b4f33]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 10h16M6 10v8M18 10v8" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold">
                          Masa ve Sehpa
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-[#4b3a28] leading-relaxed">
                        Mermer, traverten veya oniks kullanılarak üretilen yemek
                        masaları, orta sehpalar ve yan sehpalar. Leke tutmayan
                        koruyucu sealer işlemleriyle uzun ömürlü kullanım.
                      </p>
                    </div>
                  </div>
                  <div className="group page-flip-card rounded-2xl border border-[#c1a27a] bg-[#e7d7ba]/80 p-6 shadow-xl shadow-black/20 transition-transform duration-500 hover:-translate-y-1">
                    <div className="page-flip-image">
                      <Image
                        src="/images/dresuar.avif"
                        alt="Dresuar ve TV ünitesi"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-[#e7d7ba]/75" />
                    <div className="page-flip-sheet page-flip-sheet-warm" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-[#2f2215]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c1a27a] bg-[#d8c7a5] text-[#6b4f33]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="5" width="18" height="12" rx="2" />
                            <path d="M8 21h8" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold">
                          Dresuar ve TV Ünitesi
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-[#4b3a28] leading-relaxed">
                        Giriş holleri için şık dresuarlar ve arkadan aydınlatmalı
                        (onyx) veya bookmatch desenli mermer TV ünitesi arka
                        planları.
                      </p>
                    </div>
                  </div>
                  <div className="group page-flip-card sm:col-span-2 rounded-2xl border border-[#c1a27a] bg-[#e7d7ba]/80 p-6 shadow-xl shadow-black/20 transition-transform duration-500 hover:-translate-y-1">
                    <div className="page-flip-image">
                      <Image
                        src="/images/seperator.avif"
                        alt="Seperatör bölücü paneller"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-[#e7d7ba]/75" />
                    <div className="page-flip-sheet page-flip-sheet-warm" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-[#2f2215]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c1a27a] bg-[#d8c7a5] text-[#6b4f33]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="6" height="16" rx="1" />
                            <rect x="15" y="4" width="6" height="16" rx="1" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold">
                          Seperatör (Bölücü Paneller)
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-[#4b3a28] leading-relaxed">
                        Mekanları birbirinden ayırırken ışığı estetik şekilde
                        filtreleyen, Waterjet ile desen verilmiş metal veya taş
                        seperatörler.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${stackCardBase} border-orange-500/30 bg-black text-white shadow-black/80`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,140,0,0.18),_transparent_60%)]" />
              <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-orange-500/25 blur-[140px]" />
              <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[160px]" />
            </div>
            <div className="absolute inset-0 texture-overlay opacity-25" />
            <div className="relative z-10 container mx-auto px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-12 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-orange-300">
                    <svg
                      className="h-4 w-4 text-orange-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8Z" />
                    </svg>
                    <span>Bölüm 04</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
                    Dekoratif ve Tamamlayıcı Uygulamalar
                  </h3>
                  <p className="text-orange-100/80 text-lg leading-relaxed">
                    Mekanlara ruh katan sanatsal dokunuşlar.
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.25em] text-orange-300">
                    <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                      Ateş ve Doku
                    </span>
                    <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                      Dramatik Atmosfer
                    </span>
                    <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                      Vurgu Detayları
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 grid gap-6">
                  <div className="group page-flip-card rounded-2xl border border-orange-500/30 bg-black/70 p-6 shadow-xl shadow-black/60">
                    <div className="page-flip-image">
                      <Image
                        src="/images/somine3.avif"
                        alt="Şömine yapımı"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-black/70" />
                    <div className="page-flip-sheet page-flip-sheet-dark" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-orange-300">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/10">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8Z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-white">
                          Şömine Yapımı
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-orange-100/80 leading-relaxed">
                        Isıya dayanıklı granit veya mermer kullanılarak
                        tasarlanan; klasik, modern veya minimalist şömine
                        kaplamaları. CNC ile işlenmiş sütun ve taç detayları.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-orange-300">
                        <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                          Isıya Dayanıklı
                        </span>
                        <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                          CNC Detay
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="group page-flip-card rounded-2xl border border-orange-500/30 bg-black/70 p-6 shadow-xl shadow-black/60">
                    <div className="page-flip-image">
                      <Image
                        src="/images/basamakdoseme.avif"
                        alt="Basamak döşeme"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="page-flip-scrim absolute inset-0 z-10 bg-black/70" />
                    <div className="page-flip-sheet page-flip-sheet-dark" />
                    <div className="page-flip-content relative z-30">
                      <div className="flex items-center gap-3 text-orange-300">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/40 bg-orange-500/10">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 18h4v-4h4v-4h4V6h4" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-white">
                          Basamak Döşeme
                        </h4>
                      </div>
                      <p className="mt-3 text-sm text-orange-100/80 leading-relaxed">
                        İç mekanlarda mermer, dış mekanlarda kaymaz granit
                        kullanılarak yapılan rıhtlı veya rıhtsız merdiven
                        basamakları. LED aydınlatma uyumlu çözümler.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-orange-300">
                        <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                          Kaymaz Granit
                        </span>
                        <span className="rounded-full border border-orange-500/40 bg-black/60 px-3 py-1">
                          LED Uyumlu
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-[#d4af37]/10 blur-[120px]" />
          <div className="absolute bottom-0 right-12 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[140px]" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                Dijital Rölöve
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                Dijital İkiz ile Kusursuz Başlangıç
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                <span className="text-gold font-semibold">
                  Mouse&apos;u gezdirerek tarama yapın.
                </span>
                <br />
                Milimetrik hassasiyet, sıfır risk: şantiyenizi sanal ortama
                taşıyoruz.
              </p>
            </div>

            <XRayScanner
              baseImage="/images/cad.avif"
              xrayImage="/images/realcad.avif"
              baseLabel="3D BIM MODEL"
              xrayLabel="POINT CLOUD DATA"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors group">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors border border-gold/20">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Lazer Tarama</h3>
                <p className="text-sm text-gray-400">
                  Şantiyeyi dijitalleştirip mm hassasiyetinde 3D veriye
                  dönüştürüyoruz.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors group">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors border border-gold/20">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Hata Analizi</h3>
                <p className="text-sm text-gray-400">
                  Proje ile saha arasındaki sapmaları montaj başlamadan tespit
                  ediyoruz.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold/40 transition-colors group">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors border border-gold/20">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Sanal Montaj</h3>
                <p className="text-sm text-gray-400">
                  Üretim öncesi dijital ikiz üzerinde montaj yaparak fireyi
                  sıfıra indiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReferenceShowcase />

      <CorporateContactSection whatsappHref={whatsappHref} />
    </main>
  );
}
