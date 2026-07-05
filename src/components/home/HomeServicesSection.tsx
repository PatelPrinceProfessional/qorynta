import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

const categories = ['All Services', 'Web & App', 'AI & Data', 'Design & Strategy', 'Cloud & DevOps'];

const categoryMapping: Record<string, string> = {
  'custom-web-development': 'Web & App',
  'mobile-app-development': 'Web & App',
  'saas-development': 'Web & App',
  'e-commerce-solutions': 'Web & App',
  'ai-machine-learning': 'AI & Data',
  'ui-ux-design': 'Design & Strategy',
  'it-consulting': 'Design & Strategy',
  'cloud-devops': 'Cloud & DevOps',
  'api-integration': 'Cloud & DevOps',
};

// Premium Consulting Style Card (Dark Mode Ready)
const ArchitecturalCard = ({ service, index, onClick }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.4, 
        ease: "easeInOut",
        delay: index * 0.1
      }}
      className="h-full"
    >
      <div
        onClick={onClick}
        className="group relative cursor-pointer h-full flex flex-col p-8 md:p-10 bg-[#FAFAFA] dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/80 transition-colors duration-500 overflow-hidden"
      >
        {/* Base Static Border */}
        <div className="absolute inset-0 border border-[#E2E8F0] dark:border-slate-800 pointer-events-none" />

        {/* The 'Reveal-Border' Effect */}
        <div className="absolute top-0 left-0 h-[1.5px] w-0 bg-[#0F172A] dark:bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
        <div className="absolute top-0 right-0 w-[1.5px] h-0 bg-[#0F172A] dark:bg-blue-500 transition-all duration-[250ms] ease-out delay-[100ms] group-hover:h-full" />
        <div className="absolute bottom-0 right-0 h-[1.5px] w-0 bg-[#0F172A] dark:bg-blue-500 transition-all duration-[250ms] ease-out delay-[200ms] group-hover:w-full" />
        <div className="absolute bottom-0 left-0 w-[1.5px] h-0 bg-[#0F172A] dark:bg-blue-500 transition-all duration-[250ms] ease-out delay-[300ms] group-hover:h-full" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col h-full transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[5px]">
          
          {/* Monochromatic Icon */}
          <div className="mb-8 relative inline-block">
            <service.icon 
              className="w-10 h-10 text-slate-800 dark:text-slate-300 transition-all duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:drop-shadow-[0_0_12px_rgba(0,87,255,0.4)] dark:group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" 
              strokeWidth={1.5} 
            />
          </div>
          
          {/* High-Contrast Typography */}
          <h3 className="text-xl md:text-2xl font-black text-[#0F172A] dark:text-slate-100 leading-tight mb-4 tracking-tight">
            {service.title}
          </h3>
          
          {/* Body Text */}
          <p className="text-sm text-[#64748B] dark:text-slate-400 font-medium leading-[1.6] flex-grow">
            {service.description}
          </p>
          
          {/* Action Anchor */}
          <div className="mt-8 self-start inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest transition-all duration-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white group-hover:shadow-[0_4px_14px_0_rgba(0,87,255,0.39)] dark:group-hover:shadow-[0_4px_20px_0_rgba(59,130,246,0.25)]">
            Learn More
            <div className="bg-white/0 rounded-full flex items-center justify-center ml-2 transition-all duration-400">
              <ArrowRight className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-[5px]" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HomeServicesSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Services');

  // Only hide api-integration when viewing 'All Services'. Show it when specifically clicking 'Cloud & DevOps'.
  const filteredServices = activeTab === 'All Services' 
    ? services.filter(service => service.slug !== 'api-integration') 
    : services.filter(service => categoryMapping[service.slug] === activeTab);

  return (
    <section className="py-24 md:py-32 relative bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header - Vibrant gradient heading adapts well to dark mode */}
        <ScrollReveal className="max-w-3xl mb-12 md:mb-24">
          <SectionLabel text="OUR EXPERTISE" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#8b5cf6]">
            End-to-End Solutions
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] dark:text-slate-400 font-medium max-w-2xl leading-[1.6]">
            Strategic architecture and robust engineering, designed to scale with your enterprise.
          </p>
        </ScrollReveal>

        {/* Minimalist Filter Bar - Sticky on Mobile with Horizontal Scroll */}
        <div className="sticky top-[72px] z-[60] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl pt-4 pb-2 -mx-4 px-4 md:relative md:top-auto md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:p-0 md:mx-0 mb-10 md:mb-20 border-b border-slate-100 dark:border-slate-800 md:border-none shadow-sm md:shadow-none">
          <ScrollReveal delay={0.1} className="flex flex-row md:flex-wrap overflow-x-auto no-scrollbar gap-6 md:gap-8 pb-2">
            {categories.map((category) => {
              const isActive = activeTab === category;
              
              // Mobile Reordering: Move Cloud & DevOps up, Web & App down
              let orderClass = '';
              if (category === 'All Services') orderClass = 'order-1';
              if (category === 'Cloud & DevOps') orderClass = 'order-2 md:order-5';
              if (category === 'AI & Data') orderClass = 'order-3';
              if (category === 'Design & Strategy') orderClass = 'order-4';
              if (category === 'Web & App') orderClass = 'order-5 md:order-2';
              
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`group relative pb-2 text-sm md:text-base font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex-shrink-0 ${orderClass} ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#8b5cf6] drop-shadow-sm'
                      : 'text-[#64748B] dark:text-slate-500 hover:text-[#0057FF] dark:hover:text-blue-400'
                  }`}
                >
                  {category}
                  {/* Animated Gradient Underline Indicator */}
                  <div 
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#0057FF] to-[#8b5cf6] transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`} 
                  />
                </button>
              );
            })}
          </ScrollReveal>
        </div>

        {/* Filtered Grid */}
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <ArchitecturalCard
                  key={service.slug}
                  service={service}
                  index={index}
                  onClick={() => navigate(`/services/${service.slug}`)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
