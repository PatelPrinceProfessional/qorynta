import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CheckCircle2, Globe2, Mail } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const GlobalTrustSection = () => {
  const benefits = [
    "We work in your timezone — EST, GMT, and GST overlap windows available",
    "USD pricing, transparent contracts, and milestone-based billing",
    "NDA signed before the first call — your IP is always protected",
    "Weekly Loom video updates so you always know project status",
    "6 months post-launch support included in every project",
    "US and UK client references available on request"
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <SectionLabel text="GLOBAL PARTNERS" />
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
              Trusted by US, UK & UAE Businesses Since Day One
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              For our international clients, here is what working with Qorynta means:
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <div className="flex flex-col items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                <p className="text-lg font-semibold text-foreground">
                  <a href="mailto:qorynta@gmail.com" className="text-primary hover:underline">qorynta@gmail.com</a> — response within 24 hours, guaranteed.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
