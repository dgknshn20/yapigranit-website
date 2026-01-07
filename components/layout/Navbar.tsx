"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 flex w-full items-center justify-between p-6 pointer-events-none bg-black/50 backdrop-blur">
      <div className="pointer-events-auto">
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-widest text-white border-b-2 border-white/20 pb-1 hover:border-gold transition-colors duration-300"
        >
          YAPIGRANİT
        </Link>
      </div>

      <div className="hidden space-x-8 text-sm font-sans tracking-wide pointer-events-auto md:flex">
        <Link href="/kurumsal" className="hover:text-gold transition-colors relative group">
          Kurumsal
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
        </Link>
        <Link href="/koleksiyon" className="hover:text-gold transition-colors relative group">
          Bireysel
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
        </Link>
        <Link href="/koleksiyon#trend-vision" className="hover:text-gold transition-colors relative group">
          Blog &amp; Vizyon
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
        </Link>
        <Link href="/projeler" className="hover:text-gold transition-colors relative group">
          Biz kimiz?
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
        </Link>
        <Link href="/iletisim" className="hover:text-gold transition-colors relative group">
          İletişim
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all group-hover:w-full" />
        </Link>
      </div>

      <div className="text-2xl cursor-pointer pointer-events-auto hover:text-gold transition-colors md:hidden">
        &#9776;
      </div>
    </nav>
  );
}
