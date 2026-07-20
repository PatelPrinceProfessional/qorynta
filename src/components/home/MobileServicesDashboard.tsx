import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- DATA ARCHITECTURE ---
const categories = [
  { id: 'core', name: 'Core Engineering' },
  { id: 'intelligent', name: 'Intelligent Systems' },
  { id: 'architecture', name: 'Architecture & Growth' }
];

const mobileServices = [
  // CATEGORY A: Core Engineering
  {
    id: 'web-dev', category: 'core', name: 'Web Development',
    tagline: 'We build fast, secure, and scalable web applications tailored to your exact business needs. Leveraging modern JavaScript frameworks like React and Next.js, we ensure your web presence is visually stunning and technically robust.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    href: '/services/custom-web-development',
    Visual: () => {
      const [logs, setLogs] = useState<string[]>([]);
      useEffect(() => {
        const seq = ["> POST /api/v1/auth", "=> establishing wss:// connection...", "=> wss:// connected (ping 18ms)", "> Running database sync..."];
        let i = 0; const int = setInterval(() => { setLogs(p => [...p.slice(-2), seq[i % seq.length]]); i++; }, 1200);
        return () => clearInterval(int);
      }, []);
      return (
        <div className="w-full h-full flex flex-col justify-end p-4 font-mono text-[10px] text-slate-400">
          {logs.map((l, i) => <motion.div key={i+l} initial={{opacity:0, y:5}} animate={{opacity:1, y:0}}>{l}</motion.div>)}
        </div>
      );
    }
  },
  {
    id: 'mobile-dev', category: 'core', name: 'Mobile Apps',
    tagline: 'Our mobile development team crafts native and cross-platform applications that deliver seamless experiences on iOS and Android, managing everything from UI/UX design to App Store deployment.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    href: '/services/mobile-app-development',
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-24 h-40 border-2 border-slate-700 rounded-2xl relative overflow-hidden flex flex-col p-2 gap-2 bg-slate-900/50">
           <motion.div animate={{ y: [0,-5,0] }} transition={{duration:3, repeat:Infinity}} className="w-full h-1/3 bg-blue-500/20 rounded-lg border border-blue-500/30" />
           <motion.div animate={{ y: [0,-8,0] }} transition={{duration:4, repeat:Infinity, delay:0.5}} className="w-full h-1/2 bg-purple-500/20 rounded-lg border border-purple-500/30" />
        </div>
        <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{duration:2, repeat:Infinity}} className="absolute top-4 left-4 bg-slate-800 text-blue-400 text-[8px] px-2 py-1 rounded">iOS Core</motion.div>
        <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{duration:2, repeat:Infinity}} className="absolute bottom-4 right-4 bg-slate-800 text-green-400 text-[8px] px-2 py-1 rounded">Android Runtime</motion.div>
      </div>
    )
  },
  {
    id: 'saas-dev', category: 'core', name: 'SaaS Products',
    tagline: 'Launch your Software-as-a-Service product with a solid foundation. We handle multi-tenant architectures, subscription billing pipelines, and role-based access control.',
    tags: ['Subscription', 'Multi-tenant', 'REST APIs'],
    href: '/services/saas-development',
    Visual: () => (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative">
        <div className="text-[10px] text-blue-400 border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded font-mono">CLIENT TOKENS</div>
        <div className="flex gap-2">
          <motion.div animate={{ scale: [1,1.1,1] }} transition={{duration:2, repeat:Infinity}} className="w-10 h-12 bg-slate-800 rounded border border-slate-700" />
          <motion.div animate={{ scale: [1,1.1,1] }} transition={{duration:2, repeat:Infinity, delay:0.5}} className="w-10 h-12 bg-slate-800 rounded border border-slate-700" />
        </div>
        <div className="absolute bottom-4 text-[9px] text-emerald-400 font-mono">TENANT_VALID: TRUE</div>
      </div>
    )
  },
  {
    id: 'e-commerce', category: 'core', name: 'E-Commerce',
    tagline: 'Build a powerful online storefront that turns visitors into loyal customers. We deliver custom solutions optimized for speed, conversion, and seamless inventory management.',
    tags: ['Shopify', 'Next.js', 'Stripe'],
    href: '/services/e-commerce-solutions',
    Visual: () => (
      <div className="w-full h-full flex flex-col justify-center p-6 gap-2">
        <div className="text-[10px] text-slate-500 font-mono">ORDER PROCESSING LEDGER</div>
        {[1,2,3].map(i => (
          <motion.div key={i} animate={{ x: [-5, 0], opacity: [0.5, 1, 0.5] }} transition={{duration:1.5, repeat:Infinity, delay:i*0.3}} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <div className="h-2 bg-slate-800 rounded w-full" />
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'api-integration', category: 'core', name: 'API Systems',
    tagline: 'Connect your disparate systems into a unified ecosystem. We build robust, well-documented RESTful and GraphQL APIs that allow internal services to communicate seamlessly.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth'],
    href: '/services/api-integration',
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center gap-6">
        <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[8px] text-purple-400 font-mono">API</div>
        <div className="flex flex-col gap-4">
           <motion.div animate={{ x: [-10, 0], opacity: [0,1,0] }} transition={{duration:1.5, repeat:Infinity}} className="w-16 h-1 bg-blue-500/50 relative"><div className="absolute right-0 w-2 h-2 bg-blue-400 rounded-full top-1/2 -translate-y-1/2" /></motion.div>
           <motion.div animate={{ x: [-10, 0], opacity: [0,1,0] }} transition={{duration:1.5, repeat:Infinity, delay:0.5}} className="w-16 h-1 bg-rose-500/50 relative"><div className="absolute right-0 w-2 h-2 bg-rose-400 rounded-full top-1/2 -translate-y-1/2" /></motion.div>
        </div>
      </div>
    )
  },

  // CATEGORY B: Intelligent Systems
  {
    id: 'ai-ml', category: 'intelligent', name: 'AI & ML Solutions',
    tagline: 'Transform your business operations with cutting-edge Artificial Intelligence. We specialize in building custom ML models and integrating Large Language Models (LLMs).',
    tags: ['Python', 'LLMs', 'TensorFlow'],
    href: '/services/ai-machine-learning',
    Visual: () => (
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <motion.div animate={{ scale: [1,1.2,1], rotate: 180 }} transition={{duration:4, repeat:Infinity}} className="w-24 h-24 border border-amber-500/20 rounded-full flex items-center justify-center">
           <div className="w-12 h-12 bg-amber-500/20 rounded-full" />
        </motion.div>
        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
          <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{duration:1, repeat:Infinity}}>Loss: 0.024</motion.span>
        </div>
      </div>
    )
  },
  {
    id: 'gen-ai', category: 'intelligent', name: 'Generative AI',
    tagline: 'We help enterprises harness the power of Generative AI. By utilizing advanced Retrieval-Augmented Generation (RAG) and fine-tuning techniques, we build secure, context-aware applications.',
    tags: ['OpenAI', 'RAG', 'LangChain', 'Vector DBs'],
    href: '/services/generative-ai',
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full h-full border border-slate-800 rounded bg-slate-900/50 relative overflow-hidden font-mono text-[8px] text-slate-500 p-2">
          {Array(5).fill(0).map((_,i) => (
             <motion.div key={i} animate={{ y: [-10, 0] }} transition={{duration:2, repeat:Infinity, delay:i*0.2}}>
               [{(Math.random()*2-1).toFixed(3)}, {(Math.random()*2-1).toFixed(3)}, {(Math.random()*2-1).toFixed(3)}]
             </motion.div>
          ))}
          <div className="absolute bottom-2 right-2 text-amber-400 bg-amber-500/10 px-1">dist: 0.892</div>
        </div>
      </div>
    )
  },
  {
    id: 'computer-vision', category: 'intelligent', name: 'Computer Vision',
    tagline: 'Transform visual data into actionable insights. We build custom computer vision models for manufacturing QA, medical imaging, retail analytics, and autonomous monitoring.',
    tags: ['OpenCV', 'YOLO', 'Image Processing'],
    href: '/services/computer-vision',
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-full h-32 border-2 border-slate-800 rounded relative overflow-hidden flex items-center justify-center">
          <div className="w-20 h-2 bg-slate-700 rotate-12" />
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{duration:2, repeat:Infinity}} className="absolute border border-emerald-500 w-16 h-12 bg-emerald-500/10">
             <div className="text-[6px] bg-emerald-500 text-black px-1 self-start inline-block">OBJ_01</div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 'nlp-analysis', category: 'intelligent', name: 'NLP & Text Engine',
    tagline: 'Unlock the value hidden in unstructured text. Our Natural Language Processing solutions can automatically classify support tickets, extract key entities, and gauge sentiment.',
    tags: ['Spacy', 'Hugging Face', 'BERT'],
    href: '/services/nlp-text-analysis',
    Visual: () => (
      <div className="w-full h-full flex flex-col justify-center p-4 gap-2 text-[10px] font-mono text-slate-400">
        <p>The new <span className="bg-blue-500/20 text-blue-400 px-1 border border-blue-500/30 rounded">[Organization]</span> system</p>
        <p>is highly <span className="bg-emerald-500/20 text-emerald-400 px-1 border border-emerald-500/30 rounded">[Sentiment]</span> today.</p>
      </div>
    )
  },
  {
    id: 'chatbots-agents', category: 'intelligent', name: 'AI Chatbots',
    tagline: 'Move beyond frustrating decision-tree bots. We build autonomous AI agents capable of understanding intent, executing complex API calls, and conversing naturally.',
    tags: ['Conversational AI', 'Agents', 'WhatsApp'],
    href: '/services/ai-chatbots',
    Visual: () => (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="px-2 py-1 bg-slate-800 rounded text-[8px] text-slate-300 font-mono">INTENT PARSED</div>
        <div className="w-[1px] h-4 bg-slate-700" />
        <motion.div animate={{ borderColor: ['#1e293b', '#a855f7', '#1e293b'] }} transition={{duration:2, repeat:Infinity}} className="px-3 py-2 border-2 border-slate-800 rounded bg-slate-900 text-[10px] text-purple-400 font-mono">
          Mounting: CRM Dispatcher API
        </motion.div>
      </div>
    )
  },

  // CATEGORY C: Architecture & Growth
  {
    id: 'cloud-devops', category: 'architecture', name: 'Cloud & DevOps',
    tagline: 'Ensure your applications are always online, secure, and ready to scale. Our DevOps engineers design robust cloud architectures on AWS, GCP, and Azure.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    href: '/services/cloud-devops',
    Visual: () => (
      <div className="w-full h-full flex items-center justify-center gap-4">
        {[1,2,3].map(z => (
          <div key={z} className="flex flex-col items-center gap-2">
            <div className="text-[8px] text-teal-500 font-mono">ZONE-0{z}</div>
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{duration:2, repeat:Infinity, delay:z*0.3}} className="w-8 h-16 bg-slate-900 border border-teal-500/30 rounded" />
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'cybersecurity', category: 'architecture', name: 'Cybersecurity',
    tagline: 'Protect your digital assets with our comprehensive cybersecurity services. We conduct rigorous penetration testing, vulnerability assessments, and implement security protocols.',
    tags: ['Pen Testing', 'Compliance', 'Audits'],
    href: '/services/cybersecurity-solutions',
    Visual: () => (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <motion.div animate={{ rotate: 360 }} transition={{duration:6, repeat:Infinity, ease:"linear"}} className="w-24 h-24 border border-teal-500/30 rounded-full flex items-center justify-center border-t-teal-400">
           <div className="w-12 h-12 border border-teal-500/20 rounded-full" />
        </motion.div>
        <div className="absolute bottom-4 text-[10px] font-mono text-teal-400">System Integrity: Clear // 0 Exploits</div>
      </div>
    )
  },
  {
    id: 'it-consulting', category: 'architecture', name: 'Tech Strategy',
    tagline: 'Make informed technology decisions that align with your business goals. Our strategic consulting services help startups and enterprises navigate the complex digital landscape.',
    tags: ['Tech Audit', 'CTO-as-a-Service', 'Roadmapping'],
    href: '/services/it-consulting',
    Visual: () => (
      <div className="w-full h-full flex flex-col justify-center p-6 gap-4 font-mono text-[9px] text-slate-400">
         <div className="flex items-center gap-2"><span className="w-16">[Audit]</span> <motion.div animate={{width:['0%','100%']}} transition={{duration:2, ease:"easeOut"}} className="h-1 bg-slate-800 flex-1"><div className="h-full bg-blue-500 w-full" /></motion.div></div>
         <div className="flex items-center gap-2"><span className="w-16">[Decouple]</span> <motion.div animate={{width:['0%','100%']}} transition={{duration:2, delay:1, ease:"easeOut"}} className="h-1 bg-slate-800 flex-1"><div className="h-full bg-purple-500 w-full" /></motion.div></div>
         <div className="flex items-center gap-2"><span className="w-16">[Scale]</span> <motion.div animate={{width:['0%','100%']}} transition={{duration:2, delay:2, ease:"easeOut"}} className="h-1 bg-slate-800 flex-1"><div className="h-full bg-emerald-500 w-full" /></motion.div></div>
      </div>
    )
  }
];

export const MobileServicesDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [activeServiceId, setActiveServiceId] = useState('web-dev');
  const [viewMode, setViewMode] = useState<'specification' | 'visual'>('specification');

  const filteredServices = mobileServices.filter(s => s.category === activeCategory);
  const activeService = filteredServices.find(s => s.id === activeServiceId) || filteredServices[0];

  // Auto-select first service when category changes
  useEffect(() => {
    setActiveServiceId(filteredServices[0].id);
  }, [activeCategory]);

  return (
    <div className="w-full flex flex-col md:hidden text-slate-100 bg-slate-950 rounded-3xl overflow-hidden border border-slate-900 shadow-2xl h-[550px]">
      
      {/* 1. Category Pill Track */}
      <div className="w-full flex overflow-x-auto scrollbar-none px-4 py-3 border-b border-slate-900 gap-2 shrink-0">
        {categories.map(c => (
          <button 
            key={c.id} 
            onClick={() => setActiveCategory(c.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold h-10 transition-colors ${activeCategory === c.id ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* 2. Service Sub-Navigation */}
      <div className="w-full flex overflow-x-auto scrollbar-none px-4 py-3 gap-2 shrink-0">
        {filteredServices.map(s => (
          <button 
            key={s.id} 
            onClick={() => setActiveServiceId(s.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-medium h-10 transition-colors ${activeServiceId === s.id ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30' : 'text-slate-500 border border-transparent'}`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* 3. View Mode Toggle Switch */}
      <div className="px-4 pb-3 shrink-0">
        <div className="w-full flex bg-slate-900 rounded-lg p-1 border border-slate-800">
          <button onClick={() => setViewMode('specification')} className={`flex-1 text-[11px] font-mono font-medium py-2 rounded-md transition-colors ${viewMode === 'specification' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}>
            // 01. Specification
          </button>
          <button onClick={() => setViewMode('visual')} className={`flex-1 text-[11px] font-mono font-medium py-2 rounded-md transition-colors ${viewMode === 'visual' ? 'bg-slate-800 text-white' : 'text-slate-500'}`}>
            // 02. System Visual
          </button>
        </div>
      </div>

      {/* 4. The Stage Box */}
      <div className="flex-1 px-4 pb-4 overflow-hidden relative flex flex-col">
        <div className="flex-1 bg-slate-900/40 border border-slate-800 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden flex flex-col">
          
          {/* Monospace Signature Underlay */}
          <div className="font-mono text-7xl font-black text-slate-800/20 select-none pointer-events-none absolute -bottom-4 -right-2 tracking-tighter z-0">
            {activeService.name.split(' ')[0].toUpperCase()}
          </div>

          <div className="relative z-10 flex-1 flex flex-col">
            <AnimatePresence mode="wait">
              {viewMode === 'specification' ? (
                <motion.div 
                  key="spec"
                  initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}
                  className="flex flex-col h-full"
                >
                  <h3 className="text-xl font-bold mb-3">{activeService.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1 overflow-y-auto">
                    {activeService.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {activeService.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="vis"
                  initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.15 }}
                  className="flex-1 w-full h-full"
                >
                  <activeService.Visual />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Persistent Action Footer */}
          <div className="absolute bottom-0 left-0 w-full border-t border-slate-800/60 bg-slate-900/60 backdrop-blur-sm h-12 flex items-center justify-between px-4 z-20">
             <div className="text-[9px] font-mono text-slate-500">QORYNTA // DEV_CORE</div>
             <Link to={activeService.href} className="text-[11px] font-bold text-blue-400 flex items-center gap-1">
               Initialize Project &rarr;
             </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
