import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export function PortfolioShowcase() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-950/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Work
          </h2>
          <Link
            href="/portfolio"
            className="hidden text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-muted)] transition-colors sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700"
            >
              <Link href={project.link ?? "#"} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/portfolio"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-muted)] transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
