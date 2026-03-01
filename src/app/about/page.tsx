export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          About
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          Writer and content creator based in [Location]
        </p>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            I help brands tell their stories clearly and compellingly. With years of experience across B2B and B2C, I specialize in copy that connects with audiences and drives results.
          </p>
          <p>
            My work spans blog content, landing pages, email campaigns, editorial guidelines, and social media. I focus on clarity, consistency, and conversion—whether the goal is awareness, engagement, or sales.
          </p>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-10">
            Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Copywriting (landing pages, ads, emails)</li>
            <li>Content creation (blog posts, articles, guides)</li>
            <li>Editorial and brand voice guidelines</li>
            <li>Marketing and campaign copy</li>
            <li>Social media content</li>
          </ul>
          <p className="mt-10">
            If you have a project in mind, I&apos;d love to hear about it.{" "}
            <a href="/contact" className="text-corporate-blue dark:text-corporate-accent hover:underline">
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
