import type { SanityImageSource } from "@sanity/image-url";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import { urlFor } from "@/lib/sanity/image";
import { mockProjects } from "@/lib/sanity/client";
import type { Project } from "@/types/sanity";

type PageProps = {
  params: { slug: string };
};

async function getProject(slug: string) {
  return mockProjects.find((project) => project.slug.current === slug) ?? null;
}

const fallbackImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop";

const getImageUrl = (source: Project["mainImage"]) => {
  if (!source) {
    return fallbackImage;
  }

  if (typeof source === "string") {
    return source;
  }

  return urlFor(source as SanityImageSource).url();
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject(params.slug);

  if (!project) {
    return { title: "Proje Bulunamadı" };
  }

  return {
    title: `${project.title} | Yapıgranit Referansları`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen pb-20">
      <Navbar />

      <div className="relative h-[60vh] w-full">
        <Image
          src={getImageUrl(project.mainImage)}
          alt={project.title}
          fill
          className="object-cover opacity-80"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 container mx-auto">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {project.category} Projesi
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300">{project.location}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-8">
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
              Yıl
            </h3>
            <p className="text-lg">{project.year}</p>
          </div>
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
              Kullanılan Taşlar
            </h3>
            <ul className="text-lg space-y-1">
              {project.stonesUsed.map((stone) => (
                <li key={stone}>{stone}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
              Hizmetler
            </h3>
            <p className="text-lg text-gray-400">
              Tedarik, Uygulama, Mekanik Montaj
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2 className="text-2xl font-serif font-bold mb-6">Proje Hakkında</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            {project.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold mb-3">
                Zorluk
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold mb-3">
                Çözüm
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold mb-6">Galeri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div
                key={`${project.title}-image-${index}`}
                className="relative h-64 md:h-80 group overflow-hidden"
              >
                <Image
                  src={getImageUrl(image)}
                  alt={`${project.title} detay ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
