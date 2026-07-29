import { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Cloud, Brain, Settings, Globe, Code, Users, Link as LinkIcon, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const hubServices = [
  {
    icon: Cloud,
    title: 'Salesforce Development',
    description: 'Custom Salesforce solutions built to fit your business.',
  },
  {
    icon: Brain,
    title: 'Agentforce & AI Automation',
    description: 'AI agents that automate work and improve productivity.',
  },
  {
    icon: Settings,
    title: 'Salesforce Implementation',
    description: 'End-to-end Salesforce setup tailored to your goals.',
  },
  {
    icon: Globe,
    title: 'Salesforce Consulting',
    description: 'Strategic guidance to maximize your Salesforce ROI.',
  },
  {
    icon: Code,
    title: 'AppExchange Development',
    description: 'Scalable AppExchange apps from concept to launch.',
  },
  {
    icon: Users,
    title: 'Salesforce Staff Augmentation',
    description: 'Skilled Salesforce experts to extend your team fast.',
  },
  {
    icon: LinkIcon,
    title: 'Salesforce Custom Integration',
    description: 'Seamless integrations connecting Salesforce to anything.',
  },
  {
    icon: Database,
    title: 'Salesforce Migration',
    description: 'Smooth, secure migration to Salesforce with zero data loss.',
  }
];

export const ProcessSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Hub Entry Animation
      if (hubRef.current) {
        gsap.fromTo(hubRef.current,
          { scale: 0, opacity: 0, rotation: -30 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: '.hub-container',
              start: 'top 75%',
            }
          }
        );
      }

      // Desktop SVG Lines Drawing
      mm.add("(min-width: 1024px)", () => {
        const lines = gsap.utils.toArray('.connection-line');
        if (lines.length > 0) {
          gsap.fromTo(lines,
            { strokeDasharray: 100, strokeDashoffset: 100 },
            {
              strokeDashoffset: 0,
              duration: 1.2,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.hub-container',
                start: 'top 65%',
              }
            }
          );
        }
      });

      // Card Entry
      const cards = gsap.utils.toArray('.service-hub-card-wrapper');
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.hub-container',
              start: 'top 70%',
            }
          }
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background transition-colors duration-500">
      {/* Custom Styles for Antigravity Workspace */}
      <style>{`
        @keyframes antigravity-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-path-left {
          0% { stroke-dashoffset: 100; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes pulse-path-right {
          0% { stroke-dashoffset: -100; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .animate-float-1 { animation: antigravity-float 4.2s ease-in-out infinite; }
        .animate-float-2 { animation: antigravity-float 3.8s ease-in-out infinite 1s; }
        .animate-float-3 { animation: antigravity-float 4.5s ease-in-out infinite 0.5s; }
        .animate-pulse-path-left { animation: pulse-path-left 3s linear infinite; }
        .animate-pulse-path-right { animation: pulse-path-right 3s linear infinite; }
      `}</style>

      {/* Decorative gradient overlay matching logo light blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FF]/50 dark:from-primary/5 to-transparent z-0 transition-colors duration-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00072D] dark:text-foreground mb-6 leading-tight transition-colors duration-500 drop-shadow-[0px_2px_4px_rgba(0,7,45,0.08)] dark:drop-shadow-none">
            How can we help you?
          </h2>
        </ScrollReveal>

        {/* --- HUB ARCHITECTURE --- */}
        <div className="hub-container relative w-full max-w-7xl mx-auto">

          {/* DESKTOP LAYOUT (1024px and up) */}
          <div className="hidden lg:flex justify-between items-stretch min-h-[750px] relative w-full" style={{ perspective: '1200px' }}>

            {/* Atmospheric Lighting (Light Pool behind Hub) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 dark:bg-primary/10 blur-[80px] rounded-full z-0 pointer-events-none transition-colors duration-500"></div>

            {/* SVG Connections Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#004EE0" />
                  <stop offset="100%" stopColor="#0069D9" />
                </linearGradient>
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#004EE0" floodOpacity="0.4" />
                </filter>
              </defs>
              {/* Left side connections */}
              {[12.5, 37.5, 62.5, 87.5].map((y, i) => {
                const isHovered = hoveredIndex === i;
                const pathStr = `M 35,${y} C 42,${y} 46,50 50,50`;
                return (
                  <g key={`left-group-${i}`}>
                    {/* Base Static Line */}
                    <path
                      d={pathStr}
                      className="connection-line transition-all duration-300 ease-in-out stroke-[#99CAFF] dark:stroke-border"
                      fill="none"
                      style={{
                        stroke: isHovered ? 'url(#activeGradient)' : undefined,
                        strokeWidth: isHovered ? 1.5 : 1,
                        filter: isHovered ? 'url(#glowEffect)' : 'none'
                      }}
                      strokeDasharray="1.5 1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Kinetic Data Pulse */}
                    <path
                      d={pathStr}
                      pathLength="100"
                      fill="none"
                      className="animate-pulse-path-left stroke-[#004EE0] dark:stroke-primary"
                      strokeWidth="2"
                      strokeDasharray="2 100"
                      vectorEffect="non-scaling-stroke"
                      style={{ animationDelay: `${i * 0.5}s`, opacity: isHovered ? 1 : 1 }}
                    />
                  </g>
                );
              })}

              {/* Right side connections */}
              {[12.5, 37.5, 62.5, 87.5].map((y, i) => {
                const actualIndex = i + 4;
                const isHovered = hoveredIndex === actualIndex;
                const pathStr = `M 65,${y} C 58,${y} 54,50 50,50`;
                return (
                  <g key={`right-group-${i}`}>
                    {/* Base Static Line */}
                    <path
                      d={pathStr}
                      className="connection-line transition-all duration-300 ease-in-out stroke-[#99CAFF] dark:stroke-border"
                      fill="none"
                      style={{
                        stroke: isHovered ? 'url(#activeGradient)' : undefined,
                        strokeWidth: isHovered ? 1.5 : 1,
                        filter: isHovered ? 'url(#glowEffect)' : 'none'
                      }}
                      strokeDasharray="1.5 1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Kinetic Data Pulse */}
                    <path
                      d={pathStr}
                      pathLength="100"
                      fill="none"
                      className="animate-pulse-path-right stroke-[#004EE0] dark:stroke-primary"
                      strokeWidth="2"
                      strokeDasharray="2 100"
                      vectorEffect="non-scaling-stroke"
                      style={{ animationDelay: `${(i * 0.5) + 0.2}s`, opacity: isHovered ? 1 : 1 }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Left Column (Services 0-3) */}
            <div className="w-[35%] flex flex-col justify-around py-4 z-10 gap-8">
              {hubServices.slice(0, 4).map((service, index) => {
                const isHovered = hoveredIndex === index;
                const isOtherHovered = hoveredIndex !== null && !isHovered;
                const floatClass = `animate-float-${(index % 3) + 1}`;

                return (
                  <div key={index} className={`service-hub-card-wrapper ${floatClass}`}>
                    <div
                      className="group flex items-center bg-[#FFFFFF] dark:bg-card rounded-[14px] p-4 md:p-5 border shadow-[0px_8px_20px_rgba(5,22,80,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-[#99CAFF]/60 dark:border-border hover:border-[#004EE0] dark:hover:border-primary hover:shadow-[0px_16px_35px_rgba(0,78,224,0.16)] dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-300 ease-in-out cursor-pointer"
                      style={{
                        transform: isHovered ? 'rotateY(0deg) scale(1.02) translateY(-4px)' : 'rotateY(5deg) scale(1) translateY(0px)',
                        opacity: isHovered ? 1 : (isOtherHovered ? 0.4 : 1),
                        filter: isOtherHovered ? 'blur(4px)' : 'blur(0px)',
                        willChange: 'transform, opacity, filter, box-shadow, border-color',
                        transformOrigin: 'right center'
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#E3F2FF] group-hover:bg-[#004EE0] dark:bg-primary/10 dark:group-hover:bg-primary/10 flex items-center justify-center shrink-0 border border-[#99CAFF] dark:border-primary/20 transition-colors duration-300 ease-in-out">
                        <service.icon className="w-6 h-6 text-[#004EE0] group-hover:text-[#F2FAF4] dark:text-primary dark:group-hover:text-primary transition-colors duration-300 ease-in-out" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-[14px] md:text-base font-[700] text-[#00072D] group-hover:text-[#004EE0] dark:text-foreground leading-tight mb-1 transition-colors duration-300 ease-in-out">{service.title}</h3>
                        <p className="text-[13px] text-[#051650] dark:text-muted-foreground leading-[1.4] transition-colors duration-300 ease-in-out">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Hub Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
              {/* Soft shadow cast by the floating hub */}
              <div className="absolute -bottom-10 w-24 h-4 bg-[#004EE0]/20 dark:bg-black/40 blur-xl rounded-full transition-colors duration-500"></div>

              <div
                ref={hubRef}
                className={`w-32 h-32 md:w-36 md:h-36 rounded-[20px] rotate-45 bg-[#FFFFFF] dark:bg-card border-[2px] flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out ${hoveredIndex !== null ? 'border-[#0069D9] shadow-[0px_16px_45px_rgba(0,78,224,0.3)] dark:border-primary dark:shadow-[0_0_50px_rgba(14,165,233,0.3)] scale-105' : 'border-[#004EE0] shadow-[0px_12px_35px_rgba(0,78,224,0.22)] dark:border-border dark:border-[4px] scale-100'}`}
              >
                {/* Un-rotate the content inside the diamond shape, add gyro pulse on hover */}
                <div
                  className="absolute flex flex-col items-center justify-center transition-transform duration-[1500ms] ease-out bg-[#E3F2FF] dark:bg-transparent w-[72px] h-[72px] rounded-full"
                  style={{ transform: `rotate(-45deg) ${hoveredIndex !== null ? 'rotateY(360deg)' : 'rotateY(0deg)'}` }}
                >
                  <Network className={`w-10 h-10 transition-colors duration-500 ${hoveredIndex !== null ? 'text-[#0069D9] dark:text-[#3b82f6]' : 'text-[#004EE0] dark:text-primary'}`} />
                </div>
              </div>
            </div>

            {/* Right Column (Services 4-7) */}
            <div className="w-[35%] flex flex-col justify-around py-4 z-10 gap-8">
              {hubServices.slice(4, 8).map((service, i) => {
                const index = i + 4;
                const isHovered = hoveredIndex === index;
                const isOtherHovered = hoveredIndex !== null && !isHovered;
                const floatClass = `animate-float-${(index % 3) + 1}`;

                return (
                  <div key={index} className={`service-hub-card-wrapper ${floatClass}`}>
                    <div
                      className="group flex items-center bg-[#FFFFFF] dark:bg-card rounded-[14px] p-4 md:p-5 border shadow-[0px_8px_20px_rgba(5,22,80,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-[#99CAFF]/60 dark:border-border hover:border-[#004EE0] dark:hover:border-primary hover:shadow-[0px_16px_35px_rgba(0,78,224,0.16)] dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-300 ease-in-out cursor-pointer"
                      style={{
                        transform: isHovered ? 'rotateY(0deg) scale(1.02) translateY(-4px)' : 'rotateY(-5deg) scale(1) translateY(0px)',
                        opacity: isHovered ? 1 : (isOtherHovered ? 0.4 : 1),
                        filter: isOtherHovered ? 'blur(4px)' : 'blur(0px)',
                        willChange: 'transform, opacity, filter, box-shadow, border-color',
                        transformOrigin: 'left center'
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#E3F2FF] group-hover:bg-[#004EE0] dark:bg-primary/10 dark:group-hover:bg-primary/10 flex items-center justify-center shrink-0 border border-[#99CAFF] dark:border-primary/20 transition-colors duration-300 ease-in-out">
                        <service.icon className="w-6 h-6 text-[#004EE0] group-hover:text-[#F2FAF4] dark:text-primary dark:group-hover:text-primary transition-colors duration-300 ease-in-out" />
                      </div>
                      <div className="ml-5">
                        <h3 className="text-[14px] md:text-base font-[700] text-[#00072D] group-hover:text-[#004EE0] dark:text-foreground leading-tight mb-1 transition-colors duration-300 ease-in-out">{service.title}</h3>
                        <p className="text-[13px] text-[#051650] dark:text-muted-foreground leading-[1.4] transition-colors duration-300 ease-in-out">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* MOBILE LAYOUT */}
          <div className="lg:hidden flex flex-col gap-5 relative z-10">
            {/* Mobile Hub Icon Header */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-[14px] rotate-45 bg-[#FFFFFF] dark:bg-card shadow-[0px_12px_35px_rgba(0,78,224,0.22)] dark:shadow-[0_0_40px_rgba(59,130,246,0.4)] flex flex-col items-center justify-center border-[2px] border-[#004EE0] dark:border-border transition-colors duration-500">
                <div className="-rotate-45 flex items-center justify-center bg-[#E3F2FF] dark:bg-transparent w-14 h-14 rounded-full">
                  <Network className="w-8 h-8 text-[#004EE0] dark:text-primary" />
                </div>
              </div>
            </div>

            {hubServices.map((service, index) => (
              <div
                key={index}
                className="group service-hub-card-wrapper flex items-center bg-[#FFFFFF]/90 dark:bg-card/90 backdrop-blur-md rounded-[14px] p-5 shadow-[0px_8px_20px_rgba(5,22,80,0.04)] border border-[#99CAFF]/60 dark:border-border/80/50 hover:border-[#004EE0] hover:shadow-[0px_16px_35px_rgba(0,78,224,0.16)] transition-all duration-300 ease-in-out hover:-translate-y-1 active:scale-95"
              >
                <div className="w-14 h-14 rounded-full bg-[#E3F2FF] group-hover:bg-[#004EE0] dark:bg-primary/10 dark:group-hover:bg-primary/10 flex items-center justify-center shrink-0 border border-[#99CAFF] dark:border-primary/20 transition-colors duration-300 ease-in-out">
                  <service.icon className="w-6 h-6 text-[#004EE0] group-hover:text-[#F2FAF4] dark:text-primary dark:group-hover:text-primary transition-colors duration-300 ease-in-out" />
                </div>
                <div className="ml-5">
                  <h3 className="text-[14px] md:text-base font-[700] text-[#00072D] group-hover:text-[#004EE0] dark:text-foreground leading-tight mb-1 transition-colors duration-300 ease-in-out">{service.title}</h3>
                  <p className="text-[13px] text-[#051650] dark:text-muted-foreground leading-[1.4] transition-colors duration-300 ease-in-out">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
