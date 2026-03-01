import Link from "next/link"

const footerLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-semibold text-slate-900 dark:text-white">
              Writer Portfolio
            </Link>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Professional content creation and copywriting services
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-corporate-blue dark:hover:text-corporate-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Writer Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
