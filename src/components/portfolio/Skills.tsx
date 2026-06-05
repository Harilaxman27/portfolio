import { skills } from "@/data/portfolio";

export function Skills() {
  // Duplicate the list so the marquee loops seamlessly when translated -50%.
  const loop = [...skills, ...skills];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="marquee-pause overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track gap-5 py-2">
          {loop.map((s, i) => (
            <div
              key={`${s.slug}-${i}`}
              title={s.name}
              className="group shrink-0 grid place-items-center size-28 rounded-2xl bg-card border border-border transition-transform duration-300 ease-out hover:scale-110 hover:border-primary/60"
            >
              <img
                src={`https://cdn.simpleicons.org/${s.slug}`}
                alt={s.name}
                width={56}
                height={56}
                loading="lazy"
                className="size-14 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
