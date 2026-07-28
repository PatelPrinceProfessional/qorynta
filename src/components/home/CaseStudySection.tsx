import React, { useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allProjects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MobileInfiniteCarousel } from '@/components/ui/MobileInfiniteCarousel';

gsap.registerPlugin(ScrollTrigger);



export const CaseStudySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Grid Stagger Entrance
      gsap.fromTo(".project-card-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-background dark:from-transparent dark:to-transparent transition-colors duration-500 border-t border-white/5">
      {/* Optional faint glowing pulse for dark mode to match other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none transition-colors duration-500" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-20 opacity-0">
          <span className="inline-block py-1 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-[#99CAFF]/50 dark:border-white/10 text-[#0A2472] dark:text-primary text-sm font-[700] tracking-[2px] uppercase mb-6 backdrop-blur-md shadow-sm dark:shadow-none">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-[#00072D] dark:text-foreground mb-6 leading-tight max-w-4xl tracking-tighter">
            Engineered Experiences for <span className="font-serif italic font-light bg-clip-text text-transparent bg-gradient-to-br from-[#004EE0] via-[#0069D9] to-[#183EFF] dark:from-primary/80 dark:to-primary/80">Enterprise Scale</span>
          </h2>
          <p className="text-lg md:text-xl text-[#051650] dark:text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Explore our <span className="font-[600] text-[#004EE0] dark:text-primary">deep-dive case studies</span> showcasing how we solve complex technical challenges and deliver <span className="font-[600] text-[#004EE0] dark:text-primary">measurable business value</span>.
          </p>
        </div>

        {/* Mobile: Infinite Auto-Scroll Carousel */}
        <div className="block md:hidden -mx-4">
          <MobileInfiniteCarousel projects={allProjects} />
        </div>

        {/* Desktop: 3x2 Grid */}
        <div ref={gridRef} className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {allProjects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/case-studies" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
