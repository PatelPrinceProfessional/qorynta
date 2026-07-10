import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, HeartPulse, ShoppingBag, GraduationCap, Truck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const industries = [
  { name: 'FinTech', icon: Landmark, desc: 'Secure payment gateways & banking platforms' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'HIPAA compliant telehealth & EHR systems' },
  { name: 'E-Commerce', icon: ShoppingBag, desc: 'High-conversion stores & marketplaces' },
  { name: 'Real Estate', icon: Building2, desc: 'Property management & virtual tours' },
  { name: 'Education', icon: GraduationCap, desc: 'LMS platforms & EdTech solutions' },
  { name: 'Logistics', icon: Truck, desc: 'Supply chain & fleet tracking systems' },
];

export const IndustriesSection = () => {
  return (
    <section className="py-24 relative bg-background border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
        <ScrollReveal className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
            — Industries We Serve —
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-foreground">
            Specialized Domain Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We deliver tailored software solutions that solve unique industry challenges and drive operational efficiency.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{ind.name}</h3>
                <p className="text-muted-foreground text-sm">{ind.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
