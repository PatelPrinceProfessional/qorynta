import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { type Service } from '@/data/services.config';

interface VisualConfig {
  gradient: string;
  graphic: React.ReactNode;
}

const getVisualConfig = (id: string): VisualConfig => {
  switch (id) {
    case 'custom-web-development':
      return {
        gradient: 'from-[#E3F2FF]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-32 h-32 rounded-xl backdrop-blur-xl bg-gradient-to-br from-cyan-300/80 to-blue-500/60 backdrop-blur-md border border-white/80 transform rotate-12 group-hover:rotate-6 group-hover:translate-y-[-10px] transition-all duration-700 ease-out shadow-[0_10px_30px_rgba(0,100,255,0.2)]"></div>
            <div className="absolute w-24 h-24 rounded-xl bg-gradient-to-tr from-blue-400/80 to-indigo-500/60 backdrop-blur-lg border border-white transform -rotate-6 group-hover:rotate-0 group-hover:translate-y-[-20px] transition-all duration-700 ease-out delay-75 shadow-[0_10px_30px_rgba(0,100,255,0.25)]"></div>
          </div>
        )
      };
    case 'mobile-app-development':
      return {
        gradient: 'from-[#F3E8FF]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full backdrop-blur-xl bg-gradient-to-br from-purple-300/80 to-indigo-400/60 backdrop-blur-md border border-white/80 group-hover:scale-105 group-hover:translate-y-[-10px] transition-all duration-700 ease-out shadow-[0_10px_30px_rgba(100,0,255,0.2)]"></div>
            <div className="absolute top-[20%] left-[20%] px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white text-[9px] font-bold text-purple-700 shadow-sm group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700">+ Trigger</div>
            <div className="absolute bottom-[30%] right-[15%] px-2 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white text-[9px] font-bold text-indigo-700 shadow-sm group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-700 delay-75">Action</div>
          </div>
        )
      };
    case 'e-commerce-solutions':
      return {
        gradient: 'from-[#FFE4E6]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-24 h-32 rounded-xl bg-gradient-to-b from-rose-200/80 to-pink-300/60 backdrop-blur-md border border-white/90 group-hover:translate-y-[-15px] transition-all duration-700 ease-out shadow-[0_15px_35px_rgba(255,100,150,0.2)] flex items-start justify-center pt-4">
              <div className="w-12 h-6 border-t-2 border-l-2 border-r-2 border-white rounded-t-full absolute -top-6"></div>
            </div>
          </div>
        )
      };
    case 'cloud-devops':
      return {
        gradient: 'from-[#E0F2FE]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute w-36 h-28 rounded-lg backdrop-blur-xl bg-gradient-to-br from-sky-200/80 to-blue-300/60 backdrop-blur-md border border-white/80 flex flex-col group-hover:translate-y-[-10px] group-hover:rotate-2 transition-all duration-700 shadow-[0_10px_30px_rgba(0,150,255,0.2)] overflow-hidden">
                <div className="h-6 border-b border-white/60 flex items-center px-2 gap-1 bg-white/20">
                  <div className="w-2 h-2 rounded-full bg-red-400/90"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400/90"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/90"></div>
                </div>
                <div className="flex-1 p-3 flex flex-col gap-2">
                   <div className="w-full h-2 rounded-full bg-white/80"></div>
                   <div className="w-3/4 h-2 rounded-full bg-white/80"></div>
                </div>
             </div>
          </div>
        )
      };
    case 'ui-ux-design':
      return {
        gradient: 'from-[#FCE7F3]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
             <div className="absolute w-28 h-36 rounded-lg backdrop-blur-xl bg-gradient-to-br from-pink-200/80 to-fuchsia-300/60 backdrop-blur-md border border-white/80 transform rotate-x-[60deg] rotate-z-[-20deg] group-hover:translate-y-[-20px] transition-all duration-700 shadow-[0_20px_40px_rgba(255,100,200,0.2)]"></div>
             <div className="absolute w-28 h-36 rounded-lg bg-gradient-to-tr from-fuchsia-200/80 to-purple-300/60 backdrop-blur-lg border border-white transform rotate-x-[60deg] rotate-z-[-20deg] translate-y-[-20px] group-hover:translate-y-[-40px] transition-all duration-700 delay-75 shadow-[0_20px_40px_rgba(255,100,200,0.25)]"></div>
          </div>
        )
      };
    case 'it-consulting':
      return {
        gradient: 'from-[#D1FAE5]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute bottom-[20%] w-36 h-12 rounded-[100%] bg-gradient-to-r from-emerald-300/60 to-teal-400/50 blur-md transform group-hover:scale-110 transition-all duration-700"></div>
             <div className="absolute w-24 h-24 rounded-full backdrop-blur-xl bg-gradient-to-br from-emerald-200/80 to-teal-300/70 backdrop-blur-md border border-white/90 group-hover:translate-y-[-15px] transition-all duration-700 shadow-[0_10px_30px_rgba(50,255,150,0.25)]"></div>
          </div>
        )
      };
    case 'ai-machine-learning':
      return {
        gradient: 'from-[#EDE9FE]/70 to-[#E3F2FF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute w-24 h-24 rounded-full backdrop-blur-xl bg-gradient-to-br from-violet-300/70 to-fuchsia-300/60 backdrop-blur-md border border-white/70 group-hover:scale-110 transition-all duration-700 shadow-[0_0_30px_rgba(150,100,255,0.3)]"></div>
             <div className="absolute w-16 h-16 rounded-full backdrop-blur-xl bg-gradient-to-br from-fuchsia-300/80 to-violet-400/70 backdrop-blur-lg border border-white group-hover:rotate-180 transition-all duration-1000 flex items-center justify-center">
                <div className="w-6 h-6 bg-white/90 rounded-full blur-sm"></div>
             </div>
             <div className="absolute w-4 h-4 rounded bg-white backdrop-blur top-[20%] left-[25%] shadow-sm transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700"></div>
             <div className="absolute w-3 h-3 rounded bg-white backdrop-blur bottom-[25%] right-[25%] shadow-sm transform group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-700"></div>
          </div>
        )
      };
    case 'generative-ai':
      return {
        gradient: 'from-[#FEF3C7]/70 to-[#F3E8FF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-amber-200/80 backdrop-blur-md filter drop-shadow-[0_10px_20px_rgba(255,200,0,0.25)] group-hover:translate-y-[-10px] group-hover:rotate-12 transition-all duration-700"></div>
             <div className="absolute top-[30%] left-[20%] w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400/90 to-purple-400/90 transform rotate-[-30deg] group-hover:opacity-100 opacity-80 transition-opacity duration-700"></div>
             <div className="absolute bottom-[30%] right-[20%] w-32 h-[1px] bg-gradient-to-r from-purple-400/90 via-amber-400/90 to-transparent transform rotate-[-30deg] group-hover:opacity-100 opacity-80 transition-opacity duration-700 delay-100"></div>
          </div>
        )
      };
    case 'cybersecurity-solutions':
      return {
        gradient: 'from-[#ECFDF5]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute w-28 h-32 backdrop-blur-xl bg-gradient-to-br from-emerald-300/80 to-teal-500/60 backdrop-blur-md border border-white/90 shadow-[0_15px_35px_rgba(0,255,150,0.2)] rounded-t-xl rounded-b-[50%] group-hover:translate-y-[-10px] transition-all duration-700 flex items-center justify-center">
                <div className="w-6 h-8 border-2 border-white rounded-full flex flex-col items-center justify-end pb-1">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
             </div>
          </div>
        )
      };
    case 'saas-development':
      return {
        gradient: 'from-[#DBEAFE]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
             <div className="absolute w-20 h-20 backdrop-blur-xl bg-gradient-to-br from-blue-300/80 to-sky-400/60 backdrop-blur-md border border-white/80 transform rotate-x-[60deg] rotate-z-[45deg] translate-y-[-10px] translate-x-[10px] group-hover:translate-y-[-20px] transition-all duration-700 shadow-[0_15px_30px_rgba(0,100,255,0.2)]"></div>
             <div className="absolute w-20 h-20 bg-gradient-to-tr from-sky-300/80 to-indigo-400/60 backdrop-blur-lg border border-white transform rotate-x-[60deg] rotate-z-[45deg] translate-y-[10px] translate-x-[-10px] group-hover:translate-y-[0px] transition-all duration-700 delay-75 shadow-[0_15px_30px_rgba(0,100,255,0.25)]"></div>
          </div>
        )
      };
    case 'ai-chatbots':
      return {
        gradient: 'from-[#F3E8FF]/70 to-[#E3F2FF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute w-32 h-24 backdrop-blur-xl bg-gradient-to-br from-purple-300/80 to-blue-300/60 backdrop-blur-md border border-white/90 rounded-2xl rounded-bl-sm group-hover:translate-y-[-10px] group-hover:scale-105 transition-all duration-700 shadow-[0_15px_35px_rgba(150,100,255,0.2)] flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-tr from-purple-400/90 to-blue-400/90 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute w-6 h-6 bg-white rounded-full"></div>
             </div>
          </div>
        )
      };
    default:
      // Fallback style for api-integration, computer-vision, nlp-text-analysis
      return {
        gradient: 'from-[#F8FAFC]/70 to-[#FFFFFF]/70',
        graphic: (
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute w-24 h-24 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-slate-200/80 to-gray-300/60 backdrop-blur-md border border-white/80 transform rotate-12 group-hover:rotate-6 group-hover:translate-y-[-10px] transition-all duration-700 ease-out shadow-[0_10px_30px_rgba(0,0,0,0.1)]"></div>
          </div>
        )
      };
  }
};

interface GlassCardProps {
  service: Service;
  index: number;
  isFlagship?: boolean;
  isSecondary?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ service, index, isFlagship, isSecondary }) => {
  const { gradient, graphic } = getVisualConfig(service.id);
  
  // Format index as 2 digits
  const displayIndex = (index + 1).toString().padStart(2, '0');

  // If the card is in a small grid slot, we might want it to stack vertically. 
  // For flagship/secondary, we can keep the 2-column split.
  const isLargeCard = isFlagship || isSecondary;

  return (
    <motion.a
      href={service.href}
      className={`
        group relative w-full rounded-[24px] overflow-hidden block
        backdrop-blur-xl bg-gradient-to-br ${gradient}
        dark:from-[#040A18]/90 dark:to-[#0B152E]/90 dark:border-[#00F0FF]/20 dark:shadow-[0_0_25px_rgba(0,240,255,0.05)]
        border border-[#042E7B]/15 shadow-[0_10px_30px_rgba(5,22,80,0.04)]
        transition-all duration-[400ms]
        hover:-translate-y-[6px] hover:scale-[1.01] hover:border-[#004EE0] dark:hover:border-[#00F0FF]/50
        hover:shadow-[0_0_20px_rgba(0,78,224,0.18)] dark:hover:shadow-[0_0_35px_rgba(0,240,255,0.2)]
        ${isFlagship ? 'md:row-span-2 lg:row-span-2' : ''}
        ${isSecondary ? 'lg:col-span-2' : ''}
      `}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Outer subtle ring */}
      <div className="absolute inset-0 rounded-[24px] border border-[#99CAFF]/30 pointer-events-none group-hover:border-transparent transition-colors duration-[400ms]"></div>

      <div className={`grid grid-cols-1 ${isLargeCard ? 'lg:grid-cols-2' : ''} min-h-[280px] h-full`}>
        {/* Left Column (Text & Action) */}
        <div className="p-6 md:p-8 flex flex-col justify-between z-10 relative">
          <div>
            <span className="text-[#051650] dark:text-[#00F0FF] font-black opacity-100 text-lg mb-2 block">
              {displayIndex}
            </span>
            <h3 className="text-[#00072D] dark:text-white font-[800] text-[22px] leading-[1.2] mb-3">
              {service.name}
            </h3>
            <p className="text-[#051650] dark:text-slate-300 text-[14px] leading-[1.5] mb-6">
              {service.tagline}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {service.tags.map(tag => (
                <span 
                  key={tag}
                  className="bg-[#E3F2FF] text-[#004EE0] dark:bg-[#00F0FF]/10 dark:text-[#00F0FF] dark:border dark:border-[#00F0FF]/20 rounded-[20px] px-[10px] py-[4px] text-[11px] font-semibold whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom-Left Action Button */}
          <div className="w-10 h-10 rounded-full bg-[#00072D]/10 dark:bg-[#00F0FF]/10 dark:border dark:border-[#00F0FF]/30 dark:shadow-[inset_0_0_10px_rgba(0,240,255,0.15)] group-hover:bg-[#004EE0] dark:group-hover:bg-[#00F0FF]/30 flex items-center justify-center transition-colors duration-300 shrink-0">
            <ArrowRight className="w-4 h-4 text-[#00072D] dark:text-[#00F0FF] group-hover:text-white dark:group-hover:text-white transform group-hover:translate-x-[3px] transition-all duration-300" />
          </div>
        </div>

        {/* Right Column (3D Glass Artwork) */}
        <div className="relative min-h-[160px] md:min-h-full overflow-hidden flex items-center justify-center p-6 pointer-events-none">
          {/* Ambient light glow behind artwork */}
          <div className="absolute inset-0 bg-white/20 dark:bg-transparent mix-blend-overlay"></div>
          {graphic}
        </div>
      </div>
    </motion.a>
  );
};
