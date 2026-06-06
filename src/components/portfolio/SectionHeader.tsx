export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h2 className="section-title">{title}</h2>
      <span className="block h-1 w-12 rounded-full bg-gradient-to-r from-[#DDF4F7] via-[#E9F0F7] to-[#F6E8DF]" />
    </div>
  );
}
