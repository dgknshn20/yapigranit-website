import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

export default function MermerVePorselenMalzemelerininOzellikleriPage() {
  return (
    <BlogArticleLayout currentHref="/koleksiyon/rehber/mermer-ve-porselen-malzemelerinin-ozellikleri">
{/* Okuma İlerleme Çubuğu */}
    

    {/* Hero Section (Tam Ekran) */}
    <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=2000&auto=format&fit=crop" alt="Marble vs Porcelain Texture" className="w-full h-full object-cover brightness-75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
                <div className="max-w-4xl">
                    <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">İç Mimari ve Malzeme Rehberi • 2025</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                        Mermer ve Porselen <br />
                        <span className="italic text-stone-200">Malzeme Özellikleri</span>
                    </h1>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-sm opacity-80">Okuma Süresi</p>
                    <p className="text-xl serif-font italic">8 Dakika</p>
                </div>
            </div>
        </div>
    </header>

    {/* İçerik Başlangıcı */}
    <main className="container mx-auto px-6 py-20 max-w-5xl">
        
        {/* Giriş Paragrafı */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-stone-600 font-light serif-font">
                Mutfak tezgahlarından zeminlere kadar o büyük soru: Doğal taşın asaletini mi seçmeliyim, yoksa teknolojinin dayanıklılığını mı? Bu rehberde, <span className="text-burgundy italic">iki dev malzemeyi</span> 2025 verileriyle kıyaslıyoruz.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Bölüm 1: Mermer (Moodboard Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 relative">
                {/* Moodboard Görsel Yerleşimi */}
                <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop" alt="Natural Marble Slab" className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1">Şekil 1: Doğal Damar Yapısı</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
                    <img src="https://images.unsplash.com/photo-1605218427368-35b85a3dc261?q=80&w=600&auto=format&fit=crop" alt="Marble Detail" className="w-full aspect-square object-cover" />
                </div>
            </div>
            
            <div className="md:col-span-7 md:pl-10">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Doğanın İmzası</span>
                <h2 className="text-4xl mb-6 text-stone-800">1. Mermer: Benzersiz Güzellik</h2>
                <p className="text-stone-600 leading-relaxed mb-6 dropcap">
                    Mermer, metamorfizma geçirmiş doğal bir taştır. Her bir plaka doğanın parmak izini taşır. Kristal boyutlarına göre sınıflandırılır; ince kristalliler (Afyon) daha sert, iri kristalliler (Kemalpaşa) daha kırılgandır.
                </p>
                
                <div className="bg-greige p-8 rounded-sm mt-8 border-l-4 border-burgundy">
                    <h3 className="serif-font text-xl mb-4 text-stone-800 italic">Artıları ve Eksileri</h3>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2 w-24 block">+ Estetik:</span>
                            <p>Eşsiz görünüm, evin piyasa değerini artırır. Isıyı tutmaz (hamur işleri için ideal).</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-700 font-bold mr-2 w-24 block">+ Yenileme:</span>
                            <p>Çizikler profesyonel silim ile giderilebilir.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">- Hassasiyet:</span>
                            <p>Asitlere (limon, sirke) duyarlıdır, "etching" lekesi oluşur. Düzenli sızdırmazlık (sealer) ister.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 2: Porselen (Dark Section) */}
        <section className="mb-32 relative">
            <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1620626011761-4f511e55d694?q=80&w=1600&auto=format&fit=crop" alt="High Tech Porcelain" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 p-10 md:p-20">
                    <span className="text-gold tracking-widest text-xs uppercase font-bold mb-4 block">Mühendislik Zirvesi</span>
                    <h2 className="text-4xl mb-6">2. Porselen: Teknoloji ve Dayanıklılık</h2>
                    <p className="text-stone-300 mb-12 max-w-2xl">1200°C'de sinterlenmiş, gözeneksiz yüzeyler. Dekton, Neolith, Lamar gibi markalarla 3mm'den 20mm'ye kadar üretilir.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Özellik 1 */}
                        <div className="border-t border-gold pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-gold">Olağanüstü Dayanıklılık</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Mohs sertlik skalasında 7-8. Çizilmelere mermerden çok daha dirençlidir. Leke tutmaz, bakteri barındırmaz (%0.05 su emilimi).
                            </p>
                        </div>
                        {/* Özellik 2 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Dikkat Noktası</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Kenar kırılganlığı (chipping) riski vardır; sert darbelerde köşelerden parça kopabilir. Full-body olmayanlarda desen sadece yüzeydedir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Bölüm 3: Karşılaştırma Tablosu (Custom Grid) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Karar Rehberi</span>
                <h2 className="text-4xl text-stone-800">3. Kullanım Alanları Karşılaştırması</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                {/* Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b-2 border-stone-200 font-bold text-stone-500 text-xs uppercase tracking-widest">
                    <div className="col-span-4">Alan</div>
                    <div className="col-span-2 text-center">Mermer</div>
                    <div className="col-span-2 text-center">Porselen</div>
                    <div className="col-span-4">Neden?</div>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-6 rounded shadow-sm border border-stone-100">
                    <div className="col-span-4 font-bold text-stone-800">Yoğun Mutfak Tezgahı</div>
                    <div className="col-span-2 text-center text-xs bg-red-100 text-red-800 py-1 rounded">⚠️ Dikkat</div>
                    <div className="col-span-2 text-center text-xs bg-green-100 text-green-800 py-1 rounded">✅ İdeal</div>
                    <div className="col-span-4 text-xs text-stone-500">Porselen asitlere dirençlidir, mermer limon ve sirkeden zarar görür.</div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-6 rounded shadow-sm border border-stone-100">
                    <div className="col-span-4 font-bold text-stone-800">Hamur Hazırlık Alanı</div>
                    <div className="col-span-2 text-center text-xs bg-green-100 text-green-800 py-1 rounded">✅ Mükemmel</div>
                    <div className="col-span-2 text-center text-xs bg-stone-100 text-stone-600 py-1 rounded">⭕ İyi</div>
                    <div className="col-span-4 text-xs text-stone-500">Mermerin doğal soğukluğu profesyonel şeflerin tercihidir.</div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white p-6 rounded shadow-sm border border-stone-100">
                    <div className="col-span-4 font-bold text-stone-800">Dış Mekan / Bahçe</div>
                    <div className="col-span-2 text-center text-xs bg-red-100 text-red-800 py-1 rounded">⭕ Riskli</div>
                    <div className="col-span-2 text-center text-xs bg-green-100 text-green-800 py-1 rounded">✅ Mükemmel</div>
                    <div className="col-span-4 text-xs text-stone-500">Porselen UV ışınlarına dayanıklıdır ve solmaz.</div>
                </div>
            </div>
        </section>

        {/* Bölüm 4: Fiyatlandırma (Feature Box) */}
        <section className="max-w-3xl mx-auto mb-20">
            <div className="bg-stone-800 text-white p-12 rounded relative overflow-hidden text-center border-4 border-gold">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cracked-concrete.png')]"></div>
                
                <span className="relative z-10 text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">2025 Verileri</span>
                <h2 className="relative z-10 serif-font text-3xl mb-6">Fiyatlandırma Notları</h2>
                <div className="relative z-10 text-sm text-stone-400 leading-relaxed space-y-4">
                    <p><strong>Mermer:</strong> Yerli taşlar uygun olabilirken, ithal ve nadir mermerler servet değerinde olabilir. Bakım maliyeti vardır.</p>
                    <p><strong>Porselen:</strong> Premium segmenttedir. Metretül fiyatı 7.000 TL - 12.000 TL+ (marka/kalınlık hariç) aralığındadır. Bakım masrafı yoktur.</p>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-20 border-t-4 border-gold">
            <div className="container mx-auto px-6 text-center">
                <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">Sonuç</span>
                <h2 className="serif-font text-4xl mb-8">Hangi Malzeme Sizin İçin?</h2>
                <div className="max-w-2xl mx-auto mb-10 text-stone-400 text-sm md:text-base leading-relaxed space-y-4">
                    <p>"Yaşanmışlık hissi" ve doğal patina için <strong className="text-white">Mermer</strong>.</p>
                    <p>"Tak ve unut" konforu, hijyen ve dayanıklılık için <strong className="text-white">Porselen</strong>.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    <button className="px-8 py-4 bg-burgundy hover:bg-white hover:text-burgundy transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Numune İste
                    </button>
                    <button className="px-8 py-4 border border-stone-600 hover:border-white transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Montaj Destek
                    </button>
                </div>
                
                <div className="pt-10 border-t border-stone-800 flex justify-between text-xs text-stone-500 uppercase tracking-widest">
                    <span>© 2025 Architectural Series</span>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Linkedin</a>
                    </div>
                </div>
            </div>
        </footer>

    </main>
    </BlogArticleLayout>
  );
}
