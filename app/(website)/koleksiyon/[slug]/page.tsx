import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

import type { SanityImageSource } from "@sanity/image-url";

import Navbar from "@/components/layout/Navbar";
import TechnicalTable from "@/components/product/TechnicalTable";
import { hasSanityConfig, mockProducts, sanityClient } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import { productSlugQuery } from "@/lib/sanity/queries";
import type { Product } from "@/types/sanity";

type PageProps = {
  params: { slug: string };
};

const fallbackImage =
  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000";

const getImageUrl = (source: Product["mainImage"] | undefined) => {
  if (!source) {
    return fallbackImage;
  }

  if (typeof source === "string") {
    return source;
  }

  return urlFor(source as SanityImageSource).url();
};

const getProduct = cache(async (slug: string): Promise<Product | null> => {
  if (hasSanityConfig) {
    try {
      const product = await sanityClient.fetch<Product | null>(
        productSlugQuery,
        { slug }
      );
      if (product) {
        return product;
      }
    } catch (error) {
      console.warn("Sanity product fetch failed, using mock data.", error);
    }
  }

  return mockProducts.find((product) => product.slug.current === slug) ?? null;
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.slug);

  if (!product) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: `${product.title} - ${product.type} | YAPIGRANİT`,
    description:
      product.description?.slice(0, 160) ||
      `${product.title} teknik özellikleri ve plaka görselleri.`
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: getImageUrl(product.mainImage),
    description:
      product.description ??
      `${product.title} teknik özellikleri ve plaka görselleri.`,
    brand: {
      "@type": "Brand",
      name: "Yapıgranit"
    },
    additionalProperty: product.technicalSpecs
      ? [
          {
            "@type": "PropertyValue",
            name: "Yoğunluk",
            value: product.technicalSpecs.density
          },
          {
            "@type": "PropertyValue",
            name: "Menşei",
            value: product.technicalSpecs.origin
          },
          {
            "@type": "PropertyValue",
            name: "Su Emme Oranı",
            value: product.technicalSpecs.waterAbsorption
          }
        ]
      : []
  };

  return (
    <main className="min-h-screen bg-stone text-white pb-20">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={getImageUrl(product.mainImage)}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone via-stone/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                {product.type} Koleksiyonu
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
                {product.title}
              </h1>
              <div className="flex gap-4 text-sm font-medium">
                <span className="px-3 py-1 border border-white/20 rounded-full">
                  {product.surface} Yüzey
                </span>
                <span className="px-3 py-1 border border-white/20 rounded-full">
                  {product.color}
                </span>
              </div>
            </div>

            <div>
              {product.isStock ? (
                <button className="bg-gold text-stone font-bold px-8 py-4 uppercase tracking-widest hover:bg-white transition-colors">
                  Teklif İste
                </button>
              ) : (
                <span className="inline-block px-6 py-3 bg-red-900/50 text-red-200 border border-red-800 uppercase text-xs tracking-wider">
                  Stok Tükendi
                </span>
              )}
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/koleksiyon"
              className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors"
            >
              Koleksiyona Dön
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-serif font-bold mb-6">Taşın Hikayesi</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-12">
            {product.description ||
              "Bu özel taş için henüz detaylı açıklama girilmemiştir."}
          </p>

          {product.gallery && product.gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mt-8">
              {product.gallery.map((image, index) => (
                <div
                  key={`${product.title}-gallery-${index}`}
                  className="relative h-64 bg-gray-800 rounded-lg overflow-hidden"
                >
                  <Image
                    src={getImageUrl(image)}
                    alt={`${product.title} detay ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-8">
            {product.technicalSpecs ? (
              <TechnicalTable specs={product.technicalSpecs} />
            ) : (
              <div className="p-6 border border-white/10 bg-white/5 text-gray-400 italic">
                Teknik veriler hazırlanıyor.
              </div>
            )}

            <div className="p-6 bg-stone border border-gold/30">
              <h4 className="text-gold font-bold mb-2">Mimari Destek</h4>
              <p className="text-sm text-gray-400 mb-4">
                Bu taşın DWG dokularını ve yüksek çözünürlüklü görsellerini
                projenizde kullanmak için indirebilirsiniz.
              </p>
              <button className="text-xs uppercase tracking-widest border-b border-white pb-1 hover:text-gold hover:border-gold transition-colors">
                Dokuları İndir (ZIP)
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
