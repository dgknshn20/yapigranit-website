export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
        <p>YAPIGRANİT (c) {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@yapigranit.com"
            className="transition-colors hover:text-neutral-900"
          >
            info@yapigranit.com
          </a>
          <a
            href="tel:+902583722250"
            className="transition-colors hover:text-neutral-900"
          >
            0 258 372 22 50
          </a>
        </div>
      </div>
    </footer>
  );
}
