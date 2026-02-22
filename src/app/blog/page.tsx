import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description: "Articles and updates on web development, technology, and more.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
            Blog
          </h1>
          <div className="space-y-8">
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
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-2 mb-2">
                  {post.frontmatter.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
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
        </div>
      </main>
      <Footer />
    </>
  );
}
