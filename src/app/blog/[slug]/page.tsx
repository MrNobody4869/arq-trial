import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/data";

export async function generateStaticParams() {
  const { blogPosts } = await import("@/lib/data");
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Elena Markov`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm font-medium text-zinc-400 hover:text-[var(--accent)] transition-colors"
      >
        <svg
          className="mr-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      <header>
        <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          {post.category}
        </span>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
          <span>{post.publishedAt}</span>
          <span>·</span>
          <span>{post.readTimeMinutes} min read</span>
          <span>·</span>
          <span>{post.author}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="prose prose-invert prose-lg mt-10 max-w-none">
        <div className="whitespace-pre-wrap text-zinc-300 leading-relaxed">
          {post.content}
        </div>
      </div>

      <footer className="mt-12 border-t border-zinc-800 pt-8">
        <p className="text-sm text-zinc-500">
          Thanks for reading. Have thoughts?{" "}
          <Link
            href="/contact"
            className="font-medium text-[var(--accent)] hover:text-[var(--accent-muted)]"
          >
            Get in touch
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
