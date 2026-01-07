import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

export default function BookmatchDoganinSenfonisiPage() {
  return (
    <BlogArticleLayout currentHref="/koleksiyon/rehber/bookmatch-doganin-senfonisi">
{/* Okuma İlerleme Çubuğu */}
    

    {/* Hero Section (Tam Ekran) */}
    <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=2000&auto=format&fit=crop" alt="Bookmatch Marble Symmetry" className="w-full h-full object-cover brightness-75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
                <div className="max-w-4xl">
                    <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">İç Mimari ve Tasarım • 2025</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                        Bookmatch: <br />
                        <span className="italic text-stone-200">Doğanın Senfonisi</span>
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
                Doğada hiçbir şey tesadüf değildir. Mermer levhaların, tıpkı bir kitabın sayfaları veya bir <span className="text-burgundy italic">kelebeğin kanatları</span> gibi birbirini ayna etkisiyle tamamlaması, mekânlarda dramatik bir görsel şölen yaratır.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Bölüm 1: Bookmatch Nedir? (Moodboard Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 relative">
                {/* Moodboard Görsel Yerleşimi */}
                <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Bookmatch Marble Wall" className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1">Şekil 1: Simetrik Ayna Etkisi</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
                    <img src="https://images.unsplash.com/photo-1599693988698-090c2d33458c?q=80&w=600&auto=format&fit=crop" alt="Marble Veins" className="w-full aspect-square object-cover" />
                </div>
            </div>
            
            <div className="md:col-span-7 md:pl-10">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Teknik ve Estetik</span>
                <h2 className="text-4xl mb-6 text-stone-800">1. Bookmatch Nedir?</h2>
                <p className="text-stone-600 leading-relaxed mb-6 dropcap">
                    Bookmatch, iki veya daha fazla doğal taş veya porselen levhanın, desenlerinin birbirini takip edip "aynalayacak" şekilde yan yana getirilmesi işlemidir.
                </p>
                
                <div className="bg-greige p-8 rounded-sm mt-8 border-l-4 border-burgundy">
                    <h3 className="serif-font text-xl mb-4 text-stone-800 italic">Nasıl Yapılır?</h3>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">İşlem:</span>
                            <p>Blok kesilirken, birbirini takip eden A ve B plakalarının birbirine bakan yüzeyleri parlatılır. Böylece damarlar kesintisiz devam eder.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">Görsel Etki:</span>
                            <p>Çiçek dürbünü (kaleidoscope) etkisi yaratır. Görüntü genellikle bir Rorschach testini veya devasa bir kelebeğin kanatlarını andırır.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 2: Kelebek Etkisi Felsefesi (Dark Section) */}
        <section className="mb-32 relative">
            <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop" alt="Abstract Chaos and Order" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 p-10 md:p-20">
                    <span className="text-gold tracking-widest text-xs uppercase font-bold mb-4 block">Kaos Teorisi</span>
                    <h2 className="text-4xl mb-6">2. Tasarımda "Kelebek Etkisi"</h2>
                    <p className="text-stone-300 mb-12 max-w-2xl">Edward N. Lorenz'in "küçük değişiklikler, büyük sonuçlar doğurur" teorisinin tasarımdaki somut halidir.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Felsefe 1 */}
                        <div className="border-t border-gold pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-gold">Küçük Dokunuş, Büyük Etki</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Tek bir plaka sadece "güzel"dir. Ancak simetriği ile birleştiğinde (küçük bir yerleşim kararı), mekânın atmosferini değiştiren devasa bir sanat eseri ortaya çıkar.
                            </p>
                        </div>
                        {/* Felsefe 2 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Kaos ve Düzen</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Doğal taşın damarları kaotik ve rastgeledir. Bookmatch tekniği, bu kaosu simetrik bir düzene sokarak insan gözüne hitap eden bir "düzen" algısı yaratır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Bölüm 3: Malzeme Seçimi (Grid Cards) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Doğal mı, Teknolojik mi?</span>
                <h2 className="text-4xl text-stone-800">3. Malzeme Seçimi</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kart 1: Doğal Mermer */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">A</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Doğal Mermer & Oniks</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Eşsizlik ve Lüks</p>
                    <ul className="text-sm text-stone-600 space-y-3">
                        <li><strong>• Biricik:</strong> Her uygulama "tek"tir ve kopyalanamaz.</li>
                        <li><strong>• Işık Oyunu:</strong> Oniks kullanımı, ışıkla birleştiğinde dramatik bir sahne yaratır.</li>
                        <li className="pt-2 border-t border-stone-100 italic text-xs">"Sanat eseri değeri taşır."</li>
                    </ul>
                </div>

                {/* Kart 2: Porselen */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold">Openbook Teknoloji</div>
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">B</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Porselen & Sinterlenmiş Taş</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Kusursuz Simetri</p>
                    <ul className="text-sm text-stone-600 space-y-3">
                        <li><strong>• Openbook:</strong> Mermer desenleri A ve B modülleri olarak birebir kopyalanır.</li>
                        <li><strong>• Ebat Avantajı:</strong> 160x320 cm devasa boyutlar, minimum derz.</li>
                        <li className="pt-2 border-t border-stone-100 italic text-xs">"Hatasız simetri garantisi."</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 4: Trendler (Zigzag Layout) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Neo Deco Akımı</span>
                <h2 className="text-4xl text-stone-800">4. 2025 Uygulama Trendleri</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center zigzag-content">
                <div className="flex-1 image-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=800&auto=format&fit=crop" alt="Bookmatch Wall Panel" className="w-full rounded shadow-lg" />
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl serif-font mb-4 text-stone-800">Duvar Panelleri & Mutfak</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Cesur damarlı yüzeyler 2025 trendlerinin merkezinde.
                    </p>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>TV Üniteleri:</strong> Geniş salon duvarlarında bir sanat galerisi havası verir.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>Mutfak Adaları:</strong> "Şelale" (waterfall) etkisiyle zemine inen simetrik damarlar mutfağın odak noktası olur.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>Islak Hacimler:</strong> Duş duvarlarında lüks bir spa atmosferi yaratır.</p>
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
                
                <span className="relative z-10 text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Son Söz</span>
                <h2 className="relative z-10 serif-font text-3xl mb-6">Doğanın İmzasını Mekâna Atmak</h2>
                <p className="relative z-10 text-stone-300 leading-relaxed italic mb-8">
                    "Kendi doğa senfoninizi yaratın."
                </p>
                <p className="relative z-10 text-sm text-stone-400 leading-relaxed">
                    İster mermerin yaşanmışlığı, ister porselenin mükemmelliği olsun; Bookmatch tekniği malzemeyi bir hikâye anlatıcısına dönüştürür. Kaotik çizgileri simetrik bir kelebek kanadına dönüştürerek yaşam alanlarınızı özelleştirin.
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-20 border-t-4 border-gold">
            <div className="container mx-auto px-6 text-center">
                <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">Profesyonel Destek</span>
                <h2 className="serif-font text-4xl mb-8">Simetriyi Keşfedin</h2>
                <div className="max-w-2xl mx-auto mb-10 text-stone-400 text-sm md:text-base leading-relaxed space-y-4">
                    <p>Hayalinizdeki simetrik tasarımı gerçeğe dönüştürmek, uygun A ve B plakalarını bulmak ve hassas montaj hizmeti almak için yanınızdayız.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    <button className="px-8 py-4 bg-burgundy hover:bg-white hover:text-burgundy transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Plaka Seçimi
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
