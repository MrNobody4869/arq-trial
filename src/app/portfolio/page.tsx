import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Portfolio | Elena Markov",
  description: "Featured writing projects, books, and published work.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
          Selected writing projects, books, and published work.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-500">{project.year}</span>
                </div>
                <h2 className="mt-2 font-serif text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
