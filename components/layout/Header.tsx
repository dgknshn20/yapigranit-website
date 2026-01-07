import Link from "next/link";

const navItems = [
  { href: "/kurumsal", label: "Hakkımızda" },
  { href: "/koleksiyon", label: "Koleksiyon" },
  { href: "/projeler", label: "Biz kimiz?" },
  { href: "/iletisim", label: "İletişim" }
];

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          YAPIGRANİT
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/iletisim"
          className="rounded-full border border-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          Teklif
        </Link>
      </div>
    </header>
  );
}
