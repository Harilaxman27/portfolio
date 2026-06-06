import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sections, type SectionId } from "@/data/portfolio";

export function TopNav() {
  const [active, setActive] = useState<SectionId>("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="dark-surface sticky top-0 z-30 mb-6 flex items-center justify-between px-5 py-3 lg:justify-end lg:px-8 lg:py-4">
      <span className="text-sm font-semibold text-white lg:hidden">Menu</span>
      <button
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden grid place-items-center size-9 rounded-lg bg-white/10 text-white"
        aria-label="Toggle navigation"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      <ul className="hidden lg:flex items-center gap-2">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => handleClick(s.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                active === s.id
                  ? "btn-accent"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <ul className="absolute left-0 right-0 top-full mt-2 dark-surface py-2 lg:hidden animate-fade-in">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => handleClick(s.id)}
                className={`block w-full text-left px-5 py-2.5 text-sm transition-colors ${
                  active === s.id ? "text-[#DDF3F5]" : "text-white/90 hover:bg-white/10"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
