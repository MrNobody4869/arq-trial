import Image from "next/image";
import Link from "next/link";
import { author } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About the Writer
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed">{author.bio}</p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            I believe in the power of the particular—that the most universal stories
            often emerge from the most specific details. My work has been anthologized
            and recognized for its lyrical precision and emotional depth.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-muted)] transition-colors"
          >
            Read full bio
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
