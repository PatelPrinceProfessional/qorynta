import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { type Service } from '@/data/services.config';

// 1. WebDevCanvas: Simulating API requests and server handshakes
export const WebDevCanvas = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const logs = [
      "> GET /api/v1/users",
      "<- 200 OK (12ms)",
      "> POST /api/v1/auth",
      "<- 201 CREATED (45ms)",
      "  => establishing wss:// connection...",
      "  => wss:// connected (ping 18ms)",
      "> GET /api/v1/dashboard/metrics",
      "<- 200 OK (22ms)",
      "> Running database sync...",
      "<- Sync completed in 1.2s",
    ];
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const newLines = [...prev, logs[currentIndex]];
        if (newLines.length > 6) newLines.shift();
        return newLines;
      });
      currentIndex = (currentIndex + 1) % logs.length;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0d1117] rounded-3xl p-6 font-mono text-xs sm:text-sm overflow-hidden flex flex-col justify-end relative shadow-inner">
      <div className="absolute top-4 left-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        {lines.map((line, i) => (
          <motion.div
            key={i + line}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${line.startsWith('<-') ? 'text-green-400' : line.startsWith('>') ? 'text-blue-400' : 'text-gray-400'}`}
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-white/70 inline-block mt-1"
        ></motion.div>
      </div>
    </div>
  );
};

// 2. UIDesignCanvas: Visualizing bounding boxes and guides
export const UIDesignCanvas = () => {
  return (
    <div className="w-full h-full bg-slate-100 dark:bg-slate-900 rounded-3xl p-6 relative overflow-hidden flex items-center justify-center">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
      
      {/* Mock wireframe container */}
      <motion.div 
        animate={{ width: ['70%', '90%', '70%'], height: ['60%', '80%', '60%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative border-2 border-dashed border-rose-400/50 rounded-xl bg-white/50 dark:bg-black/50 backdrop-blur-sm p-4 flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <motion.div className="w-12 h-12 rounded-full bg-rose-400/30" />
          <div className="flex-1 space-y-2 py-1">
            <motion.div className="h-4 bg-rose-400/20 rounded w-3/4" />
            <motion.div className="h-4 bg-rose-400/20 rounded w-1/2" />
          </div>
        </div>
        <motion.div className="flex-1 bg-rose-400/10 rounded-lg border border-rose-400/20" />
        
        {/* Resize handles */}
        <div className="absolute -right-1.5 -bottom-1.5 w-3 h-3 bg-rose-500 rounded-full cursor-nwse-resize"></div>
        <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-rose-500 rounded-full"></div>
      </motion.div>
      
      {/* Animated alignment guide */}
      <motion.div 
        animate={{ x: ['-100%', '200%', '-100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-[1px] bg-blue-500/50"
      />
    </div>
  );
};

// 3. AICanvas: Tensor node grid
export const AICanvas = () => {
  return (
    <div className="w-full h-full bg-[#0a0a0a] rounded-3xl relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      
      {/* Central Node */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(245,158,11,0.2)", "0 0 60px rgba(245,158,11,0.6)", "0 0 20px rgba(245,158,11,0.2)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 backdrop-blur-md flex items-center justify-center z-10"
      >
        <div className="w-8 h-8 rounded-full bg-amber-400 blur-[2px]"></div>
      </motion.div>

      {/* Orbiting Particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-amber-300"
            style={{ translateY: -80 - i * 20 }}
          />
          {/* Faint connecting line */}
          <div className="absolute w-[1px] bg-gradient-to-t from-transparent to-amber-500/30" style={{ height: 80 + i * 20, top: '50%', transformOrigin: 'top' }}></div>
        </motion.div>
      ))}
    </div>
  );
};

// 4. CloudDevOpsCanvas: Cluster topology map
export const CloudDevOpsCanvas = () => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 bg-teal-500/5 mix-blend-screen"></div>
      
      {/* Topology Nodes */}
      <div className="flex justify-between items-end h-full w-full relative z-10">
        {[1, 2, 3].map((node) => (
          <div key={node} className="flex flex-col items-center gap-4">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: node * 0.4 }}
              className="w-full text-center text-[10px] font-mono text-teal-400/70"
            >
              ZONE-0{node}
            </motion.div>
            <div className="w-12 h-24 bg-teal-900/50 border border-teal-500/30 rounded-lg relative overflow-hidden">
              <motion.div 
                animate={{ y: ['100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: node * 0.2 }}
                className="absolute inset-x-0 h-1/3 bg-gradient-to-t from-transparent via-teal-400/20 to-transparent"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse delay-75"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Horizontal Connector */}
      <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-teal-500/20">
        <motion.div 
          animate={{ x: ['0%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-1/4 h-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]"
        />
      </div>
    </div>
  );
};

// 5. Generic FallbackCanvas
export const FallbackCanvas = ({ accentColor }: { accentColor: Service['accent'] }) => {
  // Mapping our predefined string accents to hex/rgb for generic styling where strict tailwind classes might be complex for motion
  const getGradient = (accent: Service['accent']) => {
    switch (accent) {
      case 'blue': return 'from-blue-500/20 to-blue-600/5';
      case 'teal': return 'from-teal-500/20 to-teal-600/5';
      case 'coral': return 'from-rose-500/20 to-rose-600/5';
      case 'purple': return 'from-purple-500/20 to-purple-600/5';
      case 'amber': return 'from-amber-500/20 to-amber-600/5';
      case 'emerald': return 'from-emerald-500/20 to-emerald-600/5';
      default: return 'from-primary/20 to-primary/5';
    }
  };

  const getRing = (accent: Service['accent']) => {
    switch (accent) {
      case 'blue': return 'ring-blue-500/30';
      case 'teal': return 'ring-teal-500/30';
      case 'coral': return 'ring-rose-500/30';
      case 'purple': return 'ring-purple-500/30';
      case 'amber': return 'ring-amber-500/30';
      case 'emerald': return 'ring-emerald-500/30';
      default: return 'ring-primary/30';
    }
  };

  return (
    <div className="w-full h-full bg-background rounded-3xl relative overflow-hidden flex items-center justify-center border border-border/50 shadow-inner">
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(accentColor)}`}></div>
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`w-32 h-32 rounded-3xl ring-2 ${getRing(accentColor)} bg-background/50 backdrop-blur-sm`}
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.5, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute w-40 h-40 rounded-full ring-1 ${getRing(accentColor)} opacity-50`}
      />
    </div>
  );
};
