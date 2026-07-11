import React, { useEffect, useRef, useState } from 'react';

const ledgerEntries = [
  {
    numeral: 'I',
    title: 'Discovery',
    description: 'Aligning business objectives with technical feasibility.',
    metric: '14 wireframes reviewed',
  },
  {
    numeral: 'II',
    title: 'Strategy',
    description: 'Mapping the optimal architectural path and milestones.',
    metric: '1 comprehensive roadmap',
  },
  {
    numeral: 'III',
    title: 'UI/UX',
    description: 'Crafting high-fidelity interfaces and user flows.',
    metric: '8 design iterations logged',
  },
  {
    numeral: 'IV',
    title: 'Implementation',
    description: 'Writing clean, scalable code with rigorous reviews.',
    metric: '452 commits merged',
  },
  {
    numeral: 'V',
    title: 'QA Testing',
    description: 'Ensuring flawless execution across all edge cases.',
    metric: '42/42 tests passed',
  },
  {
    numeral: 'VI',
    title: 'Launch',
    description: 'Deploying to production and monitoring stability.',
    metric: null, // Custom launch entry
  },
];

export const IndustriesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const entriesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [inkHeight, setInkHeight] = useState(0);

  useEffect(() => {
    // Scroll-based ink line
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has been scrolled
      // Start drawing when the top of the section reaches the middle of the screen
      const startDrawPos = windowHeight * 0.5; 
      
      if (rect.top > startDrawPos) {
        setInkHeight(0);
      } else {
        const scrolled = startDrawPos - rect.top;
        const maxScroll = rect.height;
        const percentage = Math.min(Math.max((scrolled / maxScroll) * 100, 0), 100);
        setInkHeight(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    // IntersectionObserver for reveal and stamp animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0,
      }
    );

    entriesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="py-32 relative bg-background overflow-hidden border-y border-border/40">
      
      <style dangerouslySetInnerHTML={{ __html: `
        .ledger-entry {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .ledger-entry.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .stamp {
          opacity: 0;
          transform: rotate(-15deg) scale(1.4);
        }

        .ledger-entry.is-revealed .stamp {
          animation: stampThud 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          animation-delay: 0.3s;
        }

        @keyframes stampThud {
          0% {
            opacity: 0;
            transform: rotate(-15deg) scale(1.4);
          }
          100% {
            opacity: 1;
            transform: rotate(-3deg) scale(1);
          }
        }

        .signature-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }

        .ledger-entry.is-revealed .signature-path {
          animation: drawSignature 2s ease-in-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes drawSignature {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ledger-entry, .stamp {
            transition: opacity 0.6s ease-out;
            transform: none !important;
            animation: none !important;
          }
          .ledger-entry.is-revealed .stamp {
            opacity: 1;
          }
          .signature-path {
            stroke-dashoffset: 0;
            animation: none !important;
          }
        }
      `}} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-6 block">
            — THE ENGAGEMENT —
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 tracking-tight text-foreground">
            Every Phase, Signed<br className="hidden sm:block"/> and Documented.
          </h2>
        </div>

        {/* The Ledger Container */}
        <div className="relative pl-8 md:pl-16">
          
          {/* Progress Ribbon (Ink Line) */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/40">
            <div 
              className="absolute left-0 top-0 w-[2px] -ml-[0.5px] bg-[#800020] transition-all duration-75 ease-linear"
              style={{ height: `${inkHeight}%` }}
            />
          </div>

          <div className="flex flex-col">
            {ledgerEntries.map((entry, index) => {
              const isLaunch = entry.numeral === 'VI';

              return (
                <div 
                  key={entry.numeral}
                  ref={el => entriesRef.current[index] = el}
                  className={`ledger-entry py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 ${
                    index !== ledgerEntries.length - 1 ? 'border-b border-border/50' : ''
                  }`}
                >
                  
                  {/* Roman Numeral */}
                  <div className="w-12 shrink-0">
                    <span className="font-serif text-3xl md:text-4xl text-muted-foreground/60 italic">
                      {entry.numeral}.
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg">
                      {entry.description}
                    </p>
                  </div>

                  {/* Ledger Item / Signature */}
                  <div className="mt-6 md:mt-0 md:text-right shrink-0 min-w-[200px] flex md:flex-col justify-between items-center md:items-end gap-4">
                    {!isLaunch ? (
                      <>
                        <div className="font-mono text-sm md:text-base tabular-nums tracking-tight text-foreground font-medium">
                          {entry.metric}
                        </div>
                        {/* Simple Wax Seal SVG */}
                        <div className="stamp w-20 h-20 relative shrink-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                            {/* Outer wax irregularity */}
                            <path 
                              d="M50 2 C 78 4, 96 22, 98 50 C 96 78, 78 96, 50 98 C 22 96, 4 78, 2 50 C 4 22, 22 4, 50 2 Z" 
                              fill="#800020" 
                            />
                            {/* Inner circle */}
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#600018" strokeWidth="2" />
                            {/* Text */}
                            <text x="50" y="55" fontFamily="serif" fontSize="16" fontWeight="bold" fill="#fff" textAnchor="middle" letterSpacing="2">
                              APPROVED
                            </text>
                            {/* Date dummy */}
                            <text x="50" y="70" fontFamily="monospace" fontSize="8" fill="#ffb3c6" textAnchor="middle">
                              2026.07
                            </text>
                          </svg>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center md:items-end w-full">
                        {/* Large Notary Seal */}
                        <div className="stamp w-32 h-32 relative mb-4">
                          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg text-[#800020]">
                            {/* Jagged edge for notary seal */}
                            <path 
                              d="M60 5 L65 15 L75 12 L78 22 L88 22 L88 32 L98 35 L95 45 L105 50 L98 60 L105 70 L95 75 L98 85 L88 88 L88 98 L78 98 L75 108 L65 105 L60 115 L55 105 L45 108 L42 98 L32 98 L32 88 L22 85 L25 75 L15 70 L22 60 L15 50 L25 45 L22 35 L32 32 L32 22 L42 22 L45 12 L55 15 Z" 
                              fill="currentColor" 
                            />
                            <circle cx="60" cy="60" r="42" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="4 2" />
                            <text x="60" y="55" fontFamily="serif" fontSize="14" fontWeight="bold" fill="#fff" textAnchor="middle" letterSpacing="1">CERTIFIED</text>
                            <text x="60" y="75" fontFamily="serif" fontSize="18" fontWeight="black" fill="#fff" textAnchor="middle" letterSpacing="3">LIVE</text>
                          </svg>
                        </div>
                        
                        {/* SVG Signature */}
                        <div className="h-16 w-48 relative">
                          <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                            <path 
                              className="signature-path"
                              d="M 10,40 Q 30,20 50,40 T 90,20 T 130,50 Q 150,20 170,30 Q 180,35 190,25" 
                              fill="none" 
                              stroke="#800020" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                            />
                            <path 
                              className="signature-path"
                              d="M 40,55 L 160,55" 
                              fill="none" 
                              stroke="#800020" 
                              strokeWidth="1" 
                              strokeLinecap="square"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
