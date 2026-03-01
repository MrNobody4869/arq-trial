import Link from "next/link";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section-padding text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white mb-4">
          Writer & Content Creator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Crafting clear, compelling copy that connects with your audience and
          drives results.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white dark:bg-slate-900/50">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Featured Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Client projects and sample showcases
            </p>
          </div>
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline hidden sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline sm:hidden mt-6 inline-block"
        >
          View all projects →
        </Link>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Recent Blog */}
      <section className="section-padding">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Latest Articles
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Thoughts on copy, content, and strategy
            </p>
          </div>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline hidden sm:block"
          >
            Read all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <Link
          href="/blog"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline sm:hidden mt-6 inline-block"
        >
          Read all articles →
        </Link>
      </section>
    </>
  );
}
