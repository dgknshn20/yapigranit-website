"use client";

import Image from "next/image";
import { useState, type ReactElement } from "react";

type IconProps = {
  size?: number;
  className?: string;
};

function IconArrowRight({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m13 5 6 7-6 7" />
    </svg>
  );
}

function IconCheck({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconDroplet({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  );
}

function IconGem({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3 4 9l8 12 8-12-8-6z" />
      <path d="M4 9h16" />
    </svg>
  );
}

function IconInfo({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </svg>
  );
}

function IconShield({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2 19 6v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z" />
    </svg>
  );
}

function IconThermometer({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 14.5a4 4 0 1 1-4-3.9V5a2 2 0 1 1 4 0v5.6" />
      <path d="M12 9v3" />
    </svg>
  );
}

type Material = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: { name: string; value: number; icon: ReactElement }[];
  pros: string[];
  bestFor: string;
  tag: string;
};

const materials: Material[] = [
  {
    id: 0,
    title: "Porselen",
    subtitle: "Teknolojinin Zirvesi",
    description:
      "Yüksek teknoloji ile sıkıştırılmış, ultra dayanıklı yüzeyler.",
    image:
      "/images/porcelen.avif",
    features: [
      { name: "Isı Direnci", value: 100, icon: <IconThermometer /> },
      { name: "Çizilmezlik", value: 95, icon: <IconShield /> },
      { name: "Leke Tutmaz", value: 100, icon: <IconDroplet /> }
    ],
    pros: [
      "Ateşe ve UV ışınlarına tam direnç",
      "Dış mekan kullanımına uygun",
      "İnce ve hafif yapı"
    ],
    bestFor: "Yoğun mutfaklar & Dış mekan",
    tag: "En Dayanıklı"
  },
  {
    id: 1,
    title: "Doğal Taş",
    subtitle: "Doğanın Sanatı",
    description:
      "Milyonlarca yılda oluşan, eşsiz ve tekrarı olmayan plakalar.",
    image:
      "/images/dogaltas.avif",
    features: [
      { name: "Benzersizlik", value: 100, icon: <IconGem /> },
      { name: "Isı Direnci", value: 85, icon: <IconThermometer /> },
      { name: "Doğallık", value: 100, icon: <IconInfo /> }
    ],
    pros: [
      "Her plaka bir sanat eseri",
      "Zamanla değerlenen estetik",
      "Prestijli görünüm"
    ],
    bestFor: "Lüks banyo, şömine, salon",
    tag: "Premium Seçim"
  },
  {
    id: 2,
    title: "Kuvars",
    subtitle: "Pratik ve Estetik",
    description:
      "Doğal kuvars minerallerinin reçine ile güçlendirilmiş hali.",
    image:
      "/images/kuvars.avif",
    features: [
      { name: "Hijyen", value: 100, icon: <IconDroplet /> },
      { name: "Renk Tutarlılığı", value: 90, icon: <IconCheck /> },
      { name: "Esneklik", value: 80, icon: <IconShield /> }
    ],
    pros: [
      "Gözeneksiz hijyenik yüzey",
      "Bakım gerektirmez",
      "Geniş renk seçeneği"
    ],
    bestFor: "Aile mutfağı & Banyo",
    tag: "Bakımı Kolay"
  }
];

export default function StoneGuideSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_20px)]" />
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-gold/10 blur-[160px]" />
        <div className="absolute -bottom-40 right-10 h-72 w-72 rounded-full bg-gold/10 blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 md:w-12 bg-gold/40" />
            <span className="text-gold tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold">
              Rehber
            </span>
            <span className="h-px w-8 md:w-12 bg-gold/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Hangi Taş{" "}
            <span className="text-gold">Sizin İçin</span> Uygun?
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Mutfak ve banyo tezgahlarında doğru seçim için kısa ve net bir
            kıyaslama.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-5 md:gap-6 snap-x snap-mandatory pb-8 md:pb-0 custom-scrollbar">
            {materials.map((material, index) => {
              const isActive = activeCard === index;

              return (
                <div
                  key={material.id}
                  onMouseEnter={() => setActiveCard(index)}
                  onClick={() => setActiveCard(index)}
                  className={`flex-shrink-0 w-[85vw] md:w-auto snap-center relative group cursor-pointer transition-all duration-500 overflow-hidden rounded-2xl border flex flex-col ${
                    isActive
                      ? "border-gold/50 bg-white/5 shadow-[0_0_40px_rgba(212,175,55,0.18)] -translate-y-2"
                      : "border-white/10 bg-black/40 hover:border-white/20"
                  }`}
                >
                  <div className="absolute top-0 right-0 z-20">
                    <div
                      className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-2 ${
                        isActive
                          ? "bg-gold text-stone"
                          : "bg-black/70 text-white/50"
                      }`}
                    >
                      {material.tag}
                    </div>
                  </div>

                  <div className="relative h-48 md:h-56 overflow-hidden border-b border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                    <Image
                      src={material.image}
                      alt={material.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        isActive
                          ? "scale-110 opacity-80"
                          : "scale-100 opacity-50 grayscale"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-5 z-20">
                      <h3
                        className={`text-2xl md:text-3xl font-serif transition-colors ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {material.title}
                      </h3>
                      <p className="text-gold text-xs md:text-sm font-medium tracking-wide mt-1">
                        {material.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                      {material.description}
                    </p>

                    <div className="space-y-3 pt-3 border-t border-white/10 flex-grow">
                      {material.features.map((feature, featureIndex) => (
                        <div key={feature.name}>
                          <div className="flex justify-between items-center mb-2 text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.2em]">
                            <div className="flex items-center gap-2">
                              <span className="text-gold/80">
                                {feature.icon}
                              </span>
                              <span>{feature.name}</span>
                            </div>
                            <span className="text-white/40 font-mono">
                              {feature.value}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                isActive ? "bg-gold" : "bg-white/20"
                              }`}
                              style={{
                                width: `${isActive ? feature.value : 0}%`,
                                transitionDelay: `${featureIndex * 120}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`mt-4 space-y-2 transition-all duration-500 overflow-hidden ${
                        isActive
                          ? "max-h-32 opacity-100"
                          : "max-h-0 opacity-0 md:max-h-32 md:opacity-100"
                      }`}
                    >
                      {material.pros.slice(0, 2).map((pro) => (
                        <div
                          key={pro}
                          className="flex items-start gap-2 text-[11px] md:text-xs text-gray-400"
                        >
                          <span className="mt-1 h-[4px] w-[4px] rounded-full bg-gold" />
                          {pro}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 mt-auto border-t border-white/10 flex items-center justify-between">
                      <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
                        Öneri:{" "}
                        <span className="text-white/70 block truncate max-w-[140px]">
                          {material.bestFor}
                        </span>
                      </div>
                      <button
                        className={`w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gold text-stone border-gold"
                            : "border-white/10 text-white/40 hover:bg-white/10"
                        }`}
                        type="button"
                      >
                        <IconArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-4">
            {materials.map((material) => (
              <span
                key={material.id}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeCard === material.id
                    ? "w-8 bg-gold"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
