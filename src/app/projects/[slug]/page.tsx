import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { MDXContent } from "@/components/MDXContent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/#projects"
            className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm mb-6 inline-block"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {project.frontmatter.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            {project.frontmatter.description}
          </p>
          {project.frontmatter.link && (
            <a
              href={project.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400 mb-6 inline-block"
            >
              View project →
            </a>
          )}
          <div className="prose dark:prose-invert">
            <MDXContent source={project.content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
