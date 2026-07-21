import { cn } from '@/lib/utils';

interface SectionLabelProps {
  text: string;
  className?: string;
}

export const SectionLabel = ({ text, className }: SectionLabelProps) => {
  return (
    <div className={cn("inline-block mb-4", className)}>
      <span className="text-[13px] md:text-sm font-bold tracking-[0.1em] uppercase text-primary">
        {text}
      </span>
    </div>
  );
};
