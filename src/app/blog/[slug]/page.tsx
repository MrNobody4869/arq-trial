import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/data/blog"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article className="py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm text-corporate-blue dark:text-corporate-accent hover:underline mb-6 inline-block"
        >
          ← Back to Blog
        </Link>
        <span className="text-xs font-medium text-corporate-blue dark:text-corporate-accent uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          {post.title}
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {post.date} · {post.author}
        </p>
        <div className="mt-8 prose prose-slate dark:prose-invert max-w-none">
          {post.content.trim().split("\n\n").map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">
                  {para.replace("## ", "")}
                </h2>
              )
            }
            if (para.startsWith("##")) {
              return (
                <h2 key={i} className="text-xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">
                  {para.replace(/^#+\s*/, "")}
                </h2>
              )
            }
            return (
              <p key={i} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                {para}
              </p>
            )
          })}
        </div>
      </div>
    </article>
  )
}
