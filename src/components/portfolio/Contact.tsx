import { Mail, Github, FileDown, Send, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section 
      id="contact" 
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#11284A] to-[#0A1A33] border border-white/10 p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24 text-white"
    >
      {/* Premium background gradient orbs */}
      <div className="absolute -right-20 -bottom-20 size-80 rounded-full bg-[#DCEEEF]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 size-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <SectionHeader title="Contact" />
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mt-6">
          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Let's build the next impactful product together.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Connect with me directly through any of these channels.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {/* Card 1: Email */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-cyan-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-200 transition-colors">
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Email</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-white group-hover:text-cyan-200 transition-colors break-all">
                    {profile.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2: Website / GitHub */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-blue-300 group-hover:bg-blue-500/10 group-hover:text-blue-200 transition-colors">
                  <Github className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Website / Github</p>
                  <div className="mt-1 flex items-center gap-1">
                    <p className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-200 transition-colors truncate">
                      github.com/Harilaxman27
                    </p>
                    <ArrowUpRight className="size-3 text-white/40 group-hover:text-blue-300 transition-colors shrink-0" />
                  </div>
                </div>
              </div>
            </a>

            {/* Card 3: Resume */}
            <a
              href="/resume.pdf"
              download="Salendra-Harilaxman-Resume.pdf"
              className="group block p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-indigo-300 group-hover:bg-indigo-500/10 group-hover:text-indigo-200 transition-colors">
                  <FileDown className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">Resume</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-white group-hover:text-indigo-200 transition-colors">
                    Download Latest Resume
                  </p>
                </div>
              </div>
            </a>

            {/* Card 4: Send Message */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-center p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/20 hover:border-cyan-500/40 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-400/10 text-cyan-200 group-hover:bg-cyan-400/20 transition-colors">
                  <Send className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cyan-300/80 font-bold">Get In Touch</p>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-white">
                    Send Message
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
