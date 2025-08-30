interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "rounded-full" }: SectionDividerProps) {
  return (
    <div className={`w-64 h-1 bg-primary mx-auto mb-8 ${className}`}></div>
  );
}
