"use client";

import { useRouter, useSearchParams } from "next/navigation";

const FILTERS = {
  type: ["Mermer", "Granit", "Porselen", "Oniks"],
  color: ["Beyaz", "Siyah", "Gri", "Bej", "Çok Renkli"],
  surface: ["Cilalı", "Honlu", "Kumlamalı", "Mat"]
};

const FILTER_LABELS: Record<string, string> = {
  type: "Taş Türü",
  color: "Renk",
  surface: "Yüzey"
};

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();
    router.push(query ? `/koleksiyon?${query}` : "/koleksiyon");
  };

  const isActive = (key: string, value: string) =>
    searchParams.get(key) === value;

  const hasFilters = Boolean(searchParams.toString());

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-28">
        <div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur">
          <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl" />

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-serif font-bold">Filtrele</h2>
            {hasFilters && (
              <button
                onClick={() => router.push("/koleksiyon")}
                className="text-[10px] uppercase tracking-[0.2em] text-red-300 hover:text-red-200 transition-colors"
              >
                Temizle
              </button>
            )}
          </div>

          <div className="space-y-6">
            {Object.entries(FILTERS).map(([key, options]) => (
              <div key={key}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                  {FILTER_LABELS[key] ?? key}
                </h3>
                <div className="flex flex-col gap-2">
                  {options.map((option) => {
                    const active = isActive(key, option);
                    return (
                      <button
                        key={option}
                        onClick={() => handleFilterChange(key, option)}
                        aria-pressed={active}
                        className={`flex items-center justify-between rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                          active
                            ? "border-gold bg-gold text-stone"
                            : "border-white/10 text-gray-300 hover:border-gold/50 hover:text-white"
                        }`}
                      >
                        <span>{option}</span>
                        <span
                          className={`h-2 w-2 rounded-full ${
                            active ? "bg-stone" : "bg-white/20"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
