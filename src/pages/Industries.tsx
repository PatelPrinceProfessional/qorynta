import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTABanner } from '@/components/home/CTABanner';
import {
  Building2,
  Stethoscope,
  ShoppingCart,
  Cloud,
  Truck,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2
} from 'lucide-react';

const industries = [
  {
    title: 'FinTech & Banking',
    slug: 'fintech',
    icon: Building2,
    description: 'Secure, compliant, and high-performance financial systems that handle millions of transactions with zero downtime.',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderHover: 'hover:border-cyan-500/50',
    textHover: 'group-hover:text-cyan-700 dark:group-hover:text-cyan-400'
  },
  {
    title: 'Healthcare & MedTech',
    slug: 'healthcare',
    icon: Stethoscope,
    description: 'HIPAA-compliant patient portals, telemedicine platforms, and clinical data analytics powered by robust architecture.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderHover: 'hover:border-emerald-500/50',
    textHover: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-400'
  },
  {
    title: 'E-Commerce & Retail',
    slug: 'e-commerce',
    icon: ShoppingCart,
    description: 'Scalable storefronts and inventory management systems designed for extreme traffic spikes and global conversion.',
    color: 'from-orange-500/20 to-pink-500/20',
    borderHover: 'hover:border-orange-500/50',
    textHover: 'group-hover:text-orange-700 dark:group-hover:text-orange-400'
  },
  {
    title: 'SaaS & Enterprise',
    slug: 'saas',
    icon: Cloud,
    description: 'Multi-tenant architectures, complex billing engines, and rich web applications built for extreme scalability.',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderHover: 'hover:border-purple-500/50',
    textHover: 'group-hover:text-indigo-700 dark:group-hover:text-indigo-400'
  },
  {
    title: 'Logistics & Supply Chain',
    slug: 'logistics',
    icon: Truck,
    description: 'Real-time tracking, fleet management, and predictive analytics to optimize global supply chain operations.',
    color: 'from-yellow-500/20 to-amber-500/20',
    borderHover: 'hover:border-amber-500/50',
    textHover: 'group-hover:text-amber-700 dark:group-hover:text-amber-400'
  },
  {
    title: 'Education & EdTech',
    slug: 'education',
    icon: GraduationCap,
    description: 'Interactive learning management systems and virtual classrooms capable of supporting thousands of concurrent users.',
    color: 'from-rose-500/20 to-red-500/20',
    borderHover: 'hover:border-rose-500/50',
    textHover: 'group-hover:text-rose-700 dark:group-hover:text-rose-400'
  }
];

export const Industries = () => {
  return (
    <>
      <SEO
        title="Industries We Serve – AI & Software Solutions"
        description="See how Qorynta delivers custom software and AI solutions for fintech, healthcare, e‑commerce, logistics, and more."
        canonical="https://www.qorynta.in/industries"
      />

      <main className="min-h-screen bg-background pt-20 overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-24 pb-32 flex flex-col items-center justify-center min-h-[70vh] bg-[#f2faf4] dark:hidden">
          {/* Vignetted Micro-Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#042E7B_1.5px,transparent_1.5px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black_30%,transparent_100%)] opacity-4 pointer-events-none z-0"></div>

          {/* Center Radial Glow Mesh */}
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E3F2FF] via-[#99CAFF]/25 to-transparent w-[800px] h-[400px] blur-3xl absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2 pointer-events-none z-0"></div>

          {/* Dual Corner Ambient Spotlights */}
          <div className="bg-[#004EE0]/6 blur-3xl w-96 h-96 absolute -top-20 -left-20 pointer-events-none z-0"></div>
          <div className="bg-[#1831FF]/5 blur-3xl w-96 h-96 absolute -bottom-20 -right-20 pointer-events-none z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
            <ScrollReveal>
              {/* Eyebrow Badge */}
              <div className="bg-white/80 backdrop-blur-md border border-[#99CAFF] shadow-[0_4px_16px_rgba(0,78,224,0.08)] px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 hover:border-[#004EE0] hover:bg-[#E3F2FF] transition-all duration-300 cursor-default">
                <Globe2 className="w-4 h-4 text-[#004EE0]" />
                <span className="text-[#042E7B] font-mono text-xs uppercase tracking-[0.2em] font-extrabold">Global Impact</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 sm:mb-8 leading-tight sm:leading-[1.1]">
                <span className="text-[#00072d]">Engineering the </span>
                <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent">Future of Every</span>
                <span className="text-[#00072d]"> Industry.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[#051650] font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-6">
                We don't just write code. We build domain-specific, high-performance digital ecosystems that solve the most complex challenges in your sector.
              </p>
            </ScrollReveal>

            {/* Floating Enterprise Metrics Card Container */}
            <div className="bg-white/90 backdrop-blur-xl border border-[#99CAFF]/60 rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(4,46,123,0.08)] mt-16 max-w-5xl mx-auto border-t-2 border-t-[#004EE0]/40 hover:border-[#004EE0]/60 hover:shadow-[0_25px_60px_-10px_rgba(0,78,224,0.14)] transition-all duration-300">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                <ScrollReveal delay={0.1} className="flex flex-col items-center justify-center px-4 relative">
                  <span className="font-black text-3xl sm:text-4xl tracking-tight transition-colors duration-200 text-[#00072d] hover:text-[#0069D9] mb-2">$3M+</span>
                  <span className="text-[#042E7B] font-mono text-[11px] uppercase tracking-wider font-extrabold mt-2 block">Value Delivered</span>
                  <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#99CAFF] to-transparent absolute right-0 top-1/2 -translate-y-1/2"></div>
                </ScrollReveal>
                <ScrollReveal delay={0.2} className="flex flex-col items-center justify-center px-4 relative">
                  <span className="font-black text-3xl sm:text-4xl tracking-tight transition-colors duration-200 text-[#00072d] hover:text-[#0069D9] mb-2">7M+</span>
                  <span className="text-[#042E7B] font-mono text-[11px] uppercase tracking-wider font-extrabold mt-2 block">Enterprise Clients</span>
                  <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#99CAFF] to-transparent absolute right-0 top-1/2 -translate-y-1/2"></div>
                </ScrollReveal>
                <ScrollReveal delay={0.3} className="flex flex-col items-center justify-center px-4 relative">
                  <span className="font-black text-3xl sm:text-4xl tracking-tight transition-colors duration-200 text-[#00072d] hover:text-[#0069D9] mb-2">99.99%</span>
                  <span className="text-[#042E7B] font-mono text-[11px] uppercase tracking-wider font-extrabold mt-2 block">SLA Uptime</span>
                  <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#99CAFF] to-transparent absolute right-0 top-1/2 -translate-y-1/2"></div>
                </ScrollReveal>
                <ScrollReveal delay={0.4} className="flex flex-col items-center justify-center px-4 relative">
                  <span className="font-black text-3xl sm:text-4xl tracking-tight transition-colors duration-200 text-[#00072d] hover:text-[#0069D9] mb-2">Zero</span>
                  <span className="text-[#042E7B] font-mono text-[11px] uppercase tracking-wider font-extrabold mt-2 block">Data Breaches</span>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </section>

        {/* --- ORIGINAL DARK MODE HERO --- */}
        <section className="relative pt-24 pb-32 items-center justify-center min-h-[60vh] hidden dark:flex">
          {/* Subtle animated background gradients */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-70 animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-8">
                <Globe2 className="w-4 h-4" /> Global Impact
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 sm:mb-8 tracking-tight leading-tight sm:leading-[1.1]">
                Engineering the Future of <span className="text-primary">Every Industry.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                We don't just write code. We build domain-specific, high-performance digital ecosystems that solve the most complex challenges in your sector.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* --- ORIGINAL DARK MODE METRICS --- */}
        <section className="py-12 border-y border-border/50 bg-muted/20 relative hidden dark:block">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-border/50">
              <ScrollReveal delay={0.1} className="flex flex-col items-center justify-center px-4">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">$3M+</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Value Delivered</span>
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="flex flex-col items-center justify-center px-4">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">7M+</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Enterprise Clients</span>
              </ScrollReveal>
              <ScrollReveal delay={0.3} className="flex flex-col items-center justify-center px-4">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">99.99%</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">SLA Uptime</span>
              </ScrollReveal>
              <ScrollReveal delay={0.4} className="flex flex-col items-center justify-center px-4">
                <span className="text-4xl md:text-5xl font-black text-foreground mb-2">Zero</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Data Breaches</span>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 relative z-10 bg-[#f2faf4] overflow-hidden dark:hidden">
          {/* Brand Mesh Glow */}
          <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#123499]/10 via-[#0a2472]/5 to-transparent w-full h-[600px] absolute top-0 left-0 pointer-events-none z-0"></div>
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#0a2472_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                  <span className="text-[#00072d]">Specialized Solutions for </span>
                  <span className="bg-gradient-to-r from-[#0a2472] to-[#123499] bg-clip-text text-transparent">Complex Sectors</span>
                </h2>
                <p className="text-[#051650] font-medium leading-relaxed text-lg max-w-2xl mx-auto">
                  Our engineering squads are domain experts. We understand the regulatory hurdles, performance bottlenecks, and user expectations unique to your industry.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <ScrollReveal key={ind.slug} delay={idx * 0.1} className="h-full">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className={`group relative flex flex-col h-full bg-white/60 backdrop-blur-xl border border-[#0a2472]/15 shadow-sm rounded-2xl p-8 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(10,36,114,0.15)] ${ind.borderHover}`}
                    >
                      {/* Hover colorful background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon Pod */}
                        <div className="bg-[#f2faf4] border border-[#123499]/20 w-14 h-14 rounded-xl flex flex-shrink-0 items-center justify-center mb-6 transition-all duration-500 group-hover:bg-white/80 group-hover:border-transparent group-hover:shadow-sm">
                          <Icon className={`w-6 h-6 text-[#123499] transition-colors duration-500 ${ind.textHover}`} />
                        </div>

                        {/* Card Title */}
                        <h3 className={`text-[#00072d] font-bold text-xl mb-3 transition-colors duration-500 ${ind.textHover}`}>
                          {ind.title}
                        </h3>

                        {/* Body Text */}
                        <p className="text-[#051650] font-medium text-sm leading-relaxed mb-12 flex-grow">
                          {ind.description}
                        </p>

                        {/* Explore Link */}
                        <div className={`mt-auto flex items-center text-[#123499] font-bold text-sm transition-colors duration-500 ${ind.textHover}`}>
                          Explore Capabilities <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- ORIGINAL DARK MODE GRID --- */}
        <section className="py-24 relative z-10 hidden dark:block">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                  Specialized Solutions for Complex Sectors
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our engineering squads are domain experts. We understand the regulatory hurdles, performance bottlenecks, and user expectations unique to your industry.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <ScrollReveal key={ind.slug} delay={idx * 0.1}>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className={`group relative flex flex-col h-full bg-card rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-2xl hover:bg-card/80 transition-all duration-500 overflow-hidden ${ind.borderHover}`}
                    >
                      {/* Hover background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-background transition-all duration-500">
                          <Icon className={`w-8 h-8 text-primary ${ind.textHover} transition-colors duration-500`} />
                        </div>

                        <h3 className={`text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300`}>
                          {ind.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed mb-12 flex-grow">
                          {ind.description}
                        </p>

                        <div className="mt-auto flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          Explore Capabilities <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Qorynta Difference */}
        <section className="py-24 bg-[#051650] dark:bg-card text-[#f2faf4] dark:text-foreground relative overflow-hidden border-y border-transparent dark:border-border/50 transition-colors duration-500">
          
          {/* Deep Blue Ambient Background Mesh Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(#123499_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-20 pointer-events-none dark:hidden z-0"></div>
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#123499]/40 via-[#0a2472]/20 to-transparent w-[800px] h-[500px] blur-3xl absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none dark:hidden z-0"></div>
          
          {/* Dark Mode Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background hidden dark:block z-0" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Left Content Column */}
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight sm:leading-[1.1] text-[#f2faf4] dark:text-white mb-6">
                    Why Domain Expertise <span className="bg-gradient-to-r from-[#99CAFF] via-[#004EE0] to-[#E3F2FF] dark:from-primary dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Matters.</span>
                  </h2>
                  <p className="text-[#E3F2FF]/80 dark:text-muted-foreground font-medium text-base sm:text-lg leading-relaxed mb-10">
                    Generic software development agencies learn on your dime. We bring battle-tested architectural patterns specific to your industry, drastically reducing time-to-market and technical risk.
                  </p>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-5 group cursor-default">
                      <div className="w-11 h-11 rounded-xl bg-[#123499]/30 dark:bg-primary/20 border border-[#123499]/50 dark:border-primary/30 flex flex-shrink-0 items-center justify-center group-hover:bg-[#123499] dark:group-hover:bg-primary group-hover:border-[#99CAFF]/50 transition-all duration-300">
                        <ShieldCheck className="w-5 h-5 stroke-[2.5] text-[#99CAFF] dark:text-primary group-hover:text-white dark:group-hover:text-background transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg block mb-1 text-[#f2faf4] dark:text-foreground">Pre-solved Compliance</h4>
                        <p className="font-medium text-sm leading-relaxed text-[#E3F2FF]/70 dark:text-muted-foreground">SOC2, HIPAA, PCI-DSS. We design architectures that pass audits on day one.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-5 group cursor-default">
                      <div className="w-11 h-11 rounded-xl bg-[#123499]/30 dark:bg-primary/20 border border-[#123499]/50 dark:border-primary/30 flex flex-shrink-0 items-center justify-center group-hover:bg-[#123499] dark:group-hover:bg-primary group-hover:border-[#99CAFF]/50 transition-all duration-300">
                        <Zap className="w-5 h-5 stroke-[2.5] text-[#99CAFF] dark:text-primary group-hover:text-white dark:group-hover:text-background transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg block mb-1 text-[#f2faf4] dark:text-foreground">Industry-specific Scale</h4>
                        <p className="font-medium text-sm leading-relaxed text-[#E3F2FF]/70 dark:text-muted-foreground">Whether it's Black Friday retail spikes or high-frequency trading latency, we know the exact bottlenecks to avoid.</p>
                      </div>
                    </li>
                  </ul>
                </ScrollReveal>
              </div>

              {/* Right Elevated Stats Glass Card */}
              <div className="lg:w-1/2 w-full">
                <ScrollReveal delay={0.2}>
                  <div className="bg-[#00072d]/50 dark:bg-background/90 backdrop-blur-2xl border border-[#123499]/40 dark:border-border rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] dark:shadow-2xl relative overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-[2px] before:bg-gradient-to-r before:from-[#0a2472] before:via-[#004EE0] before:to-[#99CAFF] dark:before:from-primary dark:before:via-cyan-400 dark:before:to-blue-500">
                    
                    <div className="flex flex-col text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <div className="font-black text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-[#99CAFF] to-[#E3F2FF] dark:from-primary dark:to-cyan-400 bg-clip-text text-transparent">60%</div>
                        <div className="font-mono text-xs uppercase tracking-widest font-extrabold mt-1 sm:mt-0 text-[#E3F2FF]/80 dark:text-muted-foreground leading-relaxed">Faster Time to<br className="hidden sm:block" />Production</div>
                      </div>
                      
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#123499]/50 dark:via-border/50 to-transparent my-6" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <div className="font-black text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-[#99CAFF] to-[#E3F2FF] dark:from-primary dark:to-cyan-400 bg-clip-text text-transparent">3x</div>
                        <div className="font-mono text-xs uppercase tracking-widest font-extrabold mt-1 sm:mt-0 text-[#E3F2FF]/80 dark:text-muted-foreground leading-relaxed">Higher System<br className="hidden sm:block" />Throughput</div>
                      </div>
                      
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#123499]/50 dark:via-border/50 to-transparent my-6" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <div className="font-black text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-[#99CAFF] to-[#E3F2FF] dark:from-primary dark:to-cyan-400 bg-clip-text text-transparent">0</div>
                        <div className="font-mono text-xs uppercase tracking-widest font-extrabold mt-1 sm:mt-0 text-[#E3F2FF]/80 dark:text-muted-foreground leading-relaxed">Failed Security<br className="hidden sm:block" />Audits</div>
                      </div>
                    </div>
                    
                  </div>
                </ScrollReveal>
              </div>
              
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
    </>
  );
};

export default Industries;
