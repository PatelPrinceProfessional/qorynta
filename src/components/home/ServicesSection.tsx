import React from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServicesBentoGrid } from './ServicesBentoGrid';
import { ServicesScrollShowcase } from './ServicesScrollShowcase';
import { motion } from 'framer-motion';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative bg-transparent">
      {/* Premium Blueprint Underlay */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute top-[5%] -left-[5%] font-mono text-[12vw] sm:text-[10vw] font-black text-foreground opacity-[0.02] dark:opacity-[0.03] whitespace-nowrap leading-none transform -rotate-2">
          // INIT_SYSTEM
        </div>
        <div className="absolute top-[40%] -right-[10%] font-mono text-[14vw] sm:text-[12vw] font-black text-foreground opacity-[0.015] dark:opacity-[0.02] whitespace-nowrap leading-none transform rotate-3">
          &lt;ARCHITECTURE /&gt;
        </div>
        <div className="absolute bottom-[10%] left-[10%] font-mono text-[16vw] sm:text-[14vw] font-black text-foreground opacity-[0.02] dark:opacity-[0.03] whitespace-nowrap leading-none">
          0x8080
        </div>
        {/* Subtle grid lines for architectural feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      {/* Overview Layer - Bento Grid */}
      <div className="container mx-auto relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
          <SectionLabel text="OUR CAPABILITIES" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            A Structured Path to Digital Dominance
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We follow a highly calculated, professional process to solve complex business problems from concept to deployment. Explore our core service offerings below.
          </p>
        </ScrollReveal>

        <ServicesBentoGrid />
      </div>

      {/* Visual Separator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-16 flex items-center justify-center opacity-60">
        <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <span className="px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
          Explore in depth
        </span>
        <div className="h-px w-full max-w-[200px] bg-gradient-to-l from-transparent via-border to-transparent"></div>
      </div>

      {/* Detail Layer - Scroll-Spy Showcase */}
      <div className="container mx-auto relative z-10">
        <ServicesScrollShowcase />
      </div>
    </section>
  );
};
