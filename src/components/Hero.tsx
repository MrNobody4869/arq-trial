import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Scale your startup{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              effortlessly
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            The project management platform built for growing teams. Ship faster,
            collaborate better, and focus on what matters—your product.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#signup"
              className="rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Start Free Trial
            </Link>
            <Link
              href="#pricing"
              className="rounded-lg border border-slate-600 bg-slate-800/50 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-slate-500 hover:bg-slate-700/50"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            No credit card required · 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}
