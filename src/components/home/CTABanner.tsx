import { Link } from 'react-router-dom';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { RevealContent } from '@/components/ui/RevealContent';

export const CTABanner = () => {
  return (
    <section className="py-16 md:py-16 relative overflow-hidden bg-primary/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />
      
      <ScrollReveal direction="up" className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's discuss your project requirements. We respond within 24 hours with a free technical scoping call.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.5)] hover:shadow-[0_0_36px_rgba(59,130,246,0.7)] transition-all duration-300 text-base font-bold px-8 h-14 group rounded-full overflow-hidden"
            >
              <Link to="/contact" className="flex items-center justify-center">
                <RevealContent>
                  Get a Proposal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </RevealContent>
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-border text-foreground hover:bg-muted hover:border-primary/50 transition-all duration-300 text-base font-semibold px-8 h-14 rounded-full bg-card/50 backdrop-blur-sm"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5" />
                Book a Free Call
              </Link>
            </Button>
          </div>
        </div>
        
      </ScrollReveal>
    </section>
  );
};
