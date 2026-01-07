"use client";

import { useEffect, useState } from "react";

import RelatedArticles from "@/components/blog/RelatedArticles";
import Navbar from "@/components/layout/Navbar";

export default function MermerVsPorselenPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mermer-vs-porselen scroll-smooth bg-stone-50 text-stone-800 antialiased selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <header className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background Texture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-stone-200 mb-6 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
              Mutfak &amp; Banyo
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-xs text-stone-500">6 Dk Okuma</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Mermer vs Porselen: <br />
            <span className="italic text-stone-600 font-normal">
              Doğru Tezgahı Seçme Rehberi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Yüzyıllardır lüksün sembolü olan doğal mermer mi, yoksa teknolojinin
            zirvesi porselen mi? Estetik, bütçe ve dayanıklılık açısından en
            doğru kararı vermeniz için karşılaştırdık.
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer split-compare">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-stone-100 overflow-hidden group-hover:w-[45%] transition-all duration-500 ease-in-out split-pane split-pane--left">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                alt="Doğal Mermer"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="font-serif font-bold text-stone-900">
                  Doğal Mermer
                </span>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 w-1/2 bg-stone-200 overflow-hidden group-hover:w-[55%] transition-all duration-500 ease-in-out split-pane split-pane--right">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                alt="Porselen Tezgah"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="font-serif font-bold text-stone-900">
                  Modern Porselen
                </span>
              </div>
            </div>

            <div className="absolute inset-y-0 left-1/2 w-1 bg-white z-20 shadow-lg transform -translate-x-1/2" />
            <div className="split-scan-line" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section id="mermer" className="scroll-mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mermer Detayı"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-serif text-2xl italic">
                    &quot;Her plaka eşsiz bir sanat eseri.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-[1px] bg-stone-400"></span>
                1. Doğal Mermer
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Doğal mermer, milyonlarca yıllık jeolojik süreçlerin bir
                ürünüdür. Calacatta veya Carrara gibi türlerin sunduğu damar
                yapıları, mekana lüks ve doğal bir hava katar.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                  <h3 className="font-bold text-stone-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-gem text-gold-500 mr-2"></i>
                    Avantajları
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Eşsiz Estetik:</strong> Tekrarlamayan doğal
                        desenler.
                      </span>
                    </li>
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Isı Yönetimi:</strong> Soğuk yapısı sayesinde
                        hamur işleri için idealdir.
                      </span>
                    </li>
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Yenilenebilirlik:</strong> Profesyonel silim
                        ile ilk günkü haline dönebilir.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-circle-exclamation text-red-500 mr-2"></i>
                    Dikkat
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-red-800">
                      <i className="fa-solid fa-xmark text-red-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Hassas Yüzey:</strong> Limon, sirke gibi asitler
                        leke yapabilir.
                      </span>
                    </li>
                    <li className="flex items-start text-red-800">
                      <i className="fa-solid fa-xmark text-red-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Bakım Şart:</strong> 6-12 ayda bir sızdırmazlık
                        cilası (sealer) gerektirir.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="porselen" className="scroll-mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-[1px] bg-stone-400"></span>
                2. Porselen Tezgah
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Teknoloji ve dayanıklılığın zirvesi. 1200°C üzerinde sinterlenen
                bu yüzeyler, Mohs sertlik skalasında 7-8 dereceye ulaşarak
                çizilmelere karşı mermerden çok daha dirençlidir.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                  <h3 className="font-bold text-stone-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-shield text-blue-500 mr-2"></i>
                    Avantajları
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Olağanüstü Dayanıklılık:</strong> Çizilmez,
                        ısıdan ve UV ışınlarından etkilenmez.
                      </span>
                    </li>
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Tam Hijyen:</strong> Gözeneksizdir; şarap,
                        kahve lekesi tutmaz, bakteri barındırmaz.
                      </span>
                    </li>
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Tasarım Esnekliği:</strong> Mermer desenleri
                        birebir taklit edilebilir.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-orange-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-helmet-safety text-orange-500 mr-2"></i>
                    Dikkat
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-orange-800">
                      <i className="fa-solid fa-minus text-orange-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Darbe Hassasiyeti:</strong> Köşelere gelen çok
                        sert darbeler yontulmaya (chipping) yol açabilir.
                      </span>
                    </li>
                    <li className="flex items-start text-orange-800">
                      <i className="fa-solid fa-minus text-orange-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Uygulama Zorluğu:</strong> Kesimi zordur, çok
                        deneyimli usta gerektirir.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Porselen Mutfak"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-serif text-2xl italic">
                    &quot;Endişesiz kullanım, modern estetik.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto bg-stone-800 text-stone-100 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 text-stone-700 opacity-20 transform rotate-12">
            <i className="fa-solid fa-lightbulb text-9xl"></i>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 bg-gold-500 rounded-full p-4">
              <i className="fa-solid fa-brain text-2xl text-white"></i>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Profesyonel İpucu: Kendinizi Tanıyın
              </h3>
              <p className="text-stone-300 leading-relaxed text-lg">
                Mutfakta <strong>&quot;ciddi bir aşçı&quot;</strong> iseniz ve
                tezgah üzerinde sürekli limon, sirke kullanıyor, dökülenleri
                anında temizleyemiyorsanız;{" "}
                <span className="text-gold-500 font-bold">Porselen</span> sizin
                için en mantıklı seçimdir.
                <br />
                <br />
                Ancak, malzemenin doğal yaşlanmasını, patinasını
                (yaşanmışlık izlerini) seviyorsanız ve düzenli bakım
                yapabilirim diyorsanız,{" "}
                <span className="text-gold-500 font-bold">Mermer</span>
                mekanınıza eşsiz bir ruh katacaktır.
              </p>
            </div>
          </div>
        </div>

        <section id="karsilastirma" className="scroll-mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Bütçe ve Teknik Detaylar
            </h2>
            <p className="text-stone-600">
              2025 yılı projeksiyonları ve teknik özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden">
              <div className="bg-stone-100 px-6 py-4 border-b border-stone-200">
                <h3 className="font-serif font-bold text-xl text-stone-800">
                  Porselen Maliyeti
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-stone-900">
                    ₺4.000
                  </span>
                  <span className="text-stone-500 ml-2">
                    - ₺20.000+ / m²
                  </span>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Genellikle orta-üst segment. Bakım gerektirmediği için uzun
                  vadede ekonomiktir.
                </p>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-4/5" />
                </div>
                <div className="mt-2 text-xs text-right text-stone-500">
                  Maliyet Skalası
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden">
              <div className="bg-stone-100 px-6 py-4 border-b border-stone-200">
                <h3 className="font-serif font-bold text-xl text-stone-800">
                  Mermer Maliyeti
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-stone-900">
                    Değişken
                  </span>
                </div>
                <p className="text-stone-600 text-sm mb-4">
                  Yerli taşlar uygun olabilirken, ithal türler porselenden
                  pahalıdır. Düzenli bakım maliyeti (cila) eklenmelidir.
                </p>
                <div className="w-full bg-stone-200 rounded-full h-2 relative">
                  <div className="bg-stone-500 h-2 rounded-full absolute left-0 w-1/3" />
                  <div className="bg-stone-400 h-2 rounded-full absolute left-[35%] opacity-50 w-2/3" />
                </div>
                <div className="mt-2 text-xs text-right text-stone-500">
                  Geniş Fiyat Aralığı
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="bg-stone-900 text-white">
                    <th className="p-4 font-serif text-lg w-1/3 text-center">
                      Özellik
                    </th>
                    <th className="p-4 font-serif text-lg border-l border-stone-700 w-1/3 text-center">
                      Mermer
                    </th>
                    <th className="p-4 font-serif text-lg border-l border-stone-700 bg-gold-600 w-1/3 text-center">
                      Porselen
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Çizilme Direnci
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      Orta (Metal ile çizilebilir)
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Çok Yüksek (Bıçak çizmez)
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Isı Direnci
                    </td>
                    <td className="p-4 text-stone-600 text-center">Yüksek</td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Mükemmel (Alev almaz)
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Leke Direnci
                    </td>
                    <td className="p-4 text-red-500 font-medium text-center">
                      Düşük (Aside hassas)
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Mükemmel (Sıfır gözenek)
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Bakım
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      Yüksek (Düzenli Sealer)
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Yok (Sadece temizlik)
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Kalınlık
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      Genelde 2-3 cm
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      6mm, 12mm, 20mm
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <RelatedArticles currentHref="/koleksiyon/rehber/mermer-vs-porselen" />

      <footer id="iletisim" className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Hayalinizdeki Mutfağı Birlikte Tasarlayalım
          </h2>
          <p className="text-stone-400 mb-10 text-lg max-w-2xl mx-auto">
            Doğallığı mı seçiyorsunuz yoksa teknolojiyi mi? Kararınız ne olursa
            olsun, profesyonel ekibimiz ölçüden montaja kadar yanınızda.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/905327443271?text=Merhaba,%20mutfak%20ve%20banyo%20projeleri%20i%C3%A7in%20teklif%20almak%20istiyorum."
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-900/50 group"
            >
              <i className="fa-brands fa-whatsapp text-2xl mr-3 group-hover:scale-110 transition-transform"></i>
              <span className="font-medium text-lg">
                WhatsApp ile Teklif Al
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-lg hover:bg-stone-200 transition-all shadow-lg"
            >
              <i className="fa-solid fa-envelope text-xl mr-3 text-stone-600"></i>
              <span className="font-medium text-lg">Formu Doldur</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-stone-800 text-stone-500 text-sm">
            <p>
              &copy; 2025 Mutfak ve Banyo Dekorasyon Rehberi. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>

      <button
        id="scrollToTop"
        aria-label="Yukarı Çık"
        onClick={scrollToTop}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gold-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-gold-500 focus:outline-none z-40 ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <style jsx global>{`
        .mermer-vs-porselen {
          font-family: "Inter", sans-serif;
        }
        .mermer-vs-porselen .font-serif {
          font-family: "Playfair Display", serif;
        }
        .hero-split {
          background: linear-gradient(90deg, #f5f5f4 50%, #e7e5e4 50%);
        }
        @media (max-width: 768px) {
          .hero-split {
            background: #f5f5f4;
          }
        }
        .mermer-vs-porselen .split-compare {
          animation: split-reveal 0.9s ease-out both;
          transform-origin: center;
        }
        .mermer-vs-porselen .split-pane {
          transition: filter 0.6s ease;
        }
        .mermer-vs-porselen .split-compare:hover .split-pane--left {
          filter: saturate(1.05);
        }
        .mermer-vs-porselen .split-compare:hover .split-pane--right {
          filter: saturate(0.92);
        }
        .mermer-vs-porselen .split-scan-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 3px;
          height: 160%;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(212, 175, 55, 0.95),
            transparent
          );
          opacity: 0.85;
          z-index: 25;
          box-shadow: 0 0 18px rgba(212, 175, 55, 0.6);
          animation: split-scan-x 10s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes split-reveal {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.995);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes split-scan-x {
          0% {
            transform: translateX(-60%);
            opacity: 0.2;
          }
          35% {
            opacity: 0.85;
          }
          50% {
            transform: translateX(0%);
            opacity: 0.95;
          }
          70% {
            opacity: 0.85;
          }
          100% {
            transform: translateX(60%);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
