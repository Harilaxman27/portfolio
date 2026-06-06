import { Mail, MapPin, Linkedin, Dribbble, Github, Twitter, ChevronDown } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <aside className="dark-surface p-6 lg:p-8 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-hidden no-scrollbar">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="size-32 lg:size-40 rounded-3xl overflow-hidden bg-secondary ring-1 ring-border">
          <img src={profileImg} alt={profile.name} width={512} height={512} className="size-full object-cover" />
        </div>
        <h1 className="mt-5 text-2xl lg:text-[1.75rem] font-bold tracking-tight">{profile.name}</h1>
        <span className="mt-3 inline-block rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
          {profile.title}
        </span>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 inline-flex items-center gap-1 text-xs text-primary lg:hidden"
          aria-expanded={open}
        >
          {open ? "Hide Contacts" : "Show Contacts"}
          <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className={`${open ? "block" : "hidden"} lg:block`}>
        <div className="my-6 h-px bg-border" />
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <span className="grid place-items-center size-10 rounded-xl bg-primary text-primary-foreground">
              <Mail className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
              <a href={`mailto:${profile.email}`} className="block truncate text-sm font-medium hover:text-primary">
                {profile.email}
              </a>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid place-items-center size-10 rounded-xl bg-primary text-primary-foreground">
              <MapPin className="size-4" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Location</p>
              <p className="text-sm font-medium">{profile.location}</p>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex items-center gap-4 text-muted-foreground">
          <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="size-4" /></a>
          <a href={profile.socials.dribbble} aria-label="Dribbble" className="hover:text-primary transition-colors"><Dribbble className="size-4" /></a>
          <a href={profile.socials.github} aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="size-4" /></a>
          <a href={profile.socials.twitter} aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="size-4" /></a>
        </div>
      </div>
    </aside>
  );
}
