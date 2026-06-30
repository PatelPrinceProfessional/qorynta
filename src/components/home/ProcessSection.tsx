import { useEffect, useRef } from 'react';
import { Mic, ClipboardList, Settings, Rocket } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Fix for mobile Safari vanishing SVG bug: dynamically calculate the exact SVG length
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength() || 1500;
        
        // Initialize path to be hidden
        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        // 1. Liquid Path Animation
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: true,
          }
        });
      }

      // 2. Card and Node Unlocking
      const cards = gsap.utils.toArray('.process-step-wrapper');
      cards.forEach((card: any) => {
        const node = card.querySelector('.process-node');
        const content = card.querySelector('.process-content');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 70%', // Trigger slightly earlier on mobile for better UX
            toggleActions: 'play none none reverse',
          }
        });

        // Content fade & scale
        tl.fromTo(content, 
          { opacity: 0.3, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
        );

        // Node pulse & glow
        tl.to(node, {
          scale: 1.2,
          boxShadow: '0 0 20px 5px rgba(59,130,246,0.5)',
          backgroundColor: 'rgba(59,130,246,0.2)',
          borderColor: '#3B82F6',
          duration: 0.4,
          yoyo: true,
          repeat: 1
        }, '<');
        
        // Settle node state
        tl.to(node, {
          scale: 1,
          backgroundColor: 'rgba(59,130,246,0.1)',
          borderColor: '#3B82F6',
          boxShadow: '0 0 10px 2px rgba(59,130,246,0.2)',
          duration: 0.2
        });
      });
    }, containerRef);

    // Refresh ScrollTrigger to ensure correct measurements on mobile layouts
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      {/* Premium subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <ScrollReveal direction="right" className="lg:w-1/3">
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
              
              <div className="hidden lg:flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/20 opacity-75"></span>
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm font-bold text-foreground uppercase tracking-widest">Start to Finish</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Timeline Steps */}
          <div className="lg:w-2/3 relative timeline-container py-8">
            {/* The SVG Infinite Path (Serpentine Motion) */}
            <div className="absolute top-0 bottom-0 left-[20px] md:left-[24px] w-[80px] -translate-x-1/2 z-0">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 80 1000" 
                preserveAspectRatio="none"
                style={{ transform: 'translateZ(0)' }} // Force GPU layer to fix Safari bug
              >
                <path 
                  d="M40,0 C80,150 0,250 40,333 C80,500 0,580 40,666 C80,830 0,910 40,1000" 
                  stroke="rgba(255,255,255,0.05)" 
                  strokeWidth="2" 
                  fill="none" 
                  vectorEffect="non-scaling-stroke" 
                />
                <path 
                  ref={pathRef}
                  className="liquid-path"
                  d="M40,0 C80,150 0,250 40,333 C80,500 0,580 40,666 C80,830 0,910 40,1000" 
                  stroke="url(#path-gradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  vectorEffect="non-scaling-stroke" 
                  style={{ willChange: 'stroke-dashoffset' }}
                />
                <defs>
                  <linearGradient id="path-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" /> {/* Deep Blue */}
                    <stop offset="100%" stopColor="#A855F7" /> {/* Soft Purple */}
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-16 md:space-y-24 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="process-step-wrapper relative pl-16 md:pl-24">
                  
                  {/* The Timeline Node */}
                  <div className="process-node absolute left-0 top-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-[3px] border-muted-foreground/30 flex items-center justify-center z-10 transition-colors duration-300">
                    <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center text-foreground font-bold text-base md:text-lg">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div 
                    className="process-content bg-card/90 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-10 shadow-lg"
                    style={{ opacity: 0.3, transform: 'scale(0.95)', willChange: 'transform, opacity' }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-inner">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
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
