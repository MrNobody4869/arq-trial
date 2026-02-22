import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
          Latest from the Blog
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-900 shadow-sm"
            >
              <time
                dateTime={post.frontmatter.date}
                className="text-sm text-slate-500 dark:text-slate-400"
              >
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-2 mb-2">
                {post.frontmatter.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {post.frontmatter.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
