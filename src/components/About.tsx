export default function About() {
  return (
    <section id="about" className="bg-section-alt px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Our Story
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground md:text-5xl">
              A commitment to
              <br />
              <span className="italic">meaningful change</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-base font-light leading-[1.8] text-muted">
              Founded in 2008, Lumina Foundation was born from a simple belief:
              that every community holds within it the potential for
              extraordinary transformation. We work alongside local leaders and
              organizations to create programs that are sustainable, culturally
              informed, and deeply impactful.
            </p>
            <p className="text-base font-light leading-[1.8] text-muted">
              Our approach is rooted in dignity, partnership, and long-term
              thinking. We do not impose solutions. We listen, collaborate, and
              empower, ensuring that every initiative we support is driven by the
              communities it serves.
            </p>
            <div className="mt-4 h-px w-16 bg-accent" />
          </div>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden bg-border md:grid-cols-3">
          {[
            {
              title: "Education",
              description:
                "Providing access to quality education through scholarships, school construction, and teacher training programs across underserved regions.",
            },
            {
              title: "Healthcare",
              description:
                "Building and supporting community health centers, maternal care programs, and preventive health initiatives in remote areas.",
            },
            {
              title: "Sustainability",
              description:
                "Implementing clean water projects, renewable energy solutions, and agricultural training to foster self-sufficient communities.",
            },
          ].map((pillar) => (
            <div key={pillar.title} className="bg-section-alt p-10 md:p-12">
              <h3 className="mb-4 font-serif text-xl font-medium tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm font-light leading-[1.8] text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
