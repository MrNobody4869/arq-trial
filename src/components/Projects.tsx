"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Brutal",
    description: "Tienda online con diseño neo-brutalista. Carrito, checkout y experiencia brutal.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    color: "bg-[#e63946]",
    link: "#",
  },
  {
    id: 2,
    title: "App Dashboard",
    description: "Panel de control minimalista para gestionar métricas y datos en tiempo real.",
    tags: ["React", "TypeScript", "API"],
    color: "bg-black",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Agency",
    description: "Sitio web para agencia creativa con animaciones y diseño bold.",
    tags: ["Framer", "GSAP", "CSS"],
    color: "bg-white",
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Plataforma de blogging con markdown, tags y búsqueda avanzada.",
    tags: ["MDX", "Next.js", "Vercel"],
    color: "bg-[#e63946]",
    link: "#",
  },
  {
    id: 5,
    title: "Music Visualizer",
    description: "Visualizador de audio en tiempo real con Web Audio API.",
    tags: ["Canvas", "Web Audio", "JS"],
    color: "bg-black",
    link: "#",
  },
  {
    id: 6,
    title: "Design System",
    description: "Sistema de diseño completo con componentes reutilizables.",
    tags: ["Storybook", "Tailwind", "React"],
    color: "bg-white",
    link: "#",
  },
];

export default function Projects() {
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
    <section id="proyectos" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[family-name:var(--font-space)] text-[#e63946] font-bold text-sm tracking-widest">
            TRABAJOS
          </span>
          <h2 className="font-[family-name:var(--font-archivo)] text-5xl md:text-6xl font-black mt-2">
            PROYECTOS
            <br />
            <span className="text-[#e63946]">DESTACADOS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className={`group block transition-all duration-700 neo-card-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`${project.color} border-4 border-black p-6 h-full shadow-[8px_8px_0_0_#0a0a0a] group-hover:shadow-[4px_4px_0_0_#0a0a0a] group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200 ${
                  project.color === "bg-white" ? "text-black" : "text-white"
                }`}
              >
                <h3 className="font-[family-name:var(--font-archivo)] text-2xl mb-3">
                  {project.title}
                </h3>
                <p className="font-[family-name:var(--font-space)] text-sm opacity-90 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-[family-name:var(--font-space)] text-xs px-2 py-1 border-2 border-black ${
                        project.color === "bg-white" ? "bg-black text-white" : "bg-white text-black"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
