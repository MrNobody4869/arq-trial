"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  blogPosts,
  getCategories,
  getTags,
  searchPosts,
} from "@/lib/data";

export function BlogPostList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedTag = searchParams.get("tag");

  const [searchQuery, setSearchQuery] = useState("");

  const categories = getCategories();
  const tags = getTags();

  const filteredPosts = useMemo(() => {
    let result = blogPosts;

    if (searchQuery.trim()) {
      result = searchPosts(searchQuery);
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedTag) {
      result = result.filter((p) => p.tags.includes(selectedTag));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSearchQuery("");
    router.push("/blog");
  };

  const toggleCategory = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory === cat) {
      params.delete("category");
    } else {
      params.set("category", cat);
      params.delete("tag");
    }
    router.push(`/blog?${params.toString()}`);
  };

  const toggleTag = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedTag === tag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
      params.delete("category");
    }
    router.push(`/blog?${params.toString()}`);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTag;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="relative flex-1 min-w-0 sm:max-w-md">
          <input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-white placeholder-zinc-500 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-muted)] transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Categories:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-[var(--accent)] text-zinc-950"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 w-full">
          Tags:
        </span>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              selectedTag === tag
                ? "bg-[var(--accent)] text-zinc-950 font-medium"
                : "border border-zinc-700 text-zinc-400 hover:border-zinc-600 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="py-12 text-center text-zinc-500">
          No posts found. Try adjusting your search or filters.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700"
            >
              <Link href={`/blog/${post.slug}`} className="block flex-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                    {post.category}
                  </span>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-zinc-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                    <span>{post.publishedAt}</span>
                    <span>·</span>
                    <span>{post.readTimeMinutes} min read</span>
                    {post.tags.length > 0 && (
                      <>
                        <span>·</span>
                        <span className="text-zinc-600">
                          {post.tags.slice(0, 2).join(", ")}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
