import groq from "groq";

export const productsQuery = groq`
  *[_type == "product"] {
    _id,
    title,
    slug,
    type,
    color,
    surface,
    mainImage,
    isStock
  }
`;

export const allProductsQuery = productsQuery;

export const filteredProductsQuery = groq`
  *[_type == "product" &&
    (!defined($type) || type == $type) &&
    (!defined($color) || color == $color) &&
    (!defined($surface) || surface == $surface)
  ]{
    _id,
    title,
    slug,
    type,
    color,
    surface,
    mainImage,
    isStock,
    description,
    gallery,
    technicalSpecs
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    type,
    color,
    surface,
    mainImage,
    isStock,
    description,
    gallery,
    technicalSpecs
  }
`;

export const productSlugQuery = productBySlugQuery;

export const projectsQuery = groq`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    location,
    year,
    mainImage,
    images,
    stonesUsed,
    description,
    challenge,
    solution
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    category,
    location,
    year,
    mainImage,
    images,
    stonesUsed,
    description,
    challenge,
    solution
  }
`;

export const projectSlugQuery = projectBySlugQuery;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    _id,
    metadata {
      title,
      description
    },
    hero {
      leftSide {
        title,
        subtitle,
        buttonText,
        buttonLink,
        "backgroundVideoUrl": backgroundVideo.asset->url
      },
      rightSide {
        title,
        subtitle,
        buttonText,
        buttonLink,
        "backgroundVideoUrl": backgroundVideo.asset->url
      }
    }
  }
`;
