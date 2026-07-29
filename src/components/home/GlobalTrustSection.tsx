import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CheckCircle2, Globe2, Mail } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const GlobalTrustSection = () => {
  const benefits = [
    <span key="1">We work in your timezone â€” <span className="font-[700] text-[#004EE0] dark:text-blue-400">EST, GMT, and GST</span> overlap windows available</span>,
    <span key="2"><span className="font-[700] text-[#0A2472] dark:text-blue-300">USD pricing</span>, transparent contracts, and milestone-based billing</span>,
    <span key="3"><span className="font-[700] text-[#00072D] dark:text-white">NDA signed</span> before the first call â€” <span className="font-[700] text-[#00072D] dark:text-white">your IP is always protected</span></span>,
    <span key="4"><span className="font-[600] text-[#004EE0] dark:text-blue-400">Weekly Loom video updates</span> so you always know project status</span>,
    <span key="5"><span className="font-[700] text-[#0A2472] dark:text-blue-300">6 months post-launch support</span> included in every project</span>,
    <span key="6"><span className="font-[700] text-[#004EE0] dark:text-blue-400">US and UK client references</span> available on request</span>
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-slate-900/50">
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="inline-block py-1 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-[#99CAFF]/50 dark:border-white/10 text-[#0A2472] dark:text-primary text-sm font-[700] tracking-[2px] uppercase mb-6 backdrop-blur-md shadow-sm dark:shadow-none">
              GLOBAL PARTNERS
            </span>
            <h2 className="text-3xl md:text-5xl font-[900] text-[#00072D] dark:text-foreground mb-6">
              Trusted by <span className="font-[800] bg-clip-text text-transparent bg-gradient-to-br from-[#004EE0] via-[#0069D9] to-[#183EFF] dark:from-primary dark:to-primary">US, UK & UAE</span> Businesses Since Day One
            </h2>
            <p className="text-xl text-[#051650] dark:text-muted-foreground font-medium">
              For our international clients, here is what working with <span className="font-[700] text-[#004EE0] dark:text-primary">Qorynta</span> means:
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-[22px_24px] rounded-[16px] bg-[#FFFFFF] dark:bg-slate-900 border border-[#99CAFF]/50 dark:border-border/50 shadow-[0px_8px_24px_rgba(5,22,80,0.03)] dark:shadow-sm hover:-translate-y-[4px] hover:border-[1.5px] hover:border-[#004EE0] dark:hover:border-primary hover:shadow-[0px_16px_35px_rgba(0,78,224,0.14)] dark:hover:shadow-[0_16px_35px_rgba(0,0,0,0.4)] transition-all duration-[350ms] ease-in-out"
                >
                  <div className="shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#E3F2FF] dark:bg-emerald-500/10 border border-[#99CAFF] dark:border-emerald-500/20 group-hover:bg-[#004EE0] dark:group-hover:bg-emerald-500 group-hover:border-[#004EE0] dark:group-hover:border-emerald-500 transition-colors duration-[350ms]">
                    <CheckCircle2 className="w-5 h-5 text-[#004EE0] dark:text-emerald-500 group-hover:text-[#F2FAF4] dark:group-hover:text-white transition-colors duration-[350ms]" />
                  </div>
                  <p className="text-[#051650] dark:text-foreground font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <a href="mailto:qorynta@gmail.com" className="group block cursor-pointer transition-all duration-[350ms] ease-in-out hover:scale-[1.01] hover:-translate-y-[3px]">
              <div className="flex items-center justify-center p-6 rounded-[20px] bg-gradient-to-br from-[#FFFFFF] to-[#E3F2FF] dark:from-primary/5 dark:to-primary/10 border-[1.5px] border-[#99CAFF] dark:border-primary/20 text-center shadow-[0px_10px_30px_rgba(0,78,224,0.08)] dark:shadow-sm group-hover:from-[#00072D] group-hover:to-[#0A2472] dark:group-hover:from-primary/20 dark:group-hover:to-primary/30 group-hover:border-[#004EE0] dark:group-hover:border-primary group-hover:shadow-[0px_18px_45px_rgba(0,78,224,0.28)] dark:group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.5)] transition-all duration-[350ms] ease-in-out">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E3F2FF] dark:bg-primary/20 group-hover:bg-[#004EE0] dark:group-hover:bg-primary transition-colors duration-[350ms]">
                    <Mail className="w-6 h-6 text-[#004EE0] dark:text-primary group-hover:text-[#F2FAF4] dark:group-hover:text-primary-foreground transition-colors duration-[350ms]" />
                  </div>
                  <p className="text-lg">
                    <span className="text-[#00072D] dark:text-foreground font-[800] tracking-[0.5px] group-hover:text-[#F2FAF4] dark:group-hover:text-white transition-colors duration-[350ms]">qorynta@gmail.com</span>
                    <br className="sm:hidden" />
                    <span className="text-[#051650] dark:text-muted-foreground font-[600] group-hover:text-[#99CAFF] dark:group-hover:text-primary-foreground/80 ml-2 transition-colors duration-[350ms]">â€” response within 24 hours, guaranteed.</span>
                  </p>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
