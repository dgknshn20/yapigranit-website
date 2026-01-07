export type BlogPost = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  readTime: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "neo-deco",
    category: "Dekorasyon Trendleri",
    title: "2026 Trend: Neo Deco & Mermer Görünümlü Porselen",
    subtitle: "Geleceğin Kodları",
    description:
      "Neo Deco akımı, sessiz lüks ve hiper-gerçekçi porselen yüzeylerle buluşuyor.",
    image:
      "https://i.pinimg.com/1200x/bf/5a/e4/bf5ae48388c40b355a64559cb8f750ad.jpg",
    readTime: "7 dk okuma",
    href: "/koleksiyon/rehber/neo-deco-mermer-gorunumlu-porselen"
  },
  {
    id: "atolye-urun-fikirleri",
    category: "Tasarım ve Üretim Fikirleri",
    title: "Atölye Ürün Fikirleri: Mermer & Porselen",
    subtitle: "Dekoratif Ürün Seçkisi",
    description:
      "Atölye üretiminde öne çıkan dekoratif ürün ve hediye konseptleri.",
    image: "/images/m1.png",
    readTime: "8 dk okuma",
    href: "/koleksiyon/rehber/atolye-urun-fikirleri"
  },
  {
    id: "kombinasyon-fikirleri",
    category: "İç Mimari ve Dekorasyon",
    title: "Mermer ve Porselen Kombinasyonuyla Tasarım Fikirleri",
    subtitle: "Zıtlıkların Uyumu",
    description:
      "Mermerin doğal şıklığını porselenin teknolojisiyle birleştiren mekan önerileri.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    readTime: "8 dk okuma",
    href: "/koleksiyon/rehber/mermer-porselen-kombinasyon-tasarim-fikirleri"
  },
  {
    id: "bookmatch",
    category: "İç Mimari ve Tasarım",
    title: "Bookmatch: Doğanın Senfonisi",
    subtitle: "Kelebek Kanadı Etkisi",
    description:
      "Simetrik damar kurgusuyla duvarlarda dramatik bir sanat etkisi.",
    image:
      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=2000&auto=format&fit=crop",
    readTime: "6 dk okuma",
    href: "/koleksiyon/rehber/bookmatch-doganin-senfonisi"
  },
  {
    id: "mimaride-kullanim",
    category: "Mimari ve İç Mekan Tasarımı",
    title: "Mermer ve Porselenin Mimaride Kullanımı",
    subtitle: "Malzeme Stratejisi",
    description:
      "Lüks projelerde mermer ve porselenin mimariye kattığı prestij ve performans.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    readTime: "9 dk okuma",
    href: "/koleksiyon/rehber/mermer-porselenin-mimaride-kullanimi"
  },
  {
    id: "porselen-desenleme",
    category: "Sanat ve Zanaat",
    title: "Porselen Desenleme Sanatı ve Teknikleri",
    subtitle: "Renklerin Ateşle Dansı",
    description:
      "Porselen yüzeylerde desen, motif ve renk uygulamalarının tarihsel teknikleri.",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2000&auto=format&fit=crop",
    readTime: "6 dk okuma",
    href: "/koleksiyon/rehber/porselen-desenleme-sanati-ve-teknikleri"
  },
  {
    id: "ozel-tasarim",
    category: "Tasarım ve İşletme Yönetimi",
    title: "Müşteri Taleplerine Göre Özel Tasarım Süreçleri",
    subtitle: "Doğru Analiz, Kusursuz Üretim",
    description:
      "Müşteri ihtiyaçlarını doğru analiz ederek özel tasarım süreçlerini yönetme.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop",
    readTime: "9 dk okuma",
    href: "/koleksiyon/rehber/musteri-taleplerine-gore-ozel-tasarim-surecleri"
  },
  {
    id: "waterfall",
    category: "İç Mimari ve Dekorasyon",
    title: "Waterfall Tasarım: Akışkan Yüzeyler",
    subtitle: "Kesintisiz Form",
    description:
      "Tezgahtan zemine akan tek parça yüzeylerle modern ada tasarımı.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    readTime: "6 dk okuma",
    href: "/koleksiyon/rehber/waterfall-tasarim-ve-akiskan-yuzeyler"
  },
  {
    id: "mermer-teknikleri",
    category: "Doğal Taş ve Mimari",
    title: "Mermer Tasarım Teknikleri ve İşleme Yöntemleri",
    subtitle: "Zanaat ve Teknoloji",
    description:
      "Ham bloktan bitmiş ürüne mermer işleme teknikleri ve modern makineler.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    readTime: "7 dk okuma",
    href: "/koleksiyon/rehber/mermer-tasarim-teknikleri-isleme-yontemleri"
  },
  {
    id: "malzeme-ozellikleri",
    category: "Malzeme Rehberi",
    title: "Mermer ve Porselen Malzemelerinin Özellikleri",
    subtitle: "Karşılaştırmalı Bakış",
    description:
      "Dayanıklılık, bakım ve kullanım senaryoları için hızlı karşılaştırma.",
    image:
      "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=2000&auto=format&fit=crop",
    readTime: "8 dk okuma",
    href: "/koleksiyon/rehber/mermer-ve-porselen-malzemelerinin-ozellikleri"
  },
  {
    id: "mermer-vs-porselen",
    category: "Seçim Rehberi",
    title: "Mermer vs Porselen",
    subtitle: "Karşılaştırmalı Analiz",
    description:
      "Estetik, dayanıklılık ve fiyat ekseninde hangisi sizin için doğru seçim?",
    image:
      "https://biesso.com/wp-content/uploads/2024/04/Porselen-vs-mermer-yemek-masasi.jpg",
    readTime: "6 dk okuma",
    href: "/koleksiyon/rehber/mermer-vs-porselen"
  },
  {
    id: "yuzey-bakim",
    category: "Bakım & Koruma",
    title: "Yüzey Bakım Rehberi",
    subtitle: "İlk Günkü Işıltı",
    description:
      "Mermer ve porselen yüzeyleri iz bırakmadan temizlemek için profesyonel ipuçları.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    readTime: "7 dk okuma",
    href: "/koleksiyon/rehber/yuzey-bakim-rehberi"
  },
  {
    id: "surdurulebilir-uretim",
    category: "Sürdürülebilirlik ve Endüstri",
    title: "Mermer Atölyesinde Sürdürülebilir Üretim ve Atık Yönetimi",
    subtitle: "Yeşil Üretim Merkezleri",
    description:
      "Atıkların geri kazanımı ve sürdürülebilir üretim pratikleriyle verimlilik artırma.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
    readTime: "7 dk okuma",
    href: "/koleksiyon/rehber/mermer-atolyesinde-surdurulebilir-uretim-atik-yonetimi"
  },
  {
    id: "pazarlama-stratejileri",
    category: "Dijital Pazarlama ve Sektörel Büyüme",
    title: "Mermer & Porselen Ürünlerde Pazarlama Stratejileri",
    subtitle: "Dijital Görünürlük",
    description:
      "Mimar ve proje ofislerine ulaşmak için dijital pazarlamada öne çıkan taktikler.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
    readTime: "9 dk okuma",
    href: "/koleksiyon/rehber/mermer-porselen-urunlerde-pazarlama-stratejileri"
  }
];
