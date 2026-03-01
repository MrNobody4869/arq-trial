import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectCategories } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryLabel =
    projectCategories.find((c) => c.id === project.category)?.label ?? project.category;

  return (
    <article className="group border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
            {categoryLabel}
          </span>
          {project.client && (
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {project.client}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {project.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-500 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
