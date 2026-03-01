import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { LatestPosts } from "@/components/LatestPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PortfolioShowcase />
      <LatestPosts />
    </>
  );
}
