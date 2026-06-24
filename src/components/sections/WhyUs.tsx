import { SectionLabel } from "../ui/SectionLabel";
import { GlassCard } from "../ui/GlassCard";
import { 
  Globe2, 
  CircleDollarSign, 
  Zap, 
  ShieldCheck, 
  Users, 
  CheckCircle 
} from "lucide-react";

export function WhyUs() {
  const differentiators = [
    {
      icon: <Globe2 className="w-6 h-6 text-accent-cyan" />,
      title: "Global-Standard Delivery",
      description: "We follow Western project management standards: daily standups, GitHub PRs, Slack/email comms, and structured delivery milestones. You'll never feel the time zone difference."
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-accent-cyan" />,
      title: "Transparent Pricing",
      description: "No surprises. Fixed-scope quotes or flexible hourly engagements. Our rates start at $25/hr — delivering $150/hr quality at a fraction of agency cost."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent-cyan" />,
      title: "Fast Turnaround",
      description: "MVP in 2–4 weeks. Sprint-based delivery. We move at startup velocity because we know time-to-market is your competitive edge."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent-cyan" />,
      title: "IP Security & NDA First",
      description: "Every engagement begins with a signed NDA. Your code, designs, and data remain exclusively yours. We operate under strict confidentiality."
    },
    {
      icon: <Users className="w-6 h-6 text-accent-cyan" />,
      title: "Dedicated Team Model",
      description: "You get a named project manager, lead developer, and QA engineer — not an anonymous support ticket queue."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-accent-cyan" />,
      title: "End-to-End Ownership",
      description: "From requirement gathering to deployment and post-launch support — one team handles it all. No hand-offs, no gaps, no blame game."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a101d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-accent-blue/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <SectionLabel text="WHY QORYNTA" />
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold max-w-2xl leading-[1.2]">
            Agency Quality. Startup Speed. <br className="hidden md:block" />
            Startup-Friendly Price.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, idx) => (
            <GlassCard key={idx} className="flex flex-col border-border/50 bg-bg-surface/50 hover:bg-bg-surface/80">
              <div className="w-12 h-12 rounded-full border border-accent-cyan/20 bg-accent-cyan/10 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
