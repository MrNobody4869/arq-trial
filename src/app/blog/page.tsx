import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          Blog
        </p>
        <h1 className="text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          Articles & Thoughts
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Writing about development, design, and the journey of building things.
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group border-b border-[var(--card-border)] pb-8 last:border-0"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <time
                dateTime={post.date}
                className="text-sm text-[var(--muted)]"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                {post.title}
              </h2>
              <p className="mt-2 text-[var(--muted)]">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[var(--card-bg)] px-2 py-1 text-xs font-medium text-[var(--muted)]"
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
