"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Increíble trabajo. Transformó nuestra visión en una experiencia digital que supera expectativas. El enfoque neo-brutalista es exactamente lo que necesitábamos.",
    author: "María García",
    role: "CEO, StartupXYZ",
    avatar: "MG",
  },
  {
    id: 2,
    quote: "Profesional excepcional. Entiende el equilibrio perfecto entre diseño disruptivo y funcionalidad. Nuestro tráfico aumentó 300% después del rediseño.",
    author: "Carlos Rodríguez",
    role: "Director de Marketing",
    avatar: "CR",
  },
  {
    id: 3,
    quote: "Trabajar con él fue una experiencia refrescante. Ideas audaces, ejecución impecable. Recomiendo sus servicios sin dudarlo.",
    author: "Ana Martínez",
    role: "Fundadora, CreativeCo",
    avatar: "AM",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="py-24 bg-[#f5f5f5] border-t-4 border-b-4 border-black"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[family-name:var(--font-space)] text-[#e63946] font-bold text-sm tracking-widest">
            TESTIMONIOS
          </span>
          <h2 className="font-[family-name:var(--font-archivo)] text-5xl md:text-6xl font-black mt-2">
            LO QUE DICEN
            <br />
            <span className="text-[#e63946]">DE MÍ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white border-4 border-black p-8 h-full shadow-[8px_8px_0_0_#0a0a0a] hover:shadow-[4px_4px_0_0_#0a0a0a] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                <p className="font-[family-name:var(--font-space)] text-lg mb-6 text-black/80 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#e63946] border-4 border-black flex items-center justify-center font-[family-name:var(--font-archivo)] font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-space)] font-bold">
                      {testimonial.author}
                    </p>
                    <p className="font-[family-name:var(--font-space)] text-sm text-black/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
