"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import type { GalleryItem } from "@/data/achievements";

// Auto-load images from src/assets/gallery — drop a file in and it appears.
const modules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Optional per-image titles/descriptions/links. Key = filename without extension.
// Add entries to enrich the modal experience.
const meta: Record<string, { title?: string; description?: string; link?: string }> = {
  "sample-1": { title: "Quiet Hours", description: "Late-night focus session at the studio." },
  "sample-2": { title: "Workshop Setup", description: "Where the ideas turn into shipped code." },
  "sample-3": { title: "Shipping Day", description: "Production logs glowing on release night." },
};

const items: GalleryItem[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const name = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "image";
    const m = meta[name] ?? {};
    return {
      src,
      title: m.title ?? name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      description: m.description,
      link: m.link,
    };
  });

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="card-gallery p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Gallery" />
      {items.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Drop images into <code className="text-primary">src/assets/gallery/</code> — they'll appear here automatically.
        </p>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              onClick={() => setActive(img)}
              data-cursor="VIEW"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
              className="group card-gallery relative overflow-hidden aspect-[4/3] text-left"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold">{img.title}</p>
                {img.description && (
                  <p className="text-xs text-white/70 line-clamp-1 mt-0.5">{img.description}</p>
                )}
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              className="card-gallery relative w-full max-w-4xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 grid place-items-center size-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="size-4" />
              </button>
              <div className="bg-black">
                <img src={active.src} alt={active.title} className="block max-h-[70vh] w-full object-contain" />
              </div>
              <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg">{active.title}</h3>
                  {active.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{active.description}</p>
                  )}
                </div>
                {active.link && (
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shrink-0"
                  >
                    Open <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
