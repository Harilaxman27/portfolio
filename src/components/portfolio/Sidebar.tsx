import { Mail, MapPin, Phone, Linkedin, Github, Twitter, ChevronDown } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/Profile.jpeg";
import { profile } from "@/data/portfolio";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <aside className="dark-surface p-6 lg:p-8 lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto no-scrollbar">
      <div className="flex flex-col items-center text-center">
        <div className="size-40 lg:size-48 rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10">
          <img src={profileImg} alt={profile.name} width={512} height={512} className="size-full object-cover" />
        </div>
        <h1 className="mt-5 text-2xl lg:text-[1.75rem] font-bold tracking-tight text-white">{profile.name}</h1>
        <span className="mt-3 inline-block rounded-lg btn-accent px-3 py-1.5 text-xs font-medium">
          {profile.title}
        </span>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-5 inline-flex items-center gap-1 text-xs text-[#DDF3F5] lg:hidden"
          aria-expanded={open}
        >
          {open ? "Hide Contacts" : "Show Contacts"}
          <ChevronDown className={`size-3 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className={`${open ? "block" : "hidden"} lg:block`}>
        <div className="my-6 h-px bg-white/10" />
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 w-full group/contact"
            >
              <span className="grid place-items-center size-10 rounded-xl btn-accent group-hover/contact:scale-105 transition-transform shrink-0">
                <Mail className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-widest text-white/55">Email</p>
                <span className="block truncate text-sm font-medium text-white/90 group-hover/contact:text-[#DDF3F5] transition-colors">
                  {profile.email}
                </span>
              </div>
            </a>
          </li>
          <li className="flex items-center gap-3">
            <a 
              href={`tel:${profile.phone}`} 
              className="flex items-center gap-3 w-full group/contact"
            >
              <span className="grid place-items-center size-10 rounded-xl btn-accent group-hover/contact:scale-105 transition-transform shrink-0">
                <Phone className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-widest text-white/55">Phone</p>
                <span className="block truncate text-sm font-medium text-white/90 group-hover/contact:text-[#DDF3F5] transition-colors">
                  {profile.phone}
                </span>
              </div>
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="grid place-items-center size-10 rounded-xl btn-accent">
              <MapPin className="size-4" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/55">Location</p>
              <p className="text-sm font-medium text-white/90">{profile.location}</p>
            </div>
          </li>
        </ul>

        {/* Founder quote */}
        <p className="mt-6 text-center text-sm font-bold text-white tracking-wide">
          "Code with Purpose"
        </p>

        <div className="mt-5 flex items-center justify-center gap-4 text-white/55">
          <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-[#DDF3F5] transition-colors"><Linkedin className="size-4" /></a>
          <a href={profile.socials.github} aria-label="GitHub" className="hover:text-[#DDF3F5] transition-colors"><Github className="size-4" /></a>
          <a href={profile.socials.twitter} aria-label="Twitter" className="hover:text-[#DDF3F5] transition-colors"><Twitter className="size-4" /></a>
        </div>
      </div>
    </aside>
  );
}
