import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="section-padding max-w-3xl">
      <Link
        href="/blog"
        className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 inline-block"
      >
        ← Back to Blog
      </Link>
      <header className="mb-8">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {post.category} · {formattedDate}
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white mt-2">
          {post.title}
        </h1>
      </header>
      <div className="prose-custom">
        <p>{post.excerpt}</p>
        <p className="mt-4 text-slate-500 dark:text-slate-400 italic">
          Full article content would be rendered here. This is a placeholder for
          the blog post body.
        </p>
      </div>
    </article>
  );
}
