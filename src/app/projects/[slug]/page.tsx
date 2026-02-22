import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/"
        className="mb-12 inline-block font-bold uppercase tracking-widest text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
      >
        ← BACK TO WORK
      </Link>

      <header className="mb-12">
        <span className="font-mono text-sm text-[var(--muted)]">
          {project.year} · {project.category}
        </span>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-xl text-[var(--muted)]">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-black bg-white px-3 py-1 text-sm font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Hero image */}
      <div className="mb-16 aspect-video border-4 border-black bg-[var(--accent-secondary)] shadow-brutal-lg" />

      <div className="prose prose-lg max-w-none">
        <section className="mb-16">
          <h2 className="mb-4 border-b-4 border-black pb-2 text-2xl font-bold">
            OVERVIEW
          </h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 border-b-4 border-black pb-2 text-2xl font-bold">
            THE PROBLEM
          </h2>
          <p className="text-lg leading-relaxed">{project.problem}</p>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 border-b-4 border-black pb-2 text-2xl font-bold">
            THE PROCESS
          </h2>
          <div className="space-y-12">
            {project.process.map((step) => (
              <div key={step.step} className="border-l-4 border-[var(--accent)] pl-8">
                <span className="font-mono text-sm text-[var(--muted)]">
                  STEP {step.step}
                </span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-relaxed">{step.content}</p>
                {step.image && (
                  <div className="mt-6 aspect-video border-4 border-black bg-white" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 border-b-4 border-black pb-2 text-2xl font-bold">
            RESULTS
          </h2>
          <ul className="space-y-4">
            {project.results.map((result, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-4 border-black bg-[var(--accent-secondary)] p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-black font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-lg font-medium">{result}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 border-b-4 border-black pb-2 text-2xl font-bold">
            TECH & TOOLS
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="border-2 border-black bg-white px-4 py-2 font-mono text-sm font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-16 flex gap-4">
        <Link
          href="/"
          className="inline-block border-4 border-black bg-black px-8 py-4 font-bold text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent"
        >
          ← VIEW ALL PROJECTS
        </Link>
      </div>
    </article>
  );
}
