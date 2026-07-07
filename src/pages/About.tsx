import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Target, Lightbulb, Users, Globe2 } from 'lucide-react';
import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/home/CTABanner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const values = [
  {
    icon: Target,
    title: 'Precision Execution',
    description: 'We do not believe in "good enough". Our code is clean, our architectures scale, and our products work flawlessly.',
  },
  {
    icon: Lightbulb,
    title: 'Radical Transparency',
    description: 'No hidden fees, no black-box development. You have full visibility into our process, sprints, and codebases.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'We act as your extended tech team. Your success is our success. We push back if we see a better way to achieve your goals.',
  },
  {
    icon: Globe2,
    title: 'Global Perspective',
    description: 'Building for the world. We combine Indian engineering excellence with Western design sensibilities and project management.',
  },
];

// --- 3D Unfold Reveal Component ---
const UnfoldReveal = ({ children, delay = 0, className = "" }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -30, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} 
      style={{ perspective: 1200, willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Animated Counter Component ---
const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2 }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(from, { duration: duration * 1000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, to, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

// --- 3D Tilt Stat Card ---
const TiltStatCard = ({ value, label, delay }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
        className="group relative h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]"
      >
        <motion.div style={{ translateZ: 50 }} className="text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white mb-2 font-['Playfair_Display']">
          {value}
        </motion.div>
        <motion.div style={{ translateZ: 30 }} className="text-sm md:text-base text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] font-bold">
          {label}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Qorynta Services</title>
        <meta name="description" content="Learn about Qorynta Services' mission, values, and the team building world-class digital products for global businesses." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0A192F] text-slate-700 dark:text-slate-300 pt-20 overflow-hidden relative font-sans transition-colors duration-500">
        
        {/* Global Ambient Depth Gradient */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-500/10 dark:from-[#0F2344] to-transparent pointer-events-none opacity-50 transition-colors duration-500" />

        {/* Header Section */}
        <section className="py-24 md:py-40 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
            <UnfoldReveal delay={0}>
              <div className="inline-block mb-6">
                <span className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase border border-blue-500/30 rounded-full px-6 py-2 bg-blue-500/5 dark:bg-blue-500/10 backdrop-blur-sm transition-colors duration-500">
                  Our Story
                </span>
              </div>
            </UnfoldReveal>
            
            <UnfoldReveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0F172A] dark:text-white mb-8 tracking-tight font-['Playfair_Display'] leading-[1.1] transition-colors duration-500">
                Engineering the Future <br className="hidden md:block" /> of Digital Business.
              </h1>
            </UnfoldReveal>

            <UnfoldReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto font-light transition-colors duration-500">
                Qorynta Services was founded with a simple mission: to bridge the gap between world-class engineering talent and global enterprise needs. We deliver Silicon Valley-grade software architectures at a global scale.
              </p>
            </UnfoldReveal>
          </div>
        </section>

        {/* Glass-morphism 2.0 Core Values */}
        <section className="py-24 relative z-10">
          {/* Subtle background pulse for this section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none transition-colors duration-500" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <UnfoldReveal delay={0} className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white mb-6 font-['Playfair_Display'] transition-colors duration-500">
                How We Operate
              </h2>
              <p className="text-lg text-blue-600 dark:text-blue-400 tracking-[0.1em] uppercase font-bold transition-colors duration-500">
                The principles that drive our engineering
              </p>
            </UnfoldReveal>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              {values.map((value, idx) => (
                <UnfoldReveal key={idx} delay={0.1 * idx}>
                  <div className="group relative p-[2px] rounded-[2rem] overflow-hidden">
                    {/* Animated Pulsing Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 dark:from-blue-600 dark:via-indigo-500 dark:to-purple-600 opacity-30 dark:opacity-50 group-hover:opacity-100 transition-opacity duration-1000 animate-[spin_4s_linear_infinite]" />
                    
                    {/* Deep Blur Glass Card */}
                    <div className="relative flex flex-col sm:flex-row gap-6 p-8 md:p-10 rounded-[2rem] bg-white/80 dark:bg-[#0A192F]/90 backdrop-blur-[25px] h-full items-start transition-colors duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center shrink-0 shadow-lg dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors duration-500">
                        <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3 font-['Playfair_Display'] tracking-wide transition-colors duration-500">{value.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg transition-colors duration-500">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </UnfoldReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach - 3D Parallax Stats */}
        <section className="py-32 relative overflow-hidden z-10 bg-white dark:bg-[#061122] transition-colors duration-500 border-t border-slate-100 dark:border-transparent">
          {/* Faint Pulse Light Source behind stats */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none transition-colors duration-500" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <UnfoldReveal delay={0} className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] dark:text-white mb-6 font-['Playfair_Display'] leading-tight transition-colors duration-500">
                Headquartered in India, <br className="hidden sm:block" /> Built for the World
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto transition-colors duration-500">
                We've optimized our async communication and agile sprints to ensure geography is never a barrier to shipping exceptional software.
              </p>
            </UnfoldReveal>
            
            {/* Mobile: 2x2 grid, Desktop: 4 cols. High margin padding to let cards pop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <TiltStatCard delay={0.1} label="Clients" value={<AnimatedCounter from={0} to={40} suffix="+" />} />
              <TiltStatCard delay={0.2} label="Countries" value={<AnimatedCounter from={0} to={8} suffix="+" />} />
              <TiltStatCard delay={0.3} label="Projects" value={<AnimatedCounter from={0} to={120} suffix="+" />} />
              <TiltStatCard delay={0.4} label="In-House" value={<AnimatedCounter from={0} to={100} suffix="%" />} />
            </div>
          </div>
        </section>

        {/* Force CTA Banner to adapt to dark theme visually */}
        <div className="relative z-10">
          <CTABanner />
        </div>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
