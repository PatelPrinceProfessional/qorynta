import { Mic, ClipboardList, Settings, Rocket } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Mic,
    title: 'Discovery Call (Day 1)',
    description: 'We schedule a free 30-min call to understand your goals, tech needs, budget, and timeline. No fluff — just clarity.',
  },
  {
    icon: ClipboardList,
    title: 'Proposal & Scoping (Day 2–3)',
    description: 'We deliver a detailed project proposal: scope, tech stack, timeline, pricing, and team structure. You review, we refine.',
  },
  {
    icon: Settings,
    title: 'Design & Development (Week 1–N)',
    description: 'Agile sprints with weekly deliverables. You see progress every 5 days. GitHub access, Figma links, and a staging environment — always visible.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support (Final Week)',
    description: 'We deploy to production, run QA testing, and hand over all assets + documentation. 30-day post-launch support included.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Premium subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-block mb-6">
                <SectionLabel text="HOW WE WORK" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                A Proven Formula for Success
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We've refined our delivery process to eliminate surprises, ensure complete transparency, and ship high-quality products on schedule.
              </p>
              
              {/* Decorative element to show design sense */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/20 opacity-75"></span>
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm font-bold text-foreground uppercase tracking-widest">Start to Finish</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Steps */}
          <div className="lg:w-2/3 relative">
            {/* The continuous vertical line */}
            <div className="absolute top-8 bottom-0 left-[21px] md:left-[27px] w-[2px] bg-gradient-to-b from-primary via-primary/20 to-transparent" />

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-12 md:pl-16 group">
                  
                  {/* The Timeline Node / Glowing Dot */}
                  <div className="absolute left-0 md:left-1 top-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-[4px] border-background flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_0_1px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_0_2px_rgba(59,130,246,0.6)]">
                    <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base md:text-lg">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-card hover:bg-muted/50 border border-border/60 hover:border-primary/40 rounded-[1.5rem] p-6 md:p-8 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
                      
                      {/* Icon */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-inner">
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
