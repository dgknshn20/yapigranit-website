"use client";

import Image from "next/image";
import { useState } from "react";

type Hotspot = {
  id: string;
  title: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
  image?: string;
};

const hotspots: Hotspot[] = [
  {
    id: "ankraj",
    title: "Paslanmaz Ankraj",
    description:
      "304/316 kalite L-braket. Yükü doğrudan betonarme kirişe aktarır.",
    position: { top: "35%", left: "45%" },
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "pim",
    title: "Pim Sistemi",
    description:
      "Taşın hem altından hem üstünden giren paslanmaz pimler, deprem anında taşı güvenle sabitler.",
    position: { top: "45%", left: "65%" }
  },
  {
    id: "yalitim",
    title: "Taş Yünü Yalıtım",
    description:
      "Bina yüzeyine uygulanan, yanmaz A1 sınıfı ısı ve ses yalıtım katmanı.",
    position: { top: "40%", left: "25%" }
  },
  {
    id: "hava",
    title: "Hava Sirkülasyonu",
    description: "Baca etkisi ile sürekli hava akışı sağlar, nemi kurutur.",
    position: { top: "60%", left: "35%" }
  }
];

export default function FacadeBlueprint() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hasHighlight = Boolean(activeId || hoveredId);

  const handleToggle = (id: string) => (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveId((current) => (current === id ? null : id));
  };

  const handleEnter = (id: string) => () => {
    setHoveredId(id);
  };

  const handleLeave = () => {
    setHoveredId(null);
  };

  return (
    <div
      className="relative h-[520px] rounded-2xl border border-white/10 overflow-hidden bg-black/60 shadow-2xl"
      onClick={() => setActiveId(null)}
      role="presentation"
    >
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
        alt="Cephe sistemleri teknik kesiti"
        fill
        className={`object-cover transition-all duration-500 ease-out ${
          hasHighlight ? "grayscale blur-[2px]" : ""
        }`}
        sizes="(max-width: 1024px) 100vw, 70vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/20 to-black/80" />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(212, 175, 55, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />
      <div className="absolute inset-0 border border-gold/20 m-6 rounded-xl pointer-events-none" />
      <div className="absolute top-8 left-8 bg-black/70 backdrop-blur px-3 py-1 rounded border border-gold/30 text-[10px] uppercase tracking-[0.25em] text-gold">
        Detay Kesit A-A
      </div>
      <div className="absolute bottom-8 right-8 text-gold/60 text-xs uppercase tracking-[0.3em]">
        Ölçek 1:20
      </div>

      {hotspots.map((hotspot) => {
        const isOpen = activeId === hotspot.id || hoveredId === hotspot.id;
        return (
          <div
            key={hotspot.id}
            className="absolute group"
            style={hotspot.position}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={hotspot.title}
              className="relative h-6 w-6 rounded-full border border-gold bg-gold/20 shadow-[0_0_18px_rgba(212,175,55,0.45)]"
              onClick={handleToggle(hotspot.id)}
              onMouseEnter={handleEnter(hotspot.id)}
              onMouseLeave={handleLeave}
              onFocus={handleEnter(hotspot.id)}
              onBlur={handleLeave}
            >
              <span className="absolute inset-0 rounded-full animate-ping border border-gold/70" />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
            </button>

            <div
              className={`pointer-events-none absolute left-1/2 top-0 z-20 w-64 -translate-x-1/2 translate-y-5 opacity-0 scale-95 transition-all duration-500 ease-out ${
                isOpen ? "opacity-100 scale-100 translate-y-0" : ""
              }`}
            >
              <div className="rounded-xl border border-gold/30 bg-black/90 p-4 backdrop-blur shadow-2xl shadow-black/60">
                <h4 className="text-gold font-semibold mb-2 border-b border-gold/30 pb-2">
                  {hotspot.title}
                </h4>
                <p className="text-xs text-gray-300 mb-3">
                  {hotspot.description}
                </p>
                {hotspot.image ? (
                  <div className="relative h-20 w-full overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={hotspot.image}
                      alt={`${hotspot.title} detayı`}
                      fill
                      className="object-cover grayscale"
                      sizes="240px"
                    />
                  </div>
                ) : null}
              </div>
              <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold/30 bg-black/90" />
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-4 py-2 rounded-full border border-gold/30 text-gold text-xs flex items-center gap-2 pointer-events-none animate-bounce">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
        <span>Detayları görmek için altın noktalara yaklaşın</span>
      </div>
    </div>
  );
}
