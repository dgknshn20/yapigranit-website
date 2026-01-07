import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-stone text-white text-center px-6 relative">
      <h1 className="text-9xl font-serif font-bold text-white/10 select-none">
        404
      </h1>
      <div className="absolute">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Taş Yerinde Ağırdır...
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Ancak aradığınız sayfa yerinden oynatılmış veya silinmiş gibi
          görünüyor.
        </p>
        <Link href="/">
          <button className="bg-gold text-stone px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Ana Sayfaya Dön
          </button>
        </Link>
      </div>
    </div>
  );
}
