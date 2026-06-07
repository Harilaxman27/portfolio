import { Smartphone, Code2, Brain, Server } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Skills } from "./Skills";

const icons = { smartphone: Smartphone, code: Code2, brain: Brain, server: Server } as const;

const items = [
  { icon: "brain", title: "AI & Machine Learning", desc: "Building intelligent systems with supervised learning, deep learning, and computer vision for real-world problem solving." },
  { icon: "code", title: "Full Stack Development", desc: "End-to-end web applications using React.js, FastAPI, Firebase, and Supabase with clean architecture." },
  { icon: "smartphone", title: "Mobile Apps", desc: "Cross-platform mobile applications with Flutter and Dart, integrated with cloud backends and AI services." },
  { icon: "server", title: "Backend & DevOps", desc: "Scalable APIs with FastAPI & REST, containerised with Docker, and automated via GitHub Actions CI/CD pipelines." },
] as const;

export function About() {
  return (
    <section id="about" className="card-about p-6 sm:p-8 lg:p-10 scroll-mt-24">
      <SectionHeader title="About Me" />
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Machine Learning Enthusiast and Full Stack Developer with a strong foundation in supervised
          learning techniques, including regression and classification. Experienced in Python,
          React.js, FastAPI, TensorFlow, and real-world data problem-solving.
        </p>
        <p>
          Skilled at developing AI-driven solutions and building mobile apps with Flutter. Passionate
          about applying machine learning to real-world challenges, with hands-on experience in crop
          disease detection, recommendation systems, and sustainable farming projects. Always eager
          to learn and grow in the field of AI and machine learning.
        </p>
      </div>

      <h3 className="mt-12 text-2xl font-bold">What I'm Doing</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((it) => {
          const Icon = icons[it.icon];
          return (
            <div key={it.title} className="card-about p-5 sm:p-6 flex gap-4">
              <span className="grid place-items-center size-12 shrink-0 rounded-xl bg-primary text-primary-foreground">
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
