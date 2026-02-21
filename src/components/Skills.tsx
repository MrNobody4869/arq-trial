"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "DESIGN",
    skills: ["Figma", "Adobe XD", "Principle", "Design Systems", "Typography"],
  },
  {
    title: "HERRAMIENTAS",
    skills: ["Git", "Docker", "Vercel", "VS Code", "Storybook"],
  },
];

export default function Skills() {
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
      id="habilidades"
      ref={sectionRef}
      className="py-24 bg-black text-white border-t-4 border-white"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[family-name:var(--font-space)] text-[#e63946] font-bold text-sm tracking-widest">
            STACK
          </span>
          <h2 className="font-[family-name:var(--font-archivo)] text-5xl md:text-6xl font-black mt-2">
            HABILIDADES
            <br />
            <span className="text-[#e63946]">Y TECNOLOGÍAS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white text-black border-4 border-white p-6 shadow-[8px_8px_0_0_#e63946] h-full">
                <h3 className="font-[family-name:var(--font-archivo)] text-xl mb-4 text-[#e63946]">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-[family-name:var(--font-space)] flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#e63946]" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative bar */}
        <div
          className={`mt-16 h-4 bg-[#e63946] border-4 border-white transition-all duration-700 origin-left ${
            isVisible ? "opacity-100 w-full" : "opacity-0 w-0"
          }`}
        />
      </div>
    </section>
  );
}
