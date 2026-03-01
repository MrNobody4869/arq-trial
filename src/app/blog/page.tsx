import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <section className="section-padding">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white mb-2">
          Blog
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Articles on copywriting, content strategy, brand voice, and the craft
          of writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
