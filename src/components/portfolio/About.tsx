import { Smartphone, Code2, PenTool, Server } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Skills } from "./Skills";

const icons = { smartphone: Smartphone, code: Code2, "pen-tool": PenTool, server: Server } as const;

const items = [
  { icon: "smartphone", title: "Mobile Apps", desc: "Professional development of applications for Android and iOS." },
  { icon: "code", title: "Web Development", desc: "High-quality development of sites at the professional level." },
  { icon: "pen-tool", title: "UI/UX Design", desc: "The most modern and high-quality design made at a professional level." },
  { icon: "server", title: "Backend Development", desc: "High-performance backend services designed for scalability and seamless user experience." },
] as const;

export function About() {
  return (
    <section id="about" className="card-surface p-6 sm:p-8 lg:p-10 scroll-mt-24">
      <SectionHeader title="About Me" />
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          A passionate Flutter developer with strong expertise in cross-platform apps, REST APIs,
          UI/UX, widgets, and state management solutions. Proven track record in delivering
          cutting-edge solutions, including API integration, third-party libraries, and performance
          optimization. Adept at debugging to ensure high-quality, responsive apps and an agile
          collaborator committed to staying current with industry trends.
        </p>
        <p>
          If you're seeking a skilled Flutter developer to breathe life into your project and exceed
          your expectations, I am here to collaborate and create magic together. Reach out, and
          let's transform your vision into a reality!
        </p>
      </div>

      <h3 className="mt-12 text-2xl font-bold">What I'm Doing</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((it) => {
          const Icon = icons[it.icon];
          return (
            <div key={it.title} className="card-surface p-5 sm:p-6 flex gap-4">
              <span className="grid place-items-center size-12 shrink-0 rounded-xl bg-secondary text-primary">
                <Icon className="size-6" />
              </span>
              <div>
                <h4 className="font-semibold text-lg">{it.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Skills />
    </section>
  );
}
