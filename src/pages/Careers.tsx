import SEO from '@/components/SEO';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { Zap, TrendingUp, Rocket, Globe2, Shield, Laptop, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const perks = [
  {
    icon: Zap,
    title: 'High Velocity & Autonomy',
    description: 'We care about output and code quality, not office hours. Take ownership and move fast.'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Compensation & Equity',
    description: 'Top-of-market base salary paired with significant early-stage equity grants.'
  },
  {
    icon: Rocket,
    title: 'Continuous Learning & Conference Budget',
    description: 'Generous annual budget for courses, books, and international tech conferences.'
  },
  {
    icon: Globe2,
    title: '100% Remote-First Work Culture',
    description: 'Work from anywhere. We are an async-first distributed team across 5 continents.'
  },
  {
    icon: Shield,
    title: 'Premium Health & Wellness Perks',
    description: 'Platinum-tier health, dental, and vision coverage for you and your dependents.'
  },
  {
    icon: Laptop,
    title: 'Top-Tier Hardware Stipend',
    description: 'Choose your own setup. We provide a generous budget for your laptop and home office.'
  }
];

const jobs = [
  {
    id: 'senior-frontend',
    role: 'Senior Frontend Engineer (React/Next.js)',
    type: 'Full-Time',
    location: 'Remote (Worldwide)',
    department: 'Engineering',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'backend-node',
    role: 'Backend Systems Engineer (Node.js/AWS)',
    type: 'Full-Time',
    location: 'Remote (Worldwide)',
    department: 'Engineering',
    tags: ['Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: 'ai-engineer',
    role: 'AI / Machine Learning Engineer',
    type: 'Full-Time',
    location: 'Remote (Worldwide)',
    department: 'R&D',
    tags: ['Python', 'LangChain', 'TensorFlow']
  },
  {
    id: 'product-manager',
    role: 'Technical Product Manager',
    type: 'Full-Time',
    location: 'Remote (US/EU Timezones)',
    department: 'Product',
    tags: ['Agile', 'Jira', 'Strategy']
  }
];

export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        exactTitle={true}
        title="Careers at Qorynta Services | Work on Global Projects"
        description="Join Qorynta Services and build products used by clients in 15+ countries. Open roles in React, Flutter, AI/ML, DevOps & UI/UX. Remote-first culture."
        canonical="https://www.qorynta.in/careers"
      />
      
      <main className="min-h-screen bg-background">
        
        {/* 1. HERO SECTION CONTAINER & ATMOSPHERIC GRID */}
        <section className="relative pt-32 pb-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#f4f7fc] via-[#ebf2ff] to-[#f4f7fc] dark:from-[#020617] dark:via-[#00072d] dark:to-[#020617] overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">
          
          {/* Micro-Grid Matrix Background Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#004ee0_1px,transparent_1px)] dark:bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] dark:opacity-[0.12] pointer-events-none z-0"></div>

          {/* Center Ambient Glow Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

          {/* 2. HERO HEADLINE, EYEBROW & ACTION TRIGGER */}
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-6">
            <ScrollReveal>
              <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-[#004EE0] dark:text-cyan-300 mb-6 bg-blue-500/10 dark:bg-cyan-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 dark:border-cyan-500/30 shadow-sm">
                CAREERS & CULTURE
              </span>
              
              <h1 className="text-[#00072D] dark:text-white font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6">
                Build the Future. <br className="hidden sm:block" />
                <span className="font-serif italic font-normal text-[#004EE0] dark:text-cyan-400 pl-1">With the Best.</span>
              </h1>
              
              <p className="relative z-10 text-slate-600 dark:text-slate-300 text-base sm:text-xl font-normal text-center max-w-2xl mx-auto leading-relaxed mb-8">
                We are an elite engineering task force. We tackle complex architectural problems, ship at high velocity, and maintain a culture of radical transparency.
              </p>
              
              <a 
                href="#open-roles" 
                className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#004EE0] to-[#0070F3] dark:from-cyan-500 dark:to-blue-600 text-white dark:text-slate-950 font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(0,78,224,0.3)] dark:shadow-[0_10px_25px_rgba(6,182,212,0.4)] hover:shadow-[0_15px_35px_rgba(0,78,224,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Open Roles
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* 3. "WHY JOIN US?" CULTURE & BENEFITS SECTION */}
        <section className="relative py-24 px-4 sm:px-8 lg:px-12 bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-hidden">
          
          {/* Ambient Radial Background Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-sky-400/10 dark:bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
            <ScrollReveal>
              <h2 className="text-[#00072D] dark:text-white font-black text-3xl sm:text-5xl tracking-tight mb-4">
                Why Join Us?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                We treat our team as well as we treat our clients. We offer tier-1 benefits to ensure you can do your best work.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
            {perks.map((perk, idx) => {
              const isFeatured = idx === 1; // Card 2
              
              return (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className={isFeatured 
                    ? "group relative bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/90 dark:to-slate-900/90 backdrop-blur-xl border-2 border-[#004EE0] dark:border-cyan-400 p-8 rounded-3xl shadow-xl shadow-blue-500/10 dark:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden h-full"
                    : "group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-cyan-500/15 hover:border-[#004EE0]/50 dark:hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden h-full before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-[#004EE0] before:via-cyan-400 before:to-emerald-400 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-20"
                  }>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <div className={isFeatured
                          ? "w-14 h-14 rounded-2xl bg-[#004EE0] dark:bg-cyan-400 text-white dark:text-slate-950 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform"
                          : "w-14 h-14 rounded-2xl bg-blue-50/80 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/30 flex items-center justify-center text-[#004EE0] dark:text-cyan-400 mb-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] dark:shadow-none group-hover:scale-110 group-hover:bg-[#004EE0] group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 transition-all duration-300"
                        }>
                          <perk.icon className="w-6 h-6" />
                        </div>
                        <h3 className={isFeatured
                          ? "text-[#004EE0] dark:text-cyan-400 font-black text-xl tracking-tight mb-3"
                          : "text-[#00072D] dark:text-white font-black text-xl tracking-tight mb-3 group-hover:text-[#004EE0] dark:group-hover:text-cyan-400 transition-colors"
                        }>
                          {perk.title}
                        </h3>
                        <p className={isFeatured
                          ? "text-slate-700 dark:text-slate-200 text-sm font-semibold leading-relaxed"
                          : "text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed"
                        }>
                          {perk.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className="py-24 bg-white dark:bg-[#030712] transition-colors duration-500 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <ScrollReveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-[#00072D] dark:text-white mb-4">Open Positions</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                  We are actively hiring for these roles. Don't see a fit? Send us an open application.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {jobs.map((job, idx) => {
                const isActive = idx === 2; // "AI / Machine Learning Engineer" is active in screenshot
                
                return (
                  <ScrollReveal key={job.id} delay={0.1 * idx}>
                    <Link 
                      to="/contact" 
                      className={`group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300 ${
                        isActive 
                          ? 'bg-white dark:bg-slate-900/90 border border-[#004EE0] dark:border-cyan-400 shadow-md shadow-blue-500/10 dark:shadow-cyan-500/10 scale-[1.01]' 
                          : 'bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#004EE0]/50 dark:hover:border-cyan-400/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-cyan-500/5 hover:-translate-y-1'
                      }`}
                    >
                      <div>
                        <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-[#004EE0] dark:text-cyan-400' : 'text-[#00072D] dark:text-white group-hover:text-[#004EE0] dark:group-hover:text-cyan-400'}`}>
                          {job.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 font-medium mb-4 md:mb-0">
                          <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-slate-400" /> {job.department}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                          <span className="bg-blue-500/10 dark:bg-cyan-500/10 text-[#004EE0] dark:text-cyan-400 px-2 py-0.5 rounded uppercase tracking-wider text-[10px] font-black">{job.type}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex gap-2 w-full sm:w-auto">
                          {job.tags.map(tag => (
                            <span key={tag} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:translate-x-1 ${
                          isActive 
                            ? 'bg-[#004EE0] text-white dark:bg-cyan-400 dark:text-slate-950' 
                            : 'bg-blue-500/10 dark:bg-cyan-500/10 text-[#004EE0] dark:text-cyan-400 group-hover:bg-[#004EE0] group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-900'
                        }`}>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
            
            <ScrollReveal className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4 font-medium">Don't see a matching role?</p>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00072D] dark:border-white text-[#00072D] dark:text-white font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-[#00072D] hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-colors">
                Send Open Application
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
      
    </>
  );
};

export default Careers;
