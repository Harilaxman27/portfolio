import { FolderGit2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="card-projects p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-[#FCFBF8] transition-colors hover:border-primary/40"
          >
            <div className="aspect-video w-full overflow-hidden bg-muted/50">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                  }}
                />
              ) : null}
              <div className={`grid size-full place-items-center text-muted-foreground ${p.image ? 'hidden' : ''}`}>
                <div className="flex flex-col items-center gap-2">
                  <FolderGit2 className="size-8 opacity-20" />
                  <span className="text-xs uppercase tracking-widest opacity-50">Project Screenshot Placeholder</span>
                </div>
              </div>
            </div>
            
            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold text-xl text-primary">{p.title}</h3>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  {p.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs font-medium text-primary/80">
                  <span className="opacity-60 mr-1">Tech:</span> {p.tech}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
