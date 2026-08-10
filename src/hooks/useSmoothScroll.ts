import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Disable only on reduced motion
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.8, // Reduced duration for faster snap/responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.5,
      syncTouch: true, // Synchronize touch scroll
      touchMultiplier: 6.5, // Massively increased touch scrolling speed
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
