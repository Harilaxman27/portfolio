"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="card-surface p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Achievements" />
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.a
            key={a.title + a.year}
            href={a.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VERIFY"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="card-surface group relative block p-5 sm:p-6 transition-colors hover:border-primary/60"
          >
            <div className="flex items-start gap-4">
              <span className="grid place-items-center size-11 shrink-0 rounded-xl bg-secondary text-primary">
                <BadgeCheck className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-lg leading-tight">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground truncate">{a.event}</p>
                <div className="mt-3 flex items-center gap-3 text-xs">
                  <span className="text-primary font-medium">{a.year}</span>
                  {a.kind && (
                    <span className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                      {a.kind}
                    </span>
                  )}
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Verified
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
