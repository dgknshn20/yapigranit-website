"use client";

import Image from "next/image";
import { useState, type ChangeEvent } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
  className?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPosition = 55,
  className
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(event.target.value));
  };

  return (
    <div className={`relative h-[420px] w-full group ${className ?? ""}`}>
      <div className="absolute inset-0 rounded-3xl border border-gold/30 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
      <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black">
        <div className="absolute inset-0">
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20" />
        </div>

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="relative h-full w-full">
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              className="object-cover saturate-0 contrast-150 brightness-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 opacity-50 mix-blend-screen bg-[radial-gradient(circle_at_1px_1px,_rgba(34,197,94,0.45)_1px,_transparent_0)] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/35 via-cyan-400/10 to-transparent mix-blend-screen" />
          </div>
        </div>

        <div
          className="absolute inset-y-0"
          style={{ left: `${position}%` }}
        >
          <div className="h-full w-[2px] -translate-x-1/2 bg-white/70 shadow-[0_0_18px_rgba(212,175,55,0.6)]" />
        </div>
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="h-10 w-10 rounded-full border border-white/70 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="flex gap-1">
              <span className="block h-4 w-px bg-white/70" />
              <span className="block h-4 w-px bg-white/70" />
            </div>
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
          {afterLabel}
        </div>

        <input
          aria-label="Before and after slider"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          max={100}
          min={0}
          onChange={handleChange}
          step={1}
          type="range"
          value={position}
        />
      </div>
    </div>
  );
}
