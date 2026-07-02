import { ArrowRight, Briefcase, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const WhyQorynta = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-transparent group">
      {/* Decorative dot grid top right */}
      <div 
        className="absolute top-12 right-12 w-32 h-32 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left-Side Asset Cluster */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            {/* The wrapper that scales on section hover */}
            <div 
              className="relative w-full max-w-[400px] mx-auto group-hover:scale-[1.06]" 
              style={{ 
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
              }}
            >
              
              {/* Left Secondary Phone (Smart Home) */}
              <ScrollReveal direction="right" delay={0.2} className="absolute inset-0">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-6 sm:-translate-x-12 w-[160px] sm:w-[220px] h-[340px] sm:h-[460px] bg-black rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-black shadow-xl overflow-hidden -rotate-[10deg] opacity-95 z-0 transition-transform hover:-rotate-[12deg] hover:scale-105 duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl z-20"></div>
                  <img src="/smarthome-app.webp" alt="Smart Home App UI" width="220" height="460" className="w-full h-full object-cover relative z-10 rounded-[1.5rem] sm:rounded-[2rem]" />
                </div>
              </ScrollReveal>

              {/* Right Secondary Phone (Grocery App) */}
              <ScrollReveal direction="left" delay={0.3} className="absolute inset-0">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-6 sm:translate-x-12 w-[160px] sm:w-[220px] h-[340px] sm:h-[460px] bg-black rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-black shadow-xl overflow-hidden rotate-[10deg] opacity-95 z-0 transition-transform hover:rotate-[12deg] hover:scale-105 duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl z-20"></div>
                  <img src="/grocery-app.webp" alt="Grocery App UI" width="259" height="576" className="w-full h-full object-cover relative z-10 rounded-[1.5rem] sm:rounded-[2rem]" />
                </div>
              </ScrollReveal>

              {/* Center Primary Phone (FinTech App) */}
              <ScrollReveal direction="up" delay={0.1} className="relative mx-auto z-10 w-[200px] sm:w-[260px]">
                <div className="w-full h-[420px] sm:h-[540px] bg-black rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-black shadow-2xl overflow-hidden z-10 transition-transform hover:-translate-y-2 hover:scale-105 duration-500">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-6 sm:h-7 bg-black rounded-b-2xl sm:rounded-b-3xl z-20"></div>
                  {/* Screen Content Image */}
                  <img src="/fintech-app.webp" alt="Fintech App UI" width="260" height="540" className="w-full h-full object-cover relative z-10 rounded-[2rem] sm:rounded-[2.5rem]" />
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Right-Side Content Block */}
          <div className="flex flex-col justify-center relative">
            {/* Background glowing blob for the text section */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
            
            <ScrollReveal delay={0.4}>
              {/* Upper Tag */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                About Our Company ~
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 animate-pulse-slow">The Best</span> IT Service Company
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium">
                <span className="text-foreground font-semibold">Qorynta services</span> help businesses build powerful websites, mobile apps, and custom software. We deliver quality solutions with transparent communication, on-time delivery, and reliable support to help your business grow online.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {/* Card 1 */}
                <div className="group relative p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800/50 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                      <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Business Solution</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">Tailored strategies & robust software to solve complex challenges.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-100 dark:border-cyan-800/50 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <Headset className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Technical Support</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">24/7 dedicated support to ensure systems run without downtime.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Row */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Contact Us!
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-3 text-foreground font-semibold text-lg bg-muted/50 px-5 py-3 rounded-xl border border-border/50 hover:bg-muted transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <div className="flex flex-col">
                    <span className="text-muted-foreground font-medium text-xs uppercase tracking-wider">Tech & Biz Support</span>
                    <a href="tel:+919316157949" className="hover:text-primary transition-colors text-[17px] tracking-tight">+91 9316157949</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
