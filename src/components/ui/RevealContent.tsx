import React from 'react';
import { cn } from '@/lib/utils';

export function RevealContent({
  children,
  className,
  hiddenContent
}: {
  children: React.ReactNode;
  className?: string;
  hiddenContent?: React.ReactNode;
}) {
  return (
    <span className={cn("relative overflow-hidden inline-flex flex-col items-center justify-center h-[1.5em]", className)}>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full flex items-center gap-2 w-full justify-center">
        {children}
      </span>
      <span className="absolute flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] translate-y-full group-hover:translate-y-0 text-cyan-200 w-full justify-center">
        {hiddenContent || children}
      </span>
    </span>
  );
}
