import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";

import { urlFor } from "@/lib/sanity/image";
import type { Product } from "@/types/sanity";

type ProductGalleryProps = {
  images?: Array<Product["mainImage"]>;
};

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

export default function ProductGallery({ images }: ProductGalleryProps) {
  const resolvedImages = images?.length
    ? images
    : [fallbackImage, fallbackImage, fallbackImage];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {resolvedImages.map((image, index) => (
        <div key={`${index}-${String(image)}`} className="relative aspect-square">
          <Image
            src={getImageUrl(image)}
            alt={`Product image ${index + 1}`}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
