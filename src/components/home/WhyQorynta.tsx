import { ArrowRight, Briefcase, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const WhyQorynta = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background group transition-colors duration-500">
      {/* Decorative dot grid top right */}
      <div 
        className="absolute top-12 right-12 w-32 h-32 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--tw-gradient-from, #99CAFF) 1.5px, transparent 1.5px)',
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
                  <img src="/smarthome-app.webp" alt="Smart Home App UI" loading="lazy" decoding="async" width="220" height="460" className="w-full h-full object-cover relative z-10 rounded-[1.5rem] sm:rounded-[2rem]" />
                </div>
              </ScrollReveal>

              {/* Right Secondary Phone (Grocery App) */}
              <ScrollReveal direction="left" delay={0.3} className="absolute inset-0">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-6 sm:translate-x-12 w-[160px] sm:w-[220px] h-[340px] sm:h-[460px] bg-black rounded-[2rem] sm:rounded-[2.5rem] border-[6px] sm:border-[8px] border-black shadow-xl overflow-hidden rotate-[10deg] opacity-95 z-0 transition-transform hover:rotate-[12deg] hover:scale-105 duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl z-20"></div>
                  <img src="/grocery-app.webp" alt="Grocery App UI" loading="lazy" decoding="async" width="259" height="576" className="w-full h-full object-cover relative z-10 rounded-[1.5rem] sm:rounded-[2rem]" />
                </div>
              </ScrollReveal>

              {/* Center Primary Phone (FinTech App) */}
              <ScrollReveal direction="up" delay={0.1} className="relative mx-auto z-10 w-[200px] sm:w-[260px]">
                {/* Mobile Mockup Glow */}
                <div className="absolute inset-0 bg-[#99CAFF]/25 blur-[50px] scale-[1.2] rounded-full z-0 pointer-events-none"></div>
                
                <div className="w-full h-[420px] sm:h-[540px] bg-black rounded-[2.5rem] sm:rounded-[3rem] border-[8px] sm:border-[10px] border-black shadow-2xl overflow-hidden z-10 transition-transform hover:-translate-y-2 hover:scale-105 duration-500 relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-6 sm:h-7 bg-black rounded-b-2xl sm:rounded-b-3xl z-20"></div>
                  {/* Screen Content Image */}
                  <img src="/fintech-app.webp" alt="Fintech App UI" loading="lazy" decoding="async" width="260" height="540" className="w-full h-full object-cover relative z-10 rounded-[2rem] sm:rounded-[2.5rem]" />
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* Right-Side Content Block */}
          <div className="flex flex-col justify-center relative">
            <ScrollReveal delay={0.4}>
              {/* Upper Tag */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E3F2FF] dark:bg-primary/10 text-[#004EE0] dark:text-primary font-[600] text-[13px] tracking-[0.5px] mb-6 border border-[#99CAFF] dark:border-primary/20 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                About Our Company ~
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00072D] dark:text-foreground leading-tight mb-6">
                Choose <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#004EE0] via-[#0069D9] to-[#183EFF] dark:from-blue-600 dark:to-cyan-500">The Best</span> IT Service Company
              </h2>

              {/* Description */}
              <p className="text-[#051650] dark:text-muted-foreground text-lg leading-relaxed mb-10 font-medium">
                <span className="text-[#00072D] dark:text-foreground font-bold">Qorynta services</span> help businesses build <span className="text-[#004EE0] dark:text-foreground font-[600]">powerful websites, mobile apps, and custom software</span>. We deliver quality solutions with <span className="text-[#0A2472] dark:text-foreground font-[600]">transparent communication, on-time delivery, and reliable support</span> to help your business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EE0] to-[#0069D9] dark:from-blue-600 dark:to-cyan-500 font-[700]">grow online</span>.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {/* Card 1 */}
                <div className="group relative p-6 rounded-[16px] bg-[#FFFFFF] dark:bg-card bg-gradient-to-br from-[#E3F2FF]/30 to-transparent dark:from-transparent dark:to-transparent border border-[#99CAFF]/60 dark:border-border/50 shadow-[0px_10px_25px_rgba(5,22,80,0.04)] dark:shadow-sm hover:shadow-[0px_16px_35px_rgba(0,78,224,0.15)] dark:hover:shadow-lg hover:border-[1.5px] hover:border-[#004EE0] dark:hover:border-border/50 transition-all duration-300 hover:-translate-y-[3px] overflow-hidden">
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E3F2FF] dark:bg-blue-900/20 text-[#004EE0] dark:text-blue-400 flex items-center justify-center border border-[#99CAFF] dark:border-blue-800/50 dark:shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-[700] text-[#00072D] text-lg mb-1 group-hover:text-[#004EE0] dark:hover:text-primary dark:group-hover:text-blue-400 transition-colors">Business Solution</h3>
                      <p className="text-[#051650] dark:text-muted-foreground text-sm leading-relaxed">Tailored strategies & robust software to solve complex challenges.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative p-6 rounded-[16px] bg-[#FFFFFF] dark:bg-card bg-gradient-to-br from-[#E3F2FF]/30 to-transparent dark:from-transparent dark:to-transparent border border-[#99CAFF]/60 dark:border-border/50 shadow-[0px_10px_25px_rgba(5,22,80,0.04)] dark:shadow-sm hover:shadow-[0px_16px_35px_rgba(0,78,224,0.15)] dark:hover:shadow-lg hover:border-[1.5px] hover:border-[#004EE0] dark:hover:border-border/50 transition-all duration-300 hover:-translate-y-[3px] overflow-hidden">
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E3F2FF] dark:bg-cyan-900/20 text-[#004EE0] dark:text-cyan-400 flex items-center justify-center border border-[#99CAFF] dark:border-cyan-800/50 dark:shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Headset className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-[700] text-[#00072D] text-lg mb-1 group-hover:text-[#004EE0] dark:hover:text-primary dark:group-hover:text-cyan-400 transition-colors">Technical Support</h3>
                      <p className="text-[#051650] dark:text-muted-foreground text-sm leading-relaxed">24/7 dedicated support to ensure systems run without downtime.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Row */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-[#00072D] to-[#0A2472] dark:from-primary dark:to-primary text-[#F2FAF4] dark:text-primary-foreground font-bold tracking-wide rounded-xl hover:from-[#004EE0] hover:to-[#0A2472] dark:hover:from-primary/90 dark:hover:to-primary/90 shadow-md dark:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0px_10px_25px_rgba(0,78,224,0.35)] dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Contact Us!
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-3 text-[#00072D] font-[700] text-lg bg-[#FFFFFF]/90 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#99CAFF] dark:border-primary/20 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0069D9] dark:bg-green-500 animate-pulse shadow-[0_0_8px_rgba(0,105,217,0.8)] dark:shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <div className="flex flex-col">
                    <span className="text-[#0A2472] dark:text-muted-foreground font-[700] text-xs uppercase tracking-wider">Tech & Biz Support</span>
                    <a href="tel:+919316157949" className="hover:text-[#004EE0] dark:hover:text-primary transition-colors text-[17px] tracking-tight">+91 9316157949</a>
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
