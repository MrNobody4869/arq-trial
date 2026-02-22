import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-[var(--muted)]">
        Page not found. Something went wrong.
      </p>
      <Link
        href="/"
        className="mt-8 border-4 border-black bg-[var(--accent)] px-8 py-4 font-bold text-white transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
      >
        GO HOME
      </Link>
    </div>
  );
}
