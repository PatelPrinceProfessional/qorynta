import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:border-primary/30",
        className
      )}
    >
      {children}
    </div>
  );
};
