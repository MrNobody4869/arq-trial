import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-sm font-medium text-[var(--muted)] transition hover:text-[var(--accent)]"
      >
        ← Back to Blog
      </Link>

      <header className="mb-12">
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
        <h1 className="mt-2 text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-[var(--muted)]">By {post.author}</p>
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
      </header>

      <div className="prose prose-lg max-w-none prose-headings:text-[var(--foreground)] prose-p:text-[var(--muted)] prose-code:text-[var(--accent)] prose-pre:bg-[var(--card-bg)]">
        <div className="whitespace-pre-wrap text-[var(--muted)] leading-relaxed">
          {post.content.split("\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="mt-8 mb-4 text-xl font-bold text-[var(--foreground)]">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="mt-6 mb-3 text-lg font-semibold text-[var(--foreground)]">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="my-2 list-inside list-disc space-y-1">
                  <li>{paragraph.replace("- ", "")}</li>
                </ul>
              );
            }
            if (paragraph.startsWith("```")) return null;
            if (paragraph.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
