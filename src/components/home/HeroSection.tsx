import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GradientText } from '@/components/ui/GradientText';
import { GlassCard } from '@/components/ui/GlassCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const HeroSection = () => {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={revealRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Radial Glow & Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.04]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left animate-fade-in-up items-center lg:items-start reveal">
            <SectionLabel text="TRUSTED BY GLOBAL CLIENTS" />

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-extrabold leading-[1.1] mb-6">
              <GradientText>Build Digital Products</GradientText>
              <br className="hidden md:block" />
              <span className="text-foreground"> That Win Markets</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              From mobile apps to enterprise web platforms — Qorynta delivers 
              production-grade digital solutions for Indian and global businesses 
              at competitive rates.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] transition-all duration-300 text-base font-semibold px-8 h-14 group rounded-full"
              >
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 text-base font-semibold px-8 h-14 rounded-full bg-transparent"
              >
                <Link to="/case-studies">View Our Work</Link>
              </Button>
            </div>

            {/* Social Proof Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-sm font-medium text-muted-foreground border-t border-border/50 pt-6 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>Rated 5.0 by 40+ clients</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Clients in 8+ Countries</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                <span>48hr Kickoff</span>
              </div>
            </div>
          </div>

          {/* Right Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] flex items-center justify-center animate-scale-in reveal reveal-delay-2" style={{ animationDelay: '0.2s' }}>
            
            {/* Main Floating Dashboard Card */}
            <GlassCard className="w-[90%] md:w-[80%] lg:w-full max-w-md absolute z-20 animate-float p-5 border-t border-l border-border/50 shadow-2xl bg-card/40 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">System Status</h3>
                    <p className="text-xs text-green-400">All services operational</p>
                  </div>
                </div>
                <div className="h-6 w-16 bg-green-500/10 rounded border border-green-500/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-green-400">99.9%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: "API Requests", value: "2.4M/s", progress: "85%" },
                  { label: "Database Load", value: "34%", progress: "34%" },
                  { label: "Active Users", value: "14,029", progress: "65%" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-medium text-foreground">{stat.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: stat.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Code Snippet Card (Floating behind) */}
            <div className="absolute -right-4 lg:-right-12 bottom-12 lg:bottom-24 z-10 w-64 rounded-xl bg-card border border-border p-4 shadow-xl animate-float" style={{ animationDelay: '1.5s', transform: 'translateZ(-50px)' }}>
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs leading-loose">
                <div className="text-secondary">const <span className="text-foreground">project</span> = <span className="text-accent">&#123;</span></div>
                <div className="pl-4 text-primary">client: <span className="text-green-400">"Enterprise"</span>,</div>
                <div className="pl-4 text-primary">status: <span className="text-green-400">"Deployed"</span>,</div>
                <div className="pl-4 text-primary">performance: <span className="text-[#F59E0B]">99.9</span></div>
                <div className="text-accent">&#125;;</div>
              </div>
            </div>

            {/* Notification Toast */}
            <div className="absolute -left-4 lg:-left-8 top-12 lg:top-20 z-30 flex items-center gap-3 bg-card/90 backdrop-blur-md border border-border rounded-full p-2 pr-4 shadow-xl animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-medium text-foreground">New project started</span>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
