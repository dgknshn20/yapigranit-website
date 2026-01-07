import Navbar from "@/components/layout/Navbar";
import SplitHero from "@/components/home/SplitHero";
import { mockHomePageData, sanityClient } from "@/lib/sanity/client";
import { homePageQuery } from "@/lib/sanity/queries";
import type { HomePageData } from "@/types/sanity";

const hasSanityConfig = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

async function fetchHomePageData(): Promise<HomePageData> {
  if (!hasSanityConfig) {
    return mockHomePageData;
  }

  try {
    const data = await sanityClient.fetch<HomePageData>(homePageQuery);
    return data ?? mockHomePageData;
  } catch (error) {
    console.warn("Sanity fetch failed, using mock data.", error);
    return mockHomePageData;
  }
}

export default async function Home() {
  const homePageData = await fetchHomePageData();

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <SplitHero hero={homePageData.hero} />
    </main>
  );
}
