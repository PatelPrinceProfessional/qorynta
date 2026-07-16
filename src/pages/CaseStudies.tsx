import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/home/CTABanner';
import { allProjects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !headerRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(headerRef.current, 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          ease: "power3.out"
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Qorynta Services</title>
        <meta name="description" content="Explore our portfolio of successful web, mobile, and AI projects delivered for clients across the globe." />
      </Helmet>

            <main className="min-h-screen bg-background pt-24 transition-colors duration-500">
        
        {/* Header Section */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors duration-500 border-b border-white/5">
          {/* Ambient Glowing Effect for Dark Mode */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none transition-colors duration-500" />
          
          <div ref={headerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl relative z-10 opacity-0">
            <SectionLabel text="OUR PORTFOLIO" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-8 mt-6 leading-none tracking-tighter">
              We Ship <span className="font-serif italic font-light text-primary/80">Impact.</span> <br className="hidden md:block" /> See For Yourself.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Explore how we've helped startups and enterprises solve complex technical challenges and scale their operations.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 md:py-32 bg-background transition-colors duration-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {allProjects.map((project, index) => (
                <div key={index} className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />

      </main>
                </>
  );
};

export default CaseStudies;
