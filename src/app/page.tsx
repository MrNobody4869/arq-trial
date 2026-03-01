import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { BlogFeed } from "@/components/BlogFeed";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { getProjects, getBlogPosts, getCategories } from "@/lib/api";

export default async function HomePage() {
  const [projects, posts, categories] = await Promise.all([
    getProjects(),
    getBlogPosts(),
    getCategories(),
  ]);

  return (
    <>
      <Hero />
      <ProjectsGrid projects={projects} />
      <BlogFeed posts={posts} categories={categories} />
      <About />
      <Contact />
    </>
  );
}
