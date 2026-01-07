import BlogArticleLayout from "@/components/blog/BlogArticleLayout";

export default function AtolyeUrunFikirleriPage() {
  return (
    <BlogArticleLayout currentHref="/koleksiyon/rehber/atolye-urun-fikirleri">
{/* Okuma İlerleme Çubuğu */}
    

    {/* Hero Section (Tam Ekran) */}
    <header className="relative h-[90vh] flex items-end justify-center pb-20 overflow-hidden">
        {/* Arkaplan Görseli */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop" alt="Workshop Table Porcelain Marble" className="w-full h-full object-cover brightness-75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-white">
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-white/30 pt-8">
                <div className="max-w-4xl">
                    <span className="text-gold tracking-[0.3em] text-xs uppercase font-bold mb-4 block">Tasarım ve Üretim Fikirleri • 2025</span>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-4">
                        Atölye Ürün Fikirleri: <br />
                        <span className="italic text-stone-200">Mermer & Porselen</span>
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
                Dekorasyon dünyasında sadece mutfak tezgahları değil; duvar panoları, mobilyalar ve aksesuarlar da doğal taşların hakimiyetinde. Atölyenizde <span className="text-burgundy italic">Mermerin lüksünü mü</span> yoksa <span className="text-burgundy italic">Porselenin tekniğini mi</span> kullanmalısınız?
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8"></div>
        </div>

        {/* Bölüm 1: Duvar Panoları (Moodboard Layout) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-5 relative">
                {/* Moodboard Görsel Yerleşimi */}
                <div className="relative z-10 image-hover-zoom shadow-2xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1600607687644-c7f32b393597?q=80&w=800&auto=format&fit=crop" alt="Large Porcelain Wall Panel" className="w-full aspect-[3/4] object-cover" />
                    <span className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1">Şekil 1: TV Ünitesi Arkası</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-2/3 z-20 image-hover-zoom shadow-xl rounded-sm border-4 border-[#F9F8F6]">
                    <img src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop" alt="Thin Slab Detail" className="w-full aspect-square object-cover" />
                </div>
            </div>
            
            <div className="md:col-span-7 md:pl-10">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Odak Noktası</span>
                <h2 className="text-4xl mb-6 text-stone-800">1. Lüks Duvar Panoları</h2>
                <p className="text-stone-600 leading-relaxed mb-6 dropcap">
                    Duvar kaplamaları evin değerini artıran unsurlardır. Burada porselenin teknik üstünlüğü ön plana çıkar.
                </p>
                
                <div className="bg-greige p-8 rounded-sm mt-8 border-l-4 border-burgundy">
                    <h3 className="serif-font text-xl mb-4 text-stone-800 italic">Porselenin Hakimiyeti</h3>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">İnce & Dev:</span>
                            <p>3mm - 6mm kalınlık, 320x160 cm ebatlar. Derz aralığı olmadan "yekpare" görünüm sağlar.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">Hafiflik:</span>
                            <p>Binaya ekstra yük bindirmez. Banyo duvarlarında ve TV arkası panellerde güvenle kullanılır.</p>
                        </li>
                         <li className="flex items-start">
                            <span className="text-burgundy font-bold mr-2 w-24 block">Tasarım:</span>
                            <p>Arkadan aydınlatmalı (backlight) uygulamalarla dramatik etki yaratır.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 2: Mobilya Tasarımları (Grid Cards) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Masa ve Sehpalar</span>
                <h2 className="text-4xl text-stone-800">2. Mobilya Tasarımları</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Yemek masaları ve orta sehpalar atölyelerin gözdesidir. Malzeme seçimi müşteri memnuniyetini belirler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Kart 1: Mermer */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500">
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">A</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Mermer Masalar</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Ağırlık ve Asalet</p>
                    <ul className="text-sm text-stone-600 space-y-3">
                        <li><strong>+ Artıları:</strong> Lüks duruş, benzersiz damar yapısı, kişiye özel tasarım.</li>
                        <li><strong>- Eksileri:</strong> Gözenekli yapı (leke tutar), çok ağırdır.</li>
                        <li className="pt-2 border-t border-stone-100 italic text-xs">"Müşteriye asitli sıvılardan koruma uyarısı yapılmalıdır."</li>
                    </ul>
                </div>

                {/* Kart 2: Porselen */}
                <div className="bg-white p-8 rounded border border-stone-200 hover:shadow-xl transition duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-white text-[10px] px-2 py-1 uppercase tracking-widest font-bold">Kullanıcı Dostu</div>
                    <div className="w-12 h-12 bg-greige rounded-full flex items-center justify-center text-burgundy mb-6 text-xl font-serif font-bold">B</div>
                    <h3 className="serif-font text-2xl mb-4 text-stone-800">Porselen Masalar</h3>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Modern ve Dayanıklı</p>
                    <ul className="text-sm text-stone-600 space-y-3">
                        <li><strong>+ Artıları:</strong> Mohs 8 sertlik (çizilmez), hafif, metal ayak esnekliği.</li>
                        <li><strong>+ Dış Mekan:</strong> UV ışınlarına dirençlidir, bahçe mobilyası için idealdir.</li>
                        <li className="pt-2 border-t border-stone-100 italic text-xs">"Giderek artan bir trend."</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 3: Aksesuarlar (Zigzag Layout) */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <span className="text-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Butik Seri</span>
                <h2 className="text-4xl text-stone-800">3. Butik Ürün Fikirleri</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center zigzag-content">
                <div className="flex-1 image-hover-zoom">
                    <img src="https://images.unsplash.com/photo-1596911679051-78921869e54d?q=80&w=800&auto=format&fit=crop" alt="Marble Accessories" className="w-full rounded shadow-lg" />
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl serif-font mb-4 text-stone-800">Küçük Dokunuşlar, Büyük Etki</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Büyük plakalardan artan fireleri değerlendirmek için harika fikirler:
                    </p>
                    <ul className="space-y-4 text-sm text-stone-600">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>Sunum Tabakları:</strong> Mermer tepsiler ve şamdanlar lüksü simgeler. Gıdaya uygun cila şarttır.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3"></span>
                            <p><strong>Nihale & Kesme Tahtası:</strong> Isıya dayanıklı porselen, sıcak tencereler ve hijyenik kesim için en ideal malzemedir.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Bölüm 4: Kintsugi (Feature Box) */}
        <section className="max-w-3xl mx-auto mb-20">
            <div className="bg-stone-800 text-white p-12 rounded relative overflow-hidden text-center border-4 border-gold">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cracked-concrete.png')]"></div>
                
                <span className="relative z-10 text-gold font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Sıfır Atık Sanatı</span>
                <h2 className="relative z-10 serif-font text-3xl mb-6">Kintsugi ile Değer Katın</h2>
                <p className="relative z-10 text-stone-300 leading-relaxed italic mb-8">
                    "Kusurlar altına dönüşür."
                </p>
                <p className="relative z-10 text-sm text-stone-400 leading-relaxed">
                    Atölyenizde kırılan veya çatlayan değerli parçaları atmayın. Japon sanatı Kintsugi ile kırıkları altın tozlu reçineyle birleştirerek, "sıfır atık" felsefesine uygun, hikayesi olan sanatsal objeler tasarlayabilir ve satabilirsiniz.
                </p>
            </div>
        </section>

        {/* Bölüm 5: Üretim Teknikleri (Dark Section) */}
        <section className="mb-32 relative">
            <div className="bg-stone-900 text-white rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop" alt="Industrial Cutting Tools" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 p-10 md:p-20">
                    <span className="text-gold tracking-widest text-xs uppercase font-bold mb-4 block">Teknik Detaylar</span>
                    <h2 className="text-4xl mb-6">4. Üretim ve İşçilikte Kritik Noktalar</h2>
                    <p className="text-stone-300 mb-12 max-w-2xl">Müşteri şikayeti almamak ve fireyi azaltmak için dikkat edilmesi gerekenler.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Teknik 1 */}
                        <div className="border-t border-gold pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-gold">Kenar Profilleri</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Porselen serttir, darbede "yongalanma" (chipping) riski taşır. Köşeleri 90 derece yerine balıksırtı veya yuvarlatılmış çalışın.
                            </p>
                        </div>
                        {/* Teknik 2 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Kesim Hassasiyeti</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Porselen için özel elmas diskler ve sulu kesim şarttır. Yanlış disk seçimi malzemeyi çatlatır.
                            </p>
                        </div>
                        {/* Teknik 3 */}
                        <div className="border-t border-stone-500 pt-6">
                            <h4 className="font-bold mb-2 text-xl serif-font text-stone-200">Leke ve Çizik</h4>
                            <p className="text-sm text-stone-400 leading-relaxed">
                                Porselen üzerindeki gri izler metal kalıntısıdır, temizlenir. Mermerdeki asit lekeleri ise profesyonel silim gerektirir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-20 border-t-4 border-gold">
            <div className="container mx-auto px-6 text-center">
                <span className="text-stone-500 tracking-widest text-xs uppercase mb-4 block">Özet Strateji</span>
                <h2 className="serif-font text-4xl mb-8">Hangi Malzeme Nereye?</h2>
                <div className="max-w-3xl mx-auto mb-10 text-stone-400 text-sm md:text-base leading-relaxed space-y-2">
                    <p><strong>Duvar & Dış Mekan:</strong> Hafiflik ve UV direnci için <span className="text-white">Porselen</span>.</p>
                    <p><strong>Salon & Lüks:</strong> Yaşanmışlık hissi için <span className="text-white">Mermer</span>.</p>
                    <p><strong>Mutfak Gereçleri:</strong> Hijyen ve ısı direnci için <span className="text-white">Porselen</span>.</p>
                </div>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    <button className="px-8 py-4 bg-burgundy hover:bg-white hover:text-burgundy transition duration-300 text-white text-sm font-bold uppercase tracking-widest">
                        Tedarik ve Destek
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
