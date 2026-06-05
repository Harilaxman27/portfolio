import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { TopNav } from "@/components/portfolio/TopNav";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Gallery } from "@/components/portfolio/Gallery";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aakash Rajbanshi — Software Developer" },
      { name: "description", content: "Portfolio of Aakash Rajbanshi — Flutter & full-stack software developer based in Kathmandu, Nepal." },
      { property: "og:title", content: "Aakash Rajbanshi — Software Developer" },
      { property: "og:description", content: "Portfolio of Aakash Rajbanshi — Flutter & full-stack software developer based in Kathmandu, Nepal." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <Sidebar />
        <div className="mt-6 lg:mt-0">
          <TopNav />
          <About />
          <Resume />
          <Gallery />
          <Blog />
          <Contact />
        </div>
      </div>
    </main>
  );
}
