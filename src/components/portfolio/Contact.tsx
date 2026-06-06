import { useState } from "react";
import { Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="card-surface p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Contact" />

      <div className="overflow-hidden rounded-2xl border border-border">
        <iframe
          title="Map"
          src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
          width="100%"
          height="320"
          loading="lazy"
          className="block w-full grayscale-[40%] contrast-110"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h3 className="mt-8 text-2xl font-bold">Contact Form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          (e.currentTarget as HTMLFormElement).reset();
          setTimeout(() => setSent(false), 3000);
        }}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        <input required placeholder="Full name" className="rounded-xl bg-popover text-popover-foreground border border-white/15 px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/80" />
        <input required type="email" placeholder="Email address" className="rounded-xl bg-popover text-popover-foreground border border-white/15 px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/80" />
        <input required placeholder="Subject" className="sm:col-span-2 rounded-xl bg-popover text-popover-foreground border border-white/15 px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/80" />
        <textarea required placeholder="Your Message" rows={6} className="sm:col-span-2 rounded-xl bg-popover text-popover-foreground border border-white/15 px-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/80 resize-y" />
        <div className="sm:col-span-2 flex justify-end items-center gap-4">
          {sent && <span className="text-sm text-primary">Thanks — message sent!</span>}
          <button type="submit" className="btn-accent inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]">
            <Send className="size-4" /> Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
