import Link from "next/link"
import { blogPosts } from "@/data/blog"

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Blog
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
          Thoughts on copywriting, content strategy, and brand voice.
        </p>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:border-corporate-blue/50 dark:hover:border-corporate-accent/50 transition-all"
              >
                <span className="text-xs font-medium text-corporate-blue dark:text-corporate-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
                  {post.date} · {post.author}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
