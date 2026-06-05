import { SectionHeader } from "./SectionHeader";

// Auto-load every image from src/assets/gallery — drop a file in that folder
// and it will appear here automatically. Supports png/jpg/jpeg/webp/avif/svg.
const modules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const images = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const name = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "image";
    return { src, alt: name };
  });

export function Gallery() {
  return (
    <section id="gallery" className="card-surface p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Gallery" />
      {images.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Drop images into <code className="text-primary">src/assets/gallery/</code> — they'll appear here automatically.
        </p>
      ) : (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <figure
              key={img.src}
              className="group card-surface overflow-hidden aspect-[4/3] relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
