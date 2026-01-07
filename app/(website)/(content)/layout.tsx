import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-stone">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
      <Footer />
    </div>
  );
}
