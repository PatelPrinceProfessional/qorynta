import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GradientText } from '@/components/ui/GradientText';
import { GlassCard } from '@/components/ui/GlassCard';
import { AIAgentThoughtStream } from '@/components/ui/AIAgentThoughtStream';
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
          className={`absolute left-0 text-[160px] lg:text-[220px] xl:text-[280px] font-black tracking-tighter text-foreground transition-all duration-1000 ease-in-out whitespace-nowrap ${
            i === index ? 'opacity-15 translate-x-0' : 'opacity-0 -translate-x-12'
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
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Radial Glow, Dot Grid, and Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars-bg" />
        <ParticleNetwork />
      </div>
      <div className={`absolute inset-0 dot-grid opacity-[0.04] ${styles.heroBackground}`} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <div className="hero-content w-full container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start relative min-w-0">
            
            {/* Massive Background Text Animation (Desktop Only) */}
            <div className="hidden lg:flex absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 z-[-1] pointer-events-none select-none">
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
            <h1 ref={headlineRef} className="hero-headline w-full max-w-full text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-extrabold leading-[1.35] mb-6">
              <span className="word inline-block opacity-0 translate-y-4 gradient-headline">Build</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 gradient-headline">Digital</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 gradient-headline">Products</span>
              <br className="hidden md:block" />
              <span className="word inline-block opacity-0 translate-y-4 text-foreground">That</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 text-foreground">Scale</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 text-foreground">Businesses</span>
            </h1>

            {/* Subheading */}
            <p className="hero-subhead opacity-0 translate-y-3 text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              From mobile apps to enterprise web platforms — Qorynta delivers 
              production-grade digital solutions for Indian and global businesses 
              at competitive rates.
            </p>

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
          <div className="hero-visual opacity-0 lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center max-w-full mt-8 lg:mt-0">
            
            {/* Main Floating Dashboard Card (Now AI Thought Stream) */}
            <div ref={cardContainerRef} className="absolute z-20 w-[95%] sm:w-[85%] lg:w-full max-w-md perspective-1000">
              <AIAgentThoughtStream />
            </div>

            {/* Code Snippet Card (Floating behind) */}
            <div className="absolute right-0 sm:-right-4 lg:-right-12 bottom-0 sm:bottom-12 lg:bottom-24 z-10 w-44 sm:w-64 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float" style={{ animationDelay: '1.5s', transform: 'translateZ(-50px)' }}>
              <div className="flex gap-1.5 mb-2 sm:mb-3">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="font-mono text-[9px] sm:text-xs leading-loose">
                <div className="text-slate-500 dark:text-secondary">const <span className="text-slate-900 dark:text-white">project</span> = <span className="text-primary dark:text-accent">&#123;</span></div>
                <div className="pl-3 sm:pl-4 text-primary">client: <span className="text-green-400">"Enterprise"</span>,</div>
                <div className="pl-3 sm:pl-4 text-primary">status: <span className="text-green-400">"Deployed"</span>,</div>
                <div className="pl-3 sm:pl-4 text-primary">performance: <span className="text-[#F59E0B]">99.9</span></div>
                <div className="text-primary dark:text-accent">&#125;;</div>
              </div>
            </div>

            {/* Notification Toast */}
            <div className="absolute left-0 sm:-left-4 lg:-left-8 top-0 sm:top-12 lg:top-20 z-30 flex items-center gap-2 sm:gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-full p-1.5 sm:p-2 pr-3 sm:pr-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-900 dark:text-white whitespace-nowrap">New project started</span>
            </div>
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
