import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesConfig, type Service } from '@/data/services.config';
import { motion } from 'framer-motion';
import { ServiceVisuals } from './ServiceVisuals';
import { MobileServicesDashboard } from './MobileServicesDashboard';

const getAccentColorStyle = (accent: Service['accent']) => {
  switch (accent) {
    case 'blue': return { text: 'text-blue-500', bg: 'bg-blue-500/10 dark:bg-blue-500/20', border: 'border-blue-500', buttonBg: 'bg-blue-600 hover:bg-blue-700 text-white' };
    case 'teal': return { text: 'text-teal-500', bg: 'bg-teal-500/10 dark:bg-teal-500/20', border: 'border-teal-500', buttonBg: 'bg-teal-600 hover:bg-teal-700 text-white' };
    case 'coral': return { text: 'text-rose-500', bg: 'bg-rose-500/10 dark:bg-rose-500/20', border: 'border-rose-500', buttonBg: 'bg-rose-600 hover:bg-rose-700 text-white' };
    case 'purple': return { text: 'text-purple-500', bg: 'bg-purple-500/10 dark:bg-purple-500/20', border: 'border-purple-500', buttonBg: 'bg-purple-600 hover:bg-purple-700 text-white' };
    case 'amber': return { text: 'text-amber-500', bg: 'bg-amber-500/10 dark:bg-amber-500/20', border: 'border-amber-500', buttonBg: 'bg-amber-600 hover:bg-amber-700 text-white' };
    case 'emerald': return { text: 'text-emerald-500', bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', border: 'border-emerald-500', buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white' };
    default: return { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary', buttonBg: 'bg-primary hover:bg-primary/90 text-primary-foreground' };
  }
};

export const ServicesScrollShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(servicesConfig[0].id);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActiveId(id);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      
      {/* Mobile-Only Dashboard Widget */}
      <MobileServicesDashboard />

      {/* Desktop-Only Layout */}
      <div className="hidden md:flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Sticky Side Nav (Desktop only) */}
        <div className="w-1/4 xl:w-1/5 shrink-0 relative z-20">
          <div className="sticky top-32 flex flex-col gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 px-3">
              Capabilities
            </h3>
            <nav aria-label="Services Navigation" className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              <ul className="flex flex-col gap-1">
                {servicesConfig.map((service) => {
                  const isActive = activeId === service.id;
                  const colors = getAccentColorStyle(service.accent);
                  return (
                    <li key={service.id}>
                      <button
                        onClick={() => scrollToService(service.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                          ${isActive ? `bg-muted/80 font-bold ${colors.text} border-l-4 ${colors.border}` : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground font-medium border-l-4 border-transparent'}
                        `}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <service.icon className={`w-4 h-4 shrink-0 ${isActive ? colors.text : 'opacity-60'}`} aria-hidden="true" />
                        <span className="truncate">{service.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Right Column: Scroll-Spy Content */}
        <div className="w-full md:w-3/4 xl:w-4/5 flex flex-col gap-24 md:gap-40 lg:gap-64 pb-32 relative z-20">
          {servicesConfig.map((service, index) => {
            const colors = getAccentColorStyle(service.accent);
            const isActive = activeId === service.id;
            
            return (
              <section 
                key={service.id} 
                id={service.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="scroll-mt-32 md:scroll-mt-48 flex flex-col gap-8 md:gap-12 relative"
              >
                <div className="md:hidden flex items-center gap-4 mb-2">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colors.bg}`}>
                    <service.icon className={`w-6 h-6 ${colors.text}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {service.name}
                  </h3>
                </div>

                {/* Structured Grid Element explicitly pairing visuals and copy */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-start">
                  
                  {/* Content Area */}
                  <div className="flex flex-col">
                    <h2 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                      {service.name}
                    </h2>
                    
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0.5, y: 10 }}
                      animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : (prefersReducedMotion ? 0 : 10) }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="prose prose-lg dark:prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed"
                    >
                      <p className="text-lg mb-8">
                        {service.description}
                      </p>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {service.tags.map(tag => (
                        <span 
                          key={tag} 
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm ${colors.text}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div>
                      <Link
                        to={service.href}
                        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-sm hover:-translate-y-1 ${colors.buttonBg} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
                      >
                        Explore Service <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Elite Visual Area */}
                  <div className="w-full aspect-square md:aspect-[4/3] xl:aspect-square flex items-center justify-center">
                     <ServiceVisuals type={service.id} />
                  </div>
                  
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
};
