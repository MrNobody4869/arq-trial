import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import { MDXContent } from "@/components/MDXContent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.frontmatter.author && (
              <span>by {post.frontmatter.author}</span>
            )}
          </div>
          <div className="prose dark:prose-invert">
            <MDXContent source={post.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
