import Link from "next/link";

const socialLinks = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent-light transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
