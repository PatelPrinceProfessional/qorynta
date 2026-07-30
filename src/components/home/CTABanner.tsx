import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
export const CTABanner = () => {
  return (
    <section className="bg-[#f2faf4] transition-colors duration-300 py-16 px-4 relative overflow-hidden">
      
      {/* Ambient Aurora Lighting */}
      <div className="bg-[#E3F2FF] blur-3xl w-[600px] h-[300px] absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none" />
      <div className="bg-[#99CAFF]/30 blur-3xl w-[600px] h-[300px] absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none" />
      {/* Floating Glass Panel Surface */}
      <ScrollReveal
        direction="up"
        className="max-w-5xl mx-auto rounded-[2.5rem] p-10 sm:p-14 relative overflow-hidden text-center bg-white/85 backdrop-blur-2xl border-2 border-[#99CAFF]/80 shadow-[0_20px_50px_-10px_rgba(0,78,224,0.12)] hover:border-[#004EE0] transition-all duration-300 z-10 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#004EE0] before:to-transparent"
      >
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E3F2FF] border border-[#99CAFF] text-[#042E7B] font-mono text-xs uppercase tracking-[0.2em] font-extrabold px-4 py-1.5 rounded-full mb-6 shadow-sm">
          
          <span className="text-sm">🚀</span> FAST-TRACK YOUR PRODUCT
        </div>
        {/* High-Conversion Typography */}
        <h2 className="text-[#00072d] font-black tracking-tight text-3xl sm:text-5xl sm:leading-tight mb-4">
          
          Ready to Build
          <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent">
            Something Amazing?
          </span>
        </h2>
        <p className="text-[#051650] font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-4 mb-8">
          
          Let's discuss your project requirements. We respond within 24 hours
          with a free technical scoping call.
        </p>
        {/* Refined High-Visibility CTA Button Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            to="/contact"
            className="group bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] text-white font-extrabold text-base px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,78,224,0.3)] hover:shadow-[0_15px_35px_rgba(0,78,224,0.45)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
          >
            
            Get a Proposal
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="group bg-white/90 border-2 border-[#99CAFF] text-[#042E7B] hover:bg-[#E3F2FF] hover:border-[#004EE0] hover:text-[#00072d] font-bold text-base px-8 py-4 rounded-full shadow-sm hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
          >
            
            <CalendarCheck className="w-5 h-5" /> Book a Free Call
          </Link>
        </div>
        {/* SLA Trust Badge */}
        <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#042E7B] mt-6 w-full">
          
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          Guaranteed initial technical scoping call within 24 hours
        </div>
      </ScrollReveal>
    </section>
  );
};
