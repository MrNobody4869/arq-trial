import Link from "next/link";
import { projects } from "@/lib/projects-data";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--card-border)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Welcome
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
            I build digital experiences that people love to use.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Developer and writer with a passion for clean code, thoughtful
            design, and creating tools that make a difference.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)]"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-[var(--card-border)] px-6 py-3 text-sm font-medium transition hover:bg-[var(--card-bg)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[var(--foreground)]">
              Featured Projects
            </h2>
            <p className="mt-2 text-[var(--muted)]">
              A selection of recent work
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-[var(--accent)] hover:underline md:block"
          >
            Read the blog →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] transition hover:border-[var(--accent)]/50"
            >
              <div className="flex h-48 items-center justify-center bg-[var(--background)]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--accent)]/10 text-4xl transition group-hover:scale-110">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--background)] px-2 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
