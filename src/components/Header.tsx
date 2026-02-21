"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "INICIO" },
  { href: "#sobre-mi", label: "SOBRE MÍ" },
  { href: "#proyectos", label: "PROYECTOS" },
  { href: "#habilidades", label: "HABILIDADES" },
  { href: "#testimonios", label: "TESTIMONIOS" },
  { href: "#contacto", label: "CONTACTO" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur border-b-4 border-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-20">
          <Link
            href="#hero"
            className="font-[family-name:var(--font-archivo)] text-xl font-black hover:text-[#e63946] transition-colors"
          >
            PORTFOLIO
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-space)] text-sm font-bold hover:text-[#e63946] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-12 h-12 border-4 border-black flex flex-col items-center justify-center gap-1.5 bg-white hover:bg-[#e63946] transition-colors"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
            <span className="w-6 h-0.5 bg-black" />
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-4 border-black shadow-[0_8px_0_0_#0a0a0a]">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-[family-name:var(--font-space)] font-bold hover:text-[#e63946] transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
