import React from 'react';
import { cn } from '@/lib/utils';

interface SafeAnimationProps {
  children: React.ReactNode;
  /** Duration in seconds. Minimum 0.34s (approx 3 flashes/sec max) to prevent seizure risk. */
  duration?: number;
  className?: string;
  /** Customize the animation keyframe or style if needed, defaults to a standard safe pulse */
  animationType?: 'pulse' | 'glow-pulse' | 'fade-in-out';
}

/**
 * SafePulse Component
 * Enforces a strict minimum animation duration of 0.34 seconds (max ~3Hz)
 * to comply with WCAG 2.3.1 - Prevent Seizure-Triggering Flashing Content.
 */
export function SafePulse({ children, duration = 2, className, animationType = 'pulse' }: SafeAnimationProps) {
  // Enforce minimum duration of 0.34s (3 flashes per second max) to prevent seizure risk
  const safeDuration = Math.max(duration, 0.34);

  let animationValue = '';
  switch (animationType) {
    case 'glow-pulse':
      animationValue = `glow-pulse ${safeDuration}s ease-in-out infinite`;
      break;
    case 'fade-in-out':
      animationValue = `fade-in ${safeDuration}s ease-in-out infinite alternate`;
      break;
    case 'pulse':
    default:
      // Assuming 'pulse' is defined in your Tailwind config or CSS
      animationValue = `pulse ${safeDuration}s cubic-bezier(0.4, 0, 0.6, 1) infinite`;
      break;
  }

  return (
    <div
      className={cn(className)}
      style={{
        animation: animationValue,
      }}
    >
      {children}
    </div>
  );
}
