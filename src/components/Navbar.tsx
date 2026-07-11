import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '@/components/ThemeToggle';
import { services } from '@/data/services';
import { RevealContent } from '@/components/ui/RevealContent';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

          setScrollProgress(scrollPercent);
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key and focus trap for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className={cn("bg-primary/5 border-b border-border/40 py-1.5 px-4 sm:px-6 lg:px-8 hidden md:flex justify-end items-center gap-6 text-xs font-medium text-muted-foreground z-50 relative transition-all duration-500", isScrolled ? "h-0 opacity-0 overflow-hidden py-0 border-0" : "opacity-100")}>
        <div className="flex items-center gap-4">
          <a href="tel:+919316157949" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            +91 9316157949
          </a>
          <a href="mailto:qorynta@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            qorynta@gmail.com
          </a>
        </div>
      </div>

      <header
        className={cn(
          'fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] left-0 right-0',
          isScrolled ? 'top-0 md:top-4' : 'top-0 md:top-[34px]'
        )}
      >
        {/* Glowing Scroll Progress Bar */}
        <div
          className={cn(
            "absolute top-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-50 transition-all duration-150 ease-out",
            isScrolled ? "opacity-0 md:opacity-100" : "opacity-100"
          )}
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="w-full md:container md:mx-auto px-0 md:px-6 lg:px-8">
          <nav className={cn(
            "w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled 
              ? "h-14 md:h-16 bg-background/80 backdrop-blur-xl border-b md:border border-border/40 shadow-sm md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:rounded-full px-4 sm:px-6 lg:px-8" 
              : "h-16 md:h-20 bg-transparent border-b border-transparent px-4 sm:px-6 lg:px-8 md:px-0 lg:px-0"
          )}>
            <Link to="/" className="flex items-center gap-2 group z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.webp" alt="Qorynta Services Logo" className={cn("w-auto object-contain rounded-md transition-all duration-500", isScrolled ? "h-8" : "h-10")} />
              <span className={cn("font-bold tracking-tight block transition-all duration-500", isScrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl")}>
                <span className="gradient-text">Qorynta Services</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2" onMouseLeave={() => setHoveredItem(null)}>

              <div className="relative" onMouseEnter={() => setHoveredItem('home')}>
                {hoveredItem === 'home' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>Home</Link>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => { setIsServicesOpen(true); setHoveredItem('services'); }}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {hoveredItem === 'services' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link
                  to="/services"
                  className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest flex items-center gap-1", location.pathname === '/services' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <div className={cn(
                  "absolute top-full left-0 w-[400px] pt-2 transition-all duration-200 origin-top-left z-50",
                  isServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                )}>
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden glass-card p-4 flex gap-6">
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">Core Services</h4>
                      <div className="space-y-1">
                        {services.filter(s => s.category === 'Core').slice(0, 5).map((service, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${service.slug}`}
                            className="block px-2 py-1.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 border-l border-border/50 pl-6">
                      <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-2 px-2 flex items-center gap-1">
                        AI Services
                      </h4>
                      <div className="space-y-1">
                        {services.filter(s => s.category === 'AI').map((service, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${service.slug}`}
                            className="block px-2 py-1.5 text-sm text-foreground hover:text-[#F59E0B] hover:bg-muted/50 rounded-lg transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                      <Link to="/services" className="block mt-4 px-2 py-1.5 text-xs font-bold text-primary hover:underline" onClick={() => setIsServicesOpen(false)}>
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown (Phase 1 Stub) */}
              <div className="relative group" onMouseEnter={() => setHoveredItem('industries')}>
                {hoveredItem === 'industries' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link
                  to="/industries"
                  className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest flex items-center gap-1", location.pathname === '/industries' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}
                >
                  Industries
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 w-48 pt-2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 origin-top-left z-50">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden glass-card p-2">
                    {['FinTech', 'Healthcare', 'E-Commerce', 'SaaS', 'Real Estate'].map((ind) => (
                      <Link key={ind} to={`/industries/${ind.toLowerCase()}`} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors">{ind}</Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hire Dropdown (Phase 1 Stub) */}
              <div className="relative group" onMouseEnter={() => setHoveredItem('hire')}>
                {hoveredItem === 'hire' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link
                  to="/hire"
                  className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest flex items-center gap-1", location.pathname === '/hire' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}
                >
                  Hire
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 w-48 pt-2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 origin-top-left z-50">
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden glass-card p-2">
                    {['React Developers', 'Python Engineers', 'AI/ML Experts', 'Node.js Devs'].map((role) => (
                      <Link key={role} to={`/hire/${role.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors">{role}</Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative" onMouseEnter={() => setHoveredItem('about')}>
                {hoveredItem === 'about' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/about" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/about' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>About</Link>
              </div>

              <div className="relative" onMouseEnter={() => setHoveredItem('portfolio')}>
                {hoveredItem === 'portfolio' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/case-studies" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/case-studies' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>Portfolio</Link>
              </div>

              <div className="relative" onMouseEnter={() => setHoveredItem('insights')}>
                {hoveredItem === 'insights' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/insights" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/insights' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>Insights</Link>
              </div>

              <div className="relative" onMouseEnter={() => setHoveredItem('engagement')}>
                {hoveredItem === 'engagement' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/engagement" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/engagement' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>Pricing</Link>
              </div>

              <div className="relative" onMouseEnter={() => setHoveredItem('careers')}>
                {hoveredItem === 'careers' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/careers" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/careers' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>Careers</Link>
              </div>

              <div className="relative" onMouseEnter={() => setHoveredItem('contact')}>
                {hoveredItem === 'contact' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/contact" className={cn("relative z-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:tracking-widest block", location.pathname === '/contact' ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground')}>Contact</Link>
              </div>
            </div>

            {/* CTA Button & Theme Toggle (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <Button
                  asChild
                  className="relative bg-primary text-primary-foreground transition-all duration-300 rounded-full px-6 hover:scale-[1.02] shadow-sm overflow-hidden group"
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    <RevealContent>Get Free Consultation</RevealContent>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              {/* Mobile Menu Button */}
              <button
                ref={menuButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors z-50 relative"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background z-[60] md:hidden flex flex-col border-l border-border transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Close Button Inside Drawer */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors z-50 rounded-full"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex-1 overflow-y-auto pt-20 pb-8 px-6 flex flex-col">
          <div className="flex flex-col space-y-6 flex-1">
            <Link to="/" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

            <div className="space-y-4">
              <Link to="/services" className="text-xl font-medium text-foreground hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <div className="pl-4 border-l border-border/50 space-y-3 flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider pt-2">Core Services</span>
                {services.filter(s => s.category === 'Core').slice(0, 3).map((service, idx) => (
                  <Link key={idx} to={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {service.title}
                  </Link>
                ))}

                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider pt-2">AI Services</span>
                {services.filter(s => s.category === 'AI').slice(0, 2).map((service, idx) => (
                  <Link key={idx} to={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-[#F59E0B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {service.title}
                  </Link>
                ))}

                <Link to="/services" className="text-sm text-primary font-medium pt-2" onClick={() => setIsMobileMenuOpen(false)}>View All Services →</Link>
              </div>
            </div>

            <Link to="/about" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/case-studies" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link to="/industries" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
            <Link to="/hire" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Hire</Link>
            <Link to="/insights" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
            <Link to="/engagement" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/careers" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
            <Link to="/contact" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            <div className="pt-6 mt-auto">
              <Button asChild className="w-full bg-primary text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.35)] rounded-full h-12 text-lg overflow-hidden group">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center">
                  <RevealContent>Get Free Consultation</RevealContent>
                </Link>
              </Button>
            </div>
          </div>

          {/* Social Icons Bottom */}
          <div className="pt-8 mt-8 border-t border-border flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
