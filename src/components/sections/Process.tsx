import { SectionLabel } from "../ui/SectionLabel";
import { Mic, FileText, Settings, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Process() {
  const steps = [
    {
      icon: <Mic className="w-5 h-5" />,
      title: "Discovery Call",
      time: "Day 1",
      description: "We schedule a free 30-min call to understand your goals, tech needs, budget, and timeline. No fluff — just clarity."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Proposal & Scoping",
      time: "Day 2–3",
      description: "We deliver a detailed project proposal: scope, tech stack, timeline, pricing, and team structure. You review, we refine."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Design & Development",
      time: "Week 1–N",
      description: "Agile sprints with weekly deliverables. You see progress every 5 days. GitHub access, Figma links, and a staging environment — always visible."
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Launch & Support",
      time: "Final Week",
      description: "We deploy to production, run QA testing, and hand over all assets + documentation. 30-day post-launch support included."
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <SectionLabel text="OUR PROCESS" className="justify-center flex" />
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold">
            From Idea to Live Product in 4 Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
          {/* Connecting line (Mobile) */}
          <div className="block lg:hidden absolute top-0 left-[28px] w-[2px] h-full bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex lg:flex-col gap-6 lg:gap-6 group">
                
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-bg-secondary border-2 border-border flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 lg:pt-0 lg:text-center group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-accent-cyan text-sm font-semibold mb-2">{step.time}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
