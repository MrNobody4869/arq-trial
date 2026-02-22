import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-mono text-sm">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind
          </p>
          <div className="flex gap-8">
            <Link
              href="/"
              className="font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
