import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-900 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {project.frontmatter.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {project.frontmatter.description}
              </p>
              {project.frontmatter.tags && project.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
