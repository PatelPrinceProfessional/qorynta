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
    <section ref={sectionRef} className="py-20 md:py-32 relative bg-[#F8FAFC] dark:bg-[#0A192F] transition-colors duration-500 border-t border-slate-100 dark:border-transparent">
      {/* Optional faint glowing pulse for dark mode to match other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none transition-colors duration-500" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-16 opacity-0">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight max-w-3xl">
              Engineered Experiences for <span className="text-primary">Enterprise Scale</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our deep-dive case studies showcasing how we solve complex technical challenges and deliver measurable business value.
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
