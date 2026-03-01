import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Hi, I&apos;m a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Developer
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            I build web applications and share insights on development, design,
            and technology. Explore my projects and read the latest blog posts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#projects"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/#blog"
              className="rounded-lg border border-zinc-300 dark:border-zinc-600 px-6 py-3 font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
