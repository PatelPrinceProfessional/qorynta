import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. Custom Web Development ---
const WebDevVisual = () => {
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    const sequence = [
      "> POST /api/v1/auth",
      "=> establishing wss:// connection... (ping 18ms)",
      "> Running database sync...",
      "<- Sync completed.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-3), sequence[i % sequence.length]]);
      i++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden flex flex-col relative shadow-2xl">
      <div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex gap-2 text-xs font-mono text-slate-500">
          <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded">main.tsx</span>
          <span className="px-2 py-1">vite.config.ts</span>
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs font-mono text-emerald-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          BUILD PASS
        </div>
      </div>
      <div className="p-6 font-mono text-sm text-slate-400 flex-1 relative">
        <div className="space-y-2 opacity-60">
          <p><span className="text-purple-400">import</span> {'{'} Server {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-400">'@core/server'</span>;</p>
          <p><span className="text-purple-400">const</span> api = <span className="text-blue-400">new</span> Server();</p>
          <p>api.<span className="text-blue-400">listen</span>(8080, () =&gt; {'{'}</p>
          <p className="pl-4">console.<span className="text-blue-400">log</span>(<span className="text-emerald-400">'Running...'</span>);</p>
          <p>{'}'});</p>
        </div>
        
        {/* Floating Status Banner */}
        <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl p-4 shadow-xl">
          <div className="flex flex-col gap-1.5">
            <AnimatePresence>
              {logs.map((log, i) => (
                <motion.div
                  key={i + log}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  className={`text-xs ${log.startsWith('<-') ? 'text-emerald-400' : log.startsWith('=>') ? 'text-blue-400' : 'text-slate-300'}`}
                >
                  {log}
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity }} className="w-2 h-3 bg-slate-400 mt-1"></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. Mobile App Development ---
const MobileDevVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl relative overflow-hidden flex items-center justify-center">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
      
      {/* Smartphone Frame */}
      <div className="w-48 h-[340px] bg-slate-900 rounded-[2rem] border-[4px] border-slate-800 shadow-2xl relative z-10 flex flex-col items-center justify-start p-2 pt-6 overflow-hidden">
        <div className="w-16 h-4 bg-slate-950 rounded-full absolute top-2 z-20"></div>
        
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-20 bg-blue-500/20 backdrop-blur-md rounded-xl border border-blue-500/30 mb-3" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-full h-24 bg-purple-500/20 backdrop-blur-md rounded-xl border border-purple-500/30 mb-3" />
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-full h-20 bg-rose-500/20 backdrop-blur-md rounded-xl border border-rose-500/30" />
        
        {/* Simulated gesture pathway */}
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [0, 50, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-8 h-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/50 blur-[1px]"
        />
      </div>

      {/* Floating Badges */}
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute left-8 top-16 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-semibold text-blue-400"
      >
        iOS Core
      </motion.div>
      <motion.div 
        animate={{ opacity: [1, 0.4, 1] }} 
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute right-8 bottom-16 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-semibold text-green-400"
      >
        Android Runtime
      </motion.div>
    </div>
  );
};

// --- 3. UI/UX Design & Prototyping ---
const UIUXVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415530_1px,transparent_1px),linear-gradient(to_bottom,#33415530_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      
      <motion.div 
        animate={{ width: ['60%', '80%', '60%'], height: ['50%', '70%', '50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative border border-rose-500/50 bg-slate-900/50 backdrop-blur p-4 flex flex-col gap-4"
      >
        <div className="absolute -top-6 text-[10px] text-rose-400 font-mono">W: auto H: auto</div>
        <div className="absolute -left-1.5 -top-1.5 w-3 h-3 border border-rose-500 bg-slate-950"></div>
        <div className="absolute -right-1.5 -top-1.5 w-3 h-3 border border-rose-500 bg-slate-950"></div>
        <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 border border-rose-500 bg-slate-950"></div>
        <div className="absolute -right-1.5 -bottom-1.5 w-3 h-3 border border-rose-500 bg-slate-950"></div>
        
        <motion.div className="w-full h-12 bg-rose-500/20 rounded border border-rose-500/30" />
        <motion.div className="w-3/4 h-8 bg-rose-500/20 rounded border border-rose-500/30" />
      </motion.div>

      {/* Alignment guides */}
      <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-[1px] bg-blue-500/50" />
      <motion.div animate={{ y: ['-100%', '200%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[1px] bg-blue-500/50" />
    </div>
  );
};

// --- 4. AI & Machine Learning ---
const AIMLVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center">
      {/* Grid Network */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950"></div>
      
      <div className="relative w-64 h-64">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.5, 1], backgroundColor: ['#f59e0b40', '#f59e0bff', '#f59e0b40'] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className="w-3 h-3 rounded-full shadow-[0_0_15px_#f59e0b]"
              style={{ translateY: -40 - i * 15 }}
            />
            <div className="absolute w-[1px] bg-gradient-to-t from-transparent to-amber-500/20" style={{ height: 40 + i * 15, top: '50%', transformOrigin: 'top' }}></div>
          </motion.div>
        ))}
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 m-auto w-16 h-16 bg-amber-500/20 backdrop-blur-xl border border-amber-500/50 rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_#f59e0b40]"
        >
          <div className="w-6 h-6 bg-amber-400 rounded-full blur-[2px]"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-lg text-xs font-mono text-slate-300">
        <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>Loss: 0.024</motion.span>
      </div>
    </div>
  );
};

// --- 5. Cloud Infrastructure & DevOps ---
const CloudDevOpsVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative p-8 flex flex-col justify-between">
      <div className="w-full flex justify-center mb-4">
        <div className="px-4 py-1.5 bg-slate-900 border border-teal-500/30 rounded-full text-[10px] font-mono text-teal-400">API GATEWAY</div>
      </div>
      
      <div className="flex-1 flex justify-between items-end relative">
        <motion.div animate={{ x: ['0%', '100%', '0%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-10 right-10 h-[1px] bg-teal-500/20">
          <div className="w-1/4 h-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]"></div>
        </motion.div>

        {[1, 2, 3].map(zone => (
          <div key={zone} className="flex flex-col items-center gap-4 z-10">
            <div className="text-[10px] font-mono text-teal-500/70">ZONE-0{zone}</div>
            <div className="w-16 h-28 bg-slate-900/80 border border-teal-500/20 rounded-xl relative overflow-hidden backdrop-blur">
              <motion.div 
                animate={{ y: ['100%', '0%'] }} 
                transition={{ duration: 2, repeat: Infinity, delay: zone * 0.3 }}
                className="absolute inset-x-0 h-1/2 bg-gradient-to-t from-transparent via-teal-500/20 to-transparent"
              />
              <div className="absolute bottom-3 w-full flex justify-center gap-1.5">
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-teal-400"></motion.div>
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-teal-400"></motion.div>
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-teal-400"></motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 6. E-Commerce Solutions ---
const ECommerceVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative p-6 flex gap-6">
      {/* Left: Conversion Funnel */}
      <div className="flex-1 flex flex-col gap-3 justify-center">
        <div className="text-[10px] font-mono text-slate-500 mb-2">CHECKOUT EVENT TRACKER</div>
        {['Added to Cart', 'Initiated Checkout', 'Payment Processed'].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0.3, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.5 }}
            className="w-full bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex items-center gap-3"
          >
            <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
            <span className="text-xs text-slate-300 font-medium">{step}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Right: Micro Graph */}
      <div className="flex-1 flex flex-col justify-center items-end relative">
        <div className="w-full h-32 bg-slate-900 rounded-xl border border-slate-800 flex items-end p-2 gap-1 overflow-hidden">
          {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: '10%' }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: i * 0.1 }}
              className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/80 rounded-t-sm"
            ></motion.div>
          ))}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-emerald-500/30 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-emerald-400 font-semibold">Secure Stripe Gateway Connected</span>
        </div>
      </div>
    </div>
  );
};

// --- 7. SaaS Product Development ---
const SaaSVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-6">
      <div className="w-32 h-10 bg-slate-900 border border-blue-500/30 rounded-xl flex items-center justify-center text-xs text-blue-400 font-mono font-bold mb-8 z-10">
        ROOT ORG
      </div>
      
      {/* Connectors */}
      <div className="absolute top-[35%] w-1/2 h-[1px] bg-slate-800"></div>
      <div className="absolute top-[35%] w-[1px] h-12 bg-slate-800 left-1/4"></div>
      <div className="absolute top-[35%] w-[1px] h-12 bg-slate-800 right-1/4"></div>

      <div className="flex w-full justify-around z-10 mt-4">
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-24 h-20 bg-slate-900 border border-slate-800 rounded-lg p-2">
          <div className="text-[9px] text-slate-500 mb-2">TENANT A</div>
          <div className="w-full h-2 bg-blue-500/20 rounded mb-1"></div>
          <div className="w-3/4 h-2 bg-blue-500/20 rounded"></div>
        </motion.div>
        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="w-24 h-20 bg-slate-900 border border-slate-800 rounded-lg p-2">
          <div className="text-[9px] text-slate-500 mb-2">TENANT B</div>
          <div className="w-full h-2 bg-purple-500/20 rounded mb-1"></div>
          <div className="w-1/2 h-2 bg-purple-500/20 rounded"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 bg-slate-900/90 border border-emerald-500/20 px-4 py-2 rounded-lg flex items-center gap-3 backdrop-blur">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full"></motion.div>
        <span className="text-[10px] text-emerald-400 font-mono">Subscription Active &bull; Feature Flags: OK</span>
      </div>
    </div>
  );
};

// --- 8. API Development & Integration ---
const APIVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center p-6">
      <div className="w-full max-w-sm flex items-center gap-4">
        <div className="w-1/4 flex justify-end relative">
          <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-400">INGRESS</div>
          <motion.div animate={{ x: [0, 40], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute right-[-40px] top-1/2 w-2 h-2 bg-purple-500 rounded-full"></motion.div>
        </div>
        
        <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0 z-10 backdrop-blur">
          <span className="text-[10px] text-purple-400 font-bold">API GW</span>
        </div>
        
        <div className="flex-1 flex flex-col gap-4 relative">
          {/* Paths */}
          <div className="absolute left-[-20px] top-[20%] w-[20px] h-[1px] bg-purple-500/20"></div>
          <div className="absolute left-[-20px] top-[50%] w-[20px] h-[1px] bg-purple-500/20"></div>
          <div className="absolute left-[-20px] top-[80%] w-[20px] h-[1px] bg-purple-500/20"></div>

          <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-400 relative">
             REST Nodes
             <motion.div animate={{ x: [-20, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="absolute left-[-20px] top-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full -translate-y-1/2"></motion.div>
          </div>
          <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-400 relative">
             GraphQL Tree
             <motion.div animate={{ x: [-20, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="absolute left-[-20px] top-1/2 w-1.5 h-1.5 bg-rose-500 rounded-full -translate-y-1/2"></motion.div>
          </div>
          <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-mono text-slate-400 relative">
             OAuth Auth
             <motion.div animate={{ x: [-20, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} className="absolute left-[-20px] top-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full -translate-y-1/2"></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 9. IT Consulting & Digital Strategy ---
const ITConsultingVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative p-6 flex flex-col">
      <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-4 pl-24">
        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        {['System Audit', 'Decoupling', 'Scaling'].map((phase, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="w-20 text-[9px] font-semibold text-slate-400 text-right">{phase}</span>
            <div className="flex-1 h-6 bg-slate-900 rounded-md overflow-hidden relative">
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: i === 0 ? '100%' : i === 1 ? '60%' : '30%' }}
                transition={{ duration: 2, ease: "easeOut" }}
                className={`h-full ${i === 0 ? 'bg-emerald-500/40' : i === 1 ? 'bg-blue-500/40' : 'bg-purple-500/40'} border-r-2 ${i === 0 ? 'border-emerald-500' : i === 1 ? 'border-blue-500' : 'border-purple-500'}`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 10. Cybersecurity Solutions ---
const CybersecurityVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center">
      {/* Radar ambient background */}
      <div className="absolute inset-0 border border-teal-500/10 rounded-full scale-[2] flex items-center justify-center">
        <div className="w-3/4 h-3/4 border border-teal-500/20 rounded-full flex items-center justify-center">
          <div className="w-1/2 h-1/2 border border-teal-500/30 rounded-full"></div>
        </div>
      </div>
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(45,212,191,0.1)_360deg)] rounded-full scale-[2]"
      ></motion.div>

      {/* Main Panel */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-teal-500/30 rounded-xl p-4 z-10 w-3/4 max-w-sm flex flex-col gap-3 shadow-[0_0_30px_rgba(45,212,191,0.1)]">
        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
          <span className="text-[10px] font-mono text-teal-500">DEFENSE MATRIX</span>
          <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-teal-500"></motion.span>
        </div>
        <div className="font-mono text-[9px] text-slate-400 space-y-1">
          <p>AUTH: 0x9F8C... VERIFIED</p>
          <p>PACKET INSPECTION: ENCRYPTED</p>
          <p className="text-teal-400">System Integrity: Clear</p>
          <p className="text-teal-400">Vulnerability Scanning: 0 Exploit</p>
        </div>
      </div>
    </div>
  );
};

// --- 11. Generative AI & LLMs ---
const GenAIVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center">
      {/* Vector clusters */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            x: Math.random() * 20 - 10, 
            y: Math.random() * 20 - 10 
          }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute w-1.5 h-1.5 rounded-full bg-amber-500/40"
          style={{
            left: `${40 + Math.random() * 40}%`,
            top: `${20 + Math.random() * 60}%`
          }}
        />
      ))}
      
      <div className="absolute left-6 top-6 bg-slate-900/80 backdrop-blur border border-amber-500/30 px-3 py-2 rounded-lg z-10">
        <div className="text-[10px] text-amber-400 font-mono mb-1">VECTOR SEARCH</div>
        <motion.div className="w-24 h-1.5 bg-amber-500/20 rounded overflow-hidden">
           <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1/2 h-full bg-amber-400"></motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur border border-slate-800 px-3 py-2 rounded-lg text-[9px] font-mono text-slate-300 z-10">
        Tokens Generated: <motion.span animate={{ opacity: [0.5, 1] }} transition={{ duration: 0.1, repeat: Infinity }}>1,402</motion.span>
      </div>
    </div>
  );
};

// --- 12. Computer Vision ---
const ComputerVisionVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center p-8">
      <div className="w-full h-full border-2 border-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center bg-slate-900/50">
        {/* Mock asset line */}
        <div className="w-3/4 h-2 bg-slate-700 rotate-[-10deg]"></div>
        
        {/* Bounding Box */}
        <motion.div 
          animate={{ x: [-20, 20, -20] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute border border-emerald-500 bg-emerald-500/10 w-24 h-16 flex flex-col justify-between p-1 backdrop-blur-sm"
        >
          <div className="text-[8px] bg-emerald-500 text-slate-950 font-bold px-1 self-start">CONF: 98.4%</div>
          <div className="w-full h-[1px] bg-emerald-500/50 relative">
             <motion.div animate={{ x: ['0%', '100%', '0%'] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-emerald-400 rounded-full absolute -top-1"></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- 13. NLP & Text Analysis ---
const NLPVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative p-6 flex flex-col justify-center gap-4">
      <div className="text-[12px] font-mono text-slate-400 leading-loose">
        The headquarters of <span className="inline-block px-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-[10px] mx-1">[Organization]</span> 
        announced a new office in <span className="inline-block px-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded text-[10px] mx-1">[Location]</span>, 
        resulting in extremely <span className="inline-block px-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-[10px] mx-1">[Sentiment: Positive]</span> market reactions.
      </div>
      
      <div className="mt-4 bg-slate-900 border border-slate-800 rounded-lg p-3 grid grid-cols-3 gap-2 text-center text-[9px] font-mono">
        <div><div className="text-blue-400 font-bold text-lg">12</div><div className="text-slate-500">ENTITIES</div></div>
        <div className="border-x border-slate-800"><div className="text-purple-400 font-bold text-lg">8</div><div className="text-slate-500">LOCATIONS</div></div>
        <div><div className="text-emerald-400 font-bold text-lg">94%</div><div className="text-slate-500">POSITIVE</div></div>
      </div>
    </div>
  );
};

// --- 14. AI Chatbots & Agents ---
const ChatbotAgentsVisual = () => {
  return (
    <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-6">
      <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-mono text-slate-300 mb-6 relative">
        INBOUND INTENT
        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute -bottom-2 left-1/2 w-2 h-2 bg-purple-500 rounded-full -translate-x-1/2"></motion.div>
      </div>
      
      <div className="flex gap-4 w-full justify-center relative">
        <div className="absolute top-[-10px] left-1/2 w-[1px] h-4 bg-slate-800"></div>
        
        <div className="flex flex-col gap-2 items-center">
           <motion.div animate={{ borderColor: ['#1e293b', '#a855f7', '#1e293b'] }} transition={{ duration: 3, repeat: Infinity }} className="bg-slate-900 border-2 border-slate-800 rounded-lg p-2 text-[9px] font-mono text-slate-400 text-center">
             Database Lookup Tool
           </motion.div>
        </div>
        <div className="flex flex-col gap-2 items-center">
           <motion.div animate={{ borderColor: ['#1e293b', '#1e293b', '#3b82f6', '#1e293b'] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="bg-slate-900 border-2 border-slate-800 rounded-lg p-2 text-[9px] font-mono text-slate-400 text-center">
             CRM Dispatcher API
           </motion.div>
        </div>
      </div>
      
      <div className="mt-8 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
        <motion.span animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}>&gt;_</motion.span> Executing Action...
      </div>
    </div>
  );
};


// --- Main Component Switch ---
export const ServiceVisuals: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'custom-web-development': return <WebDevVisual />;
    case 'mobile-app-development': return <MobileDevVisual />;
    case 'ui-ux-design': return <UIUXVisual />;
    case 'ai-machine-learning': return <AIMLVisual />;
    case 'cloud-devops': return <CloudDevOpsVisual />;
    case 'e-commerce-solutions': return <ECommerceVisual />;
    case 'saas-development': return <SaaSVisual />;
    case 'api-integration': return <APIVisual />;
    case 'it-consulting': return <ITConsultingVisual />;
    case 'cybersecurity-solutions': return <CybersecurityVisual />;
    case 'generative-ai': return <GenAIVisual />;
    case 'computer-vision': return <ComputerVisionVisual />;
    case 'nlp-text-analysis': return <NLPVisual />;
    case 'ai-chatbots': return <ChatbotAgentsVisual />;
    default: 
      return (
        <div className="w-full h-full bg-slate-950 border border-slate-900 rounded-3xl flex items-center justify-center text-slate-500 font-mono text-xs">
          Visual pending for {type}
        </div>
      );
  }
};
