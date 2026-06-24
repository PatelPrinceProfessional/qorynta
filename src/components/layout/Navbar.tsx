import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { GradientText } from "../ui/GradientText";
import { Menu, X, ChevronDown, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0E1A]/95 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform">
              <Rocket size={18} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              <GradientText>Qorynta</GradientText>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                    location.pathname === link.href || (link.href.startsWith("/#") && location.hash === link.href.substring(1))
                      ? "text-primary border-b-2 border-primary pb-1 -mb-[6px]"
                      : "text-text-secondary"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                </Link>
                
                {/* Simplified dropdown for Services */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                    <div className="bg-bg-surface border border-border rounded-lg shadow-xl p-2 flex flex-col gap-1">
                      <Link to="/services" className="px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-secondary rounded transition-colors">All Services</Link>
                      <Link to="/services#web" className="px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-secondary rounded transition-colors">Web Dev</Link>
                      <Link to="/services#mobile" className="px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-bg-secondary rounded transition-colors">Mobile Apps</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block">
              <Button>Get Free Consultation</Button>
            </Link>
            
            <button
              className="md:hidden text-text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-bg-surface border-l border-border z-[70] p-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Rocket size={18} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              <GradientText>Qorynta</GradientText>
            </span>
          </Link>
          <button
            className="text-text-secondary hover:text-text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-border">
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Get Free Consultation</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
