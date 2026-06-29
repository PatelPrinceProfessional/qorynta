import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GradientText } from '@/components/ui/GradientText';
import { GlassCard } from '@/components/ui/GlassCard';
import { CapabilityHub } from '@/components/ui/CapabilityHub';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHeroEntrance, initHeroScrollExit } from '@/animations/heroEntrance';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import styles from './HeroSection.module.css';

const CyclingText = () => {
  const [index, setIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const words = ["Win Markets", "Scale Businesses", "Create Impact"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 400); // 400ms fade out duration
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-300 dark:to-blue-500 drop-shadow-sm transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
    >
      {words[index]}
    </span>
  );
};

const BackgroundKeywords = () => {
  const [index, setIndex] = React.useState(0);
  const words = ["WEB", "APPS", "SCALE", "DOMINATE"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-start">
      {words.map((word, i) => (
        <span 
          key={word}
          className={`absolute inset-x-0 lg:inset-x-auto lg:left-0 text-center lg:text-left text-[18vw] sm:text-[100px] md:text-[120px] lg:text-[220px] xl:text-[280px] font-black tracking-tighter text-foreground transition-all duration-1000 ease-in-out whitespace-nowrap ${
            i === index ? 'opacity-[0.10] translate-x-0 translate-y-0' : 'opacity-0 translate-y-4 lg:translate-y-0 lg:-translate-x-12'
          }`}
          style={{ lineHeight: 0.75 }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initHeroEntrance();
    initHeroScrollExit();

    return () => {
      gsap.killTweensOf('.hero-section *');
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !cardContainerRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30; 
      const y = (clientY / window.innerHeight - 0.5) * 30;
      
      gsap.to(cardContainerRef.current, {
        x: x,
        y: y,
        rotateY: x * 0.5,
        rotateX: -y * 0.5,
        duration: 1,
        ease: 'power2.out',
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section relative lg:sticky lg:top-0 z-0 min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Radial Glow, Dot Grid, and Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars-bg" />
        <ParticleNetwork />
      </div>
      <div className={`absolute inset-0 dot-grid opacity-[0.04] ${styles.heroBackground}`} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <div className="hero-content w-full container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10" style={{ willChange: 'transform, filter, opacity' }}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start relative min-w-0">
            
            {/* Massive Background Text Animation */}
            <div className="flex absolute top-[38%] sm:top-[40%] md:top-[45%] lg:top-[65%] left-0 right-0 lg:right-auto -translate-y-1/2 lg:-translate-x-4 z-[-2] pointer-events-none select-none w-full lg:w-auto">
              <BackgroundKeywords />
            </div>
            <div className="hero-eyebrow opacity-0 translate-y-3">
              {/* Mobile text */}
              <div className="md:hidden">
                <SectionLabel text="QORYNTA — BUILD. SCALE. DOMINATE." />
              </div>
              {/* Desktop text */}
              <div className="hidden md:flex items-center gap-2.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">QORYNTA — BUILD. SCALE. DOMINATE.</span>
              </div>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="hero-headline w-full max-w-full text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-extrabold lg:leading-[1.15] mb-6">
              <span className="word inline-block opacity-0 translate-y-4 gradient-headline">Build</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 gradient-headline">Digital</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 gradient-headline">Products</span>
              <br className="hidden md:block" />
              <span className="word inline-block opacity-0 translate-y-4 text-foreground">That</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4">
                <CyclingText />
              </span>
            </h1>

            {/* Invisible spacer to perfectly preserve layout spacing and prevent CTAs from shifting up */}
            <div className="invisible pointer-events-none select-none text-base md:text-lg mb-8 max-w-xl leading-relaxed" aria-hidden="true">
              From mobile apps to enterprise web platforms — Qorynta delivers 
              production-grade digital solutions for Indian and global businesses 
              at competitive rates.
            </div>

            {/* CTAs */}
            <div className="hero-cta opacity-0 translate-y-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                asChild
                size="lg"
                className={`w-full sm:w-auto bg-primary text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] transition-all duration-300 text-base font-semibold px-8 h-14 group rounded-full ${styles.heroCTAPrimary}`}
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={`w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 text-base font-semibold px-8 h-14 rounded-full bg-transparent ${styles.heroCTASecondary}`}
              >
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>

            {/* Social Proof Strip (Marquee) */}
            <div className="hero-cta opacity-0 w-full min-w-0 overflow-hidden border-t border-border/50 pt-6 mt-4 relative flex items-center h-12">
              <div className="absolute left-0 top-6 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-6 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, groupIdx) => (
                  <div key={groupIdx} className="flex items-center justify-start min-w-max gap-4 md:gap-8 px-4 md:px-8 text-xs sm:text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="flex text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        ))}
                      </div>
                      <span>Rated 5.0 by 40+ clients</span>
                    </div>
                    
                    <div className="w-px h-4 md:h-5 bg-border/50" />
                    
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      <span>Clients in 8+ Countries</span>
                    </div>
                    
                    <div className="w-px h-4 md:h-5 bg-border/50" />
                    
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Zap className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
                      <span>48hr Kickoff</span>
                    </div>

                    <div className="w-px h-4 md:h-5 bg-border/50 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual (5 cols on lg) */}
          <div className="hero-visual opacity-0 lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[500px] max-w-full mt-8 lg:mt-0 pointer-events-none">
            <CapabilityHub />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-cta opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
