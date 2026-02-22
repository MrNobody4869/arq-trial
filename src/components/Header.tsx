"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-colors hover:text-[var(--accent)]"
        >
          PORTFOLIO
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href === "/" && pathname === "/") ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent)] ${
                  isActive ? "text-[var(--accent)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
