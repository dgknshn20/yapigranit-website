"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type XRayScannerProps = {
  baseImage: string;
  xrayImage: string;
  baseLabel?: string;
  xrayLabel?: string;
};

const LENS_RADIUS = 125;

const clampValue = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function XRayScanner({
  baseImage,
  xrayImage,
  baseLabel = "3D BIM MODEL",
  xrayLabel = "POINT CLOUD DATA"
}: XRayScannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const coordXRef = useRef<HTMLSpanElement>(null);
  const coordYRef = useRef<HTMLSpanElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const timeRef = useRef(0);
  const [showHint, setShowHint] = useState(true);

  const updateLens = (x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    container.style.setProperty("--x", `${x}px`);
    container.style.setProperty("--y", `${y}px`);

    if (coordXRef.current) {
      coordXRef.current.textContent = Math.floor(x).toString().padStart(3, "0");
    }
    if (coordYRef.current) {
      coordYRef.current.textContent = Math.floor(y).toString().padStart(3, "0");
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clampValue(clientX - rect.left, 0, rect.width);
    const y = clampValue(clientY - rect.top, 0, rect.height);

    updateLens(x, y);
  };

  const stopAuto = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    animFrameRef.current = null;
  };

  const startAuto = () => {
    const step = () => {
      const container = containerRef.current;
      if (!container || isInteractingRef.current) return;

      const rect = container.getBoundingClientRect();
      timeRef.current += 0.005;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = centerX + Math.sin(timeRef.current) * (rect.width * 0.3);
      const moveY =
        centerY + Math.cos(timeRef.current * 1.5) * (rect.height * 0.2);

      updateLens(moveX, moveY);
      animFrameRef.current = requestAnimationFrame(step);
    };

    stopAuto();
    animFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    updateLens(rect.width / 2, rect.height / 2);
    startAuto();

    return () => {
      stopAuto();
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    isInteractingRef.current = true;
    if (showHint) setShowHint(false);
    handleMove(event.clientX, event.clientY);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    isInteractingRef.current = true;
    if (showHint) setShowHint(false);
    const touch = event.touches[0];
    if (!touch) return;
    event.preventDefault();
    handleMove(touch.clientX, touch.clientY);
  };

  const handleEnter = () => {
    isInteractingRef.current = true;
    stopAuto();
  };

  const handleLeave = () => {
    isInteractingRef.current = false;
    startAuto();
    setShowHint(true);
  };

  const lensDiameter = LENS_RADIUS * 2;

  return (
    <div
      ref={containerRef}
      aria-label="Dijital röleve tarama görünümü"
      className="relative h-[420px] md:h-[500px] w-full overflow-hidden rounded-2xl bg-black/90 border border-gold/20 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(212,175,55,0.2)] cursor-none select-none touch-none"
      style={
        {
          "--x": "50%",
          "--y": "50%"
        } as React.CSSProperties
      }
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMouseMove}
      onTouchCancel={handleLeave}
      onTouchEnd={handleLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleEnter}
    >
      <div className="absolute inset-0">
        <Image
          src={baseImage}
          alt="Dijital röleve öncesi görünümü"
          fill
          className="object-cover brightness-[0.85] saturate-90 contrast-105"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20" />
      </div>

      <div
        className="absolute inset-0"
        style={
          {
            clipPath: `circle(${LENS_RADIUS}px at var(--x) var(--y))`,
            WebkitClipPath: `circle(${LENS_RADIUS}px at var(--x) var(--y))`
          } as React.CSSProperties
        }
      >
        <Image
          src={xrayImage}
          alt="Nokta bulutu tarama görünümü"
          fill
          className="object-cover contrast-150 saturate-0 brightness-110 mix-blend-screen"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_1px_1px,_rgba(212,175,55,0.45)_1px,_transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/35 via-transparent to-transparent mix-blend-screen" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={
          {
            background: `radial-gradient(circle ${LENS_RADIUS}px at var(--x) var(--y), rgba(212, 175, 55, 0.08) 0%, transparent 96%, rgba(212, 175, 55, 0.25) 100%)`,
            maskImage: `radial-gradient(circle ${LENS_RADIUS + 4}px at var(--x) var(--y), transparent ${LENS_RADIUS + 1}px, black ${LENS_RADIUS + 2}px, black ${LENS_RADIUS + 3}px, transparent ${LENS_RADIUS + 4}px)`,
            WebkitMaskImage: `radial-gradient(circle ${LENS_RADIUS + 4}px at var(--x) var(--y), transparent ${LENS_RADIUS + 1}px, black ${LENS_RADIUS + 2}px, black ${LENS_RADIUS + 3}px, transparent ${LENS_RADIUS + 4}px)`
          } as React.CSSProperties
        }
      />

      <div
        className="absolute pointer-events-none"
        style={
          {
            left: "var(--x)",
            top: "var(--y)",
            width: `${lensDiameter}px`,
            height: `${lensDiameter}px`,
            transform: "translate(-50%, -50%)",
            borderRadius: "9999px",
            boxShadow:
              "0 0 28px rgba(212,175,55,0.12), inset 0 0 18px rgba(212,175,55,0.12)",
            animation: "xray-pulse 3.2s infinite"
          } as React.CSSProperties
        }
      >
        <div
          className="absolute left-0 top-0 w-full h-[2px]"
          style={
            {
              background: "rgba(212, 175, 55, 0.8)",
              opacity: 0.4,
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.6)",
              animation: "xray-scan 2.2s infinite linear"
            } as React.CSSProperties
          }
        />
        <span
          className="absolute left-1/2 top-1/2 text-gold text-xl font-light"
          style={
            {
              transform: "translate(-50%, -55%)",
              textShadow: "0 0 6px rgba(212, 175, 55, 0.6)",
              opacity: 0.7
            } as React.CSSProperties
          }
        >
          +
        </span>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded border border-gold/35 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-gold">
          X: <span ref={coordXRef}>000</span> | Y: <span ref={coordYRef}>000</span>{" "}
          | SCAN: ACTIVE
        </div>
      </div>

      <div className="absolute top-6 right-6 bg-white/5 backdrop-blur px-4 py-2 rounded border border-white/20 text-[10px] uppercase tracking-[0.25em] text-white/80 pointer-events-none">
        {baseLabel}
      </div>
      <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur px-4 py-2 rounded border border-gold/25 text-[10px] uppercase tracking-[0.25em] text-gold pointer-events-none">
        ● {xrayLabel}
      </div>

      <div
        className={`absolute left-1/2 top-1/2 pointer-events-none transition-opacity duration-500 ${
          showHint ? "opacity-100 animate-[xray-hint_2s_infinite]" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gold drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      </div>
    </div>
  );
}
