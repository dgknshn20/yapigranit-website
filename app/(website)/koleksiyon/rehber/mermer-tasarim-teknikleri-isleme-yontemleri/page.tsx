import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

export default function MermerTasarimTeknikleriIslemeYontemleriPage() {
  return (
    <BlogArticleLayout currentHref="/koleksiyon/rehber/mermer-tasarim-teknikleri-isleme-yontemleri">
{/* Okuma İlerleme Çubuğu */}
    

    {/* Hero Section (Tam Ekran) */}
    <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" alt="Marble Processing Factory" className="w-full h-full object-cover brightness-75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
                <div className="max-w-4xl">
                    <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">Doğal Taş ve Mimari • 2025</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                        Mermer Tasarım <br />
                        <span className="italic text-stone-200">Teknikleri ve İşleme</span>
                    </h1>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-sm opacity-80">Okuma Süresi</p>
                    <p className="text-xl serif-font italic">7 Dakika</p>
                </div>
            </div>
        </div>
    </header>

    {/* İçerik Başlangıcı */}
    <main className="container mx-auto px-6 py-20 max-w-5xl">
        
        {/* Giriş Paragrafı */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-stone-600 font-light serif-font">
                Doğal taşın ham bir bloktan sanat eserine veya işlevsel bir yapı elemanına dönüşümü, binlerce yıllık bir zanaatın ve modern teknolojinin <span className="text-burgundy italic">harmanlanmasıyla gerçekleşir.</span>
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Bölüm 1: Kesim Teknolojileri (Grid Cards) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Bloktan Plakaya</span>
                <h2 className="text-4xl text-stone-800">1. Kesim Teknolojileri</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Mermerin ocaktan çıkarılmasından nihai formuna ulaşmasına kadar geçen süreçte kullanılan kritik kesim teknikleri.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kart 1: Elmas Tel */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">A</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Elmas Tel Kesme</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Elmas boncuklu çelik teller, mermeri aşındırarak keser. Ocaklarda blok üretiminde ve blokların plakalara ayrılmasında kullanılır.
                    </p>
                    <ul className="text-xs text-stone-500 space-y-2">
                        <li>• <strong>Kullanım:</strong> Büyük blok kesimi.</li>
                        <li>• <strong>Avantaj:</strong> Düzgün geometri.</li>
                    </ul>
                </div>

                {/* Kart 2: Su Jeti */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold">Hassas Kesim</div>
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">B</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Su Jeti (Water Jet)</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Yüksek basınçlı su ve aşındırıcı kum karışımı. Isı oluşturmadığı için deformasyon yaratmaz.
                    </p>
                    <ul className="text-xs text-stone-500 space-y-2">
                        <li>• <strong>Kullanım:</strong> Detaylı motifler, göbekler.</li>
                        <li>• <strong>Avantaj:</strong> Isısız kesim, sıfır deformasyon.</li>
                    </ul>
                </div>

                {/* Kart 3: Köprü Kesme */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">C</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Köprü Kesme</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Köprü üzerinde hareket eden elmas diskli testere. Plaka ebatlama hattında standarttır.
                    </p>
                    <ul className="text-xs text-stone-500 space-y-2">
                        <li>• <strong>Kullanım:</strong> Tezgah, zemin döşemesi.</li>
                        <li>• <strong>Avantaj:</strong> Hızlı ve düz ebatlama.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 2: Yüzey İşleme (Moodboard Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 relative">
                {/* Moodboard Görsel Yerleşimi */}
                <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Polished Marble Surface" className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1">Şekil 2: Cilalı Yüzey</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
                    <img src="https://images.unsplash.com/photo-1617850645605-e4d0d0499d8d?q=80&w=600&auto=format&fit=crop" alt="Honed Stone Texture" className="w-full aspect-square object-cover" />
                </div>
            </div>
            
            <div className="md:col-span-7 md:pl-10">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Doku ve Parlaklık</span>
                <h2 className="text-4xl mb-6 text-stone-800">2. Yüzey İşleme Teknikleri</h2>
                <p className="text-stone-600 leading-relaxed mb-6 dropcap">
                    Mermerin karakterini belirleyen en önemli unsur yüzey işlemidir. Bu işlemler taşın rengini, dokusunu ve kullanım alanını (kaymazlık vb.) belirler.
                </p>
                
                <div className="bg-greige p-8 rounded-sm mt-8 border-l-4 border-burgundy">
                    <h3 className="serif-font text-xl mb-4 text-stone-800 italic">Yaygın Uygulamalar</h3>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">Cilalama:</span>
                            <p>Pürüzsüz ve parlak yüzey. <strong>Kristalizasyon</strong> yöntemi ile ekstra sertlik ve parlaklık kazandırılır.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">Honlama:</span>
                            <p>Mat ve pürüzsüz yüzey. Işığı yansıtmaz, zeminlerde kayma riskini azaltır.</p>
                        </li>
                         <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">Çekiçleme:</span>
                            <p>Sert metal uçlarla dövülerek pürüzlü, dişli bir doku oluşturulur. Dış mekanlar için idealdir.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 3: CNC İşleme (Dark Section) */}
        <section className="mb-32 relative">
            <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop" alt="CNC Machine Working" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 p-10 md:p-20">
                    <span className="text-gold tracking-widest text-xs uppercase font-bold mb-4 block">Dijital Heykeltıraşlık</span>
                    <h2 className="text-4xl mb-6">3. İleri Teknoloji: CNC</h2>
                    <p className="text-stone-300 mb-12 max-w-2xl">Bilgisayar kontrollü makineler ile mermer üzerine üç boyutlu tasarımlar ve rölyefler işlenebilmektedir.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Teknik 1 */}
                        <div className="border-t border-gold pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-gold">Çalışma Prensibi</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                CAD/CAM programlarında tasarlanan modeller, sayısal kodlara dökülerek işlenir. Mermerin sertliğine göre parametreler optimize edilir.
                            </p>
                        </div>
                        {/* Teknik 2 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Enerji & Verimlilik</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Kesme derinliği arttıkça enerji tüketimi artar. Doğru uç ve hız seçimi, verimlilik ve hassasiyet için kritiktir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Bölüm 4: Kalıp Yapımı (Zigzag Layout) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Döküm Teknikleri</span>
                <h2 className="text-4xl text-stone-800">4. Kalıp Yapımı ve Mermerit</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center zigzag-content">
                <div className="flex-1 image-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop" alt="Sculpture Casting" className="w-full rounded shadow-lg" />
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl serif-font mb-4 text-stone-800">Silikon Kalıplama</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Doğal blok mermerin yanı sıra, mermer tozu ve polyester kullanılarak yapılan döküm teknikleri de sektörün parçasıdır.
                    </p>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-burgundy rounded-full mt-2 mr-3"></span>
                            <p><strong>Silikon (RTV2):</strong> Modelin detaylarını kopyalamak için esnek iç kalıp.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-burgundy rounded-full mt-2 mr-3"></span>
                            <p><strong>Destek Kabuğu:</strong> Silikonun formunu koruması için fiberglass sert dış kalıp.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-burgundy rounded-full mt-2 mr-3"></span>
                            <p><strong>Hava Kabarcığı:</strong> Döküm sırasında titreşim (vibrasyon) uygulanarak kabarcıklar yok edilmelidir.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 5: Kintsugi (Feature Box) */}
        <section className="max-w-3xl mx-auto mb-20">
            <div className="bg-stone-800 text-white p-12 rounded relative overflow-hidden text-center border-4 border-gold">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cracked-concrete.png')]"></div>
                
                <span className="relative z-10 text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Onarım Felsefesi</span>
                <h2 className="relative z-10 serif-font text-3xl mb-6">Kintsugi Sanatı</h2>
                <p className="relative z-10 text-stone-300 leading-relaxed italic mb-8">
                    "Kırık parçalar, altının ışıltısıyla yeniden hayat bulur."
                </p>
                <p className="relative z-10 text-sm text-stone-400 leading-relaxed">
                    Mermer veya seramik kırıldığında, onları çöpe atmak yerine Japon sanatı Kintsugi ile onarmak bir tasarım felsefesidir. Kırıklar altın veya gümüş tozu karışımlı reçine ile birleştirilerek, nesnenin tarihine estetik bir değer katılır.
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-20 border-t-4 border-gold">
            <div className="container mx-auto px-6 text-center">
                <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">Uzmanlık</span>
                <h2 className="serif-font text-4xl mb-8">Doğru Yöntem, Mükemmel Sonuç</h2>
                <div className="max-w-2xl mx-auto mb-10 text-stone-400 text-sm md:text-base leading-relaxed">
                    <p>İster endüstriyel bir tezgah ister sanatsal bir heykel olsun; mermerin işlenmesi, jeolojik yapıya uygun tekniğin seçilmesine bağlıdır. Kristalize cila ile parlatılan bir mermer, yüzyıllar boyunca ihtişamını korur.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    <button className="px-8 py-4 bg-burgundy hover:bg-white hover:text-burgundy transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Silim/Cila Hizmeti
                    </button>
                    <button className="px-8 py-4 border border-stone-600 hover:border-white transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Özel Kesim Projesi
                    </button>
                </div>
                
                <div className="pt-10 border-t border-stone-800 flex justify-between text-xs text-stone-500 uppercase tracking-widest">
                    <span>© 2025 Stone Craft & Design</span>
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
