"use client";

import { useState, useMemo } from "react";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!activeCategory) return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white mb-2">
          Project Portfolio
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Client work samples and project descriptions across copywriting, content
          strategy, brand voice, and more.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-blue-600 text-white"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          All
        </button>
        {projectCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="space-y-4">
            <ProjectCard project={project} />
            <details className="group border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/50">
              <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-slate-700 dark:text-slate-300">
                Full description
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
