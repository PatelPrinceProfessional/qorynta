import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);
  
  const coreServices = services.filter(s => s.category === 'Core');
  const aiServices = services.filter(s => s.category === 'AI');
  const allServices = [...coreServices, ...aiServices];
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const rows = sectionRef.current.querySelectorAll('.desktop-service-row');
    
    if (pathRef.current) {
      gsap.fromTo(pathRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".path-container",
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );
    }
    
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      rows.forEach((row, index) => {
        const isEven = index % 2 === 0;
        
        const visualSide = row.querySelector('.service-visual');
        const contentSide = row.querySelector('.service-content');
        
        gsap.fromTo(visualSide, 
          { scale: 0.85, opacity: 0, rotationY: isEven ? -20 : 20, rotationX: 10 },
          { 
            scale: 1, 
            opacity: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        gsap.fromTo(contentSide,
          { x: isEven ? 40 : -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.25,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        ScrollTrigger.create({
          trigger: row,
          start: "top center+=100",
          end: "bottom center-=100",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
          onLeave: () => setActiveIndex(prev => prev === index ? null : prev),
          onLeaveBack: () => setActiveIndex(prev => prev === index ? null : prev)
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const renderMobileService = (service: any, index: number, globalIndex: number) => {
    const isOpen = openMobileIndex === globalIndex;
    return (
      <div 
        key={globalIndex} 
        className={`mobile-service-card scroll-m-24 flex flex-col backdrop-blur-md rounded-2xl border transition-all duration-400 overflow-hidden ${isOpen ? 'bg-gradient-to-b from-blue-500/10 to-violet-500/5 border-blue-500 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.15)]' : 'bg-card/60 border-border/50 shadow-sm hover:border-primary/20'}`}
      >
        <button 
          onClick={(e) => {
            const isOpening = openMobileIndex !== globalIndex;
            setOpenMobileIndex(isOpening ? globalIndex : null);
            if (isOpening) {
              const card = e.currentTarget.closest('.mobile-service-card');
              if (card) {
                setTimeout(() => {
                  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
              }
            }
          }}
          className="flex items-center gap-4 p-4 w-full text-left min-h-[64px] active:bg-foreground/5 transition-colors duration-200"
          aria-expanded={isOpen}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-400 flex-shrink-0 ${isOpen ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-muted text-muted-foreground'}`}>
            <service.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className={`text-lg leading-tight transition-all duration-400 ${isOpen ? 'font-extrabold text-foreground' : 'font-bold text-foreground/80'}`}>
              {service.title}
            </h3>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform duration-400 ${isOpen ? 'rotate-180 text-blue-500' : 'text-muted-foreground'}`} />
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                height: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <div className="p-4 pt-0">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="text-sm text-muted-foreground mb-5 leading-relaxed font-medium"
                >
                  {service.description}
                </motion.p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-1 bg-background/80 rounded-md text-foreground/70 border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/services/${service.slug}`}
                  className="flex items-center justify-center gap-2 w-full text-sm font-bold text-primary-foreground bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3.5 min-h-[44px] rounded-xl shadow-md shadow-blue-500/20 active:scale-[0.98]"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderDesktopService = (service: any, index: number, globalIndex: number) => {
    const isEven = globalIndex % 2 === 0;
    const isActive = activeIndex === globalIndex;
    const isDimmed = activeIndex !== null && activeIndex !== globalIndex;
    
    return (
      <div 
        key={globalIndex} 
        className={`desktop-service-row flex flex-col md:flex-row items-center gap-10 lg:gap-20 w-full relative z-10 ${!isEven ? 'md:flex-row-reverse' : ''} p-4 md:p-8 rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${isActive ? 'ring-2 ring-blue-500/20 bg-background/50 shadow-[0_0_40px_rgba(59,130,246,0.05)]' : 'ring-0 ring-transparent'} ${isDimmed ? 'opacity-60 blur-[5px] scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}
      >
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] z-20 ${isActive ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] scale-150' : 'border-border shadow-none scale-100'}`}></div>

        <div className="service-visual w-full md:w-1/2 flex justify-center relative">
          <div className={`relative w-40 h-40 md:w-56 md:h-56 rounded-3xl flex items-center justify-center border group backdrop-blur-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${isActive ? 'bg-gradient-to-br from-blue-500/10 to-violet-500/5 border-blue-500/30 shadow-[inset_0_0_30px_rgba(59,130,246,0.2)]' : 'bg-gradient-to-br from-primary/10 to-primary/5 border-white/40 dark:border-white/10 shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_0_30px_rgba(255,255,255,0.02)]'}`}>
            <div className={`absolute inset-0 blur-[50px] transition-opacity duration-700 ease-in-out ${isActive ? 'bg-blue-500/20 opacity-100' : 'bg-primary/20 opacity-0 group-hover:opacity-100'}`}></div>
            <service.icon className={`w-16 h-16 md:w-24 md:h-24 relative z-10 drop-shadow-lg transition-all duration-500 ease-out ${isActive ? 'text-blue-500 scale-110' : 'text-primary group-hover:scale-110 group-hover:text-secondary'}`} />
          </div>
        </div>

        <div className={`service-content w-full md:w-1/2 flex flex-col justify-center text-center ${isEven ? 'md:text-left md:items-start' : 'md:text-left md:items-start'} md:px-6`}>
          <div className="inline-flex items-center gap-3 mb-4 justify-center md:justify-start">
            <span className={`w-8 h-px transition-colors duration-700 ${isActive ? 'bg-blue-500' : 'bg-primary/50'}`}></span>
            <span className={`text-sm font-black uppercase tracking-widest transition-colors duration-700 ${isActive ? 'text-blue-500' : 'text-primary'}`}>
              {service.category === 'AI' ? <Sparkles className="w-4 h-4 text-[#F59E0B]" /> : `0${index + 1}`}
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 font-medium">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {service.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-semibold px-4 py-1.5 bg-muted/80 backdrop-blur-sm border border-border/50 rounded-full text-muted-foreground shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <Link 
              to={`/services/${service.slug}`}
              className={`inline-flex items-center gap-2 text-sm font-bold text-primary-foreground transition-all duration-500 px-8 py-4 rounded-full shadow-lg group ${isActive ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/30 -translate-y-1' : 'bg-primary hover:bg-primary/90 hover:shadow-primary/30 hover:-translate-y-1'}`}
            >
              Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-transparent" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Services Section */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-28">
          <SectionLabel text="CORE SERVICES" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Structured Path to Digital Dominance
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow a highly calculated, professional process to solve complex business problems from concept to deployment.
          </p>
        </ScrollReveal>

        <div className="md:hidden flex flex-col gap-4 mb-16 relative z-20">
          {coreServices.map((service, index) => renderMobileService(service, index, index))}
        </div>

        <div className="path-container hidden md:flex flex-col gap-20 md:gap-32 mb-32 relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-border/40 -translate-x-1/2 rounded-full overflow-hidden z-0">
            <div ref={pathRef} className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          </div>
          {coreServices.map((service, index) => renderDesktopService(service, index, index))}
        </div>

        {/* AI Services Section */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-28 mt-24">
          <SectionLabel text="INTELLIGENT SYSTEMS" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-4">
            <Sparkles className="w-10 h-10 text-[#F59E0B]" />
            Artificial Intelligence
          </h2>
          <p className="text-lg text-muted-foreground">
            Leverage advanced AI and Machine Learning models to automate workflows, process visual data, and create custom conversational agents.
          </p>
        </ScrollReveal>

        <div className="md:hidden flex flex-col gap-4 mb-16 relative z-20">
          {aiServices.map((service, index) => renderMobileService(service, index, index + coreServices.length))}
        </div>

        <div className="path-container hidden md:flex flex-col gap-20 md:gap-32 mb-20 relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-border/40 -translate-x-1/2 rounded-full overflow-hidden z-0">
            <div className="w-full h-full bg-gradient-to-b from-[#F59E0B] to-rose-500 origin-top shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          </div>
          {aiServices.map((service, index) => renderDesktopService(service, index, index + coreServices.length))}
        </div>

      </div>
    </section>
  );
};
