import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) => {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.triggerOnce === false) {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      if (currentRef.classList.contains('reveal')) {
        observer.observe(currentRef);
      }
      
      const revealElements = currentRef.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
        const revealElements = currentRef.querySelectorAll('.reveal');
        revealElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return ref;
};
