import type { MetadataRoute } from "next";

import { mockProducts } from "@/lib/sanity/client";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.yapigranit.com";
  const lastModified = new Date();

  const routes = ["", "/kurumsal", "/koleksiyon", "/projeler", "/iletisim"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })
  );

  const products = mockProducts.map((product) => ({
    url: `${baseUrl}/koleksiyon/${product.slug.current}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...routes, ...products];
}
