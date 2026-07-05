import React, { useRef, useState } from 'react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

const businessValueCards = [
  {
    category: 'Performance-First Architecture',
    impactStatement: 'We build for <2s load times, ensuring your users never bounce.',
    metric: 'Sub-2s Load Times',
    progress: 95
  },
  {
    category: 'Future-Proof Scalability',
    impactStatement: 'Cloud-native solutions designed to handle 10x traffic spikes seamlessly.',
    metric: '10x Traffic Capacity',
    progress: 100
  },
  {
    category: 'Bank-Grade Security',
    impactStatement: 'Rigorous encryption and compliance protocols protecting your IP, 24/7.',
    metric: '99.9% Infrastructure Uptime',
    progress: 99
  },
  {
    category: 'Rapid Time-to-Market',
    impactStatement: 'Sprint-based delivery, ensuring your MVP is live in weeks, not months.',
    metric: '45% Faster Delivery',
    progress: 90
  }
];

const PushPin = ({ color, isHovered }: { color: string, isHovered: boolean }) => (
  <div
    className="absolute -top-7 left-1/2 -translate-x-1/2 w-10 h-12 z-30 pointer-events-none transition-all duration-500 ease-out"
    style={{
      transform: isHovered ? 'translateY(-6px) scale(1.1) rotate(5deg)' : 'translateY(0) scale(1) rotate(0deg)',
      filter: isHovered ? 'drop-shadow(0 20px 15px rgba(0,0,0,0.3))' : 'drop-shadow(0 8px 6px rgba(0,0,0,0.15))'
    }}
  >
    {/* The "Lightbulb" Glow Effect emitted from the pin */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-500"
      style={{
        width: isHovered ? '150px' : '0px',
        height: isHovered ? '150px' : '0px',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: isHovered ? 0.3 : 0,
        mixBlendMode: 'screen',
        transform: 'translateZ(-1px)'
      }}
    />

    <svg viewBox="0 0 40 60" className="w-full h-full relative z-10">
      <defs>
        <radialGradient id={`pin-head-${color.replace('#', '')}`} cx="35%" cy="30%" r="60%">
          {/* If hovered, the pin head lights up (brightness increases) */}
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="40%" stopColor={isHovered ? '#ffffff' : color} stopOpacity={isHovered ? "0.8" : "1"} />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
        <linearGradient id="pin-needle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="50%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
      </defs>
      {/* Needle */}
      <path d="M19,25 L19,55 L21,55 L21,25 Z" fill="url(#pin-needle)" />
      {/* Sharp point */}
      <path d="M19,55 L20,60 L21,55 Z" fill="#6b7280" />
      {/* Base */}
      <path d="M14,22 L26,22 L23,28 L17,28 Z" fill={color} style={{ filter: isHovered ? 'brightness(1.2)' : 'brightness(0.6)' }} />
      {/* 3D Sphere Head */}
      <circle cx="20" cy="14" r="12" fill={`url(#pin-head-${color.replace('#', '')})`} />
    </svg>
  </div>
);

const PinnedValueCard = ({ card, index }: { card: typeof businessValueCards[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  React.useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isDesktop) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Extreme 3D Tilt calculation (max 15 degrees)
  const rotateX = isHovered && isDesktop ? -mousePos.y * 30 : 0;
  const rotateY = isHovered && isDesktop ? mousePos.x * 30 : 0;

  // Vibrant colors for pins and glowing borders
  const pinColors = ['#0ea5e9', '#ef4444', '#10b981', '#8b5cf6'];
  const pinColor = pinColors[index % pinColors.length];

  // Alternating stagger for dynamic "door standability" grid layout
  const staggerClass = index % 2 === 1 ? 'lg:translate-y-6' : '';

  // Glare position for 3D realism
  const glareX = isHovered ? (mousePos.x + 0.5) * 100 : 50;
  const glareY = isHovered ? (mousePos.y + 0.5) * 100 : 50;

  return (
    <div className={`relative h-full w-full ${staggerClass}`} style={{ perspective: '1500px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full bg-[#f8fafc] dark:bg-slate-900/90 rounded-2xl p-5 pt-8 flex flex-col justify-between transition-all duration-400 ease-out z-10"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.05 : 1})`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          border: `1px solid ${isHovered ? pinColor : 'rgba(203, 213, 225, 0.5)'}`,
          boxShadow: isHovered
            ? `0 40px 80px -20px rgba(0, 0, 0, 0.45), 0 0 40px -10px ${pinColor}40, inset 0 2px 20px ${pinColor}15`
            : '0 20px 40px -15px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Dynamic 3D Glare overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
            opacity: isHovered ? 0.6 : 0,
            transform: 'translateZ(1px)' // Keeps glare slightly above background
          }}
        />

        <PushPin color={pinColor} isHovered={isHovered} />

        <div className="relative z-10 transform-style-3d">
          <h3
            className="text-xl lg:text-2xl font-sans font-black mb-3 text-[#0f172a] dark:text-white leading-tight tracking-tight drop-shadow-sm"
            style={{
              transform: isHovered ? 'translateZ(40px)' : 'translateZ(0)',
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              textShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.2)' : 'none'
            }}
          >
            {card.category}
          </h3>
          <p
            className="text-sm lg:text-base font-bold leading-relaxed text-[#334155] dark:text-slate-300"
            style={{
              transform: isHovered ? 'translateZ(25px)' : 'translateZ(0)',
              transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
              textShadow: isHovered ? '0 5px 10px rgba(0,0,0,0.15)' : 'none'
            }}
          >
            {card.impactStatement}
          </p>
        </div>

        {/* ROI-Meter Bottom Section with extreme depth */}
        <div
          className="relative z-10 mt-6 pt-4 border-t border-slate-300/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 -mx-5 -mb-5 p-5 rounded-b-2xl backdrop-blur-sm"
          style={{
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)',
            transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
            boxShadow: isHovered ? '0 -10px 20px -10px rgba(0,0,0,0.1)' : 'none'
          }}
        >
          <div className="flex justify-between items-end mb-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#475569] dark:text-slate-400">Impact Metric</span>
            <span className="text-sm font-black text-[#0f172a] dark:text-white bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">{card.metric}</span>
          </div>
          {/* Progress Bar Container */}
          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out origin-left shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"
              style={{
                width: `${card.progress}%`,
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0.85)',
                backgroundColor: pinColor
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AbstractNodes = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
    <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-slate-900 dark:bg-white rounded-full blur-[0.5px]"></div>
    <div className="absolute top-[25%] left-[80%] w-1 h-1 bg-slate-900 dark:bg-white rounded-sm blur-[1px]"></div>
    <div className="absolute top-[50%] left-[5%] w-0.5 h-0.5 bg-slate-900 dark:bg-white rounded-full"></div>
    <div className="absolute top-[75%] left-[20%] w-[3px] h-[3px] bg-slate-900 dark:bg-white rounded-sm"></div>
    <div className="absolute top-[30%] left-[45%] w-[2px] h-[2px] bg-slate-900 dark:bg-white rounded-full blur-[0.5px]"></div>
    <div className="absolute top-[85%] left-[85%] w-1 h-1 bg-slate-900 dark:bg-white rounded-full"></div>
    <div className="absolute top-[60%] left-[70%] w-[5px] h-[5px] bg-slate-900 dark:bg-white rounded-sm blur-[1.5px]"></div>
    <div className="absolute top-[15%] left-[90%] w-[2px] h-[2px] bg-slate-900 dark:bg-white rounded-full"></div>
    <div className="absolute top-[90%] left-[35%] w-[4px] h-[4px] bg-slate-900 dark:bg-white rounded-full blur-[1px]"></div>
    <div className="absolute top-[40%] left-[95%] w-1 h-1 bg-slate-900 dark:bg-white rounded-sm"></div>
    <div className="absolute top-[5%] left-[50%] w-[3px] h-[3px] bg-slate-900 dark:bg-white rounded-full blur-[0.5px]"></div>
  </div>
);

const GlassOrbs = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#dbeafe]/60 dark:bg-blue-900/20 mix-blend-multiply dark:mix-blend-screen"
      style={{ filter: 'blur(120px)' }}
    />
    <div 
      className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#e0e7ff]/60 dark:bg-indigo-900/20 mix-blend-multiply dark:mix-blend-screen"
      style={{ filter: 'blur(120px)' }}
    />
  </div>
);

export const TechStackSection = () => {
  return (
    <section className="py-10 md:py-16 relative bg-white dark:bg-slate-950 overflow-hidden">
      
      {/* 1. Structural Foundation: Dot-Matrix Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none dark:hidden opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      <div 
        className="absolute inset-0 z-0 pointer-events-none hidden dark:block opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Ambient Intelligence: Abstract Data-Node field */}
      <AbstractNodes />

      {/* 3. Premium Atmospheric Depth: Glass Orbs */}
      <GlassOrbs />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-4xl mx-auto mb-10 lg:mb-14 relative z-20">
          <SectionLabel text="BUSINESS OUTCOMES" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-[#0f172a] dark:text-white mb-6 tracking-tighter drop-shadow-md">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#293681] to-[#3b82f6] dark:from-[#60a5fa] dark:to-[#3b82f6]">Enterprise Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-[#334155] dark:text-slate-300 font-bold leading-relaxed">
            We don't just write code. We build scalable digital assets designed to maximize your return on investment and secure your market position.
          </p>
        </ScrollReveal>

        {/* 3D Pinned Card Grid */}
        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20 pt-2 pb-10">
          {businessValueCards.map((card, index) => (
            <StaggerItem key={index} direction="up" className="h-full flex">
              <PinnedValueCard card={card} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
