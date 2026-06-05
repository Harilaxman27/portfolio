export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h2 className="section-title">{title}</h2>
      <span className="block h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}
