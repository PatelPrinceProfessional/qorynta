import { Globe2, DollarSign, Zap, Shield, Users, Trophy } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

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
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <SectionLabel text="WHY QORYNTA" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mt-6">
            Agency Quality. Startup Speed.<br className="hidden md:block" /> Startup-Friendly Price.
          </h2>
        </ScrollReveal>

        {/* Differentiators Grid */}
        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentiators.map((item, index) => (
            <StaggerItem key={index} direction="up" className="h-full">
              <div 
                className="relative flex flex-col h-full rounded-2xl p-6 md:p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-[5px] overflow-hidden"
                style={{
                  backgroundColor: '#0A192F', // Deep Navy
                  boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
                }}
              >
                {/* Blueprint Pattern Background */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Large Background Icon (Partially visible) */}
                <div className="absolute -top-6 -right-6 z-0 opacity-80 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={160} strokeWidth={1.5} color="#64FFDA" className="drop-shadow-[0_0_15px_rgba(100,255,218,0.4)]" />
                </div>

                {/* Frosted Glass Pane over top half */}
                <div className="absolute top-0 left-0 w-full h-[55%] bg-[#0A192F]/40 backdrop-blur-[10px] group-hover:backdrop-blur-[4px] transition-all duration-500 z-10 border-b border-[#64FFDA]/10" />

                {/* Card Content */}
                <div className="relative z-20 flex flex-col h-full mt-16">
                  <h3 className="text-xl font-bold leading-tight mb-4" style={{ color: '#E6FFFA' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-grow" style={{ color: '#8892B0' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
