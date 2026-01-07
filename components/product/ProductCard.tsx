import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/sanity/image";
import type { Product } from "@/types/sanity";

const fallbackImage =
  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000&auto=format&fit=crop";

const getImageUrl = (source: Product["mainImage"]) => {
  if (!source) {
    return fallbackImage;
  }

  if (typeof source === "string") {
    if (source.startsWith("http")) {
      return source;
    }

    return urlFor(source as SanityImageSource).url();
  }

  return urlFor(source as SanityImageSource).url();
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/koleksiyon/${product.slug.current}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-[3/4]">
          <Image
            src={getImageUrl(product.mainImage)}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {!product.isStock && (
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider">
              Stok Tükendi
            </div>
          )}

          {product.isStock && (
            <span
              className="absolute top-4 right-4 h-2 w-2 rounded-full bg-green-500"
              title="Stokta"
            />
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="border border-white/70 text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              İncele
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
              {product.title}
            </h3>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">
              {product.type} • {product.color}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
