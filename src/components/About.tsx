export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-cyan-600">
            Built for startups
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Project management that grows with you
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Taskflow is the project management tool designed specifically for
              startups. We understand the unique challenges of fast-growing
              teams—rapid pivots, limited resources, and the need to move quickly
              without losing visibility.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you&apos;re a team of three or thirty, our intuitive
              interface helps you organize sprints, track milestones, and keep
              everyone aligned. No bloated features, no learning curve—just the
              tools you need to ship.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-6 rounded-2xl bg-slate-50 p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Lightning fast</h3>
                <p className="text-slate-600">
                  Built for speed. Get up and running in minutes, not days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Startup-focused</h3>
                <p className="text-slate-600">
                  Features that matter for agile teams. No enterprise bloat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
