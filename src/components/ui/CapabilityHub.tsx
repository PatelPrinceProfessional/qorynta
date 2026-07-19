import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cloud, Smartphone, Database, BrainCircuit, Globe, ArrowUpRight } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'web',
    label: 'Enterprise Web',
    icon: Globe,
    roiMetric: '+150% Scale',
    outcome: 'Handling millions of requests seamlessly for global users.',
    chartType: 'up-trend',
    depth: 1.5,
  },
  {
    id: 'ai',
    label: 'Predictive AI',
    icon: BrainCircuit,
    roiMetric: '30% Efficiency',
    outcome: 'Automated workflows saving thousands of manual hours.',
    chartType: 'pulse',
    depth: 0.8,
  },
  {
    id: 'cloud',
    label: 'Cloud Architecture',
    icon: Cloud,
    roiMetric: '99.99% Uptime',
    outcome: 'Rock-solid infrastructure with virtually zero downtime.',
    chartType: 'bar',
    depth: 1.2,
  },
  {
    id: 'mobile',
    label: 'Mobile Experiences',
    icon: Smartphone,
    roiMetric: '4.8+ Rating',
    outcome: 'Top-tier user retention across iOS and Android.',
    chartType: 'curve',
    depth: 0.5,
  },
  {
    id: 'data',
    label: 'Data Engineering',
    icon: Database,
    roiMetric: 'PB-Scale Data',
    outcome: 'Unlocking actionable insights from massive datasets.',
    chartType: 'up-trend',
    depth: 1.8,
  },
];

const Sparkline = ({ type, isActive }: { type: string, isActive: boolean }) => {
  return (
    <div className="w-24 h-12 flex items-center justify-center opacity-80 mt-2">
      <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
        {type === 'up-trend' && (
          <motion.path
            d="M 5,35 L 25,25 L 45,30 L 70,10 L 95,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        )}
        {type === 'pulse' && (
          <motion.path
            d="M 0,20 L 20,20 L 30,5 L 45,35 L 55,20 L 100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        )}
        {type === 'bar' && (
          <g fill="currentColor">
            {[10, 25, 15, 30, 20].map((h, i) => (
              <motion.rect
                key={i}
                x={i * 20 + 5}
                y={40 - h}
                width="10"
                height={h}
                rx="2"
                initial={{ height: 0, y: 40, opacity: 0 }}
                animate={isActive ? { height: h, y: 40 - h, opacity: 1 } : { height: 0, y: 40, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: "easeOut" }}
              />
            ))}
          </g>
        )}
        {type === 'curve' && (
          <motion.path
            d="M 5,35 C 30,35 40,10 60,20 C 70,25 80,5 95,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        )}
      </svg>
    </div>
  );
};

export const CapabilityHub = ({ onNodeHover }: { onNodeHover?: (id: string | null) => void } = {}) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  useEffect(() => {
    if (onNodeHover) {
      if (activeNode !== null) {
        onNodeHover(CAPABILITIES[activeNode].id);
      } else {
        onNodeHover(null);
      }
    }
  }, [activeNode, onNodeHover]);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery-smooth movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to range -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const renderCardContent = (cap: typeof CAPABILITIES[0], isActive: boolean, Icon: any) => (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-2xl pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-white/10 text-cyan-300">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-indigo-100 uppercase tracking-wider">{cap.label}</span>
          </div>
          <ArrowUpRight className="w-4 h-4 text-cyan-400" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">{cap.roiMetric}</h3>
          <p className="text-xs text-indigo-200 mt-1 leading-relaxed opacity-90">{cap.outcome}</p>
        </div>

        <div className="pt-2 border-t border-indigo-400/20 text-cyan-300">
          <Sparkline type={cap.chartType} isActive={isActive} />
        </div>
      </div>
    </>
  );

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start sm:justify-center min-h-[550px] sm:min-h-[400px] lg:min-h-[500px] pointer-events-auto group pt-8 sm:pt-0">

      {/* Ambient Depth Background for SaaS Dashboard Feel */}
      <div className="absolute inset-0 -z-20 overflow-hidden rounded-[2.5rem] pointer-events-none">
        {/* Faint Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.06]" />

        {/* Slowly-Drifting Mesh Gradient Blobs */}
        <motion.div
          animate={{ x: [-30, 30, -30], y: [-30, 30, -30], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-600/10 blur-[80px] rounded-full"
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [30, -30, 30], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[80px] rounded-full"
        />

        {/* Dashboard Glass Frame */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-100/[0.02] to-transparent dark:from-slate-800/[0.02]" />
      </div>

      {/* --- 3D ORBIT (VISIBLE ON BOTH DESKTOP AND MOBILE) --- */}
      <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] flex items-center justify-center shrink-0">

        {/* Core Glow Effects */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-[80px] -z-10" />

        {/* Decorative Orbit Rings */}
        <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border border-cyan-500/10 dark:border-cyan-500/5" />
        <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full border border-blue-500/10 dark:border-blue-500/5 border-dashed" />

        {/* Central Core */}
        <motion.div
          className="absolute z-20 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/90 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] backdrop-blur-md cursor-pointer group/core"
          style={{
            x: useTransform(smoothX, [-1, 1], [-10, 10]),
            y: useTransform(smoothY, [-1, 1], [-10, 10]),
          }}
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
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-slate-900 dark:to-slate-900 border border-transparent dark:border-cyan-700 flex items-center justify-center transition-all duration-300 group-hover/core:shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover/core:scale-110">
            <span className="font-bold text-white dark:text-cyan-400 text-xs sm:text-sm tracking-widest z-10 transition-transform duration-300 group-hover/core:scale-110">CORE</span>
          </div>
        </motion.div>

        {/* Rotating Orbital Container */}
        <div className="absolute inset-0 animate-[spin_40s_linear_infinite] group-hover:[animation-play-state:paused] z-30">
          {CAPABILITIES.map((cap, i) => {
            // Calculate positions around the circle
            const angle = (i / CAPABILITIES.length) * Math.PI * 2;
            const radius = '42%';

            const top = `calc(50% + ${Math.sin(angle)} * ${radius})`;
            const left = `calc(50% + ${Math.cos(angle)} * ${radius})`;
            const isLeft = Math.cos(angle) < 0;

            const Icon = cap.icon;
            const isActive = activeNode === i;

            return (
              <div
                key={cap.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`View details for ${cap.title}`}
                className="absolute w-12 h-12 sm:w-14 sm:h-14 -ml-6 -mt-6 sm:-ml-7 sm:-mt-7"
                style={{ top, left }}
                onMouseEnter={() => { if (window.innerWidth >= 640) setActiveNode(i); }}
                onMouseLeave={() => { if (window.innerWidth >= 640) setActiveNode(null); }}
                onFocus={() => setActiveNode(i)}
                onBlur={() => setActiveNode(null)}
                onClick={() => { if (window.innerWidth < 640) setActiveNode(isActive ? null : i); }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveNode(isActive ? null : i);
                  }
                }}
              >
                {/* Counter-rotation to keep items upright */}
                <div className="w-full h-full animate-[spin_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused] relative flex items-center justify-center">

                  {/* Parallax Wrapper for Node */}
                  <motion.div
                    style={{
                      x: useTransform(smoothX, [-1, 1], [-20 * cap.depth, 20 * cap.depth]),
                      y: useTransform(smoothY, [-1, 1], [-20 * cap.depth, 20 * cap.depth]),
                    }}
                    className="relative z-40"
                  >
                    {/* Node Base Button */}
                    <motion.div
                      className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer transition-all duration-300 bg-white dark:bg-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-2 border-blue-200 dark:border-blue-500/30 z-50 opacity-100 ${isActive ? 'scale-110 shadow-[0_0_25px_rgba(59,130,246,0.8)] ring-4 ring-blue-400' : 'hover:scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]'}`}
                    >
                      <Icon className="w-7 h-7 text-blue-700 dark:text-cyan-400 opacity-100 font-extrabold drop-shadow-md" />
                    </motion.div>

                    {/* Expandable Insight Card (Desktop Only - Spawns to the side) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, x: isLeft ? 20 : -20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.5, x: isLeft ? 20 : -20, transition: { duration: 0.2 } }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className={`hidden sm:block absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-full mr-4' : 'left-full ml-4'} w-72 p-5 rounded-2xl bg-gradient-to-br from-indigo-900/95 to-violet-800/95 backdrop-blur-xl shadow-[0_20px_40px_-15px_rgba(49,46,129,0.5)] border border-indigo-400/30 z-50 overflow-hidden`}
                        >
                          {renderCardContent(cap, isActive, Icon)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MOBILE VIEW: DEDICATED STATS PANEL BELOW ORBIT --- */}
      <div className="sm:hidden w-full max-w-[320px] mt-6 relative z-40 h-[190px]">
        <AnimatePresence mode="wait">
          {activeNode !== null ? (
            <motion.div
              key={CAPABILITIES[activeNode].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full p-5 rounded-2xl bg-gradient-to-br from-indigo-900/95 to-violet-800/95 backdrop-blur-xl shadow-[0_15px_30px_-10px_rgba(49,46,129,0.4)] border border-indigo-400/30 overflow-hidden relative"
            >
              {renderCardContent(CAPABILITIES[activeNode], true, CAPABILITIES[activeNode].icon)}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-border/80 rounded-2xl bg-background/95 backdrop-blur-xl cursor-pointer shadow-lg"
            >
              <div className="text-4xl animate-bounce mb-3 drop-shadow-md">👆</div>
              <p className="text-base font-bold text-foreground text-center px-6">
                Tap any orbiting icon to reveal impact statistics
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Instruction Text */}
      <div className="hidden sm:block absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none">
        <span className="inline-block text-[10px] sm:text-xs font-semibold text-muted-foreground/80 tracking-widest uppercase px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-border/50 shadow-sm animate-pulse">
          Hover the icons above for statistics
        </span>
      </div>
    </div>
  );
};
