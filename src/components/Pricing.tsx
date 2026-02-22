import Link from "next/link";

const tiers = [
  {
    name: "Free",
    id: "free",
    price: { monthly: 0 },
    description: "Perfect for trying out Taskflow with your core team.",
    features: [
      "Up to 5 team members",
      "3 active projects",
      "Basic task management",
      "7-day activity history",
      "Email support",
    ],
    cta: "Start for free",
    href: "#signup",
    featured: false,
  },
  {
    name: "Pro",
    id: "pro",
    price: { monthly: 29 },
    description: "For growing teams that need more power and flexibility.",
    features: [
      "Up to 25 team members",
      "Unlimited projects",
      "Advanced sprint planning",
      "Milestone tracking",
      "90-day activity history",
      "Integrations (GitHub, Slack)",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "#signup",
    featured: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: { monthly: 99 },
    description: "For organizations scaling across multiple teams.",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Everything in Pro",
      "Custom workflows",
      "Unlimited activity history",
      "SSO & advanced security",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    href: "#signup",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-600">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Plans that grow with you
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-cyan-500 bg-cyan-50/50 ring-2 ring-cyan-500"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold leading-8 text-slate-900">
                {tier.name}
              </h3>
              <p className="mt-2 text-slate-600">{tier.description}</p>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-slate-900">
                  ${tier.price.monthly}
                </span>
                {tier.price.monthly > 0 && (
                  <span className="text-slate-600">/month</span>
                )}
              </p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-cyan-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-lg px-4 py-3 text-center text-base font-semibold transition-all ${
                  tier.featured
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:bg-cyan-600"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
