export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          ABOUT
        </h1>
      </header>

      <div className="space-y-8 text-lg leading-relaxed">
        <p>
          I&apos;m a designer and developer based somewhere with good coffee. I build
          things for the web—brands, interfaces, and the occasional experiment.
        </p>
        <p>
          My approach is pragmatic: start with the problem, understand the
          constraints, then design the solution. I&apos;m drawn to clarity and
          craft—whether that&apos;s a sharp brand identity or a well-structured
          codebase.
        </p>
        <p>
          This site is built with Next.js and Tailwind, designed with a
          neo-brutalist sensibility. Black, white, and a pop of color. No
          gradients, no fluff.
        </p>
      </div>

      <div className="mt-16 border-4 border-black bg-[var(--accent-secondary)] p-8">
        <h2 className="mb-4 text-xl font-bold">GET IN TOUCH</h2>
        <p className="text-[var(--muted)]">
          hello@portfolio.dev · Twitter · LinkedIn
        </p>
      </div>
    </div>
  );
}
