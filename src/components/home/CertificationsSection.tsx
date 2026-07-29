import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const CertificationsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h3 className="text-sm font-[700] tracking-[2px] text-[#0A2472] dark:text-muted-foreground uppercase">
            Recognized & Certified By
          </h3>
        </ScrollReveal>

        <div className="bg-[#FFFFFF] dark:bg-white/5 backdrop-blur-[8px] border border-[#99CAFF]/50 dark:border-white/10 rounded-[16px] shadow-[0px_6px_20px_rgba(5,22,80,0.03)] dark:shadow-none p-6 md:p-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="group flex items-center gap-2 text-xl font-black tracking-tighter cursor-pointer">
              <span className="text-[#00B22D] dark:text-[#00B22D] group-hover:brightness-110 transition-all duration-300">upwork</span>
              <span className="text-sm tracking-normal font-[600] bg-[#E3F2FF] dark:bg-muted px-2 py-0.5 rounded text-[#00072D] dark:text-foreground">Top Rated Plus</span>
            </div>

            <div className="group flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-bold tracking-tight text-[#051650] dark:text-white transition-colors duration-300">Clutch</span>
              <div className="flex text-[#FFB800] dark:text-[#FFB800] group-hover:brightness-110 transition-all duration-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
            </div>

            <div className="group flex items-center font-bold text-lg text-[#051650] dark:text-white transition-colors duration-300 cursor-pointer">
              ISO 9001:2015 <span className="font-[600] text-sm ml-2 text-[#00072D] dark:text-muted-foreground">Certified</span>
            </div>

            <div className="group flex items-center gap-2 font-bold text-[#051650] dark:text-white transition-colors duration-300 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[#F2A900] flex items-center justify-center text-slate-900 text-xs transition-all duration-300 group-hover:brightness-110">AWS</div>
              Partner Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
