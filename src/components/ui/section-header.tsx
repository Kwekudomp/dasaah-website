interface SectionHeaderProps {
  label: string;
  title: string;
  light?: boolean;
}

export function SectionHeader({ label, title, light }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-amber font-heading text-sm font-light uppercase tracking-widest mb-2">
        {label}
      </p>
      <h2
        className={`font-heading text-3xl md:text-4xl font-extrabold ${
          light ? "text-navy" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
