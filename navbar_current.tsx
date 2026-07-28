import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
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
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Hire', path: '/hire' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/case-studies' },
    { name: 'Insights', path: '/insights' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>

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
            <img src="/logo.webp" alt="Qorynta Services" width={140} height={40} fetchPriority="high" className={cn("w-auto object-contain transition-all duration-500", isScrolled ? "h-8" : "h-10")} />
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
            <img src="/logo.webp" alt="Qorynta Services" width={140} height={40} className="h-10 w-auto object-contain" />
          </Link>

          {/* Floating Navigation Dock (Right) */}
          <nav
            className="absolute top-6 right-8 flex items-center pointer-events-auto bg-[#FFFFFF]/80 dark:bg-background/85 hover:bg-[#FFFFFF]/95 dark:hover:bg-slate-900/95 backdrop-blur-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,1)] active:shadow-[0_5px_20px_rgba(0,0,0,0.4)] active:scale-[0.99] border border-slate-200/60 dark:border-border/80 hover:border-blue-500/50 rounded-full transition-all duration-300"
            style={{
              padding: "0.5rem 0.5rem 0.5rem 1.5rem", // py-2, pr-2, pl-6
            }}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Radial Color Grading Mask */}
            <div className="absolute inset-0 rounded-full pointer-events-none bg-radial from-blue-500/5 to-transparent z-[-1]" style={{ background: 'radial-gradient(circle at center, rgba(59,130,246,0.05) 0%, transparent 70%)' }} />

            <div className="flex items-center gap-1 mr-4">

              {/* Home */}
              <motion.div
                className="relative"
                onMouseEnter={() => setHoveredItem('home')}
                whileTap={{ scale: 0.95, y: 1 }}
              >
                {hoveredItem === 'home' && <motion.div layoutId="activeNavPill" className="absolute inset-0 bg-blue-50/80 dark:bg-blue-500/10 rounded-full z-0" transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.8 }} />}
                <Link to="/" className={cn("relative z-10 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 block", location.pathname === '/' ? 'text-[#051650] dark:text-foreground font-semibold' : 'text-[#051650] dark:text-foreground/90 hover:text-[#004EE0] dark:hover:text-blue-400')}>Home</Link>
              </motion.div>

              {/* Services Dropdown */}
              <motion.div
                className="relative"
                onMouseEnter={() => { setIsServicesOpen(true); setHoveredItem('services'); }}
                onMouseLeave={() => setIsServicesOpen(false)}
                onFocus={() => { setIsServicesOpen(true); setHoveredItem('services'); }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setIsServicesOpen(false);
                  }
                }}
                whileTap={{ scale: 0.95, y: 1 }}
              >
                {hoveredItem === 'services' && <motion.div layoutId="activeNavPill" className="absolute inset-0 bg-blue-50/80 dark:bg-blue-500/10 rounded-full z-0" transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.8 }} />}
                <Link
                  to="/services"
                  className={cn("relative z-10 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 flex items-center gap-1", location.pathname === '/services' ? 'text-[#051650] dark:text-foreground font-semibold' : 'text-[#051650] dark:text-foreground/90 hover:text-[#004EE0] dark:hover:text-blue-400')}
                >
                  Services
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </Link>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      className="absolute top-full pt-4 left-1/2 -translate-x-1/2 w-[480px] z-50 pointer-events-auto"
                      initial={{ opacity: 0, y: 12, scale: 0.97, rotateX: -4 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 350, damping: 26 }}
                      style={{ perspective: "1000px" }}
                    >
                      <div
                        className="overflow-hidden p-6 flex gap-6 bg-gradient-to-b from-white via-white/95 to-slate-50/90 dark:from-slate-950 dark:via-slate-950/98 dark:to-slate-900/95 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.75)] border border-slate-200/60 dark:border-border/80 hover:border-blue-500/40 transition-colors duration-300 rounded-[1rem] backdrop-blur-xl"
                      >
                        <div className="flex-1">
                          <h4 className="font-mono text-[10px] font-extrabold tracking-[0.15em] text-slate-500 dark:text-muted-foreground mb-4 block px-2">CORE SERVICES</h4>
                          <div className="space-y-1">
                            {services.filter(s => s.category === 'Core').slice(0, 5).map((service, idx) => (
                              <motion.div key={idx} whileHover={{ x: 6, color: "#3b82f6" }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                                <Link
                                  to={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[13px] font-medium text-slate-900 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 border-l border-slate-200/60 dark:border-border/80 pl-6">
                          <h4 className="font-mono text-[10px] font-extrabold tracking-[0.15em] text-slate-500 dark:text-muted-foreground mb-4 block px-2">AI SERVICES</h4>
                          <div className="space-y-1">
                            {services.filter(s => s.category === 'AI').map((service, idx) => (
                              <motion.div key={idx} whileHover={{ x: 6, color: "#d97706" }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                                <Link
                                  to={`/services/${service.slug}`}
                                  className="block px-3 py-2.5 text-[13px] font-medium text-slate-900 dark:text-foreground hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-500/10 rounded-lg transition-colors duration-200"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <Link
                            to="/services"
                            className="inline-block mt-4 ml-2 px-3 py-1.5 bg-slate-100 dark:bg-muted hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-foreground rounded-md text-[11px] font-bold transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinks.filter(link => link.name !== 'Home' && link.name !== 'Services').map((link) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(link.name.toLowerCase())}
                  whileTap={{ scale: 0.95, y: 1 }}
                >
                  {hoveredItem === link.name.toLowerCase() && <motion.div layoutId="activeNavPill" className="absolute inset-0 bg-blue-50/80 dark:bg-blue-500/10 rounded-full z-0" transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.8 }} />}
                  <Link to={link.path} className={cn("relative z-10 px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 block", location.pathname === link.path ? 'text-[#051650] dark:text-foreground font-semibold' : 'text-[#051650] dark:text-foreground/90 hover:text-[#004EE0] dark:hover:text-blue-400')}>{link.name}</Link>
                </motion.div>
              ))}
            </div>

            {/* Separator */}
            <div className="w-[1px] h-6 bg-slate-200 mr-4" />

            {/* Dock Right Side */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                asChild
                className="bg-gradient-to-r from-[#004EE0] to-[#0A2472] hover:brightness-110 text-[#F2FAF4] transition-all duration-300 rounded-full px-5 h-9 text-[13px] font-semibold hover:shadow-lg hover:shadow-[#004EE0]/30 border-none"
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
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-background z-[60] lg:hidden flex flex-col border-l border-slate-200 dark:border-border transition-transform duration-300 ease-out",
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
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                      className="flex items-center justify-between text-xl font-medium text-slate-900 dark:text-foreground hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isMobileServicesExpanded && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isMobileServicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-6 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-border/50">

                              {/* Core Services Column */}
                              <div>
                                <h4 className="font-mono text-[10px] font-extrabold tracking-[0.15em] text-slate-500 dark:text-muted-foreground mb-4">CORE</h4>
                                <div className="space-y-4">
                                  {services.filter(s => s.category === 'Core').slice(0, 5).map((service, idx) => (
                                    <Link
                                      key={idx}
                                      to={`/services/${service.slug}`}
                                      className="block text-[11px] font-medium text-slate-700 dark:text-foreground/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* AI Services Column */}
                              <div>
                                <h4 className="font-mono text-[10px] font-extrabold tracking-[0.15em] text-slate-500 dark:text-muted-foreground mb-4">AI</h4>
                                <div className="space-y-4">
                                  {services.filter(s => s.category === 'AI').map((service, idx) => (
                                    <Link
                                      key={idx}
                                      to={`/services/${service.slug}`}
                                      className="block text-[11px] font-medium text-slate-700 dark:text-foreground/90 hover:text-amber-600 dark:hover:text-amber-400 transition-colors leading-tight"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {service.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* View All Services Button */}
                              <div className="col-span-2 pt-4 mt-2 border-t border-slate-200 dark:border-border/50">
                                <Link
                                  to="/services"
                                  className="block w-full text-center py-2.5 bg-white dark:bg-muted/50 text-slate-900 dark:text-foreground rounded-lg text-xs font-bold border border-slate-200 dark:border-border/50 hover:bg-slate-50 dark:hover:bg-muted transition-colors shadow-sm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  View All Services
                                </Link>
                              </div>

                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-medium text-slate-900 dark:text-foreground hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
