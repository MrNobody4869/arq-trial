import { testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          What Clients Say
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
          Trusted by brands and teams who value quality content and professional collaboration.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-800/50"
            >
              <p className="text-slate-700 dark:text-slate-300 font-serif italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
      <footer>
        <p className="font-semibold text-slate-900 dark:text-white">{t.author}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t.role}, {t.company}
        </p>
      </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
