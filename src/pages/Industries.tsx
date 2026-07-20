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
    textHover: 'group-hover:text-cyan-400'
  },
  {
    title: 'Healthcare & MedTech',
    slug: 'healthcare',
    icon: Stethoscope,
    description: 'HIPAA-compliant patient portals, telemedicine platforms, and clinical data analytics powered by robust architecture.',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderHover: 'hover:border-emerald-500/50',
    textHover: 'group-hover:text-emerald-400'
  },
  {
    title: 'E-Commerce & Retail',
    slug: 'e-commerce',
    icon: ShoppingCart,
    description: 'Scalable storefronts and inventory management systems designed for extreme traffic spikes and global conversion.',
    color: 'from-orange-500/20 to-pink-500/20',
    borderHover: 'hover:border-orange-500/50',
    textHover: 'group-hover:text-orange-400'
  },
  {
    title: 'SaaS & Enterprise',
    slug: 'saas',
    icon: Cloud,
    description: 'Multi-tenant architectures, complex billing engines, and rich web applications built for extreme scalability.',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderHover: 'hover:border-purple-500/50',
    textHover: 'group-hover:text-purple-400'
  },
  {
    title: 'Logistics & Supply Chain',
    slug: 'logistics',
    icon: Truck,
    description: 'Real-time tracking, fleet management, and predictive analytics to optimize global supply chain operations.',
    color: 'from-yellow-500/20 to-amber-500/20',
    borderHover: 'hover:border-yellow-500/50',
    textHover: 'group-hover:text-yellow-400'
  },
  {
    title: 'Education & EdTech',
    slug: 'education',
    icon: GraduationCap,
    description: 'Interactive learning management systems and virtual classrooms capable of supporting thousands of concurrent users.',
    color: 'from-rose-500/20 to-red-500/20',
    borderHover: 'hover:border-rose-500/50',
    textHover: 'group-hover:text-rose-400'
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
        <section className="relative pt-24 pb-32 flex items-center justify-center min-h-[60vh]">
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

        {/* Global Impact Metrics */}
        <section className="py-12 border-y border-border/50 bg-muted/20 relative">
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
        <section className="py-24 relative z-10">
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
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <ScrollReveal>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                    Why Domain Expertise <span className="text-primary">Matters.</span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Generic software development agencies learn on your dime. We bring battle-tested architectural patterns specific to your industry, drastically reducing time-to-market and technical risk.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center mt-1">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Pre-solved Compliance</h4>
                        <p className="text-slate-400">SOC2, HIPAA, PCI-DSS. We design architectures that pass audits on day one.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center mt-1">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">Industry-specific Scale</h4>
                        <p className="text-slate-400">Whether it's Black Friday retail spikes or high-frequency trading latency, we know the exact bottlenecks to avoid.</p>
                      </div>
                    </li>
                  </ul>
                </ScrollReveal>
              </div>
              <div className="lg:w-1/2">
                <ScrollReveal delay={0.2}>
                  <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-t-3xl" />
                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="text-4xl font-black text-primary">60%</div>
                        <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest leading-relaxed">Faster Time to<br />Production</div>
                      </div>
                      <div className="w-full h-px bg-slate-800" />
                      <div className="flex items-center gap-6">
                        <div className="text-4xl font-black text-primary">3x</div>
                        <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest leading-relaxed">Higher System<br />Throughput</div>
                      </div>
                      <div className="w-full h-px bg-slate-800" />
                      <div className="flex items-center gap-6">
                        <div className="text-4xl font-black text-primary">0</div>
                        <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest leading-relaxed">Failed Security<br />Audits</div>
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
