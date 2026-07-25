import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Code2, Smartphone, Palette, Cloud, ShoppingCart, Webhook, 
  Brain, Sparkles, ScanEye, MessageSquare, Bot, 
  Shield, Lightbulb, Server
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All (14)' },
  { id: 'core', name: 'Core Eng' },
  { id: 'intelligent', name: 'Intelligent AI' },
  { id: 'architecture', name: 'Cloud & Strategy' }
];

const mobileServices = [
  // CORE ENGINEERING
  { id: 'web-dev', category: 'core', name: 'Custom Web Development', icon: Code2, tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'], desc: 'We build fast, secure, and scalable web applications tailored to your exact business needs.', href: '/services/custom-web-development', micro: 'Core Eng' },
  { id: 'mobile-dev', category: 'core', name: 'Mobile App Development', icon: Smartphone, tags: ['React Native', 'Flutter', 'iOS', 'Android'], desc: 'Our mobile team crafts native and cross-platform apps for seamless experiences.', href: '/services/mobile-app-development', micro: 'Core Eng' },
  { id: 'ui-ux', category: 'core', name: 'UI/UX Design & Prototyping', icon: Palette, tags: ['Figma', 'Design Systems', 'Wireframing'], desc: 'We design intuitive and stunning user interfaces focused on conversion and usability.', href: '/services/ui-ux-design', micro: 'Core Eng' },
  { id: 'saas-dev', category: 'core', name: 'SaaS Product Development', icon: Cloud, tags: ['Subscription', 'Multi-tenant', 'REST APIs'], desc: 'Launch your SaaS product with multi-tenant architectures and subscription billing.', href: '/services/saas-development', micro: 'Core Eng' },
  { id: 'ecommerce', category: 'core', name: 'E-Commerce Solutions', icon: ShoppingCart, tags: ['Shopify', 'Next.js', 'Stripe'], desc: 'Build a powerful online storefront optimized for speed and conversion.', href: '/services/e-commerce-solutions', micro: 'Core Eng' },
  { id: 'api-dev', category: 'core', name: 'API Development & Integration', icon: Webhook, tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth'], desc: 'Connect your systems with robust RESTful and GraphQL APIs.', href: '/services/api-integration', micro: 'Core Eng' },

  // INTELLIGENT AI
  { id: 'ai-ml', category: 'intelligent', name: 'AI & Machine Learning Solutions', icon: Brain, tags: ['Python', 'LLMs', 'TensorFlow'], desc: 'Transform your business with custom ML models and intelligent automation.', href: '/services/ai-machine-learning', micro: 'Intelligent AI' },
  { id: 'gen-ai', category: 'intelligent', name: 'Generative AI & LLMs', icon: Sparkles, tags: ['OpenAI', 'RAG', 'LangChain', 'Vector DBs'], desc: 'Harness Generative AI using advanced RAG and fine-tuning techniques.', href: '/services/generative-ai', micro: 'Intelligent AI' },
  { id: 'cv', category: 'intelligent', name: 'Computer Vision', icon: ScanEye, tags: ['OpenCV', 'YOLO', 'Image Processing'], desc: 'Transform visual data into actionable insights for QA, retail, and medical imaging.', href: '/services/computer-vision', micro: 'Intelligent AI' },
  { id: 'nlp', category: 'intelligent', name: 'NLP & Text Analysis', icon: MessageSquare, tags: ['Spacy', 'Hugging Face', 'BERT'], desc: 'Unlock value from unstructured text via automatic classification and sentiment analysis.', href: '/services/nlp-text-analysis', micro: 'Intelligent AI' },
  { id: 'chatbots', category: 'intelligent', name: 'AI Chatbots & Agents', icon: Bot, tags: ['Conversational AI', 'Agents', 'WhatsApp'], desc: 'Build autonomous AI agents that understand intent and converse naturally.', href: '/services/ai-chatbots', micro: 'Intelligent AI' },

  // CLOUD & STRATEGY
  { id: 'cloud', category: 'architecture', name: 'Cloud Infrastructure & DevOps', icon: Server, tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'], desc: 'Design robust, scalable cloud architectures and deployment pipelines.', href: '/services/cloud-devops', micro: 'Cloud & Strategy' },
  { id: 'cyber', category: 'architecture', name: 'Cybersecurity Solutions', icon: Shield, tags: ['Pen Testing', 'Compliance', 'Audits'], desc: 'Protect your assets with penetration testing and security protocol implementation.', href: '/services/cybersecurity-solutions', micro: 'Cloud & Strategy' },
  { id: 'consulting', category: 'architecture', name: 'IT Consulting & Digital Strategy', icon: Lightbulb, tags: ['Tech Audit', 'CTO-as-a-Service', 'Roadmapping'], desc: 'Align technology decisions with your business goals through strategic consulting.', href: '/services/it-consulting', micro: 'Cloud & Strategy' }
];

export const MobileServicesDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeId, setActiveId] = useState<string | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? mobileServices 
    : mobileServices.filter(s => s.category === activeCategory);

  return (
    <div className="w-full flex flex-col md:hidden">
      {/* 1. Category Pill Track */}
      <div className="w-full flex gap-2 overflow-x-auto scrollbar-none pb-3 shrink-0 px-1">
        {categories.map(c => (
          <button 
            key={c.id} 
            onClick={() => {
              setActiveCategory(c.id);
              setActiveId(null); // Close any open accordion when switching categories
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold h-10 transition-colors shrink-0 ${
              activeCategory === c.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-3 ml-1 uppercase tracking-wider">
        // TAP ROW TO EXPAND CAPABILITY ARCHITECTURE
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-2">
        {filteredServices.map(service => {
          const isOpen = activeId === service.id;
          const Icon = service.icon;

          return (
            <div 
              key={service.id} 
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl px-4 py-3 shadow-sm transition-all overflow-hidden flex flex-col"
            >
              {/* Header Toggle */}
              <button 
                className="w-full flex items-center justify-between text-left focus:outline-none"
                onClick={() => setActiveId(isOpen ? null : service.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 pr-2">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {service.micro}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 pb-1 border-t border-slate-100 dark:border-slate-800 mt-3">
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                        {service.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200/50 dark:border-slate-700/50">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link 
                        to={service.href}
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:gap-2 transition-all w-fit"
                      >
                        Explore Capability &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
