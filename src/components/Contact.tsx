"use client";

import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-space)] text-[#e63946] font-bold text-sm tracking-widest">
            CONTACTO
          </span>
          <h2 className="font-[family-name:var(--font-archivo)] text-5xl md:text-6xl font-black mt-2 mb-12">
            HABLEMOS
            <br />
            <span className="text-[#e63946]">DE TU PROYECTO</span>
          </h2>

          {submitted ? (
            <div className="bg-[#e63946] border-4 border-black p-8 shadow-[8px_8px_0_0_#0a0a0a]">
              <p className="font-[family-name:var(--font-archivo)] text-2xl text-white mb-2">
                ¡MENSAJE ENVIADO!
              </p>
              <p className="font-[family-name:var(--font-space)] text-white/90">
                Gracias por tu mensaje. Te responderé lo antes posible.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border-4 border-black p-8 md:p-12 bg-[#f5f5f5] shadow-[12px_12px_0_0_#0a0a0a]"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-[family-name:var(--font-space)] block font-bold mb-2"
                  >
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-black bg-white font-[family-name:var(--font-space)] focus:outline-none focus:ring-0 focus:border-[#e63946] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-[family-name:var(--font-space)] block font-bold mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-black bg-white font-[family-name:var(--font-space)] focus:outline-none focus:ring-0 focus:border-[#e63946] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-[family-name:var(--font-space)] block font-bold mb-2"
                  >
                    MENSAJE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-4 border-black bg-white font-[family-name:var(--font-space)] focus:outline-none focus:ring-0 focus:border-[#e63946] transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-[family-name:var(--font-space)] w-full md:w-auto px-12 py-4 bg-black text-white font-bold border-4 border-black hover:bg-[#e63946] hover:border-[#e63946] disabled:opacity-70 transition-all duration-200 shadow-[6px_6px_0_0_#e63946] hover:shadow-[6px_6px_0_0_#0a0a0a] hover:translate-x-1 hover:translate-y-1"
                >
                  {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 flex flex-wrap gap-6 font-[family-name:var(--font-space)]">
            <a
              href="mailto:hola@portfolio.com"
              className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
            >
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">
                @
              </span>
              hola@portfolio.com
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
            >
              <span className="w-8 h-8 bg-[#e63946] text-white flex items-center justify-center font-bold text-sm">
                in
              </span>
              LinkedIn
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-[#e63946] transition-colors"
            >
              <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-sm">
                GH
              </span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
