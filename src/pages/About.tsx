import React, { useRef, useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import { Target, Lightbulb, Users, Globe2, Code2, Rocket, Workflow, BrainCircuit } from 'lucide-react';
import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { CTABanner } from '@/components/home/CTABanner';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const values = [
  {
    icon: Target,
    title: 'Precision Execution',
    description: 'We do not believe in "good enough". Our code is clean, our architectures scale, and our products work flawlessly under pressure.',
  },
  {
    icon: Lightbulb,
    title: 'Radical Transparency',
    description: 'No hidden fees, no black-box development. You have full visibility into our process, sprints, and codebases from day one.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'We act as your extended tech team. Your success is our success. We proactively push back if we see a better way to achieve your goals.',
  },
  {
    icon: Globe2,
    title: 'Global Perspective',
    description: 'Building for the world. We combine Indian engineering excellence with Western design sensibilities and rigorous project management.',
  },
];

const culturePoints = [
  {
    icon: Code2,
    title: 'Top 1% Engineering Talent',
    description: 'We hire rigorously. Our engineers aren\'t just coders; they are problem solvers who understand business logic and system architecture.'
  },
  {
    icon: Workflow,
    title: 'Agile & Remote-First',
    description: 'Our asynchronous workflows and daily stand-ups ensure that geography is never a bottleneck. We ship features fast, continuously, and securely.'
  },
  {
    icon: BrainCircuit,
    title: 'AI-Assisted Development',
    description: 'We leverage modern AI tools (Copilot, internal RAG systems) to write boilerplate faster, allowing our senior engineers to focus entirely on complex architectural problems.'
  },
  {
    icon: Rocket,
    title: 'Continuous R&D',
    description: 'Technology moves fast. We dedicate 15% of our time to internal R&D, ensuring we are always masters of the latest frameworks (Next.js, LangChain, etc) before our clients need them.'
  }
];

const pipelineSteps = [
  {
    icon: Target,
    title: '1. Strategic Discovery',
    description: 'We align on architecture, tech stack, and business goals before writing a single line of code. No guesswork.'
  },
  {
    icon: Code2,
    title: '2. High-Velocity Engineering',
    description: 'Agile sprints, daily stand-ups, and extreme code quality checks ensure rapid, bug-free delivery.'
  },
  {
    icon: Rocket,
    title: '3. Scale & Support',
    description: 'We deploy to highly scalable cloud infrastructure and provide ongoing monitoring and feature expansion.'
  }
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
        className="group relative h-full flex flex-col items-center justify-center p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40"
      >
        <motion.div style={{ translateZ: 50 }} className="text-4xl md:text-5xl font-black text-foreground mb-2">
          {value}
        </motion.div>
        <motion.div style={{ translateZ: 30 }} className="text-sm md:text-base text-primary uppercase tracking-wider font-bold">
          {label}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <SEO
        title="About Qorynta – AI & Software Engineering Team"
        description="Learn about Qorynta’s mission, engineering culture, and how we build scalable digital products for global clients."
        canonical="https://www.qorynta.in/about"
      />

            
      <main className="min-h-screen bg-background pt-20 overflow-hidden relative">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none opacity-50" />

        {/* Hero Section */}
        <section className="py-24 md:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
            <UnfoldReveal delay={0}>
              <div className="inline-block mb-6">
                <span className="text-sm font-black tracking-widest text-primary uppercase border border-primary/30 rounded-full px-6 py-2 bg-primary/5 backdrop-blur-sm shadow-sm">
                  The Agency
                </span>
              </div>
            </UnfoldReveal>
            
            <UnfoldReveal delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground mb-8 tracking-tight leading-[1.1]">
                We Build the Digital Backbone of <span className="text-primary">Industry Leaders.</span>
              </h1>
            </UnfoldReveal>

            <UnfoldReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
                Qorynta Services is not just another dev shop. We are an elite engineering task force that partners with ambitious startups and massive enterprises to ship high-impact software at scale.
              </p>
            </UnfoldReveal>
          </div>
        </section>

        {/* Core Values / DNA Grid */}
        <section className="py-24 relative z-10 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                Our Engineering DNA
              </h2>
              <p className="text-lg text-primary tracking-widest uppercase font-black">
                Zero Compromise. High Velocity.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="group relative p-[2px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 opacity-20 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_4s_linear_infinite]" />
                    
                    <div className="relative flex flex-col sm:flex-row gap-6 p-8 md:p-10 rounded-3xl bg-card border border-border/50 h-full items-start transition-all duration-500 group-hover:bg-card/90">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary group-hover:border-transparent transition-all duration-500">
                        <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-foreground mb-3 tracking-wide">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-medium text-lg">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Step Pipeline */}
        <section className="py-24 md:py-32 relative z-10 bg-muted/30 border-t border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
              
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-black tracking-wider uppercase mb-6">
                    Delivery Engine
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground mb-8 leading-tight">
                    How We Ship <br/> At High Velocity.
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
                    We've replaced traditional bloated agency overhead with a lean, ruthless 3-step pipeline. We operate as an elite extension of your own company.
                  </p>
                </ScrollReveal>

                <div className="space-y-8 mt-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent hidden md:block">
                  {/* We will hide the timeline line on mobile for simplicity, but use a grid */}
                </div>

                <div className="grid gap-8 mt-8">
                  {pipelineSteps.map((step, idx) => (
                    <ScrollReveal key={idx} delay={0.1 * idx}>
                      <div className="flex gap-6 items-start bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                          <p className="text-muted-foreground font-medium leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 w-full h-[500px] lg:h-[700px] relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-slate-900/70 dark:bg-background/70 backdrop-blur-[4px]" />
                
                {/* Abstract overlay to represent network/engine */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-md aspect-square rounded-full border border-white/20 flex items-center justify-center p-8 animate-[spin_30s_linear_infinite]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-80 rounded-full" />
                    <div className="w-full h-full rounded-full border border-white/10 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white mix-blend-overlay">
                      <Workflow className="w-20 h-20 opacity-80" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
                    <p className="text-foreground font-bold italic">
                      "We treat every client's codebase as if it were our own flagship product. Quality is never negotiated."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach - 3D Parallax Stats */}
        <section className="py-32 relative overflow-hidden z-10 bg-muted border-t border-border/50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <UnfoldReveal delay={0} className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                Headquartered in India, <br className="hidden sm:block" /> Built for the World
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                We've optimized our async communication and agile sprints to ensure geography is never a barrier to shipping exceptional software.
              </p>
            </UnfoldReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <TiltStatCard delay={0.1} label="Enterprise Clients" value={<AnimatedCounter from={0} to={40} suffix="+" />} />
              <TiltStatCard delay={0.2} label="Countries Served" value={<AnimatedCounter from={0} to={8} suffix="+" />} />
              <TiltStatCard delay={0.3} label="Projects Shipped" value={<AnimatedCounter from={0} to={120} suffix="+" />} />
              <TiltStatCard delay={0.4} label="Client Retention" value={<AnimatedCounter from={0} to={98} suffix="%" />} />
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              AI & Software Development Company in Ahmedabad
            </h2>
            <p className="text-muted-foreground text-lg">
              Qorynta Services is based in Ahmedabad, Gujarat, and partners with startups and enterprises across the US, UK, UAE, and India to build AI-powered web, mobile, and SaaS products.
            </p>
          </div>
        </section>

        <CTABanner />

      </main>
                </>
  );
};

export default About;
