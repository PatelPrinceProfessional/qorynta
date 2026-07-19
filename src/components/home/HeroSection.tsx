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
      className={`inline-block pr-2 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-300 dark:to-blue-500 drop-shadow-sm transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
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
          className={`absolute inset-0 flex items-center justify-center lg:justify-start font-black tracking-tighter text-foreground transition-all duration-1000 ease-in-out whitespace-nowrap ${i === index ? 'opacity-[0.15] dark:opacity-[0.25] translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
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
    <section className="hero-section relative z-0 min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Radial Glow, Dot Grid, and Stars */}
      <div className="absolute inset-0 z-0">
        <div className="stars-bg" />
        <ParticleNetwork />
      </div>
      <div className={`absolute inset-0 dot-grid opacity-[0.04] sm:opacity-[0.04] ${styles.heroBackground}`} />
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none transition-colors duration-1000 ease-in-out ${getGlowColor()}`} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/10 sm:bg-accent/20 rounded-full blur-[60px] sm:blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="hero-content w-full container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10" style={{ willChange: 'transform, filter, opacity' }}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start relative min-w-0">

            {/* Massive Background Text Animation */}
            <div className="flex absolute top-[38%] sm:top-[40%] md:top-[45%] lg:top-[65%] left-0 right-0 lg:right-auto -translate-y-1/2 lg:-translate-x-4 z-[-2] pointer-events-none select-none w-full lg:w-auto overflow-hidden sm:overflow-visible justify-center lg:justify-start">
              <BackgroundKeywords />
            </div>
            <div className="hero-eyebrow opacity-0 translate-y-3 w-full sm:w-auto">
              {/* Mobile text */}
              <div className="md:hidden">
                <SectionLabel text="QORYNTA SERVICES — BUILD. SCALE. DOMINATE." />
              </div>
              {/* Desktop text */}
              <div className="hidden md:flex items-center gap-2.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm md:text-base font-semibold tracking-wider text-muted-foreground">Qorynta Services — BUILD. SCALE. DOMINATE.</span>
              </div>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="hero-headline w-full max-w-full text-4xl sm:text-[42px] md:text-[54px] lg:text-[72px] xl:text-[86px] font-display font-bold leading-tight lg:leading-[1.05] tracking-tighter mb-6 sm:mb-8 break-words">
              <span className="word inline-block pr-1 sm:pr-2 pb-1 opacity-0 translate-y-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-300">Build</span>{" "}
              <span className="word inline-block opacity-0 translate-y-4 text-foreground/90 font-serif italic text-primary/80">Digital</span>&nbsp;{" "}
              <span className="word inline-block pr-2 pb-1 opacity-0 translate-y-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-300">Products</span>
              <br className="hidden md:block" />
              <span className="whitespace-nowrap">
                <span className="word inline-block pr-2 pb-1 opacity-0 translate-y-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-900 dark:from-white dark:to-blue-300">That</span>{" "}
                <span className="word inline-block opacity-0 translate-y-4">
                  <CyclingText />
                </span>
              </span>
            </h1>

            {/* Invisible spacer to perfectly preserve layout spacing and prevent CTAs from shifting up */}
            <div className="invisible pointer-events-none select-none text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed font-mono" aria-hidden="true">
              From mobile apps to enterprise web platforms — Qorynta services deliver
              production-grade digital solutions for Indian and global businesses
              at competitive rates.
            </div>

            <p className="hero-description absolute top-[65%] sm:top-[70%] text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed text-muted-foreground opacity-0">
              From mobile apps to enterprise web platforms — Qorynta services deliver
              production-grade digital solutions for Indian and global businesses
              at competitive rates.
            </p>

            {/* CTAs */}
            <div className="hero-cta opacity-0 translate-y-2 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-12">
              <Button
                asChild
                size="lg"
                className={`w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out text-base font-semibold px-10 h-16 group rounded-full overflow-hidden ${styles.heroCTAPrimary}`}
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <RevealContent>
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-500" />
                  </RevealContent>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className={`w-full sm:w-auto border-2 border-blue-600/50 dark:border-blue-400/50 text-blue-700 dark:text-blue-300 hover:bg-blue-600/10 hover:border-blue-600 dark:hover:bg-blue-400/10 dark:hover:border-blue-400 transition-all duration-500 text-base font-medium px-10 h-16 rounded-full bg-transparent backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.15)] dark:shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] ${styles.heroCTASecondary}`}
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
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        ))}
                      </div>
                      <span>Rated 4.0 by 40+ clients</span>
                    </div>

                    <div className="w-px h-4 md:h-5 bg-border/50" />

                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Globe className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                      <span>Clients in 8+ Countries</span>
                    </div>

                    <div className="w-px h-4 md:h-5 bg-border/50" />

                    <div className="flex items-center gap-1.5 md:gap-2">

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
