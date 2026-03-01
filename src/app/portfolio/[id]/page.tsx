import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/data/projects"
import { categories } from "@/data/projects"

const placeholderColors: Record<string, string> = {
  copywriting: "from-slate-600 to-slate-800",
  content: "from-blue-700 to-blue-900",
  editorial: "from-emerald-700 to-emerald-900",
  marketing: "from-violet-700 to-violet-900",
  social: "from-amber-600 to-amber-800",
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  const categoryLabel = categories.find((c) => c.value === project.category)?.label ?? project.category
  const gradient = placeholderColors[project.category] || "from-slate-600 to-slate-800"

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="text-sm text-corporate-blue dark:text-corporate-accent hover:underline mb-6 inline-block"
        >
          ← Back to Portfolio
        </Link>
        <div className={`aspect-video rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-8`}>
          <span className="text-white/80 text-6xl font-serif font-bold">{project.client[0]}</span>
        </div>
        <span className="text-xs font-medium text-corporate-blue dark:text-corporate-accent uppercase tracking-wider">
          {categoryLabel}
        </span>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{project.client} · {project.year}</p>
        <p className="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            Deliverables
          </h3>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
            {project.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
