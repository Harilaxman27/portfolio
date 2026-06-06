import { BookOpen, Briefcase, FileDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { education, experience } from "@/data/portfolio";

function Block({ icon: Icon, title, children }: { icon: typeof BookOpen; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 first:mt-0">
      <div className="flex items-center gap-4">
        <span className="grid place-items-center size-12 rounded-xl bg-secondary text-primary">
          <Icon className="size-5" />
        </span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="ml-6 mt-6 border-l border-border pl-8 space-y-8">{children}</div>
    </div>
  );
}

function Dot() {
  return (
    <span className="absolute -left-[42px] top-1.5 grid place-items-center size-3 rounded-full bg-primary ring-4 ring-background" />
  );
}

export function Resume() {
  return (
    <section id="resume" className="card-surface p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Resume" />

      <Block icon={BookOpen} title="Education">
        {education.map((e) => (
          <div key={e.title} className="relative">
            <Dot />
            <h4 className="font-semibold">{e.title}</h4>
            <p className="text-muted-foreground text-sm mt-1">{e.desc}</p>
            <p className="text-primary text-sm mt-1">{e.period}</p>
          </div>
        ))}
      </Block>

      <Block icon={Briefcase} title="Experience">
        {experience.map((e) => (
          <div key={e.title} className="relative">
            <Dot />
            <h4 className="font-semibold">{e.title}</h4>
            <p className="text-sm mt-1">{e.company}</p>
            <p className="text-primary text-sm mt-1">{e.period}</p>
            <p className="text-muted-foreground italic text-sm mt-1">{e.location}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Block>

      <div className="mt-10 flex justify-end">
        <a
          href="/resume.pdf"
          download="Aakash-Rajbanshi-Resume.pdf"
          data-cursor="DOWNLOAD"
          className="btn-accent inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
        >
          <FileDown className="size-4" /> Download Resume
        </a>
      </div>
    </section>
  );
}
