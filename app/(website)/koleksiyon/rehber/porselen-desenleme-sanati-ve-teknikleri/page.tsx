import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

export default function PorselenDesenlemeSanatiVeTeknikleriPage() {
  return (
    <BlogArticleLayout currentHref="/koleksiyon/rehber/porselen-desenleme-sanati-ve-teknikleri">
{/* Okuma İlerleme Çubuğu */}
    

    {/* Hero Section (Tam Ekran) */}
    <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2000&auto=format&fit=crop" alt="Hand Painting Porcelain" className="w-full h-full object-cover brightness-75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
                <div className="max-w-4xl">
                    <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">Sanat ve Zanaat • 2025</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                        Porselen Desenleme <br />
                        <span className="italic text-stone-200">Sanatı ve Teknikleri</span>
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
                Porseleni sadece beyaz bir form olmaktan çıkarıp bir sanat eserine dönüştüren şey, üzerindeki desenleme sanatıdır. Tarihsel olarak Çin'de gelişip Avrupa'ya yayılan <span className="text-burgundy italic">"China painting"</span>, renklerin ateşle dansıdır.
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Bölüm 1: Dekorlama Yöntemleri (Grid Cards) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Teknik Sınıflandırma</span>
                <h2 className="text-4xl text-stone-800">1. Sırın Altında mı, Üstünde mi?</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Porselen desenleme teknikleri, boyanın uygulanma zamanına ve pişirim derecesine göre üç ana kategoriye ayrılır.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Kart 1: Sır Altı */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">A</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Sır Altı (Underglaze)</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Desen, bisküvi pişirimi yapılmış ham ürün üzerine uygulanır ve şeffaf sırla kaplanıp ~1350°C'de pişirilir.
                    </p>
                    <ul className="text-xs text-stone-500 space-y-2">
                        <li>• <strong>Görünüm:</strong> Pastel ve mat.</li>
                        <li>• <strong>Dayanıklılık:</strong> Çok yüksek (Solmaz).</li>
                        <li>• <strong>Koruma:</strong> Sır tabakası altındadır.</li>
                    </ul>
                </div>

                {/* Kart 2: Sır Üstü */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold">Sanatçı Tercihi</div>
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">B</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Sır Üstü (Overglaze)</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Sırlanmış parlak yüzey üzerine uygulanır. "El Dekoru" sanatçılarının tercihidir. ~760-880°C'de pişer.
                    </p>
                    <ul className="text-xs text-stone-500 space-y-2">
                        <li>• <strong>Görünüm:</strong> Canlı, parlak renkler.</li>
                        <li>• <strong>Malzeme:</strong> Yağ bazlı medyumlar.</li>
                        <li>• <strong>Teknik:</strong> İnce fırça işçiliği.</li>
                    </ul>
                </div>

                {/* Kart 3: Sır İçi */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">C</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Sır İçi (In-glaze)</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        Endüstriyel hibrit yöntem. ~1200°C'de boya, eriyen sır tabakasının içine gömülür.
                    </p>
                    <ul className="text-xs text-stone-500 space-y-2">
                        <li>• <strong>Görünüm:</strong> Cam gibi pürüzsüz.</li>
                        <li>• <strong>Dayanıklılık:</strong> Bulaşık makinesine uygun.</li>
                        <li>• <strong>Yapı:</strong> Sır içine hapsolmuş desen.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 2: El Dekoru (Moodboard Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 relative">
                {/* Moodboard Görsel Yerleşimi */}
                <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1596911679051-78921869e54d?q=80&w=800&auto=format&fit=crop" alt="Gold Leaf Application" className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1">Şekil 2: Altın Yaldız Uygulaması</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
                    <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop" alt="Detailed Porcelain Brushwork" className="w-full aspect-square object-cover" />
                </div>
            </div>
            
            <div className="md:col-span-7 md:pl-10">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Sabır ve Ustalık</span>
                <h2 className="text-4xl mb-6 text-stone-800">2. El Dekoru ve Sanatsal Süreç</h2>
                <p className="text-stone-600 leading-relaxed mb-6 dropcap">
                    Porselen desenleme, büyük bir sabır gerektiren "el dekoru" sürecidir. Türk kültüründe Yıldız ve İznik porselenleri bunun en nadide örnekleridir.
                </p>
                
                <div className="bg-greige p-8 rounded-sm mt-8 border-l-4 border-burgundy">
                    <h3 className="serif-font text-xl mb-4 text-stone-800 italic">Uygulama Adımları</h3>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2">Hazırlık:</span>
                            <p>Sanatçı, toz boyayı özel yağlarla (terebentin, lavanta, karanfil) cam bir yüzeyde ezerek hazırlar. Anatomi ve botanik bilgisi gerektirir.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2">Çoklu Fırınlama:</span>
                            <p>Karmaşık desenler, renklerin karışmaması için kademeli olarak boyanıp defalarca fırınlanabilir.</p>
                        </li>
                         <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2">Altın Dokunuş:</span>
                            <p>En hassas aşamadır. Altın veya gümüş yaldızlar, boya pişiriminden sonra uygulanır ve daha düşük ısıda (650°C) fırınlanarak, ardından cam elyafı ile parlatılır.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 3: Endüstriyel Teknikler (Dark Section) */}
        <section className="mb-32 relative">
            <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1590554033333-e990c768a865?q=80&w=1600&auto=format&fit=crop" alt="Industrial Ceramic Printing" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 p-10 md:p-20">
                    <span className="text-gold tracking-widest text-xs uppercase font-bold mb-4 block">Teknoloji ve Seri Üretim</span>
                    <h2 className="text-4xl mb-6">3. Endüstriyel Teknikler</h2>
                    <p className="text-stone-300 mb-12 max-w-2xl">El işçiliğinin yanı sıra, seri üretimde hız ve standartlaşma sağlayan modern teknikler kullanılır.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Teknik 1 */}
                        <div className="border-t border-gold pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-gold">Çıkartma (Decal)</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Porselen boyaları serigraf baskı ile özel kağıtlara basılır. Bu desenler su yardımıyla "çıkartma" gibi porselenin üzerine transfer edilir. Seri üretimdeki en yaygın yöntemdir.
                            </p>
                        </div>
                        {/* Teknik 2 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Dijital Baskı</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Gelişen teknoloji sayesinde, yüksek çözünürlüklü fotoğraflar ve karmaşık tasarımlar doğrudan porselen yüzeylere püskürtme yöntemiyle aktarılabilir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Bölüm 4: Sonuç (Feature Box) */}
        <section className="max-w-3xl mx-auto mb-20">
            <div className="bg-stone-800 text-white p-12 rounded relative overflow-hidden text-center border-4 border-gold">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cracked-concrete.png')]"></div>
                
                <span className="relative z-10 text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Sonsuzluk Mühürü</span>
                <h2 className="relative z-10 serif-font text-3xl mb-6">Ateşle Sabitlenen Sanat</h2>
                <p className="relative z-10 text-stone-300 leading-relaxed italic mb-8">
                    "Her fırça darbesi, fırında sonsuzluğa mühürlenir."
                </p>
                <p className="relative z-10 text-sm text-stone-400 leading-relaxed">
                    Porselen desenleme; kimya, ısı ve sanatın birleşimidir. İster sır altı tekniğinin dayanıklılığı, ister sır üstünün canlılığı olsun; bu sanat, porselen objeleri bir kullanım eşyasından yüzyıllarca saklanacak bir kültür mirasına dönüştürür.
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-20 border-t-4 border-gold">
            <div className="container mx-auto px-6 text-center">
                <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">Keşfet</span>
                <h2 className="serif-font text-4xl mb-8">Bu Sanatı Deneyimleyin</h2>
                <div className="max-w-2xl mx-auto mb-10 text-stone-400 text-sm md:text-base leading-relaxed">
                    <p>Başlangıç için düz beyaz tabaklar ve sır üstü boyalarla denemeler yapabilir veya profesyonel atölyelere katılarak bu incelikli zanaatı öğrenebilirsiniz.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    <button className="px-8 py-4 bg-burgundy hover:bg-white hover:text-burgundy transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Atölye Kaydı
                    </button>
                    <button className="px-8 py-4 border border-stone-600 hover:border-white transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Malzeme Temini
                    </button>
                </div>
                
                <div className="pt-10 border-t border-stone-800 flex justify-between text-xs text-stone-500 uppercase tracking-widest">
                    <span>© 2025 Art of Porcelain</span>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Pinterest</a>
                    </div>
                </div>
            </div>
        </footer>

    </main>
    </BlogArticleLayout>
  );
}
