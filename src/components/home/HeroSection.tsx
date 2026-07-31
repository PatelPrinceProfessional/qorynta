import React, { useEffect, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Globe, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GradientText } from '@/components/ui/GradientText';
import { GlassCard } from '@/components/ui/GlassCard';
import { CapabilityHub } from '@/components/ui/CapabilityHub';
import { RevealContent } from '@/components/ui/RevealContent';
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
      className={`inline-block md:pr-2 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#0a2472] to-[#123499] dark:from-[#00F0FF] dark:via-[#38BDF8] dark:to-[#60A5FA] drop-shadow-sm font-black transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
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
    <div className="relative flex items-center justify-center lg:justify-start w-full">
      {/* Invisible placeholder to give the container the maximum necessary width/height */}
      <span className="invisible font-black tracking-tighter whitespace-nowrap" style={{ fontSize: 'clamp(2.5rem, 14vw, 10rem)', lineHeight: 0.8 }}>
        DOMINATE
      </span>
      {words.map((word, i) => (
        <span
          key={word}
          className={`absolute inset-0 flex items-center justify-center lg:justify-start font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-[#0a2472] to-[#123499] dark:text-foreground pointer-events-none select-none transition-all duration-1000 ease-in-out whitespace-nowrap ${i === index ? 'opacity-20 dark:opacity-[0.25] translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          style={{ fontSize: 'clamp(2.5rem, 14vw, 10rem)', lineHeight: 0.8 }}
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
  const [activeCapId, setActiveCapId] = React.useState<string | null>(null);

  const getGlowColor = () => {
    switch (activeCapId) {
      case 'ai': return "bg-purple-600/20 sm:bg-purple-600/30";
      case 'web': return "bg-blue-600/20 sm:bg-blue-600/30";
      case 'data': return "bg-cyan-500/20 sm:bg-cyan-500/30";
      case 'cloud': return "bg-sky-400/20 sm:bg-sky-400/30";
      case 'mobile': return "bg-pink-500/20 sm:bg-pink-500/30";
      default: return "bg-primary/10 sm:bg-primary/20";
    }
  };

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
    <section className="hero-section relative z-0 min-h-[100vh] flex flex-col overflow-hidden bg-[#f2faf4] dark:bg-transparent">
      {/* Background Radial Glow, Dot Grid, and Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars-bg hidden dark:block" />
        <div className="absolute inset-0 opacity-100 dark:opacity-60">
          <ParticleNetwork />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#000000]/0 to-transparent dark:from-[rgba(0,240,255,0.05)] dark:via-transparent dark:to-transparent hidden dark:block" />
      </div>
      
      {/* Central Node Radial Aura Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(13,27,62,0.85)_0%,rgba(3,5,8,0)_70%)] pointer-events-none z-0 hidden dark:block" />

      <div className={`absolute inset-0 dot-grid opacity-[0.04] sm:opacity-[0.04] ${styles.heroBackground}`} />
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-[#123499]/15 via-[#0a2472]/10 to-transparent blur-[80px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none transition-colors duration-1000 ease-in-out dark:hidden`} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-[#0a2472]/10 via-[#123499]/15 to-transparent rounded-full blur-[60px] sm:blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse-slow pointer-events-none dark:hidden" style={{ animationDelay: '2s' }} />

      <div className="hero-content w-full container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-24 pb-8 md:pt-40 md:pb-20 relative z-10" style={{ willChange: 'transform, filter, opacity' }}>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start relative min-w-0">

            {/* Massive Background Text Animation */}
            <div className="flex absolute top-[38%] sm:top-[40%] md:top-[45%] lg:top-[65%] left-0 right-0 lg:right-auto -translate-y-1/2 lg:-translate-x-4 z-[-2] pointer-events-none select-none w-full lg:w-auto overflow-hidden sm:overflow-visible justify-center lg:justify-start">
              <BackgroundKeywords />
            </div>
            {/* Giant Background Ghost Watermark */}
            <div className="absolute -bottom-6 left-0 text-slate-800/20 font-black text-8xl sm:text-[12rem] tracking-tighter uppercase pointer-events-none select-none z-0 hidden dark:block">WEB</div>

            <div className="hero-eyebrow opacity-0 translate-y-3 w-full sm:w-auto relative z-10">
              {/* Mobile text */}
              <div className="md:hidden">
                <SectionLabel text="QORYNTA SERVICES — BUILD. SCALE. DOMINATE." />
              </div>
              {/* Desktop text */}
              <div className="hidden md:flex items-center gap-2.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#123499] dark:bg-primary animate-pulse" />
                <span className="font-mono text-xs md:text-[13px] tracking-widest font-bold text-[#0a2472] dark:text-muted-foreground uppercase">Qorynta Services — BUILD. SCALE. DOMINATE.</span>
              </div>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="hero-headline w-full max-w-full text-4xl sm:text-[42px] md:text-[54px] lg:text-[72px] xl:text-[86px] font-display font-bold leading-tight lg:leading-[1.05] tracking-tighter mb-4 sm:mb-8 break-words">
              <span className="word inline-block md:pr-2 pb-1 opacity-0 translate-y-4 text-[#00072d] dark:text-white font-extrabold tracking-tight">Build</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 text-[#0a2472] dark:text-sky-300 font-serif italic font-normal opacity-90">Digital</span>&nbsp;{" "}
              <span className="word inline-block md:pr-2 pb-1 opacity-0 translate-y-4 text-[#00072d] dark:text-white font-extrabold tracking-tight">Products</span>
              <br className="hidden md:block" />
              <span className="md:whitespace-nowrap block md:inline mt-1 md:mt-0">
                <span className="word inline-block md:pr-2 pb-1 opacity-0 translate-y-4 text-[#00072d] dark:text-white font-extrabold tracking-tight">That</span>
                <br className="block md:hidden" />
                <span className="hidden md:inline"> </span>
                <span className="word inline-block opacity-0 translate-y-4">
                  <CyclingText />
                </span>
              </span>
            </h1>

            <p className="hero-description text-base md:text-xl font-light mb-6 sm:mb-8 max-w-xl leading-relaxed text-[#00072d] dark:text-muted-foreground opacity-0">
              From mobile apps to enterprise web platforms — Qorynta services deliver
              production-grade digital solutions for Indian and global businesses
              at competitive rates.
            </p>

            {/* CTAs */}
            <div className="hero-cta opacity-0 translate-y-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-8 sm:mb-12 relative z-10">
              <Link 
                to="/contact"
                className={`w-full sm:w-auto flex items-center justify-center bg-[#00072d] text-[#f2faf4] hover:bg-[#0a2472] dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 hover:scale-105 transition-all duration-300 hover:shadow-[0_10px_25px_rgba(10,36,114,0.3)] dark:shadow-[0_0_25px_rgba(255,255,255,0.3)] ease-out text-base font-extrabold px-10 h-16 group rounded-full overflow-hidden ${styles.heroCTAPrimary}`}
              >
                <div className="flex items-center justify-center">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500 text-[#f2faf4] dark:text-slate-950" />
                </div>
              </Link>
              <Link 
                to="/case-studies"
                className={`w-full sm:w-auto flex items-center justify-center bg-white/80 hover:bg-[#f2faf4] dark:bg-slate-950/60 dark:text-white dark:border dark:border-slate-700/80 dark:hover:border-cyan-400/80 dark:hover:bg-cyan-500/10 transition-all duration-500 text-base font-bold px-10 h-16 rounded-full backdrop-blur-md shadow-sm hover:shadow-md ${styles.heroCTASecondary}`}
              >
                <span className="flex items-center gap-2">View Our Work</span>
              </Link>
            </div>

            {/* Social Proof Strip (Marquee) */}
            <div className="hero-cta opacity-0 w-full min-w-0 overflow-hidden border-t border-[#051650]/15 dark:border-border/50 pt-6 mt-4 relative flex items-center h-12">
              <div className="absolute left-0 top-6 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#f2faf4] dark:from-background to-transparent z-10" />
              <div className="absolute right-0 top-6 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#f2faf4] dark:from-background to-transparent z-10" />

              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, groupIdx) => (
                  <div key={groupIdx} className="flex items-center justify-start min-w-max gap-4 md:gap-8 px-4 md:px-8 text-xs sm:text-sm font-medium text-[#00072d] dark:text-muted-foreground">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="flex text-[#123499] dark:text-[#F59E0B]">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        ))}
                      </div>
                      <span>Rated 4.0 by 40+ clients</span>
                    </div>

                    <div className="w-px h-4 md:h-5 bg-[#051650]/15 dark:bg-border/50" />

                    <div className="flex items-center gap-1.5 md:gap-2 text-[#00072d]">
                      <Globe className="w-3 h-3 md:w-4 md:h-4 text-[#123499] dark:text-primary" />
                      <span>Clients in 8+ Countries</span>
                    </div>

                    <div className="w-px h-4 md:h-5 bg-[#051650]/15 dark:bg-border/50" />

                    <div className="flex items-center gap-1.5 md:gap-2">

                      <span>48hr Kickoff</span>
                    </div>

                    <div className="w-px h-4 md:h-5 bg-[#051650]/15 hidden md:block dark:bg-border/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual (5 cols on lg) */}
          <div className="hero-visual opacity-0 lg:col-span-5 relative w-full h-[400px] sm:h-[450px] lg:h-[500px] max-w-full mt-8 lg:mt-0 pointer-events-none">
            <CapabilityHub onNodeHover={setActiveCapId} />
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
