import { Link } from 'react-router-dom';
import { ArrowUpRight, Network, Sparkles, Code2, Cpu, Linkedin, Github, Instagram } from 'lucide-react';
import { services } from '@/data/services';

export const Footer = () => {
  return (
    <footer className="bg-[#020B24] text-slate-100 pt-16 pb-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(2,11,36,0.15)] dark:bg-white dark:text-slate-900 dark:shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-white/10 dark:border-slate-100 mt-10">

      {/* Ambient Atmosphere Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,78,224,0.15),transparent_70%)] pointer-events-none transform-gpu dark:bg-none" />

      {/* Background Watermark */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#0F214A]/40 dark:text-slate-900/[0.03] font-black text-[12rem] sm:text-[18rem] tracking-tighter uppercase pointer-events-none select-none z-0 transform-gpu will-change-transform">
        QORYNTA
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Elevated Inner CTA Banner Card */}
        <div className="max-w-7xl mx-auto bg-[#0A183D]/90 dark:bg-white backdrop-blur-xl border border-blue-500/20 dark:border-slate-200 rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/40 dark:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          {/* Left CTA Content Area */}
          <div className="relative z-10 max-w-xl">
            <div className="text-sky-400 dark:text-blue-600 font-mono text-xs uppercase tracking-[0.25em] font-extrabold mb-3 flex items-center gap-2">
              ✨ Transform your business
            </div>
            <h2 className="text-white dark:text-[#00072d] font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-xl">
              Ready to scale? <br /> Let's build something together.
            </h2>
            <p className="text-slate-300 dark:text-slate-600 text-sm sm:text-base font-normal mt-4 max-w-lg leading-relaxed">
              Get a custom roadmap for your digital product. We respond within 24 hours with a free technical scoping call.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#004EE0] to-[#0070F3] dark:bg-none dark:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,78,224,0.5)] dark:shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_0_35px_rgba(0,78,224,0.8)] dark:hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] dark:hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all text-sm group">
              Get Free Consultation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Orbital Graphic Diagram */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 items-center justify-center pointer-events-none opacity-80 lg:opacity-100 hidden md:flex shrink-0">
            {/* Concentric Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[100px] h-[100px] rounded-full border border-dashed border-blue-500/30 dark:border-slate-300 absolute animate-[spin_30s_linear_infinite] transform-gpu" />
              <div className="w-[200px] h-[200px] rounded-full border border-dashed border-blue-500/30 dark:border-slate-300 absolute animate-[spin_40s_linear_infinite_reverse] transform-gpu" />
              <div className="w-[300px] h-[300px] rounded-full border border-dashed border-blue-500/30 dark:border-slate-300 absolute animate-[spin_50s_linear_infinite] transform-gpu" />
            </div>
            
            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B1C48] dark:bg-white border border-cyan-400/40 dark:border-slate-200 text-cyan-300 dark:text-blue-600 p-3.5 rounded-full shadow-lg z-10">
              <Network className="w-7 h-7" />
            </div>
            
            {/* Orbiting Nodes */}
            <div className="absolute top-[18%] left-[22%] bg-[#0B1C48] dark:bg-blue-50 border border-cyan-400/40 dark:border-blue-200 text-cyan-300 dark:text-blue-600 p-2.5 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
              <Code2 className="w-5 h-5" />
            </div>
            <div className="absolute bottom-[18%] right-[18%] bg-[#0B1C48] dark:bg-indigo-50 border border-cyan-400/40 dark:border-indigo-200 text-cyan-300 dark:text-indigo-600 p-2.5 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Cpu className="w-5 h-5" />
            </div>
            <div className="absolute top-[28%] right-[8%] bg-[#0B1C48] dark:bg-purple-50 border border-cyan-400/40 dark:border-purple-200 text-cyan-300 dark:text-purple-600 p-2.5 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Multi-Column Navigation Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 relative z-10 pb-16 border-b border-slate-800/80 dark:border-transparent">

          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 pr-4">
            <Link to="/" className="flex items-center gap-3 text-white dark:text-[#00072d] font-black text-xl tracking-tight mb-4 group">
              <img src="/logo.webp" alt="" aria-hidden="true" loading="lazy" width={140} height={40} className="h-8 w-auto object-contain rounded-md dark:invert filter dark:brightness-0" />
              <span>Qorynta Services</span>
            </Link>
            <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed max-w-sm">
              We engineer high-performance digital ecosystems. From robust enterprise software to intuitive mobile applications, we transform complex challenges into seamless, scalable solutions that drive tangible business growth.
            </p>
          </div>

          {/* Column 2: Company Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white dark:text-[#00072d] font-mono text-xs uppercase tracking-widest font-black mb-5">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 dark:text-slate-600 font-medium">
              <li><Link to="/about" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Careers</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Portfolio</Link></li>
              <li><Link to="/insights" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Insights & Blog</Link></li>
              <li><Link to="/engagement" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-block">Pricing & Engagement</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-flex items-center gap-1 group">Contact Us <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" /></Link></li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white dark:text-[#00072d] font-mono text-xs uppercase tracking-widest font-black mb-5">Socials</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400 dark:text-slate-600 font-medium">
              <li>
                <a href="https://www.linkedin.com/in/qorynta-services-72067b419/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                  <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://github.com/rishvmiyani" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                  <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/qorynta_services/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                  <Instagram className="w-4 h-4" /> Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div className="lg:col-span-4 lg:pl-6">
            <h3 className="text-white dark:text-[#00072d] font-mono text-xs uppercase tracking-widest font-black mb-5">Our Services</h3>
            <ul className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400 dark:text-slate-600 font-medium">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to={`/services/${service.slug}`} className="hover:text-sky-400 dark:hover:text-blue-600 hover:translate-x-1 transition-all inline-flex items-start gap-1 group">
                    <span className="flex-1">{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono relative z-10 gap-4">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Qorynta Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white dark:hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white dark:hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
