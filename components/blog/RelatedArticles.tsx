"use client";

import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/components/blog/blogPosts";

type RelatedArticlesProps = {
  currentHref?: string;
};

export default function RelatedArticles({ currentHref }: RelatedArticlesProps) {
  const suggestions = blogPosts
    .filter((post) => post.href !== currentHref)
    .slice(0, 3);

  if (suggestions.length === 0) return null;

  return (
    <section className="bg-white/80 border-t border-stone-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-[#5d0e18] text-xs uppercase tracking-[0.3em] font-bold">
          Okuma Önerisi
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mt-3 mb-10">
          Bu yazıyı da okumak isteyebilirsin
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {suggestions.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-gold">
                  {post.category}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-serif text-xl text-stone-900 group-hover:text-[#5d0e18] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  {post.subtitle}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
