import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Hi, I&apos;m a Developer & Creator
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          I build web applications, share ideas through writing, and turn ideas
          into reality. Explore my projects and read my latest articles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 bg-white border-2 border-slate-900 rounded-lg hover:bg-slate-50 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-slate-800"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
