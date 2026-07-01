import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '@/components/ThemeToggle';
import { services } from '@/data/services';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled
            ? 'bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-sm'
            : 'bg-transparent'
        )}
      >
        {/* Glowing Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-50 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.jpg" alt="Qorynta Services Logo" className="h-10 w-auto object-contain rounded-md" />
              <span className="text-lg sm:text-xl font-bold tracking-tight block">
                <span className="gradient-text">Qorynta Services</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              <Link to="/" className={cn("px-3 py-2 text-sm font-medium transition-colors animated-underline", location.pathname === '/' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground')}>Home</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  to="/services" 
                  className={cn("px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1", location.pathname === '/services' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground')}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={cn(
                  "absolute top-full left-0 w-64 pt-2 transition-all duration-200 origin-top-left",
                  isServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                )}>
                  <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden glass-card p-2">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className={cn("px-3 py-2 text-sm font-medium transition-colors animated-underline", location.pathname === '/about' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground')}>About</Link>
              <Link to="/case-studies" className={cn("px-3 py-2 text-sm font-medium transition-colors animated-underline", location.pathname === '/case-studies' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground')}>Portfolio</Link>
              <Link to="/contact" className={cn("px-3 py-2 text-sm font-medium transition-colors animated-underline", location.pathname === '/contact' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground')}>Contact</Link>
            </div>

            {/* CTA Button & Theme Toggle (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Button
                asChild
                className="bg-primary text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full px-6"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
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
          </div>
        </nav>
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
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background z-50 md:hidden flex flex-col border-l border-border transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex-1 overflow-y-auto pt-24 pb-8 px-6 flex flex-col">
          <div className="flex flex-col space-y-6 flex-1">
            <Link to="/" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            
            <div className="space-y-4">
              <Link to="/services" className="text-xl font-medium text-foreground hover:text-primary transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <div className="pl-4 border-l border-border/50 space-y-3 flex flex-col">
                {services.slice(0, 5).map((service, idx) => (
                  <Link key={idx} to={`/services/${service.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    {service.title}
                  </Link>
                ))}
                <Link to="/services" className="text-sm text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>View All Services →</Link>
              </div>
            </div>

            <Link to="/about" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/case-studies" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link to="/contact" className="text-xl font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            
            <div className="pt-6 mt-auto">
              <Button asChild className="w-full bg-primary text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.35)] rounded-full h-12 text-lg">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get Free Consultation</Link>
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
