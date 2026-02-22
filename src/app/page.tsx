import { projects } from "@/data/projects";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <section className="mb-20">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          SELECTED
          <br />
          <span className="text-[var(--accent)]">WORK</span>
        </h1>
        <p className="max-w-xl text-lg text-[var(--muted)]">
          Design and development projects. Each one a puzzle worth solving.
        </p>
      </section>

      <ProjectsGrid projects={projects} />
    </div>
  );
}
