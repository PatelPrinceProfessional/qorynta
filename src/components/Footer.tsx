import { Link } from 'react-router-dom';
import { ArrowUpRight, Network, Sparkles, Code2, Cpu, Linkedin, Github, Instagram } from 'lucide-react';
import { services } from '@/data/services';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-[#0A192F] dark:bg-white pt-12 pb-8 relative z-20 rounded-t-[2.5rem] mt-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-white/10 dark:border-slate-200 overflow-hidden">

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />



      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Pre-Footer CTA (Glass-morphic) */}
        <div className="bg-white/5 dark:bg-slate-50 backdrop-blur-[30px] rounded-3xl p-8 lg:p-12 mb-20 shadow-2xl dark:shadow-xl border border-white/10 dark:border-slate-200 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">

          {/* CTA Content */}
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-400 dark:text-blue-600" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-300 dark:text-slate-500">Transform your business</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white dark:text-slate-900 mb-4 tracking-tight">
              Ready to scale? <br /> Let's build something together.
            </h2>
            <p className="text-base text-slate-300 dark:text-slate-600 mb-8 font-medium">
              Get a custom roadmap for your digital product. We respond within 24 hours with a free technical scoping call.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] active:scale-95 group">
              Get Free Consultation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Abstract Tech Network Graphic */}
          <div className="relative w-full md:w-[400px] h-[300px] shrink-0 hidden md:block opacity-80 dark:opacity-90">
            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[100px] h-[100px] rounded-full border border-dashed border-white/20 dark:border-slate-300 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-white/20 dark:border-slate-300 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-white/20 dark:border-slate-300 animate-[spin_50s_linear_infinite]" />
            </div>
            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0F2344] dark:bg-white rounded-full shadow-lg border border-white/20 dark:border-slate-200 flex items-center justify-center z-10">
              <Network className="w-6 h-6 text-blue-400 dark:text-blue-600" />
            </div>
            {/* Orbiting Nodes */}
            <div className="absolute top-[20%] left-[25%] w-10 h-10 bg-blue-900/50 dark:bg-blue-50 rounded-full shadow-md border border-blue-500/30 dark:border-blue-200 flex items-center justify-center animate-bounce" style={{ animationDelay: '0s' }}>
              <Code2 className="w-4 h-4 text-blue-400 dark:text-blue-600" />
            </div>
            <div className="absolute bottom-[20%] right-[20%] w-12 h-12 bg-indigo-900/50 dark:bg-indigo-50 rounded-full shadow-md border border-indigo-500/30 dark:border-indigo-200 flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Cpu className="w-5 h-5 text-indigo-400 dark:text-indigo-600" />
            </div>
            <div className="absolute top-[30%] right-[10%] w-8 h-8 bg-purple-900/50 dark:bg-purple-50 rounded-full shadow-md border border-purple-500/30 dark:border-purple-200 flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-4 h-4 text-purple-400 dark:text-purple-600" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 relative">

          {/* Massive Background Text spanning the entire width */}
          <div className="absolute inset-0 top-[150px] left-0 w-full flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, scale: 1.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full text-center text-[20vw] md:text-[16vw] lg:text-[13.5vw] font-black text-white/[0.08] dark:text-slate-900/[0.03] leading-none tracking-tighter mix-blend-overlay uppercase"
            >
              QORYNTA
            </motion.span>
          </div>

          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6 pr-4">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              {/* Note: If the logo is purely white text, it might need an inverted version. We will rely on CSS filter to invert if needed. */}
              <img src="/logo.webp" alt="" aria-hidden="true" loading="lazy" width={140} height={40} className="h-8 w-auto object-contain rounded-md dark:invert filter dark:brightness-0" />
              <span className="text-xl font-bold tracking-tight text-white dark:text-slate-900">Qorynta Services</span>
            </Link>
            <p className="text-sm text-slate-400 dark:text-slate-600 leading-relaxed font-medium max-w-sm relative z-10">
              We engineer high-performance digital ecosystems. From robust enterprise software to intuitive mobile applications, we transform complex challenges into seamless, scalable solutions that drive tangible business growth.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white dark:text-slate-900 mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="/services" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors">Portfolio</Link></li>
              <li><Link to="/insights" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors">Insights & Blog</Link></li>
              <li><Link to="/engagement" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors">Pricing & Engagement</Link></li>
              <li><Link to="/contact" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors flex items-center gap-1 group">Contact Us <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white dark:text-slate-900 mb-6 uppercase tracking-wider">Socials</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.linkedin.com/in/qorynta-services-72067b419/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Linkedin className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-white dark:group-hover:text-blue-600 transition-colors" /> LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/rishvmiyani" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Github className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-white dark:group-hover:text-blue-600 transition-colors" /> GitHub <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/qorynta_services/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <Instagram className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-white dark:group-hover:text-blue-600 transition-colors" /> Instagram <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4 lg:pl-6">
            <h3 className="text-sm font-bold text-white dark:text-slate-900 mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to={`/services/${service.slug}`} className="text-sm font-medium text-slate-400 dark:text-slate-600 hover:text-white dark:hover:text-blue-600 transition-colors flex items-start gap-1 group">
                    <span className="flex-1">{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 dark:border-slate-200">
          <p className="text-sm font-medium text-slate-400 dark:text-slate-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} Qorynta Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-400 dark:text-slate-600">
            <Link to="/privacy-policy" className="hover:text-white dark:hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white dark:hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
