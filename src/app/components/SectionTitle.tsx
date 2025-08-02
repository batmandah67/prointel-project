type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="w-14 h-[3px] bg-gray-300 mx-auto my-4"></div>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
}
