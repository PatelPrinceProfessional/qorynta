import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroEntrance() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  tl.fromTo('.hero-eyebrow', 
      { y: 12, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5 }
    )
    .fromTo('.hero-headline .word', 
      { y: 16, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, 
      '-=0.3'
    )
    .fromTo('.hero-subhead', 
      { y: 12, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5 }, 
      '-=0.3'
    )
    .fromTo('.hero-cta', 
      { y: 8, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.45 }, 
      '-=0.2'
    )
    .fromTo('.hero-visual', 
      { scale: 0.96, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.7 }, 
      '<0.2'
    );

  return tl;
}

export function initHeroScrollExit() {
  // Scroll exit animation (blur and fade) removed based on user request.
}
