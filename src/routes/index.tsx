import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { TopNav } from "@/components/portfolio/TopNav";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Projects } from "@/components/portfolio/Projects";
import { Gallery } from "@/components/portfolio/Gallery";
import { Achievements } from "@/components/portfolio/Achievements";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { CursorOrb } from "@/components/portfolio/CursorOrb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salendra Harilaxman — Full Stack Developer & AI Engineer" },
      { name: "description", content: "Portfolio of Salendra Harilaxman — Full Stack Developer & AI Engineer based in Hyderabad, India." },
      { property: "og:title", content: "Salendra Harilaxman — Full Stack Developer & AI Engineer" },
      { property: "og:description", content: "Portfolio of Salendra Harilaxman — Full Stack Developer & AI Engineer based in Hyderabad, India." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <CursorOrb />
      <div className="mx-auto max-w-[1400px] lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <Sidebar />
        <div className="mt-6 lg:mt-0">
          <TopNav />
          <About />
          <Resume />
          <Projects />
          <Gallery />
          <Achievements />
          <Blog />
          <Contact />
        </div>
      </div>
    </main>
  );
}
