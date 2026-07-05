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
    <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#0A1526] transition-colors duration-500">
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A9F]/5 dark:from-[#2D6A9F]/10 to-transparent z-0 transition-colors duration-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
            How can we help you?
          </h2>
        </ScrollReveal>

        {/* --- HUB ARCHITECTURE --- */}
        <div className="hub-container relative w-full max-w-7xl mx-auto">

          {/* DESKTOP LAYOUT (1024px and up) */}
          <div className="hidden lg:flex justify-between items-stretch min-h-[750px] relative w-full" style={{ perspective: '1200px' }}>

            {/* Atmospheric Lighting (Light Pool behind Hub) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 dark:bg-[#2D6A9F]/20 blur-[80px] rounded-full z-0 pointer-events-none transition-colors duration-500"></div>

            {/* SVG Connections Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Left side connections */}
              {[12.5, 37.5, 62.5, 87.5].map((y, i) => {
                const isHovered = hoveredIndex === i;
                const pathStr = `M 35,${y} C 42,${y} 46,50 50,50`;
                return (
                  <g key={`left-group-${i}`}>
                    {/* Base Static Line */}
                    <path
                      d={pathStr}
                      className="connection-line transition-all duration-500 stroke-blue-300 dark:stroke-slate-600"
                      fill="none"
                      style={{
                        stroke: isHovered ? '#3b82f6' : undefined,
                        strokeWidth: isHovered ? 1.2 : 0.8
                      }}
                      strokeDasharray="1.5 1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Kinetic Data Pulse */}
                    <path
                      d={pathStr}
                      pathLength="100"
                      fill="none"
                      className="animate-pulse-path-left stroke-blue-600 dark:stroke-blue-400"
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
                      className="connection-line transition-all duration-500 stroke-blue-300 dark:stroke-slate-600"
                      fill="none"
                      style={{
                        stroke: isHovered ? '#3b82f6' : undefined,
                        strokeWidth: isHovered ? 1.2 : 0.8
                      }}
                      strokeDasharray="1.5 1"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Kinetic Data Pulse */}
                    <path
                      d={pathStr}
                      pathLength="100"
                      fill="none"
                      className="animate-pulse-path-right stroke-blue-600 dark:stroke-blue-400"
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
                      className="flex items-center bg-white dark:bg-[#111827]/90 rounded-2xl p-4 md:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-slate-400 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer"
                      style={{
                        transform: isHovered ? 'rotateY(0deg) scale(1.05)' : 'rotateY(5deg) scale(1)',
                        opacity: isHovered ? 1 : (isOtherHovered ? 0.4 : 1),
                        filter: isOtherHovered ? 'blur(4px)' : 'blur(0px)',
                        willChange: 'transform, opacity, filter',
                        transformOrigin: 'right center'
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#3b82f6] flex items-center justify-center text-white shadow-sm">
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight mb-1">{service.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Hub Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
              {/* Soft shadow cast by the floating hub */}
              <div className="absolute -bottom-10 w-24 h-4 bg-slate-400/30 dark:bg-black/40 blur-xl rounded-full transition-colors duration-500"></div>

              <div
                ref={hubRef}
                className={`w-32 h-32 md:w-36 md:h-36 rounded-[2rem] rotate-45 bg-white dark:bg-slate-900 border-4 flex flex-col items-center justify-center relative transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${hoveredIndex !== null ? 'border-[#3b82f6] shadow-[0_0_50px_rgba(59,130,246,0.3)] dark:shadow-[0_0_50px_rgba(59,130,246,0.5)] scale-105' : 'border-slate-100 dark:border-slate-800 shadow-2xl scale-100'}`}
              >
                {/* Un-rotate the content inside the diamond shape, add gyro pulse on hover */}
                <div
                  className="absolute flex flex-col items-center justify-center transition-transform duration-[1500ms] ease-out"
                  style={{ transform: `rotate(-45deg) ${hoveredIndex !== null ? 'rotateY(360deg)' : 'rotateY(0deg)'}` }}
                >
                  <Network className={`w-14 h-14 transition-colors duration-500 ${hoveredIndex !== null ? 'text-[#3b82f6]' : 'text-[#0ea5e9]'}`} />
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
                      className="flex items-center bg-white dark:bg-[#111827]/90 rounded-2xl p-4 md:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-slate-400 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer"
                      style={{
                        transform: isHovered ? 'rotateY(0deg) scale(1.05)' : 'rotateY(-5deg) scale(1)',
                        opacity: isHovered ? 1 : (isOtherHovered ? 0.4 : 1),
                        filter: isOtherHovered ? 'blur(4px)' : 'blur(0px)',
                        willChange: 'transform, opacity, filter',
                        transformOrigin: 'left center'
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#3b82f6] flex items-center justify-center text-white shadow-sm">
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight mb-1">{service.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{service.description}</p>
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
              <div className="w-24 h-24 rounded-[1.5rem] rotate-45 bg-white dark:bg-slate-900 shadow-[0_0_40px_rgba(59,130,246,0.2)] dark:shadow-[0_0_40px_rgba(59,130,246,0.4)] flex flex-col items-center justify-center border-4 border-slate-100 dark:border-slate-800 transition-colors duration-500">
                <div className="-rotate-45 flex items-center justify-center">
                  <Network className="w-10 h-10 text-[#0ea5e9]" />
                </div>
              </div>
            </div>

            {hubServices.map((service, index) => (
              <div
                key={index}
                className="service-hub-card-wrapper flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-slate-200/50 dark:border-slate-700/50 transition-transform active:scale-95"
              >
                <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#3b82f6] flex items-center justify-center text-white shadow-sm">
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight mb-1">{service.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
