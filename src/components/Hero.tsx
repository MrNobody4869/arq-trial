import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Writer & Essayist
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Words that linger,{" "}
            <span className="text-[var(--accent)]">stories that stay</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Essays on craft, memory, place, and the writing life. Exploring the
            intersections of narrative, identity, and the landscapes we carry with us.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-[var(--accent-muted)] transition-colors"
            >
              Read the Blog
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-lg border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
