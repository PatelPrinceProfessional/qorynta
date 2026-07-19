import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
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
        return;
      }

      if (isMobileMenuOpen && e.key === 'Tab') {
        const focusableElements = drawerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
      
      // Focus first element on open
      setTimeout(() => {
        const focusableElements = drawerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Hire', path: '/hire' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'Pricing', path: '/engagement' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar (Hidden when scrolled or dock active) */}
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

      <header className="fixed z-50 left-0 right-0 top-0 pointer-events-none">
        {/* Glowing Scroll Progress Bar */}
        <div
          className={cn(
            "absolute top-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-50 transition-all duration-150 ease-out",
            isScrolled ? "opacity-0 md:opacity-100" : "opacity-100"
          )}
          style={{ width: `${scrollProgress}%` }}
        />
        
        {/* Mobile Header Layout (Fallback for < lg) */}
        <div className={cn(
          "lg:hidden w-full flex items-center justify-between transition-all duration-500 pointer-events-auto",
          isScrolled 
            ? "h-14 bg-background/80 backdrop-blur-xl border-b shadow-sm px-4" 
            : "h-16 bg-transparent px-4"
        )}>
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.webp" alt="Qorynta Services" width={140} height={40} className={cn("w-auto object-contain transition-all duration-500", isScrolled ? "h-8" : "h-10")} />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Asymmetric Crystal Dock (Desktop >= lg) */}
        <div className="hidden lg:block pointer-events-none h-0">
          
          {/* Decoupled Logo Anchor */}
          <Link 
            to="/" 
            className="absolute top-6 left-8 flex items-center gap-2 group pointer-events-auto transition-transform hover:scale-105 duration-300"
          >
            <img src="/logo.webp" alt="Qorynta Services" className="h-10 w-auto object-contain" />
          </Link>

          {/* Floating Navigation Dock (Right) */}
          <nav 
            className="absolute top-6 right-8 flex items-center pointer-events-auto"
            style={{
              backdropFilter: "blur(24px)",
              background: "rgba(255, 255, 255, 0.75)",
              border: "1px solid rgba(226, 232, 240, 0.7)",
              borderRadius: "9999px",
              padding: "0.5rem 0.5rem 0.5rem 1.5rem", // py-2, pr-2, pl-6
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 mr-4">
              
              {/* Home */}
              <div className="relative" onMouseEnter={() => setHoveredItem('home')}>
                {hoveredItem === 'home' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link to="/" className={cn("relative z-10 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 block", location.pathname === '/' ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900')}>Home</Link>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => { setIsServicesOpen(true); setHoveredItem('services'); }}
                onMouseLeave={() => setIsServicesOpen(false)}
                onFocus={() => { setIsServicesOpen(true); setHoveredItem('services'); }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsServicesOpen(false);
                  }
                }}
              >
                {hoveredItem === 'services' && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                <Link
                  to="/services"
                  className={cn("relative z-10 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 flex items-center gap-1", location.pathname === '/services' ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900')}
                >
                  Services
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </Link>

                <div 
                  className={cn(
                    "absolute top-full pt-4 left-1/2 -translate-x-1/2 w-[480px] z-50",
                    isServicesOpen ? "pointer-events-auto" : "pointer-events-none"
                  )}
                  style={{
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)",
                    opacity: isServicesOpen ? 1 : 0,
                    transform: isServicesOpen ? "translate(-50%, 0) scale(1)" : "translate(-50%, -10px) scale(0.95)"
                  }}
                >
                  <div 
                    className="overflow-hidden p-6 flex gap-6"
                    style={{
                      backdropFilter: "blur(30px)",
                      background: "rgba(255, 255, 255, 0.92)",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                      borderRadius: "1rem",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="flex-1">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Core Services</h4>
                      <div className="space-y-1">
                        {services.filter(s => s.category === 'Core').slice(0, 5).map((service, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${service.slug}`}
                            className="block px-3 py-2.5 text-[13px] font-medium text-slate-900 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 border-l border-slate-200 pl-6">
                      <h4 className="text-[11px] font-bold text-amber-600 uppercase tracking-wider mb-4 px-2 flex items-center gap-1">
                        AI Services
                      </h4>
                      <div className="space-y-1">
                        {services.filter(s => s.category === 'AI').map((service, idx) => (
                          <Link
                            key={idx}
                            to={`/services/${service.slug}`}
                            className="block px-3 py-2.5 text-[13px] font-medium text-slate-900 hover:text-amber-600 hover:bg-amber-50/50 rounded-lg transition-all duration-200 hover:translate-x-1"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                      <Link 
                        to="/services" 
                        className="inline-block mt-4 ml-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-md text-[11px] font-bold transition-colors" 
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <div key={link.name} className="relative" onMouseEnter={() => setHoveredItem(link.name.toLowerCase())}>
                  {hoveredItem === link.name.toLowerCase() && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-slate-100/80 rounded-full z-0" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                  <Link to={link.path} className={cn("relative z-10 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 block", location.pathname === link.path ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900')}>{link.name}</Link>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="w-[1px] h-6 bg-slate-200 mr-4" />

            {/* Dock Right Side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 rounded-full px-5 h-9 text-[13px] font-semibold hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Link to="/contact">
                  <RevealContent>Get Free Consultation</RevealContent>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer (Unchanged behavior) */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
        tabIndex={-1}
      />

      <div
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-slate-950 z-[60] lg:hidden flex flex-col border-l border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors z-50"
          aria-label="Close Mobile Menu"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex-1 overflow-y-auto pt-20 pb-8 px-6 flex flex-col">
          <div className="flex flex-col space-y-6 flex-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-xl font-medium text-slate-900 dark:text-white hover:text-blue-600 transition-colors" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
