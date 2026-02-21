export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-[family-name:var(--font-archivo)] text-2xl font-black">
            PORTFOLIO
          </p>
          <div className="flex gap-8 font-[family-name:var(--font-space)] text-sm">
            <a href="#proyectos" className="hover:text-[#e63946] transition-colors">
              Proyectos
            </a>
            <a href="#contacto" className="hover:text-[#e63946] transition-colors">
              Contacto
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t-2 border-white/20 text-center font-[family-name:var(--font-space)] text-sm text-white/70">
          <p>© {new Date().getFullYear()} Portfolio. Diseño Neo-Brutalista.</p>
        </div>
      </div>
    </footer>
  );
}
