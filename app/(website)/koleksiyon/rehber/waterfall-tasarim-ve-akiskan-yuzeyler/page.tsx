import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

export default function WaterfallTasarimVeAkiskanYuzeylerPage() {
  return (
    <BlogArticleLayout currentHref="/koleksiyon/rehber/waterfall-tasarim-ve-akiskan-yuzeyler">
{/* Okuma İlerleme Çubuğu */}
    

    {/* Hero Section (Tam Ekran) */}
    <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" alt="Waterfall Kitchen Island" className="w-full h-full object-cover brightness-75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
                <div className="max-w-4xl">
                    <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">İç Mimari ve Dekorasyon • 2025</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                        Waterfall Tasarım: <br />
                        <span className="italic text-stone-200">Akışkan Yüzeyler</span>
                    </h1>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-sm opacity-80">Okuma Süresi</p>
                    <p className="text-xl serif-font italic">6 Dakika</p>
                </div>
            </div>
        </div>
    </header>

    {/* İçerik Başlangıcı */}
    <main className="container mx-auto px-6 py-20 max-w-5xl">
        
        {/* Giriş Paragrafı */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-stone-600 font-light serif-font">
                Mutfak adasından zemine doğru süzülen tek parça bir mermer bloğu düşünün. Waterfall tasarım, yüzeylerde akışkanlık, süreklilik ve <span className="text-burgundy italic">sonsuzluk hissi</span> yaratan bir estetik devrimdir.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Bölüm 1: Waterfall Nedir? (Moodboard Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 relative">
                {/* Moodboard Görsel Yerleşimi */}
                <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop" alt="Seamless Waterfall Edge" className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1">Şekil 1: Kesintisiz Akış</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=600&auto=format&fit=crop" alt="Marble Vein Detail" className="w-full aspect-square object-cover" />
                </div>
            </div>
            
            <div className="md:col-span-7 md:pl-10">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Minimalist & Heykelsi</span>
                <h2 className="text-4xl mb-6 text-stone-800">1. Waterfall Tasarım Nedir?</h2>
                <p className="text-stone-600 leading-relaxed mb-6 dropcap">
                    Tezgah malzemesinin kenarda bitmek yerine, 90 derecelik bir açıyla zemine kadar uzandığı uygulamadır. Bu teknik, mobilyayı sadece işlevsel bir öğe olmaktan çıkarıp heykelsi bir forma dönüştürür.
                </p>
                
                <div className="bg-greige p-8 rounded-sm mt-8 border-l-4 border-burgundy">
                    <h3 className="serif-font text-xl mb-4 text-stone-800 italic">Sonsuzluk İllüzyonu</h3>
                    <p className="text-sm text-stone-600">
                        Geleneksel tasarımlarda tezgahın bittiği yerde dolap yanları görünürken, Waterfall tasarımda malzeme aşağıya doğru akarak bir bütünlük oluşturur. Bu, mekânda dağınıklığı yok eden "görsel sessizlik" sağlar.
                    </p>
                </div>
            </div>
        </section>

        {/* Bölüm 2: Malzeme Seçimi (Grid Cards - 3 Sütun) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Doğru Taş Seçimi</span>
                <h2 className="text-4xl text-stone-800">2. Malzeme Seçimi: Akışkanlığı Yakalamak</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Waterfall tasarımın başarısı, damar takibine ve birleşim yerlerinin görünmezliğine bağlıdır.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kart 1: Porselen */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold">Mimarın Seçimi</div>
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">A</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Porselen Levhalar</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Mimari Hassasiyet</p>
                    <ul className="text-sm text-stone-600 space-y-2">
                        <li>• <strong>Devasa Boyut:</strong> 320x160 cm, minimum derz.</li>
                        <li>• <strong>Dayanıklılık:</strong> Leke tutmaz, ısıya dirençli.</li>
                        <li className="italic text-xs text-stone-400 pt-2">Lamar, Neolith, Dekton vb.</li>
                    </ul>
                </div>

                {/* Kart 2: Mermer */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">B</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Doğal Mermer</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Lüksün Zirvesi</p>
                    <ul className="text-sm text-stone-600 space-y-2">
                        <li>• <strong>Estetik:</strong> Gerçek akışkanlık hissi için eşsiz.</li>
                        <li>• <strong>Şart:</strong> Damar takibi için "Bookmatch" şarttır.</li>
                        <li className="italic text-xs text-stone-400 pt-2">Asitlere karşı hassastır.</li>
                    </ul>
                </div>

                {/* Kart 3: Kuvars & Granit */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">C</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Kuvars & Granit</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Alternatifler</p>
                    <ul className="text-sm text-stone-600 space-y-2">
                        <li>• <strong>Kuvars:</strong> Dayanıklı ama desenleri daha homojen.</li>
                        <li>• <strong>Granit:</strong> Sert ve doğal, renk seçeneği sınırlı.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 3: Bookmatch ve Teknoloji (Dark Section) */}
        <section className="mb-32 relative">
            <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=1600&auto=format&fit=crop" alt="Bookmatch Symmetry" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 p-10 md:p-20">
                    <span className="text-gold tracking-widest text-xs uppercase font-bold mb-4 block">Damar Takibi</span>
                    <h2 className="text-4xl mb-6">3. Bookmatch Tekniği</h2>
                    <p className="text-stone-300 mb-12 max-w-2xl">Waterfall tasarımda "akışkanlık" hissini yaratan en önemli detay, yatay yüzeyden dikey yüzeye geçerken damarların birbirini takip etmesidir.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Teknik 1 */}
                        <div className="border-t border-gold pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-gold">Simetri Teknolojisi</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Plakaların açık bir kitap gibi birbirini aynalayacak şekilde kesilmesi. Tezgahın üstündeki damar, kenardan aşağıya kesintisiz "akar".
                            </p>
                        </div>
                        {/* Teknik 2 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Görsel Şölen</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Özellikle Calacatta veya Onyx gibi güçlü damarlı taşlarda, bu teknik dramatik bir kelebek etkisi yaratır ve mekanın odak noktası olur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Bölüm 4: Trendler ve Üretim (Zigzag Layout) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Geleceğin Formları</span>
                <h2 className="text-4xl text-stone-800">4. Trendler ve Üretim Teknolojisi</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center zigzag-content">
                <div className="flex-1 image-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop" alt="Curved Stone Countertop" className="w-full rounded shadow-lg" />
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl serif-font mb-4 text-stone-800">2026 Trendleri: Biyomorfik Tasarım</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Keskin çizgiler yerini "70'ler Modernizmi"nden ilham alan yumuşak, kavisli ve akışkan formlara bırakıyor. Oval mutfak adaları ve kavisli tezgahlar doğayı taklit ediyor.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center zigzag-content mt-24">
                <div className="flex-1 image-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Waterjet Cutting Technology" className="w-full rounded shadow-lg" />
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl serif-font mb-4 text-stone-800">Üretim Teknolojisi: Sert Taşa "Su" Formu</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Sert taşlara bu formları vermek yüksek teknoloji gerektirir.
                    </p>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>Su Jeti (Waterjet):</strong> Isısız, deformasyonsuz ve hassas 45 derece köşe kesimi.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>CNC & Parametrik:</strong> Bilgisayar destekli tasarım ile taşa bir kumaş gibi kıvrımlı formlar verme yeteneği.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Sonuç (Feature Box) */}
        <section className="max-w-3xl mx-auto mb-20">
            <div className="bg-stone-800 text-white p-12 rounded relative overflow-hidden text-center border-4 border-gold">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cracked-concrete.png')]"></div>
                
                <span className="relative z-10 text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Sonuç</span>
                <h2 className="relative z-10 serif-font text-3xl mb-6">Hangi Malzemeyi Seçmelisiniz?</h2>
                <div className="relative z-10 text-stone-300 leading-relaxed space-y-4">
                    <p>"Tak ve unut" konforu ve modernlik için <strong className="text-white">Porselen Levhalar</strong> (Lamar, Dekton).</p>
                    <p>"Yaşanmışlık hissi" ve biricik sanat eseri için <strong className="text-white">Doğal Mermer</strong>.</p>
                </div>
                <p className="relative z-10 text-sm text-stone-400 mt-6 italic">
                    Unutmayın, Waterfall tasarım sadece bir tezgah değil, mekânın odak noktasıdır.
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-20 border-t-4 border-gold">
            <div className="container mx-auto px-6 text-center">
                <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">Profesyonel Destek</span>
                <h2 className="serif-font text-4xl mb-8">Evinizi Dönüştürün</h2>
                <div className="max-w-2xl mx-auto mb-10 text-stone-400 text-sm md:text-base leading-relaxed space-y-4">
                    <p>Hayalinizdeki akışkan yüzeyleri ve Waterfall tasarımları gerçeğe dönüştürmek için profesyonel uygulama ve malzeme seçimi konusunda yanınızdayız.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    <button className="px-8 py-4 bg-burgundy hover:bg-white hover:text-burgundy transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Malzeme Seçimi
                    </button>
                    <button className="px-8 py-4 border border-stone-600 hover:border-white transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        İletişime Geçin
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
