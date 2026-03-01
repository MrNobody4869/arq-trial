import Link from "next/link"
import type { Project } from "@/data/projects"

const placeholderColors: Record<string, string> = {
  copywriting: "from-slate-600 to-slate-800",
  content: "from-blue-700 to-blue-900",
  editorial: "from-emerald-700 to-emerald-900",
  marketing: "from-violet-700 to-violet-900",
  social: "from-amber-600 to-amber-800",
}

export function ProjectCard({ project }: { project: Project }) {
  const gradient = placeholderColors[project.category] || "from-slate-600 to-slate-800"

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="group block rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800/50 hover:border-corporate-blue/50 dark:hover:border-corporate-accent/50 transition-all hover:shadow-lg"
    >
      <div className="aspect-video relative bg-gradient-to-br overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 flex items-center justify-center`}>
          <span className="text-white/80 text-4xl font-serif font-bold">{project.client[0]}</span>
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-corporate-blue dark:text-corporate-accent uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-corporate-blue dark:group-hover:text-corporate-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {project.description}
        </p>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">{project.client} · {project.year}</p>
      </div>
    </Link>
  )
}
