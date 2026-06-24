import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn("glass-card rounded-xl p-6 relative overflow-hidden transition-all duration-300", className)}
      {...props}
    >
      {children}
    </div>
  );
}
