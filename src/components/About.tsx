"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-24 bg-[#f5f5f5] border-t-4 border-b-4 border-black"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="font-[family-name:var(--font-space)] text-[#e63946] font-bold text-sm tracking-widest">
              SOBRE MÍ
            </span>
            <h2 className="font-[family-name:var(--font-archivo)] text-5xl md:text-6xl font-black mt-2 mb-8">
              CREO COSAS
              <br />
              <span className="text-[#e63946]">QUE IMPORTAN</span>
            </h2>
            <div className="space-y-4 font-[family-name:var(--font-space)] text-lg text-black/80">
              <p>
                Con más de 5 años de experiencia en desarrollo web, combino
                habilidades técnicas con una visión de diseño única.
              </p>
              <p>
                Mi enfoque neo-brutalista rechaza lo convencional. Creo interfaces
                que son directas, honestas y memorables. Sin adornos innecesarios,
                solo impacto puro.
              </p>
              <p>
                Cuando no estoy codificando, busco inspiración en la arquitectura
                brutalista, el arte moderno y la tipografía bold.
              </p>
            </div>
          </div>
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-[#e63946] border-4 border-black p-8 shadow-[12px_12px_0_0_#0a0a0a]">
              <div className="aspect-square bg-white border-4 border-black flex items-center justify-center">
                <span className="font-[family-name:var(--font-archivo)] text-6xl text-[#e63946]">
                  ?
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black border-4 border-black -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
