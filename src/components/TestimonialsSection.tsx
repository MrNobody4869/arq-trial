import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-slate-100 dark:bg-slate-800/30">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-2">
          Client Testimonials
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          What clients say about working together
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <blockquote
            key={t.id}
            className="p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <p className="text-slate-600 dark:text-slate-300 italic mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer>
              <div className="font-semibold text-slate-900 dark:text-white">
                {t.author}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {t.role}, {t.company}
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
