import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Smartphone, Database, BrainCircuit, Globe } from 'lucide-react';

const CAPABILITIES = [
  { id: 'web', label: 'Enterprise Web', icon: Globe, metric: '100+ Projects Scaled' },
  { id: 'ai', label: 'Predictive AI', icon: BrainCircuit, metric: '30% Efficiency Increase' },
  { id: 'cloud', label: 'Cloud Architecture', icon: Cloud, metric: '99.99% Uptime SLA' },
  { id: 'mobile', label: 'Mobile Experiences', icon: Smartphone, metric: '4.8+ App Store Average' },
  { id: 'data', label: 'Data Engineering', icon: Database, metric: 'Petabyte-Scale Systems' },
];

export const CapabilityHub = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Display the active metric, or a default message if none is hovered.
  const activeMetric = activeNode !== null 
    ? CAPABILITIES[activeNode].metric 
    : 'Hover a node to see our impact';

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px] pointer-events-auto group">
      
      {/* 3D Hub Container */}
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
        
        {/* Core Glow Effects */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-[80px] -z-10" />
        
        {/* Decorative Orbit Rings */}
        <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] rounded-full border border-cyan-500/10" />
        <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full border border-blue-500/10 border-dashed" />

        {/* Central Core */}
        <motion.div 
          className="absolute z-20 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-md cursor-pointer group"
          animate={{
            boxShadow: [
              "0 0 20px rgba(6,182,212,0.1)",
              "0 0 60px rgba(6,182,212,0.4)",
              "0 0 20px rgba(6,182,212,0.1)",
            ]
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-slate-900 dark:to-slate-900 border border-transparent dark:border-cyan-700 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] dark:group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] group-hover:scale-110">
              <span className="font-bold text-white dark:text-cyan-400 text-xs sm:text-sm tracking-widest z-10 transition-transform duration-300 group-hover:scale-110">CORE</span>
          </div>
        </motion.div>

        {/* Rotating Orbital Container */}
        <div className="absolute inset-0 animate-[spin_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {CAPABILITIES.map((cap, i) => {
            // Calculate positions around the circle
            const angle = (i / CAPABILITIES.length) * Math.PI * 2;
            // Radius responsive: ~100px mobile, ~140px desktop
            const radius = '40%'; 
            
            const top = `calc(50% + ${Math.sin(angle)} * ${radius})`;
            const left = `calc(50% + ${Math.cos(angle)} * ${radius})`;
            
            const Icon = cap.icon;
            const isActive = activeNode === i;

            return (
              <div 
                key={cap.id}
                className="absolute w-12 h-12 sm:w-14 sm:h-14 -ml-6 -mt-6 sm:-ml-7 sm:-mt-7"
                style={{ top, left }}
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Counter-rotation to keep icons and tooltips upright */}
                <div className="w-full h-full flex flex-col items-center justify-center animate-[spin_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] relative">
                  
                  {/* Node Button with Click Effect */}
                  <motion.div 
                    whileTap={{ scale: 0.7, rotate: 15 }}
                    className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer transition-all duration-300 bg-blue-600 dark:bg-white shadow-lg ${isActive ? 'scale-110 shadow-[0_0_25px_rgba(59,130,246,0.6)] dark:shadow-[0_0_25px_rgba(255,255,255,0.6)]' : 'hover:scale-105'}`}
                  >
                    <Icon className="w-5 h-5 transition-colors duration-300 text-white dark:text-blue-600" />
                  </motion.div>

                  {/* Tooltip Label */}
                  <div className={`absolute top-full mt-2 px-3 py-1 rounded-full bg-background/90 border border-border/50 text-[10px] sm:text-xs font-medium whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    {cap.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Impact Metric */}
      <div className="mt-8 sm:mt-12 w-full text-center px-4 flex items-center justify-center h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeMetric}
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base font-bold text-blue-800 dark:text-cyan-400 tracking-wide drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          >
            {activeMetric}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
