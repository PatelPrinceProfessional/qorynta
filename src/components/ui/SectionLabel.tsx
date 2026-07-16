import { cn } from '@/lib/utils';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export const SectionLabel = ({ text, className }: SectionLabelProps) => {
  return (
    <div className={cn("inline-block mb-4", className)}>
      <span className="text-[13px] md:text-sm font-medium tracking-[0.05em] uppercase text-secondary">
        {text}
      </span>
    </div>
  );
};
