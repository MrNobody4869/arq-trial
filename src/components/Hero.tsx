export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="animate-fade-in mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          Lumina Foundation
        </p>

        <h1 className="animate-fade-up font-serif text-5xl font-light leading-[1.15] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Empowering lives
          <br />
          <span className="italic text-accent">with purpose</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-muted [animation-delay:200ms] sm:text-lg">
          We believe in a world where every individual has the opportunity to
          thrive. Through education, healthcare, and sustainable development, we
          are building brighter futures.
        </p>

        <div className="animate-fade-up mt-12 flex flex-col items-center gap-4 [animation-delay:400ms] sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-transparent hover:text-foreground"
          >
            Our Mission
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#donate"
            className="inline-flex items-center gap-3 border border-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-white"
          >
            Make a Difference
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-5 w-5 text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
