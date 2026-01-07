import Image from "next/image";

import StoneAssistant from "@/components/assistant/StoneAssistant";
import Navbar from "@/components/layout/Navbar";
import CollectionGridSection from "@/components/ui/CollectionGridSection";
import CollectionContactSection from "@/components/ui/CollectionContactSection";
import StoneGuideSection from "@/components/ui/StoneGuideSection";
import TrendVisionSection from "@/components/ui/TrendVisionSection";
import { promises as fs } from "fs";
import path from "path";

type CollectionItem = {
  id: string;
  name: string;
  brand: string;
  color: string;
  image: string;
  desc: string;
};

const COLLECTION_LIST_PATH = path.join(process.cwd(), "collection-list.txt");
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000&auto=format&fit=crop";

const isImageUrl = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/");

const extractColor = (input: string) => {
  const explicitMatch = input.match(
    /Renk\s*:\s*([A-Za-zÇĞİÖŞÜçğıöşü\s-]+)/i
  );
  if (explicitMatch?.[1]) {
    const value = explicitMatch[1].split(/[.,;]/)[0].trim();
    return value;
  }

  const patterns: Array<[RegExp, string]> = [
    [/(siyah|black|noir|nero|onyx)/i, "Siyah"],
    [/(beyaz|white|ivory|bianco|alba)/i, "Beyaz"],
    [/(gri|grey|gray|silver|argent|argentium)/i, "Gri"],
    [/(bej|beige|crema|sand|ecru)/i, "Bej"],
    [/(kahverengi|brown|marron|moro|chocolate)/i, "Kahverengi"],
    [/(mavi|blue|ocean|azure|sky)/i, "Mavi"],
    [/(yesil|yeşil|green|emerald|verde)/i, "Yeşil"],
    [/(kirmizi|kırmızı|rosso|red)/i, "Kırmızı"],
    [/(mor|purple|violet|viola)/i, "Mor"],
    [/(altin|altın|gold|oro)/i, "Altın"],
    [/(turuncu|orange|amber)/i, "Turuncu"]
  ];

  const normalized = input.toLowerCase();
  for (const [pattern, label] of patterns) {
    if (pattern.test(normalized)) {
      return label;
    }
  }

  return "";
};

const normalizeColorLabel = (value: string) => {
  if (!value) return "";
  const normalized = value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, " / ")
    .toLocaleLowerCase("tr-TR");
  return normalized
    .split(" ")
    .map((part) =>
      part === "/" ? part : part.charAt(0).toLocaleUpperCase("tr-TR") + part.slice(1)
    )
    .join(" ");
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const parseCollectionList = (raw: string): CollectionItem[] => {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("#"));

  const entries = lines.slice(1);

  return entries
    .map((line, index) => {
      const parts = line.split("|").map((part) => part.trim());
      const brand = parts[0] ?? "";
      const name = parts[1] ?? "";
      let color = "";
      let image = "";
      let desc = "";

      if (!brand || !name) {
        return null;
      }

      if (parts.length >= 5 || (parts.length >= 4 && !isImageUrl(parts[2]) && isImageUrl(parts[3]))) {
        color = parts[2] ?? "";
        image = parts[3] ?? "";
        desc = parts.slice(4).join(" | ").trim();
      } else {
        image = parts[2] ?? "";
        desc = parts.slice(3).join(" | ").trim();
      }

      const resolvedColor = normalizeColorLabel(color) || extractColor(`${name} ${desc}`);
      const id = `${slugify(brand)}-${slugify(name)}-${index + 1}`;
      return {
        id,
        name: name.trim(),
        brand: brand.trim(),
        color: resolvedColor,
        image: image || FALLBACK_IMAGE,
        desc
      };
    })
    .filter(Boolean) as CollectionItem[];
};

const getCollectionItems = async () => {
  try {
    const raw = await fs.readFile(COLLECTION_LIST_PATH, "utf8");
    return parseCollectionList(raw);
  } catch (error) {
    console.warn("collection-list.txt okunamadı.", error);
    return [];
  }
};

export default async function KoleksiyonPage() {
  const collectionItems = await getCollectionItems();

  return (
    <main className="min-h-screen bg-stone text-white pt-12 pb-20">
      <Navbar />

      <section className="py-16 bg-black">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
              <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7e7b3] via-gold to-[#b5811d] tracking-[0.3em] text-xs uppercase font-bold"
                    style={{
                      textShadow:
                        "0 0 10px rgba(212,175,55,0.35), 0 0 22px rgba(212,175,55,0.2)"
                    }}
                  >
                    Premium Doğal Taş
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-white">
                  Doğanın <br />
                  <span className="relative inline-block">
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "url('https://cdn.midjourney.com/910d24ea-e3d0-429d-940b-2038034cd73f/0_1.png')",
                        backgroundSize: "200%",
                        backgroundPosition: "center"
                      }}
                    >
                      Sanata
                    </span>
                  </span>
                  <br />
                  Dönüştüğü Yer.
                </h1>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6">
                  Milyonlarca yıllık jeolojik mirası, modern mimarinin
                  zarafetiyle buluşturuyoruz. Yaşam alanlarınız için{" "}
                  <span className="text-white font-semibold">
                    sonsuzluk kadar dayanıklı
                  </span>
                  , sanat kadar eşsiz çözümler.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a
                    href="#koleksiyon-grid"
                    className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold text-gold font-bold uppercase tracking-[0.2em] text-xs overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-15px_rgba(212,175,55,0.6)]"
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                      Koleksiyonu Keşfet
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 12h14M13 5l6 7-6 7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
                  </a>

                  <button className="group relative inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white uppercase tracking-[0.2em] text-xs overflow-hidden transition-all duration-300 hover:border-gold/60 hover:text-gold hover:-translate-y-0.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                      <svg
                        className="h-3 w-3 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    Tanıtım Filmi
                    <span className="pointer-events-none absolute inset-0 translate-y-[120%] bg-[linear-gradient(180deg,transparent,rgba(212,175,55,0.2),transparent)] transition-transform duration-500 group-hover:translate-y-[-120%]" />
                  </button>
                </div>
              </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 border border-gold/20 rounded-2xl" />
                <div className="relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold rounded-full flex flex-col items-center justify-center text-stone font-bold shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                    <span className="text-xl">25+</span>
                    <span className="text-[9px] uppercase tracking-[0.3em]">
                      Yıl
                    </span>
                  </div>

                  <Image
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                    alt="Özel doğal taş uygulaması"
                    width={900}
                    height={640}
                    className="w-full h-[420px] object-cover grayscale contrast-125"
                    sizes="(max-width: 1200px) 100vw, 40vw"
                  />

                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-3 border-l-4 border-gold max-w-[200px]">
                    <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-1">
                      Öne Çıkan
                    </h4>
                    <p className="text-white font-serif text-lg">
                      Calacatta Viola
                    </p>
                    <div className="flex gap-1 mt-1 text-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                          key={index}
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 8.9l7.2-.6L12 1.8l2.8 6.5 7.2.6-5.4 5 1.6 7.1z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollectionGridSection items={collectionItems} />

      <StoneGuideSection />

      <TrendVisionSection />

      {/*
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                Taş Uzmanı
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Yapay Zeka Destekli Danışman
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Sağ alt köşedeki akıllı asistanımız, kullanım alışkanlıklarınıza
                göre en doğru yüzeyi önerir. Malzeme seçimi, bakım ve dayanım
                konularında hızlı yanıt alabilirsiniz.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                Örnek Diyalog
              </p>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                  Limonu çok kullanırım, tezgahım bozulur mu?
                </div>
                <div className="rounded-2xl bg-gold/20 p-4 text-gray-100">
                  Limon asidik olduğu için mermer yüzeylerde matlaşma
                  yapabilir. Sizin için asitlere tam dirençli Porselen veya
                  Kuvars tezgahlarımızı öneririm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <CollectionContactSection />

      <StoneAssistant />
    </main>
  );
}
