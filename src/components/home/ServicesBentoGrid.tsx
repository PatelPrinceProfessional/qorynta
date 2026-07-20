import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { servicesConfig, type Service } from '@/data/services.config';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const getAccentColorStyle = (accent: Service['accent']) => {
  switch (accent) {
    case 'blue': return { bg: 'bg-blue-500/10 dark:bg-blue-500/20', text: 'text-blue-700 dark:text-blue-400', border: 'border-blue-200/50 dark:border-blue-500/30', hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-400', hoverBg: 'group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/40' };
    case 'teal': return { bg: 'bg-teal-500/10 dark:bg-teal-500/20', text: 'text-teal-700 dark:text-teal-400', border: 'border-teal-200/50 dark:border-teal-500/30', hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-400', hoverBg: 'group-hover:bg-teal-500/20 dark:group-hover:bg-teal-500/40' };
    case 'coral': return { bg: 'bg-rose-500/10 dark:bg-rose-500/20', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200/50 dark:border-rose-500/30', hoverBorder: 'hover:border-rose-400 dark:hover:border-rose-400', hoverBg: 'group-hover:bg-rose-500/20 dark:group-hover:bg-rose-500/40' };
    case 'purple': return { bg: 'bg-purple-500/10 dark:bg-purple-500/20', text: 'text-purple-700 dark:text-purple-400', border: 'border-purple-200/50 dark:border-purple-500/30', hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-400', hoverBg: 'group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/40' };
    case 'amber': return { bg: 'bg-amber-500/10 dark:bg-amber-500/20', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200/50 dark:border-amber-500/30', hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-400', hoverBg: 'group-hover:bg-amber-500/20 dark:group-hover:bg-amber-500/40' };
    case 'emerald': return { bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200/50 dark:border-emerald-500/30', hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-400', hoverBg: 'group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/40' };
    default: return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-border/50', hoverBorder: 'hover:border-primary/50', hoverBg: 'group-hover:bg-primary/20' };
  }
};

const TiltCard = ({ service, isFlagship, isSecondary }: { service: Service, isFlagship?: boolean, isSecondary?: boolean }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Limit rotation to ~4 degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.15]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const colors = getAccentColorStyle(service.accent);

  return (
    <motion.a
      href={service.href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 
        bg-white/40 dark:bg-black/40 backdrop-blur-2xl border ${colors.border} shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
        transition-colors duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${colors.hoverBorder}
        ${isFlagship ? 'md:row-span-2 lg:row-span-2 border-primary/30' : ''}
        ${isSecondary ? 'lg:col-span-2' : ''}
      `}
    >
      {/* Dynamic Glare Effect */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl z-20 mix-blend-overlay"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%)",
            opacity: isHovered ? glareOpacity : 0,
            left: glareX,
            top: glareY,
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />
      )}

      {isFlagship && (
        <div className="absolute top-0 right-0 pt-6 pr-8 flex items-start z-10 pointer-events-none" style={{ transform: 'translateZ(20px)' }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-sm">
            Most requested
          </span>
        </div>
      )}
      
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${colors.bg} ${colors.hoverBg}`}>
          <service.icon className={`w-7 h-7 ${colors.text}`} aria-hidden="true" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
          {service.name}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
          {service.tagline}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8 md:mb-4">
          {service.tags.map(tag => (
            <span 
              key={tag} 
              className={`text-xs font-semibold px-2.5 py-1 rounded-md bg-muted/40 backdrop-blur-md border border-border/40 ${colors.text}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center mt-auto text-sm font-semibold text-primary transition-all duration-300 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0" style={{ transform: 'translateZ(20px)' }}>
        <span className="hidden md:inline">Explore</span>
        <ChevronRight className="w-4 h-4 ml-1 md:ml-2 text-muted-foreground md:text-primary md:group-hover:text-primary" />
      </div>
    </motion.a>
  );
};

export const ServicesBentoGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 perspective-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        {servicesConfig.map((service, index) => {
          const isFlagship = service.flagship;
          const isSecondary = index === 4; 
          
          return (
            <TiltCard 
              key={service.id} 
              service={service} 
              isFlagship={isFlagship} 
              isSecondary={isSecondary} 
            />
          );
        })}
      </div>
    </div>
  );
};
