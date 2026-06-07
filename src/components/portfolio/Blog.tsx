import { SectionHeader } from "./SectionHeader";

export function Blog() {
  return (
    <section id="blog" className="card-blog p-6 sm:p-8 lg:p-10 mt-6 scroll-mt-24">
      <SectionHeader title="Blog" />
      <p className="mt-4 text-center text-lg text-primary">
        Exciting Content Coming Soon! I&#39;m crafting thoughtful blog posts to share with you. In the meantime, subscribe to be notified when new content is published.
      </p>
    </section>
  );
}
