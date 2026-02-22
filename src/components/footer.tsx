import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--card-border)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
