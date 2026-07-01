import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

import { services } from '@/data/services';

export const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.jpg" alt="Qorynta Services Logo" className="h-8 w-auto object-contain rounded-md" />
              <span className="text-xl font-bold tracking-tight">Qorynta Services</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack digital agency delivering production-grade web, mobile, and AI solutions for startups and enterprises worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/qorynta-services-72067b419/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/rishvmiyani" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/qorynta_services/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              {services.slice(0, 6).map((service, idx) => (
                <li key={idx}>
                  <Link to={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:qorynta@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  qorynta@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="tel:+919316157949" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 93161 57949
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-0" /> {/* Spacer icon */}
                <a href="tel:+919328606539" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 93286 06539
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Ahmedabad,<br />
                  Gujarat, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Qorynta Services. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
