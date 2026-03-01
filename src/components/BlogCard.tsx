import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
      <Link href={`/blog/${post.slug}`} className="block p-6">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {post.category} · {formattedDate}
        </span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
