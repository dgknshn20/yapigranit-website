"use client";

import { useEffect, useState } from "react";

import RelatedArticles from "@/components/blog/RelatedArticles";
import Navbar from "@/components/layout/Navbar";

export default function NeoDecoTrendPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, scrolled)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="trend-neo-deco antialiased scroll-smooth">
      <Navbar />
      <div
        className="fixed top-0 left-0 h-1 bg-burgundy z-50 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />

      <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Marble Interior"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
            <div className="max-w-3xl">
              <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">
                Dekorasyon Trendleri &amp; Mimari • 2026
              </span>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                2026 Yeni Trend: <br />
                <span className="italic text-stone-200">
                  Mermer Görünümlü Porselen
                </span>{" "}
                ve Geleceğin Kodları
              </h1>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm opacity-80">Okuma Süresi</p>
              <p className="text-xl serif-font italic">7 Dakika</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-stone-600 font-light serif-font">
            Ev dekorasyonunda rüzgarın yönü değişiyor. 2026 yılına yaklaşırken,
            yaşam alanlarımız sadece birer "sığınak" olmaktan çıkıp, teknoloji
            ile doğallığın kusursuzca harmanlandığı, sürdürülebilir ve estetik{" "}
            <span className="text-burgundy italic">
              "deneyim alanlarına"
            </span>{" "}
            dönüşüyor.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8" />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
          <div className="md:col-span-5 relative">
            <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
                alt="Neo Deco Interior"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
              <img
                src="https://images.unsplash.com/photo-1596464522437-1422d3b253b8?q=80&w=600&auto=format&fit=crop"
                alt="Red Marble Texture"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-gold opacity-50" />
          </div>

          <div className="md:col-span-7 md:pl-10">
            <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">
              Hakim Trend
            </span>
            <h2 className="text-4xl mb-6 text-stone-800">
              1. "Neo Deco" ve Sessiz Lüks
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6 dropcap">
              Pinterest ve önde gelen tasarımcıların öngörülerine göre 2026
              yılının dekorasyon trendi Neo Deco. Bu akım, 1920'lerin gösterişli
              Art Deco stilinin modern, minimalist ve daha "sessiz" bir yorumu
              olarak karşımıza çıkıyor.
            </p>

            <div className="bg-greige p-8 rounded-sm border-l-4 border-burgundy mt-8">
              <h3 className="serif-font text-xl mb-4 text-stone-800 italic">
                2026 Renk Paleti &amp; Materyaller
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-stone-600">
                  <span className="w-4 h-4 rounded-full bg-[#6F4E37] mr-3" />
                  <span>
                    <strong>Mocha Mousse:</strong> Kahve ve toprak tonları.
                  </span>
                </li>
                <li className="flex items-center text-stone-600">
                  <span className="w-4 h-4 rounded-full bg-[#5D0E18] mr-3" />
                  <span>
                    <strong>Kırmızı Mermer:</strong> Zeminlerde ve banyo
                    tezgahlarında cesur dokunuşlar.
                  </span>
                </li>
                <li className="flex items-center text-stone-600">
                  <span className="w-4 h-4 rounded-full bg-[#C5A065] mr-3" />
                  <span>
                    <strong>Eskitilmiş Pirinç:</strong> Duyusal katmanlama için
                    lüks metaller.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-32 relative">
          <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1600&auto=format&fit=crop"
                alt="Dark Porcelain Texture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl mb-6">
                  Mermer Görünümlü Porselen:<br />{" "}
                  <span className="italic text-stone-400">
                    Neden "Gerçek" Olandan Daha İyi?
                  </span>
                </h2>
                <p className="text-stone-300 leading-relaxed mb-8">
                  Doğal mermer büyüleyici olsa da, yeni nesil porselen
                  (sinterlenmiş taş) teknolojisi oyunun kurallarını değiştiriyor.
                  V-Intech teknolojisi ile damarlar artık sadece yüzeyde değil,
                  malzemenin kalbinde.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-white/20 p-4 rounded hover:bg-white/5 transition">
                    <h4 className="text-gold font-bold mb-1">Jumbo Boyutlar</h4>
                    <p className="text-xs text-stone-400">
                      160x320 cm levhalar ile kesintisiz, monolitik görünüm.
                    </p>
                  </div>
                  <div className="border border-white/20 p-4 rounded hover:bg-white/5 transition">
                    <h4 className="text-gold font-bold mb-1">MicNo Hijyen</h4>
                    <p className="text-xs text-stone-400">
                      Antibakteriyel yüzey teknolojisi ile maksimum sağlık.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-pointer">
                <div
                  className="absolute -inset-2 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition duration-500"
                  style={{
                    background: "linear-gradient(90deg, #c5a065, #5d0e18)"
                  }}
                />
                <div className="relative rounded-full overflow-hidden border-4 border-white/10 w-64 h-64 md:w-80 md:h-80 mx-auto bg-stone-800 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1598547434771-331620c379a1?q=80&w=600&auto=format&fit=crop"
                    alt="Macro Stone Detail"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/30">
                    <span className="text-white font-bold tracking-widest text-sm uppercase">
                      Yakından İncele
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="text-center mb-16">
            <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">
              Karar Verme Rehberi
            </span>
            <h2 className="text-4xl text-stone-800">Hangisini Seçmelisiniz?</h2>
          </div>

          <div className="overflow-x-auto hide-scroll pb-8">
            <div className="flex md:grid md:grid-cols-3 gap-6 min-w-[900px] md:min-w-0 px-4 md:px-0">
              <div className="flex-1 bg-white p-8 rounded border border-stone-200 opacity-80 hover:opacity-100 transition">
                <h3 className="serif-font text-2xl mb-2 text-stone-600">
                  Doğal Mermer
                </h3>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-6">
                  Klasik &amp; Prestijli
                </p>
                <ul className="space-y-4 text-sm text-stone-600 mb-8">
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Görünüm</span>
                    <span className="font-bold text-right">Eşsiz, Tek Plaka</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Dayanıklılık</span>
                    <span className="text-right text-red-500">
                      Çizilebilir, Asite Duyarlı
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Bakım</span>
                    <span className="text-right text-red-500">
                      Düzenli Cila İster
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Kullanım</span>
                    <span className="text-right">
                      İç Mekan (Düşük Trafik)
                    </span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-stone-100 text-stone-500 text-xs font-bold rounded-full">
                    Geleneksel Tercih
                  </span>
                </div>
              </div>

              <div className="flex-1 bg-white p-8 rounded border-t-4 border-burgundy shadow-2xl relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-burgundy text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  2026 Mimarın Seçimi
                </div>
                <h3 className="serif-font text-3xl mb-2 text-burgundy">
                  Porselen
                </h3>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-6">
                  Teknolojik &amp; Sürdürülebilir
                </p>
                <ul className="space-y-4 text-sm text-stone-700 mb-8">
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Görünüm</span>
                    <span className="font-bold text-right">Hiper-Gerçekçi</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Dayanıklılık</span>
                    <span className="text-right text-green-600 font-bold">
                      Çizilmez, Yanmaz
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Bakım</span>
                    <span className="text-right text-green-600 font-bold">
                      Bakım Gerektirmez
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Kullanım</span>
                    <span className="text-right">İç &amp; Dış Mekan</span>
                  </li>
                </ul>
                <div className="text-center">
                  <button className="w-full py-3 bg-burgundy text-white text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition">
                    Koleksiyonu İncele
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-white p-8 rounded border border-stone-200 opacity-80 hover:opacity-100 transition">
                <h3 className="serif-font text-2xl mb-2 text-stone-600">
                  Kuvars
                </h3>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-6">
                  Endüstriyel &amp; Pratik
                </p>
                <ul className="space-y-4 text-sm text-stone-600 mb-8">
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Görünüm</span>
                    <span className="font-bold text-right">Homojen Desen</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Dayanıklılık</span>
                    <span className="text-right">Isıya Karşı Hassas</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Bakım</span>
                    <span className="text-right text-green-600">
                      Kolay Temizlenir
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span>Kullanım</span>
                    <span className="text-right">Sadece İç Mekan</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-stone-100 text-stone-500 text-xs font-bold rounded-full">
                    Standart Tercih
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-stone-400 mt-6 italic">
            Tabloyu kaydırarak inceleyebilirsiniz
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-green-700 font-bold tracking-widest text-xs uppercase mb-2 block">
              Ekolojik Lüks
            </span>
            <h2 className="text-3xl mb-6 text-stone-800">
              Atıktan Sanata Dönüşüm
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              2026 sadece estetik değil, vicdani bir yıl olacak. Mermer tozlarının
              geri dönüştürülmesiyle üretilen yapay taşlar, doğal kaynakları
              korurken %97 verimlilik sağlıyor.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Eğer "yaşanmışlık hissi" ve patinayı seviyorsanız doğal mermer
              hala vazgeçilmezdir. Ancak, limon keserken endişelenmediğiniz, dış
              mekanda rengi solmayan bir yüzey arıyorsanız, büyük ebatlı porselen
              levhalar çağın en akılcı yatırımıdır.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-full overflow-hidden w-full aspect-square relative z-10 border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549488497-6cb56cb45d2e?q=80&w=800&auto=format&fit=crop"
                alt="Sustainable Stone Art"
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-stone-100 rounded-full -z-0 animate-pulse" />
          </div>
        </section>
      </main>

      <RelatedArticles currentHref="/koleksiyon/rehber/neo-deco-mermer-gorunumlu-porselen" />

      <footer className="bg-stone-900 text-white py-20 border-t border-gold">
        <div className="container mx-auto px-6 text-center">
          <h2 className="serif-font text-4xl mb-6">
            Evinizi Geleceğe Hazırlayın
          </h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            2026 Koleksiyonumuzdaki mermer görünümlü porselen ve doğal taşları
            keşfetmek için kataloğumuzu inceleyin.
          </p>
          <button className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-stone-900 transition duration-300 uppercase tracking-widest text-sm">
            Kataloğu İndir
          </button>

          <div className="mt-20 pt-10 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 uppercase tracking-widest gap-4">
            <span>© 2025 Mermer Firması</span>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                Pinterest
              </a>
              <a href="#" className="hover:text-white">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .trend-neo-deco {
          font-family: "Inter", sans-serif;
          background-color: #f9f8f6;
          color: #2d2d2d;
        }
        .trend-neo-deco h1,
        .trend-neo-deco h2,
        .trend-neo-deco h3,
        .trend-neo-deco h4,
        .trend-neo-deco h5,
        .trend-neo-deco .serif-font {
          font-family: "Playfair Display", serif;
        }
        .trend-neo-deco .text-burgundy {
          color: #5d0e18;
        }
        .trend-neo-deco .bg-burgundy {
          background-color: #5d0e18;
        }
        .trend-neo-deco .border-burgundy {
          border-color: #5d0e18;
        }
        .trend-neo-deco .border-gold {
          border-color: #c5a065;
        }
        .trend-neo-deco .bg-gold {
          background-color: #c5a065;
        }
        .trend-neo-deco .text-gold {
          color: #c5a065;
        }
        .trend-neo-deco .bg-greige {
          background-color: #f0efea;
        }
        .trend-neo-deco .image-hover-zoom {
          overflow: hidden;
          transition: transform 0.5s ease;
        }
        .trend-neo-deco .image-hover-zoom img {
          transition: transform 0.7s ease;
        }
        .trend-neo-deco .image-hover-zoom:hover img {
          transform: scale(1.05);
        }
        .trend-neo-deco .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .trend-neo-deco .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .trend-neo-deco .dropcap::first-letter {
          float: left;
          font-size: 4rem;
          line-height: 3.5rem;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          margin-right: 0.5rem;
          color: #5d0e18;
        }
      `}</style>
    </div>
  );
}
