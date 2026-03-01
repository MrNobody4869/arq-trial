"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost, Category } from "@/lib/api";

interface BlogFeedProps {
  posts: BlogPost[];
  categories: Category[];
}

export function BlogFeed({ posts: initialPosts, categories }: BlogFeedProps) {
  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all"
      ? initialPosts
      : initialPosts.filter(
          (p) => p.category.toLowerCase().replace(/\s/g, "-") === filter
        );

  return (
    <section id="blog" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          Blog
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Thoughts on development and design
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.slug)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat.slug
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Post cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 flex flex-col hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors"
            >
              <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                {post.category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
