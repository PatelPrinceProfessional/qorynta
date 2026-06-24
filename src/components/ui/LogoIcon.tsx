import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
}

export const LogoIcon = ({ className }: LogoIconProps) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("text-current", className)}
    >
      {/* The main circle of the 'Q' */}
      <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* The tail of the 'Q' */}
      <path d="M22 22L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Inner tech/code accent (chevron/arrow) representing growth and technology */}
      <path d="M13 11L17 15L13 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
