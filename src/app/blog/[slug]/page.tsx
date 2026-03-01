import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/api";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#blog"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>
        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {post.category}
        </span>
        <h1 className="mt-2 text-4xl font-bold text-zinc-900 dark:text-white">
          {post.title}
        </h1>
        <p className="mt-4 text-zinc-500 dark:text-zinc-500">
          {new Date(post.publishedAt).toLocaleDateString()}
          {post.author && ` · ${post.author}`}
        </p>
        <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>
      </div>
    </article>
  );
}
