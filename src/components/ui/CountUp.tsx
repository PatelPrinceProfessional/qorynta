import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export const CountUp = ({ end, suffix = '', duration = 2000, decimals = 0, className }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(easeProgress * end);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className={cn("inline-block", className)}>
      {count.toFixed(decimals)}{suffix}
    </div>
  );
};
