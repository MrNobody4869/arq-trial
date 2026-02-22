"use client";

import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onPreview?: (project: Project) => void;
}

export function ProjectCard({ project, onPreview }: ProjectCardProps) {
  return (
    <article className="group relative border-4 border-black bg-white transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="aspect-[4/3] border-b-4 border-black bg-[var(--accent-secondary)] transition-colors group-hover:bg-[var(--accent)]" />
        <div className="p-5">
          <span className="font-mono text-xs text-[var(--muted)]">
            {project.year} · {project.category}
          </span>
          <h2 className="mt-1 text-xl font-bold group-hover:text-[var(--accent)]">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="border-2 border-black px-2 py-0.5 text-xs font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      {onPreview && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onPreview(project);
          }}
          className="absolute right-4 top-4 hidden border-2 border-black bg-white px-3 py-1 text-xs font-bold opacity-0 transition-opacity group-hover:opacity-100"
        >
          PREVIEW
        </button>
      )}
    </article>
  );
}
