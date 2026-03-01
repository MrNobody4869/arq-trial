export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          About Me
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          A little bit about who I am
        </p>
        <div className="max-w-2xl prose prose-zinc dark:prose-invert">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I&apos;m a software developer with a passion for building modern web
            applications. I enjoy working with React, Next.js, and TypeScript to
            create performant and accessible user experiences.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
            When I&apos;m not coding, I like to write about what I learn and
            share tips with the developer community. Feel free to reach out if
            you&apos;d like to collaborate or just say hello.
          </p>
        </div>
      </div>
    </section>
  );
}
