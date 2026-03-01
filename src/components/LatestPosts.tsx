import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

const latestPosts = blogPosts.slice(0, 3);

export function LatestPosts() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Latest from the Blog
        </h2>
        <Link
          href="/blog"
          className="hidden text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-muted)] transition-colors sm:block"
        >
          All posts →
        </Link>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700"
          >
            <Link href={`/blog/${post.slug}`} className="block flex-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  {post.category}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-zinc-400 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500">
                  <span>{post.publishedAt}</span>
                  <span>·</span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-muted)] transition-colors"
        >
          All posts →
        </Link>
      </div>
    </section>
  );
}
