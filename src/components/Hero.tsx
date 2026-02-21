"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white"
    >
      {/* Decorative shapes */}
      <div
        className={`absolute top-24 right-16 w-32 h-32 bg-[#e63946] border-4 border-black shadow-[6px_6px_0_0_#0a0a0a] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className={`absolute bottom-32 left-20 w-20 h-20 bg-black border-4 border-black transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: "0.4s" }}
      />
      <div
        className={`absolute top-1/3 left-1/4 w-16 h-16 bg-[#e63946] border-4 border-black rotate-45 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ animationDelay: "0.6s" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="font-[family-name:var(--font-space)] text-lg mb-4 border-4 border-black inline-block px-4 py-2 bg-[#e63946] text-white font-bold animate-slide-in-left">
            CREATIVO • DESARROLLADOR • DISEÑADOR
          </p>
          <h1 className="font-[family-name:var(--font-archivo)] text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 animate-slide-up">
            HOLA,
            <br />
            <span className="text-[#e63946]">SOY YO.</span>
          </h1>
          <p className="font-[family-name:var(--font-space)] text-xl md:text-2xl max-w-2xl mb-10 text-black/80 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Desarrollador full-stack con pasión por el diseño brutalista.
            Creo experiencias digitales que impactan.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="#proyectos"
              className="font-[family-name:var(--font-space)] px-8 py-4 bg-black text-white font-bold border-4 border-black hover:bg-[#e63946] hover:border-[#e63946] transition-all duration-200 shadow-[6px_6px_0_0_#e63946] hover:shadow-[6px_6px_0_0_#0a0a0a] hover:translate-x-1 hover:translate-y-1"
            >
              VER PROYECTOS
            </Link>
            <Link
              href="#contacto"
              className="font-[family-name:var(--font-space)] px-8 py-4 bg-white text-black font-bold border-4 border-black hover:bg-black hover:text-white transition-all duration-200 shadow-[6px_6px_0_0_#0a0a0a]"
            >
              CONTACTAR
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-4 border-black rounded-lg flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-black rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
