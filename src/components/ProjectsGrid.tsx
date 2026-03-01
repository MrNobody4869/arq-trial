import { Project } from "@/lib/api";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section id="projects" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Projects
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12">
          A selection of my recent work
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
                >
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
