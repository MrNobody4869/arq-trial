const programs = [
  {
    number: "01",
    title: "Bright Minds Initiative",
    category: "Education",
    description:
      "Scholarships and mentorship programs for first-generation students in rural communities, providing access to quality education from primary school through university.",
  },
  {
    number: "02",
    title: "Healing Hands",
    category: "Healthcare",
    description:
      "Mobile health clinics and community health worker training programs, bringing essential medical care to remote villages and underserved populations.",
  },
  {
    number: "03",
    title: "Green Horizons",
    category: "Sustainability",
    description:
      "Clean water infrastructure, solar energy installations, and regenerative agriculture training that empower communities to build self-sufficient futures.",
  },
  {
    number: "04",
    title: "Women Rising",
    category: "Empowerment",
    description:
      "Microfinance, business skills, and leadership development programs designed to strengthen the economic independence of women across our partner communities.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-background px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Our Programs
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
            Initiatives that
            <br />
            <span className="italic">create lasting change</span>
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {programs.map((program) => (
            <div
              key={program.number}
              className="group grid gap-6 py-10 transition-colors duration-300 hover:bg-section-alt md:grid-cols-12 md:gap-8 md:px-8 md:py-12"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-sm font-light text-accent">
                  {program.number}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">
                  {program.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {program.category}
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="text-sm font-light leading-[1.8] text-muted">
                  {program.description}
                </p>
              </div>
              <div className="flex items-center md:col-span-2 md:justify-end">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
