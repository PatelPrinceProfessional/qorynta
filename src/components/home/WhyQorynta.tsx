import { Globe2, DollarSign, Zap, Shield, Users, Trophy } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const differentiators = [
  {
    icon: Globe2,
    title: 'Global-Standard Delivery',
    description: "We follow Western project management standards: daily standups, GitHub PRs, Slack/email comms, and structured delivery milestones. You'll never feel the time zone difference.",
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No surprises. Fixed-scope quotes or flexible hourly engagements. Our rates start at $25/hr — delivering $150/hr quality at a fraction of agency cost.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'MVP in 2–4 weeks. Sprint-based delivery. We move at startup velocity because we know time-to-market is your competitive edge.',
  },
  {
    icon: Shield,
    title: 'IP Security & NDA First',
    description: 'Every engagement begins with a signed NDA. Your code, designs, and data remain exclusively yours. We operate under strict confidentiality.',
  },
  {
    icon: Users,
    title: 'Dedicated Team Model',
    description: 'You get a named project manager, lead developer, and QA engineer — not an anonymous support ticket queue.',
  },
  {
    icon: Trophy,
    title: 'End-to-End Ownership',
    description: 'From requirement gathering to deployment and post-launch support — one team handles it all. No hand-offs, no gaps, no blame game.',
  },
];

export const WhyQorynta = () => {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-20 relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 reveal">
          <SectionLabel text="WHY QORYNTA" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Agency Quality. Startup Speed.<br className="hidden md:block" /> Startup-Friendly Price.
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <GlassCard 
              key={index} 
              hover 
              className={`flex flex-col reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
