import { SectionHeader } from "./SectionHeader";
import { blogPosts } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="card-surface p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Blog" />
      <div className="grid gap-5 sm:grid-cols-2">
        {blogPosts.map((p) => (
          <article key={p.title} className="card-surface p-5 sm:p-6 group hover:border-primary/40 transition-colors">
            <p className="text-xs text-primary">{p.date}</p>
            <h3 className="mt-2 font-semibold text-lg flex items-start justify-between gap-3">
              <span>{p.title}</span>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
