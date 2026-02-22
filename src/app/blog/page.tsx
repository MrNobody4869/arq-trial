import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
          BLOG
        </h1>
        <p className="max-w-xl text-lg text-[var(--muted)]">
          Thoughts on design, development, and the craft of building things.
        </p>
      </header>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group border-4 border-black bg-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
          >
            <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
              <span className="font-mono text-sm text-[var(--muted)]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readTime} min read
              </span>
              <h2 className="mt-2 text-2xl font-bold group-hover:text-[var(--accent)]">
                {post.title}
              </h2>
              <p className="mt-4 text-[var(--muted)]">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-black px-2 py-0.5 text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
