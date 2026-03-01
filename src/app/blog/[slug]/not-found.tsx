import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="py-16 sm:py-24 text-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
        Post not found
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        The blog post you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link
        href="/#blog"
        className="mt-6 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
