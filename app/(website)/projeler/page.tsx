import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import { urlFor } from "@/lib/sanity/image";
import { mockProjects } from "@/lib/sanity/client";
import type { Project } from "@/types/sanity";

const fallbackImage =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop";

const getImageUrl = (source: Project["mainImage"]) => {
  if (!source) {
    return fallbackImage;
  }

  if (typeof source === "string") {
    return source;
  }

  return urlFor(source as SanityImageSource).url();
};

export default function ProjectsPage() {
  return (
    <main className="bg-stone min-h-screen text-white pt-32 pb-20">
      <Navbar />

      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
            Referanslar
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">
            İmza Projeler
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mockProjects.map((project) => (
            <Link
              key={project._id}
              href={`/projeler/${project.slug.current}`}
              className="group block"
            >
              <div className="relative h-[400px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <Image
                  src={getImageUrl(project.mainImage)}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-black/50 backdrop-blur-md px-4 py-2 text-xs uppercase tracking-widest border border-white/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-white/10 pb-6 group-hover:border-gold/50 transition-colors">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {project.location} • {project.year}
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="text-xs border border-white/30 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                    İncele
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
