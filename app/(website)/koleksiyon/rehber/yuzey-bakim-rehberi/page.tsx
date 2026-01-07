"use client";

import { useEffect, useState } from "react";

import RelatedArticles from "@/components/blog/RelatedArticles";
import Navbar from "@/components/layout/Navbar";

export default function YuzeyBakimRehberiPage() {
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
              Temizlik &amp; Bakım Rehberi
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-xs text-stone-500">7 Dk Okuma</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-4 leading-tight">
            Mermer ve Porselen Yüzeylerin Bakımı ve Temizliği
            <br />
            <span className="italic text-stone-600 font-normal">
              İz Bırakmadan Uzun Ömürlü Kullanım
            </span>
          </h1>

          <p className="text-sm text-stone-500 uppercase tracking-[0.25em] mb-6">
            Kategori: Temizlik ve Bakım Rehberi | Yayın Tarihi: Kasım 2025 | Okuma
            Süresi: 7 Dakika
          </p>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Mutfak ve banyoların yıldızı olan yüzeyler, ilk günkü ihtişamını
            korumak için doğru bakıma ihtiyaç duyar. Doğal yapısıyla mermer ve
            teknolojinin armağanı porselen, temizlik rutinlerinde birbirinden
            tamamen farklı yaklaşımlar gerektirir. Yanlış bir kimyasal kullanımı
            mermerinizi kalıcı olarak matlaştırabilirken, porselende yapılacak
            küçük bir hata yüzeyin çizilmesine neden olabilir. Bu rehberde, her
            iki malzemenin de ömrünü uzatacak profesyonel bakım sırlarını
            derledik.
          </p>

          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer split-compare">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-stone-100 overflow-hidden group-hover:w-[45%] transition-all duration-500 ease-in-out split-pane split-pane--left">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                alt="Parlayan mermer yüzey"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="font-serif font-bold text-stone-900">
                  Mermer Yüzey
                </span>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 w-1/2 bg-stone-200 overflow-hidden group-hover:w-[55%] transition-all duration-500 ease-in-out split-pane split-pane--right">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                alt="Lekesiz porselen tezgah"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                <span className="font-serif font-bold text-stone-900">
                  Porselen Yüzey
                </span>
              </div>
            </div>

            <div className="absolute inset-y-0 left-1/2 w-1 bg-white z-20 shadow-lg transform -translate-x-1/2" />
            <div className="split-scan-line" aria-hidden="true" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <section id="mermer-bakim" className="scroll-mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Mermer yüzey detayı"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-serif text-2xl italic">
                    &quot;Mermer, özen istediğinde parlar.&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-[1px] bg-stone-400"></span>
                1. Doğal Mermer Bakımı: Hassas ve Özenli Dokunuşlar
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Mermer, kalsiyum karbonat bazlı ve gözenekli bir yapıya sahiptir;
                bu da onu asitlere ve lekelere karşı narin ve nazlı bir taş
                yapar.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                  <h3 className="font-bold text-stone-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-broom text-gold-500 mr-2"></i>
                    Günlük Temizlik Rutini
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Doğru Ürün Seçimi:</strong> Mermer temizliğinde
                        asla genel yüzey temizleyicileri kullanmayın. Sadece ılık
                        su ve pH değeri nötr (7) olan, doğal taşlar için özel
                        üretilmiş temizleyiciler veya arap sabunu tercih
                        edilmelidir.
                      </span>
                    </li>
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Kurulama Şart:</strong> Temizlik sonrası yüzeyi
                        mutlaka yumuşak bir mikrofiber bezle kurulayın. Su
                        birikintileri zamanla kireç lekelerine ve matlaşmaya yol
                        açabilir.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-circle-exclamation text-red-500 mr-2"></i>
                    Leke Müdahalesi ve Koruma
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-red-800">
                      <i className="fa-solid fa-xmark text-red-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Asit Tehlikesi:</strong> Limon, sirke, şarap veya
                        kahve döküldüğünde saniyeler içinde müdahale edin. Asit,
                        mermer yüzeyde &quot;etching&quot; denilen kalıcı mat yanıklar
                        oluşturur.
                      </span>
                    </li>
                    <li className="flex items-start text-red-800">
                      <i className="fa-solid fa-xmark text-red-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Mühürleme (Emprenye):</strong> Mermerin
                        gözeneklerini kapatmak ve sıvı emilimini engellemek için
                        6 ayda veya yılda bir düzenli olarak &quot;sealer&quot; (koruyucu
                        cila/emprenye) uygulaması yapılmalıdır.
                      </span>
                    </li>
                    <li className="flex items-start text-red-800">
                      <i className="fa-solid fa-xmark text-red-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Zorlu Lekeler:</strong> Yağ lekeleri için
                        karbonat veya mısır nişastası ile yapılan bir macun
                        (lapa) lekenin üzerine sürülüp streç filmle kapatılarak
                        24 saat bekletilebilir.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="porselen-bakim" className="scroll-mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-[1px] bg-stone-400"></span>
                2. Porselen Yüzey Bakımı: Zahmetsiz ve Hijyenik
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Yüksek sıcaklıkta fırınlanarak üretilen porselen, gözeneksiz
                yapısı sayesinde mermere göre çok daha kullanıcı dostu ve
                dayanıklıdır.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
                  <h3 className="font-bold text-stone-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-droplet text-blue-500 mr-2"></i>
                    Günlük Temizlik Rutini
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Basit ve Etkili:</strong> Porselen tezgahların
                        günlük temizliği için ılık su ve birkaç damla yumuşak
                        bulaşık deterjanı yeterlidir.
                      </span>
                    </li>
                    <li className="flex items-start text-stone-600">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Leke Tutmazlık:</strong> Gözeneksiz olduğu için
                        şarap, yağ veya kahve gibi sıvılar yüzeye işlemez; bu
                        nedenle mühürleme (sealer) işlemine ihtiyaç duymaz.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-orange-900 mb-4 flex items-center text-lg">
                    <i className="fa-solid fa-shield text-orange-500 mr-2"></i>
                    Dikkat Edilmesi Gerekenler
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-orange-800">
                      <i className="fa-solid fa-minus text-orange-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Metal İzleri:</strong> Porselen çok sert olduğu
                        için, üzerine sürtülen çatal-bıçaklar yüzeyde gri metal
                        izleri bırakabilir. Bu izler çizik değil, metal
                        kalıntısıdır ve özel temizleyicilerle veya karbonatlı
                        suyla hafifçe ovalanarak çıkarılabilir.
                      </span>
                    </li>
                    <li className="flex items-start text-orange-800">
                      <i className="fa-solid fa-minus text-orange-400 mt-1 mr-3 text-sm"></i>
                      <span>
                        <strong>Aşındırıcılardan Kaçının:</strong> Yüzey sert olsa
                        da, bulaşık telinin sert tarafı veya çelik yünü gibi
                        aşındırıcılar zamanla yüzeyin cilasına zarar verebilir.
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
                  alt="Porselen yüzey detay"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-serif text-2xl italic">
                    &quot;Temizlik kolay, sonuç kusursuz.&quot;
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
                Bilgi Kutusu: Sık Yapılan 3 Kritik Hata
              </h3>
              <ol className="text-stone-300 leading-relaxed text-lg space-y-3">
                <li>
                  <strong>Sirke Kullanımı:</strong> Porselen için seyreltilmiş
                  sirke kireç lekelerinde kullanılabilirken, mermer için sirke
                  bir felakettir; asidik yapısı taşı anında aşındırır.
                </li>
                <li>
                  <strong>Havada Kurumaya Bırakmak:</strong> Her iki yüzeyde de
                  su lekelerini önlemek için temizlik sonrası mutlaka kuru bir
                  bezle son geçişi yapın.
                </li>
                <li>
                  <strong>Ağartıcılar (Çamaşır Suyu):</strong> Mermerin doğal
                  dokusunu yakar ve porselenin parlaklığını zamanla
                  matlaştırabilir.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <section id="karsilastirma" className="scroll-mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Bakım Karşılaştırması: Hangi Yüzey Size Ne Kadar Zaman Harcatır?
            </h2>
            <p className="text-stone-600">
              Aşağıdaki tablo, iki malzeme arasındaki bakım farklarını net bir
              şekilde göstermektedir.
            </p>
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
                      Mermer Bakımı
                    </th>
                    <th className="p-4 font-serif text-lg border-l border-stone-700 bg-gold-600 w-1/3 text-center">
                      Porselen Bakımı
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Günlük Temizlik
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      pH Nötr deterjan + Kurulama
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Su + Bulaşık Deterjanı
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Leke Direnci
                    </td>
                    <td className="p-4 text-red-500 font-medium text-center">
                      Düşük (Anında müdahale şart)
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Mükemmel (Leke tutmaz)
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Koruyucu Bakım
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      Düzenli Emprenye (Cila) Gerekir
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Mühürleme Gerektirmez
                    </td>
                  </tr>
                  <tr className="border-b border-stone-100 hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Kimyasal Hassasiyeti
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      Asitlere Çok Hassas (Limon, Sirke)
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Kimyasallara Dayanıklı
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-4 font-medium text-stone-900 text-center">
                      Çizilme Onarımı
                    </td>
                    <td className="p-4 text-stone-600 text-center">
                      Profesyonel silim ile giderilebilir
                    </td>
                    <td className="p-4 text-stone-800 font-medium bg-stone-50 text-center">
                      Evde giderilmesi zordur
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="sonuc" className="scroll-mt-12">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
              Sonuç: Uzun Ömürlü Kullanım İçin İpuçları
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Mermer, yaşayan bir malzemedir; periyodik profesyonel silim ve
              cilalama ile yüzyıllarca kullanılabilir. Porselen ise modern
              çağın &quot;tak ve unut&quot; malzemesidir; ancak kenar darbelerine karşı
              korunmalı ve üzerinde doğrudan kesim yapılmamalıdır.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg mt-4">
              Hangi yüzeyi seçerseniz seçin, doğru bakım ürünlerini kullanmak
              yatırımınızın değerini koruyacaktır.
            </p>
          </div>
        </section>
      </main>

      <RelatedArticles currentHref="/koleksiyon/rehber/yuzey-bakim-rehberi" />

      <footer id="iletisim" className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Mermer veya Porselen Yüzeyleriniz İçin Profesyonel Destek mi
            Arıyorsunuz?
          </h2>
          <p className="text-stone-400 mb-10 text-lg max-w-2xl mx-auto">
            Matlaşmış mermerlerinizi ilk günkü parlaklığına kavuşturmak veya
            porselen tezgahlarınız için doğru bakım ürünlerini öğrenmek için
            uzman ekibimizle iletişime geçin.
          </p>

          <a
            href="tel:+902583722250"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-stone-900 rounded-lg hover:bg-gold-400 transition-all shadow-lg"
          >
            Danışma Hattı: 0 258 372 22 50
          </a>

          <div className="mt-16 pt-8 border-t border-stone-800 text-stone-500 text-sm">
            <p>&copy; 2025 Yüzey Bakım Rehberi. Tüm hakları saklıdır.</p>
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
