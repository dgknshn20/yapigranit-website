import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yapigranit.com";
const defaultTitle = "YAPIGRANİT - Doğal Taşın Ustalığı";
const defaultDescription =
  "5 Eksen CNC teknolojisi ve el işçiliğinin buluştuğu nokta. Mermer, granit ve porselen yüzeylerde mühendislik çözümleri.";
const ogImageUrl =
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "YAPIGRANİT",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: defaultTitle
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImageUrl]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-stone text-white font-sans antialiased overflow-x-hidden selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
