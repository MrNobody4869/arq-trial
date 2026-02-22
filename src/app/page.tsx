import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Stories from "@/components/Stories";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Impact />
        <Programs />
        <Stories />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
