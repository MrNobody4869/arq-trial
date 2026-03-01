import { Suspense } from "react";
import { BlogPostList } from "@/components/BlogPostList";

export const metadata = {
  title: "Blog | Elena Markov",
  description: "Essays on craft, memory, place, and the writing life.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
          Essays on craft, memory, place, and the writing life.
        </p>
      </header>
      <Suspense fallback={<div className="animate-pulse text-zinc-500">Loading...</div>}>
        <BlogPostList />
      </Suspense>
    </div>
  );
}
