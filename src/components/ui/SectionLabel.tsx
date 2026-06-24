import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <div className={cn("text-[13px] font-medium tracking-[0.05em] uppercase text-accent-cyan mb-4", className)}>
      {text}
    </div>
  );
}
