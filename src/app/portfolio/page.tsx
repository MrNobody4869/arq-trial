import { ProjectGallery } from "@/components/ProjectGallery"

export default function PortfolioPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Portfolio
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          A selection of client work including copywriting, content creation, editorial projects, and marketing campaigns.
        </p>
      </div>
      <ProjectGallery />
    </div>
  )
}
