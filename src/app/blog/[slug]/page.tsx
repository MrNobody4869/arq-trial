import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/data/blog";
import { BlogContent } from "@/components/BlogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="mb-12 inline-block font-bold uppercase tracking-widest text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
      >
        ← BACK TO BLOG
      </Link>

      <header className="mb-12">
        <span className="font-mono text-sm text-[var(--muted)]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime} min read · {post.category}
        </span>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-xl text-[var(--muted)]">By {post.author}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-black px-3 py-1 text-sm font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {post.image && (
        <div className="mb-12 aspect-video border-4 border-black bg-[var(--accent-secondary)]" />
      )}

      <BlogContent content={post.content} />

      <div className="mt-16">
        <Link
          href="/blog"
          className="inline-block border-4 border-black bg-black px-8 py-4 font-bold text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-accent"
        >
          ← ALL POSTS
        </Link>
      </div>
    </article>
  );
}
