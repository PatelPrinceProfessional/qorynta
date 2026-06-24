import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { GradientText } from "../ui/GradientText";
import { GlassCard } from "../ui/GlassCard";
import { ArrowRight, Star, Globe, Clock, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-bg-primary -z-20" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] -z-10" />
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/20 via-bg-primary/0 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-full md:w-[50%] h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-violet/10 via-bg-primary/0 to-transparent -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* LEFT CONTENT (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col items-start text-left z-10 pt-10 lg:pt-0">
            <SectionLabel text="TRUSTED BY GLOBAL CLIENTS" />
            
            <h1 className="text-[40px] leading-[1.2] md:text-5xl lg:text-[56px] lg:leading-[1.1] font-extrabold mb-6 tracking-tight">
              <GradientText>Build Digital Products<br/>That Win Markets</GradientText>
            </h1>
            
            <p className="text-text-secondary text-lg leading-[1.7] mb-8 max-w-xl">
              From mobile apps to enterprise web platforms — Qorynta delivers 
              production-grade digital solutions for Indian and global businesses 
              at competitive rates.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start Your Project 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/#portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
            
            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-cyan text-accent-cyan" />
                  ))}
                </div>
                <span>Rated 5.0 by 40+ clients</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent-cyan" />
                <span>Clients in 8+ Countries</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-cyan" />
                <span>48hr Kickoff</span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL (40%) */}
          <div className="w-full lg:w-[40%] relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Main Floating Dashboard */}
            <GlassCard className="absolute w-[90%] sm:w-[80%] max-w-[400px] right-0 lg:-right-4 top-[20%] animate-float z-20 shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                </div>
                <div className="text-[10px] text-text-muted font-mono">analytics_dashboard.tsx</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-text-muted mb-1">Total Revenue</div>
                    <div className="text-2xl font-bold text-text-primary">$124,500</div>
                  </div>
                  <div className="text-success text-sm flex items-center">
                    +14.5% ↗
                  </div>
                </div>
                <div className="h-24 flex items-end gap-2 pt-2">
                  {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                    <div key={i} className="w-full bg-accent-blue/20 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 left-0 w-full bg-accent-blue rounded-t-sm transition-all duration-1000"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Code Snippet Card */}
            <GlassCard className="absolute w-[70%] max-w-[300px] left-0 lg:-left-12 bottom-[15%] animate-float p-4 z-30 [animation-delay:2s] shadow-2xl bg-bg-primary/90 border-accent-cyan/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded bg-accent-violet/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-accent-violet">TS</span>
                </div>
                <span className="text-xs text-text-secondary font-mono">deploy.ts</span>
              </div>
              <pre className="text-[10px] font-mono leading-relaxed overflow-x-hidden">
                <span className="text-accent-cyan">const</span> <span className="text-text-primary">deploySystem</span> = <span className="text-accent-cyan">async</span> () <span className="text-accent-blue">=&gt;</span> {'{\n'}
                {'  '}<span className="text-text-muted">// Initializing production build</span>{'\n'}
                {'  '}<span className="text-accent-cyan">await</span> <span className="text-[#EAB308]">System</span>.<span className="text-accent-blue">init</span>();{'\n'}
                {'  '}<span className="text-accent-cyan">return</span> <span className="text-success">'Success!'</span>;{'\n'}
                {'}'};
              </pre>
            </GlassCard>

            {/* Notification Toast */}
            <div className="absolute top-[10%] left-[10%] lg:-left-4 z-40 bg-bg-surface border border-success/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg animate-float [animation-delay:4s]">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span className="text-xs font-medium text-text-primary">New project started</span>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
        <span className="text-[10px] uppercase tracking-widest text-text-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
