interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
  return (
    <p
      className={`text-xl font-semibold ${className}`}
    >
      {title}
    </p>
  );
};

export default SectionHeader;
