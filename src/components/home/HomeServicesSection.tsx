import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Map distinct, vibrant colors to each service index to match the reference image's colorful aesthetic
const colorMap = [
  { text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/40' },
  { text: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-100 dark:bg-teal-900/40' },
  { text: 'text-pink-600 dark:text-pink-400', bg: 'bg-pink-100 dark:bg-pink-900/40' },
  { text: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/40' },
  { text: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-100 dark:bg-orange-900/40' },
  { text: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/40' },
  { text: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-900/40' },
  { text: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-900/40' },
  { text: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-100 dark:bg-indigo-900/40' },
  { text: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-100 dark:bg-rose-900/40' },
];

const CompactServiceCard = ({ service, index, onClick }: any) => {
  const colors = colorMap[index % colorMap.length];
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion 3D Physics values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add smoothing to the movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // Map mouse coordinates to rotation
  // When mouse is top-left, we want card to tilt up and left.
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse position relative to card center (between -0.5 and 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset tilt when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      // 1) Entrance Animation: Staggered left-to-right
      initial={{ opacity: 0, x: -20, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.05
      }}
      // Wrapper needs perspective for 3D transforms
      style={{ perspective: 1000 }}
      className="h-full hardware-accelerate"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handleMouseMove}
        onPointerUp={handleMouseLeave}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.(e as any);
          }
        }}
        // 2) Hover Lift & Shadow Expansion (Antigravity)
        whileHover={{ scale: 1.02, z: 20 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
        className="group cursor-pointer flex flex-col items-center text-center p-4 sm:p-6 md:p-8 bg-[#FFFFFF] dark:bg-card rounded-[16px] border border-[#99CAFF]/50 hover:border-[#004EE0] shadow-[0px_10px_30px_rgba(5,22,80,0.04)] hover:shadow-[0px_18px_40px_rgba(0,78,224,0.12)] dark:border-border/80 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] dark:hover:shadow-[0_30px_60px_rgba(255,255,255,0.05)] transition-colors transition-shadow duration-300 ease h-full"
      >
        {/* Colorful Icon Container (Moves slightly forward on Z-axis to enhance 3D feel) */}
        <motion.div
          style={{ translateZ: 30 }}
          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 transition-transform duration-300 group-hover:scale-110 ${colors.bg}`}
        >
          <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${colors.text}`} strokeWidth={2} />
        </motion.div>

        {/* Bold Title */}
        <motion.h3
          style={{ translateZ: 20 }}
          className="text-[13px] sm:text-sm md:text-lg font-bold text-[#00072D] dark:text-foreground leading-tight mb-2 md:mb-3 group-hover:text-[#004EE0] dark:group-hover:text-blue-400 transition-colors duration-300"
        >
          {service.title}
        </motion.h3>

        {/* Single-sentence succinct description */}
        <motion.p
          style={{ translateZ: 10 }}
          className="text-[11px] sm:text-xs md:text-sm text-[#051650] dark:text-muted-foreground font-medium leading-[1.5] line-clamp-2 md:line-clamp-3"
        >
          {service.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export const HomeServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 relative bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-background transition-colors duration-500 overflow-hidden">

      {/* 3) Ambient 'Breathing' Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] sm:blur-[150px] animate-pulse-slow pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">

        {/* Header */}
        <ScrollReveal className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-sm md:text-base font-[700] tracking-[2px] text-[#0A2472] dark:text-muted-foreground uppercase mb-4">
            — We Offer —
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-[#00072D] dark:text-foreground uppercase">
            All <span className="bg-gradient-to-br from-[#004EE0] to-[#0A2472] text-transparent bg-clip-text dark:text-blue-500">Tech</span> Services
          </h2>

          {/* Subheader Ribbon */}
          <div className="inline-flex items-center justify-center px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[#004EE0] to-[#0069D9] dark:bg-blue-600 rounded-full shadow-[0px_8px_24px_rgba(0,78,224,0.2)] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="text-xs sm:text-sm md:text-lg text-[#F2FAF4] font-bold tracking-wider uppercase text-center">
              To Empower Your Ideas & Grow Your Business
            </p>
          </div>
        </ScrollReveal>

        {/* Dense 5x2 Matrix Grid for Desktop, 2-column Grid for Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <CompactServiceCard
              key={service.slug}
              service={service}
              index={index}
              onClick={() => navigate(`/services/${service.slug}`)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
