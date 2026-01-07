import { createClient } from "@sanity/client";

import type { HomePageData, Product, Project } from "@/types/sanity";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";
export const hasSanityConfig = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
});

export const mockHomePageData: HomePageData = {
  _id: "mock-home",
  metadata: {
    title: "YAPIGRANİT - Mock Data",
    description: "Geliştirme modu verisi"
  },
  hero: {
    leftSide: {
      title: "Mimar ve Proje Çözüm Ortaklığı",
      subtitle:
        "5 Eksen CNC, Waterjet Kesim ve Mekanik Cephe Sistemleri.",
      buttonText: "Kurumsal Çözümleri Keşfet",
      buttonLink: "/kurumsal",
      backgroundVideoUrl:
        "https://cdn.midjourney.com/video/c0fdd939-73a5-43ca-8892-58adc8186648/1.mp4"
    },
    rightSide: {
      title: "Eviniz İçin Porselen ve Doğal Taş Şıklığı",
      subtitle:
        "Çizilmez Porselen Tezgahlar ve Butik Doğal Taş Tasarımları.",
      buttonText: "Koleksiyonu İncele",
      buttonLink: "/koleksiyon",
      backgroundVideoUrl:
        "https://cdn.midjourney.com/video/c8bf1d28-d200-429c-a30c-398cbcd975d4/0.mp4"
    }
  }
};

export const mockProducts: Product[] = [
  {
    _id: "p1",
    title: "Calacatta Viola",
    slug: { current: "calacatta-viola" },
    type: "Mermer",
    color: "Beyaz",
    surface: "Cilalı",
    isStock: true,
    mainImage:
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000&auto=format&fit=crop",
    description:
      "Calacatta Viola, karakteristik mor damarları ve yüksek kontrastlı yapısıyla prestijli iç mekanlarda öne çıkar. Büyük plaka uygulamalarında dramatik bir görünüm sunar.",
    gallery: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1200&auto=format&fit=crop"
    ],
    technicalSpecs: {
      origin: "İtalya",
      density: "2.70 g/cm³",
      waterAbsorption: "0.20%",
      flexuralStrength: "10 MPa",
      abrasionResistance: "Yüksek"
    }
  },
  {
    _id: "p2",
    title: "Nero Zimbabwe",
    slug: { current: "nero-zimbabwe" },
    type: "Granit",
    color: "Siyah",
    surface: "Honlu",
    isStock: true,
    mainImage:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1000&auto=format&fit=crop",
    description:
      "Nero Zimbabwe, düşük gözenekliliği ve yüksek sertliği sayesinde dış cephe ve yoğun trafik alanlarında güvenle kullanılır.",
    gallery: [
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=1200&auto=format&fit=crop"
    ],
    technicalSpecs: {
      origin: "Zimbabve",
      density: "2.95 g/cm³",
      waterAbsorption: "0.12%",
      flexuralStrength: "15 MPa",
      abrasionResistance: "Çok Yüksek"
    }
  },
  {
    _id: "p3",
    title: "Tundra Grey",
    slug: { current: "tundra-grey" },
    type: "Mermer",
    color: "Gri",
    surface: "Kumlamalı",
    isStock: true,
    mainImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    description:
      "Tundra Grey, doğal damar geçişleri ve sıcak gri tonlarıyla modern projelerde dengeli bir yüzey sunar.",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
    ],
    technicalSpecs: {
      origin: "Türkiye",
      density: "2.65 g/cm³",
      waterAbsorption: "0.30%",
      flexuralStrength: "9 MPa",
      abrasionResistance: "Orta-Yüksek"
    }
  },
  {
    _id: "p4",
    title: "Neolith Calacatta",
    slug: { current: "neolith-calacatta" },
    type: "Porselen",
    color: "Beyaz",
    surface: "Mat",
    isStock: false,
    mainImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
    description:
      "Neolith Calacatta, ultra kompakt yapısıyla çizilme ve leke direncini maksimum seviyede tutar. Hijyen gerektiren alanlar için idealdir.",
    gallery: [
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    ],
    technicalSpecs: {
      origin: "İspanya",
      density: "2.45 g/cm³",
      waterAbsorption: "0.01%",
      flexuralStrength: "18 MPa",
      abrasionResistance: "Çok Yüksek"
    }
  },
  {
    _id: "p5",
    title: "Onyx Rainbow",
    slug: { current: "onyx-rainbow" },
    type: "Oniks",
    color: "Çok Renkli",
    surface: "Işıklı",
    isStock: true,
    mainImage:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    description:
      "Onyx Rainbow, ışık geçirgenliğiyle dramatik aydınlatma senaryolarında etkileyici bir odak noktası oluşturur.",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop"
    ],
    technicalSpecs: {
      origin: "İran",
      density: "2.40 g/cm³",
      waterAbsorption: "0.35%",
      flexuralStrength: "7 MPa",
      abrasionResistance: "Orta"
    }
  }
];

export const mockProjects: Project[] = [
  {
    _id: "proj-1",
    title: "Bosphorus Grand Hotel",
    slug: { current: "bosphorus-grand-hotel" },
    category: "Otel",
    location: "İstanbul",
    year: "2023",
    mainImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop"
    ],
    stonesUsed: ["Calacatta Viola", "Nero Zimbabwe"],
    description:
      "Boğaz hattında konumlanan otel için giriş lobisi, spa ve cephe kaplamalarında doğal taş çözümleri üretildi. Toplam 12.000 m² taş uygulaması tamamlandı.",
    challenge:
      "Deniz tuzu ve rüzgar etkisi yüksek cephelerde taş yüzeyin uzun ömürlü ve güvenli kalması gerekiyordu.",
    solution:
      "AISI 316 paslanmaz ankraj sistemi ve özel su itici yüzey işlemleriyle cephe panelleri modüler hale getirildi."
  },
  {
    _id: "proj-2",
    title: "Anka City AVM",
    slug: { current: "anka-city-avm" },
    category: "AVM",
    location: "Ankara",
    year: "2022",
    mainImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop"
    ],
    stonesUsed: ["Tundra Grey", "Neolith Calacatta"],
    description:
      "20.000 m² kiralanabilir alana sahip AVM için zemin medalyonları, kolon kaplamaları ve dış cephe panelleri üretildi.",
    challenge:
      "Yüksek yaya trafiğinde aşınma direncini korurken, karmaşık zemin desenlerini bozmadan uygulamak gerekiyordu.",
    solution:
      "Waterjet kesim ile 1/10 mm hassasiyet sağlandı, modüler yerleşim planı ile montaj süresi %30 azaltıldı."
  },
  {
    _id: "proj-3",
    title: "Ege Marina Residences",
    slug: { current: "ege-marina-residences" },
    category: "Lüks Konut",
    location: "İzmir",
    year: "2024",
    mainImage:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1400&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop"
    ],
    stonesUsed: ["Onyx Rainbow", "Calacatta Viola"],
    description:
      "Deniz manzaralı rezidanslarda mutfak tezgahları, banyo yüzeyleri ve ortak alanlarda özel taş uygulamaları gerçekleştirildi.",
    challenge:
      "Onyx panellerin ışık geçirgenliğini koruyup aynı zamanda termal dayanımı artırmak gerekiyordu.",
    solution:
      "Arka aydınlatma için özel LED altyapısı ve ısıya dayanıklı reçine uygulamasıyla homojen ışık dağılımı sağlandı."
  }
];
