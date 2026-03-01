import Link from "next/link"
import { ProjectGallery } from "@/components/ProjectGallery"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { projects } from "@/data/projects"
import { blogPosts } from "@/data/blog"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3)
  const latestPosts = blogPosts.slice(0, 2)

  return (
    <>
      <section className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Writer & Content Creator
          </h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Crafting clear, compelling copy and content for brands that want to connect with their audience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-lg bg-corporate-blue dark:bg-corporate-accent text-white font-medium hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Client Work
              </h2>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                Selected projects and samples
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-corporate-blue dark:text-corporate-accent font-medium hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group block rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800/50 hover:border-corporate-blue/50 dark:hover:border-corporate-accent/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                  <span className="text-white/80 text-4xl font-serif font-bold">{project.client[0]}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-corporate-blue dark:group-hover:text-corporate-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{project.client}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Latest from the Blog
              </h2>
              <p className="mt-1 text-slate-600 dark:text-slate-400">
                Insights on copy, content, and strategy
              </p>
            </div>
            <Link
              href="/blog"
              className="text-corporate-blue dark:text-corporate-accent font-medium hover:underline"
            >
              All articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800/50 hover:border-corporate-blue/50 dark:hover:border-corporate-accent/50 transition-all"
              >
                <span className="text-xs font-medium text-corporate-blue dark:text-corporate-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Ready to work together?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I&apos;d love to hear about your project. Reach out for a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 px-6 py-3 rounded-lg bg-corporate-blue dark:bg-corporate-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  )
}
