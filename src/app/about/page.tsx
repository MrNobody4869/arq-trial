import Image from "next/image";
import Link from "next/link";
import { author } from "@/lib/data";

export const metadata = {
  title: "About | Elena Markov",
  description: author.bio,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About
        </h1>
      </header>

      <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
        <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[3/4]">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 300px"
            priority
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold text-white">
            {author.name}
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed">{author.bio}</p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            I write at the intersection of memoir and essay, exploring how memory
            shapes identity, how place shapes story, and how the act of writing
            itself can be a form of inquiry. My work has been published in literary
            journals including The Kenyon Review, The Georgia Review, and Creative
            Nonfiction, and has been anthologized in Best American Essays.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            I hold an MFA in creative writing and have taught at the university
            level. When I&apos;m not writing, you might find me walking, reading,
            or tending to a garden that never quite behaves.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-[var(--accent-muted)] transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
