import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function GradientText({ className, children, ...props }: GradientTextProps) {
  return (
    <span className={cn("gradient-text", className)} {...props}>
      {children}
    </span>
  );
}
