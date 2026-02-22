export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          About Me
        </p>
        <h1 className="text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          Building at the intersection of code and design
        </h1>
      </div>

      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-[var(--accent)]/20">
            <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-[var(--accent)]/40">
              AC
            </div>
          </div>
          <div className="mt-6 space-y-2 text-center md:text-left">
            <p className="font-semibold text-[var(--foreground)]">Alex Chen</p>
            <p className="text-sm text-[var(--muted)]">
              Developer & Writer
            </p>
          </div>
        </div>

        <div className="space-y-6 text-[var(--foreground)]">
          <p className="leading-relaxed text-[var(--muted)]">
            I&apos;ve spent the last decade turning ideas into digital reality.
            What started as curiosity about how websites work evolved into a
            career building products that millions of people use every day.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            These days I focus on full-stack development with a particular
            interest in developer experience. I believe the best software is
            invisible—it gets out of the way and lets people do what they
            came to do.
          </p>
          <p className="leading-relaxed text-[var(--muted)]">
            When I&apos;m not coding, you&apos;ll find me writing about
            technology, exploring the outdoors, or experimenting in the
            kitchen. I&apos;m always open to interesting conversations and
            new opportunities.
          </p>

          <div className="pt-8">
            <h3 className="mb-4 font-semibold text-[var(--foreground)]">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "Git",
                "Figma",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[var(--card-border)] px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
