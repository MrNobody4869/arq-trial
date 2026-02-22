"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [filter, setFilter] = useState("All");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const availableCategories = ["All", ...new Set(projects.map((p) => p.category))];

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-3 border-b-4 border-black pb-6">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`border-2 border-black px-4 py-2 font-bold transition-all ${
              filter === cat
                ? "bg-[var(--accent)] text-white"
                : "bg-white hover:bg-black hover:text-white"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onPreview={setPreviewProject}
          />
        ))}
      </div>

      {previewProject && (
        <ProjectModal
          project={previewProject}
          onClose={() => setPreviewProject(null)}
        />
      )}
    </>
  );
}
