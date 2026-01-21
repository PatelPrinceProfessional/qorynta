import { Link } from 'react-router-dom';
import { Zap, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Sticky CTA Bar */}
      <div className="sticky-cta py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground text-center sm:text-left font-medium">
              Planning a $1K+ ML or Data project? Book a discovery call.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground border-2 border-primary-foreground hover:border-primary font-semibold group transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Book Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-foreground">Qory</span>
                <span className="gradient-text">nta</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Production-grade ML deployments for US & UK FinTech teams. 
              Boutique expertise with enterprise results.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:qorynta@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/rishvmiyani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Gen AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Qorynta. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">⭐ Clutch Verified 2025</span>
            <span className="text-muted-foreground">🔒 SOC2 Process</span>
            <span className="text-muted-foreground">🌐 EST Overlap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
