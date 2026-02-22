"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border-4 border-black bg-white p-6 shadow-brutal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border-2 border-black bg-[var(--accent)] text-lg font-bold transition-transform hover:scale-105"
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="mb-6 aspect-video border-4 border-black bg-[var(--accent-secondary)]" />
        <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
        <p className="mb-4 text-[var(--muted)]">{project.tagline}</p>
        <p className="mb-6 text-sm">{project.description.slice(0, 150)}...</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-black bg-white px-2 py-1 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-block border-4 border-black bg-black px-6 py-3 font-bold text-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-accent"
        >
          VIEW CASE STUDY →
        </Link>
      </div>
    </div>
  );
}
