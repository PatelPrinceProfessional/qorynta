import { Link } from "react-router-dom";
import { GradientText } from "../ui/GradientText";
import { Rocket, Github, Twitter, Linkedin, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060A14] relative pt-16 pb-8">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-accent-blue via-transparent to-accent-violet opacity-30" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-6 w-max">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Rocket size={18} />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                <GradientText>Qorynta</GradientText>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-xs">
              Building world-class digital products from India for global markets.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <div className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">
              GST: 00XXXXXX0000X0X
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Web Development", path: "/services#web" },
                { name: "Mobile App Development", path: "/services#mobile" },
                { name: "UI/UX Design", path: "/services#design" },
                { name: "AI & Machine Learning", path: "/services#ai" },
                { name: "Cloud & DevOps", path: "/services#cloud" },
                { name: "E-Commerce Solutions", path: "/services#ecommerce" },
                { name: "SaaS Development", path: "/services#saas" },
                { name: "IT Consulting", path: "/services#consulting" }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-accent-cyan text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/#about" },
                { name: "Our Work / Portfolio", path: "/#portfolio" },
                { name: "Case Studies", path: "/#portfolio" },
                { name: "Blog / Insights", path: "/#blog" },
                { name: "Careers", path: "/careers" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-accent-cyan text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-5">
              <li>
                <a href="mailto:hello@qorynta.in" className="flex items-start gap-3 text-text-secondary hover:text-accent-cyan text-sm transition-colors group">
                  <Mail className="w-5 h-5 text-accent-cyan mt-0.5" />
                  <span className="leading-snug">hello@qorynta.in</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-text-secondary hover:text-success text-sm transition-colors group">
                  <MessageCircle className="w-5 h-5 text-success mt-0.5" />
                  <span className="leading-snug">WhatsApp Us<br/>+91 XXXXX XXXXX</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-text-secondary text-sm">
                  <MapPin className="w-5 h-5 text-accent-cyan mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-white font-semibold">Markets Served:</strong><br/>
                    India 🇮🇳 · UK 🇬🇧 · US 🇺🇸<br/>
                    <span className="text-[12px] text-text-muted mt-2 block">Available Mon–Fri, 9AM–7PM IST</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-text-muted text-center md:text-left">
            © {new Date().getFullYear()} Qorynta. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Made in India 🇮🇳 for the World 🌍
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-muted">
            <Link to="/privacy" className="hover:text-accent-cyan transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
