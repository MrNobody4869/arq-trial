"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contacto" },
];

const DUMMY_DATA = {
  hero: {
    headline: "DISEÑADOR & DESARROLLADOR",
    subheadline: "Creando experiencias digitales brutales",
    cta: "VER PROYECTOS",
  },
  about: {
    title: "SOBRE MÍ",
    summary:
      "Soy un diseñador y desarrollador apasionado por la estética neo-brutalista. Creo interfaces que priorizan la funcionalidad sobre la ornamentación, con tipografía audaz, contrastes extremos y formas geométricas puras. Cada proyecto es una exploración de la crudeza como virtud.",
    stats: [
      { value: "5+", label: "Años de experiencia" },
      { value: "42", label: "Proyectos completados" },
      { value: "18", label: "Clientes satisfechos" },
    ],
  },
  projects: [
    {
      id: 1,
      title: "E-COMMERCE BRUTAL",
      description: "Tienda online con diseño neo-brutalista, grid visible y checkout minimalista.",
      tags: ["React", "Next.js", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "PORTFOLIO AGENCY",
      description: "Sitio web para agencia creativa con animaciones y tipografía experimental.",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "#",
    },
    {
      id: 3,
      title: "BLOG MINIMALISTA",
      description: "Plataforma de blog con sistema CMS y diseño tipográfico enfocado.",
      tags: ["Next.js", "MDX", "Vercel"],
      link: "#",
    },
    {
      id: 4,
      title: "DASHBOARD UTILITY",
      description: "Panel de control con métricas y visualización de datos en tiempo real.",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
    {
      id: 5,
      title: "LANDING VENTAS",
      description: "Página de conversión con CTAs agresivos y diseño de alto contraste.",
      tags: ["Next.js", "A/B Testing", "Analytics"],
      link: "#",
    },
    {
      id: 6,
      title: "APP MÓVIL BRUTAL",
      description: "Aplicación móvil con interfaz neo-brutalista y gestos nativos.",
      tags: ["React Native", "Expo", "TypeScript"],
      link: "#",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Figma",
    "PostgreSQL",
    "Vercel",
    "Git",
    "REST APIs",
  ],
};

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative min-h-screen grid-background texture-overlay">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b-4 border-black bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="font-display text-xl font-bold tracking-tight text-black"
          >
            PORTFOLIO
          </a>
          <div className="hidden gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-black hover:text-[#e53935]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 border-2 border-black p-2 md:hidden"
            aria-label="Menú"
          >
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t-2 border-black bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border-2 border-black px-4 py-2 text-sm font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative border-b-4 border-black bg-white py-24 sm:py-32 lg:py-40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="mb-4 h-2 w-16 bg-[#e53935]" />
            <h1 className="font-display text-5xl font-black uppercase leading-none tracking-tight text-black sm:text-7xl lg:text-8xl">
              {DUMMY_DATA.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-xl font-medium text-black/80 sm:text-2xl">
              {DUMMY_DATA.hero.subheadline}
            </p>
            <a
              href="#projects"
              className="mt-10 inline-block border-4 border-black bg-[#e53935] px-8 py-4 font-bold uppercase tracking-wider text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {DUMMY_DATA.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="border-b-4 border-black bg-black py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-12 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            {DUMMY_DATA.about.title}
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {DUMMY_DATA.about.summary}
          </p>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {DUMMY_DATA.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-4 border-white p-6"
              >
                <span className="font-display block text-4xl font-black text-[#e53935]">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-white/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-b-4 border-black bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-16 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            PROYECTOS
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DUMMY_DATA.projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group block border-4 border-black bg-white p-6 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(229,57,53,1)]"
              >
                <div className="mb-4 h-1 w-12 bg-[#e53935]" />
                <h3 className="font-display text-xl font-black uppercase text-black">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-black/70">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black px-2 py-1 text-xs font-bold uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="border-b-4 border-black bg-[#e53935] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-16 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            TECNOLOGÍAS
          </h2>
          <div className="flex flex-wrap gap-4">
            {DUMMY_DATA.skills.map((skill) => (
              <span
                key={skill}
                className="border-4 border-white bg-black px-6 py-3 font-bold uppercase text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-b-4 border-black bg-black py-24 text-white sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display mb-16 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            CONTACTO
          </h2>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg text-white/90">
                ¿Tienes un proyecto en mente? Escríbeme y hagamos algo brutal
                juntos.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="mailto:hola@portfolio.dev"
                  className="inline-block border-2 border-white px-4 py-2 font-semibold hover:bg-white hover:text-black"
                >
                  hola@portfolio.dev
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white px-4 py-2 font-semibold hover:bg-white hover:text-black"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-white px-4 py-2 font-semibold hover:bg-white hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold uppercase">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-white bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  className="w-full border-4 border-white bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold uppercase">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border-4 border-white bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#e53935]"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full border-4 border-[#e53935] bg-[#e53935] px-8 py-4 font-bold uppercase text-white transition-all hover:bg-[#b71c1c] hover:border-[#b71c1c]"
              >
                {submitted ? "¡MENSAJE ENVIADO!" : "ENVIAR MENSAJE"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-black/70">
            © 2025 Neo-Brutalist Portfolio. Hecho con boldness.
          </p>
        </div>
      </footer>
    </div>
  );
}
