import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const CertificationsSection = () => {
  return (
    <section className="py-16 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h3 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Recognized & Certified By
          </h3>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter">
            <span className="text-[#00B22D]">upwork</span>
            <span className="text-sm tracking-normal font-medium bg-muted px-2 py-0.5 rounded text-foreground">Top Rated Plus</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground">Clutch</span>
            <div className="flex text-[#FF5D4F]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
          </div>
          
          <div className="flex items-center font-bold text-lg text-foreground">
            ISO 9001:2015 <span className="font-normal text-sm ml-2 text-slate-600 dark:text-slate-400">Certified</span>
          </div>
          
          <div className="flex items-center gap-2 font-bold text-foreground">
            <div className="w-8 h-8 rounded-full bg-[#F2A900] flex items-center justify-center text-slate-900 text-xs">AWS</div>
            Partner Network
          </div>
        </div>
      </div>
    </section>
  );
};
