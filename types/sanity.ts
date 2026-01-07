import type { Image } from "sanity";

export type SanitySlug = {
  current: string;
};

export type Product = {
  _id: string;
  title: string;
  slug: SanitySlug;
  type: string;
  color: string;
  surface: string;
  isStock: boolean;
  mainImage: Image | string;
  description?: string;
  gallery?: Array<Image | string>;
  technicalSpecs?: TechnicalSpecs;
};

export type SanityProduct = Product;

export type Project = {
  _id: string;
  title: string;
  slug: SanitySlug;
  category: string;
  location: string;
  year: string;
  mainImage: Image | string;
  images: Array<Image | string>;
  stonesUsed: string[];
  description: string;
  challenge: string;
  solution: string;
};

export type TechnicalSpecs = {
  origin: string;
  density: string;
  waterAbsorption: string;
  flexuralStrength: string;
  abrasionResistance: string;
};

export interface HeroSection {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: Image;
  backgroundVideoUrl?: string;
}

export interface HomePageData {
  _id: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    leftSide: HeroSection;
    rightSide: HeroSection;
  };
}
