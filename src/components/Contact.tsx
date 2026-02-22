export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Send Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 bg-white border-2 border-slate-900 rounded-lg hover:bg-slate-50 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 bg-white border-2 border-slate-900 rounded-lg hover:bg-slate-50 dark:text-slate-100 dark:border-slate-100 dark:hover:bg-slate-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
