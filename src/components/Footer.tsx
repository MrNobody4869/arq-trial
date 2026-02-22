import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/blog"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm"
          >
            Blog
          </Link>
          <a
            href="mailto:hello@example.com"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
