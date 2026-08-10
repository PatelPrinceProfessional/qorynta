import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { services, ServiceData } from '@/data/services';
import { insights } from '@/data/insights';
import { RevealContent } from '@/components/ui/RevealContent';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) return <NotFound />;

  // Find related insights (pillars or clusters that match this service's domain)
  // For simplicity, we search for keyword matches in the pillarTopic or category
  const relatedInsights = insights.filter(i => 
    i.published !== false &&
    (i.pillarTopic.includes(service.category) || i.category.includes(service.category) || service.title.includes(i.category))
  ).slice(0, 3);
  
  // Fallback if strict mapping yields nothing
  const displayInsights = relatedInsights.length > 0 ? relatedInsights : insights.filter(i => i.published !== false).slice(0, 3);

  // Generate Service Schema JSON-LD
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Qorynta Services"
    },
    "description": service.longDescription,
    "offers": {
      "@type": "Offer",
      "url": `https://qorynta.in/services/${service.slug}`
    }
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <SEO
        exactTitle={!!service.seoTitle}
        title={service.seoTitle || service.title}
        description={service.seoDescription || service.description}
        canonical={`https://www.qorynta.in/services/${service.slug}`}
      >
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        {service.seoSchema && (
          <script type="application/ld+json">
            {JSON.stringify(service.seoSchema)}
          </script>
        )}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </SEO>

            
      <main className="min-h-screen bg-background pt-20">
        
        {/* Breadcrumb / Back Link */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Go to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <ScrollReveal className="flex-1">
                <SectionLabel text={service.category === 'AI' ? 'AI CAPABILITIES' : 'CORE SERVICE'} />
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#00072D] via-[#00072D]/90 to-[#004EE0] dark:from-white dark:via-white/90 dark:to-cyan-300 drop-shadow-sm">
                  {service.title}
                </h1>
                
                <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-[#004EE0]/20 dark:border-cyan-400/20 rounded-full px-5 py-2.5 mb-8 w-fit shadow-sm">
                  <span>💼 Clutch Verified</span>
                  <span className="text-[#004EE0]/40 dark:text-cyan-400/40">•</span>
                  <span>$25–49/hr</span>
                  <span className="text-[#004EE0]/40 dark:text-cyan-400/40">•</span>
                  <span>NDA First</span>
                  <span className="text-[#004EE0]/40 dark:text-cyan-400/40">•</span>
                  <span>24hr Response SLA</span>
                  <span className="text-[#004EE0]/40 dark:text-cyan-400/40">•</span>
                  <span>US/UK/UAE Clients Welcome</span>
                </div>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: service.longDescription }} />
                
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold text-[#00072D] dark:text-white shadow-sm hover:shadow-md hover:border-[#004EE0] dark:hover:border-cyan-400 transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button size="lg" className="rounded-full shadow-xl shadow-blue-500/20 dark:shadow-cyan-500/20 h-14 px-8 text-base font-bold bg-gradient-to-r from-[#004EE0] to-blue-600 hover:from-blue-600 hover:to-[#004EE0] dark:from-cyan-500 dark:to-blue-500 text-white overflow-hidden group transition-all hover:scale-105" asChild>
                  <Link to="/contact">
                    <RevealContent>
                      Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </RevealContent>
                  </Link>
                </Button>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-b from-blue-50/50 to-transparent dark:from-slate-800/50 dark:to-transparent border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center p-12 shadow-2xl shadow-blue-500/5 dark:shadow-cyan-500/5 backdrop-blur-3xl">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#004EE0]/20 via-transparent to-transparent dark:from-cyan-400/20 opacity-60 rounded-full blur-2xl" />
                  <service.icon className="w-full h-full text-[#004EE0] dark:text-cyan-400 drop-shadow-[0_0_30px_rgba(0,78,224,0.3)] dark:drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-float relative z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORE DELIVERABLES & BUSINESS IMPACT GRID */}
        <section className="py-24 px-4 sm:px-8 lg:px-12 bg-slate-50/50 dark:bg-[#040814] transition-colors duration-500 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#004EE0]/5 dark:bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto relative z-10">
            <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-[#00072D] dark:text-white font-black text-4xl sm:text-5xl text-center tracking-tight mb-4">Core Deliverables & Business Impact</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg text-center font-medium">What you get when you partner with us for {service.title.toLowerCase()}.</p>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Features Card */}
              <ScrollReveal delay={0.1} className="h-full">
                <div className="relative h-full group rounded-[2rem] bg-gradient-to-b from-slate-200/50 to-transparent dark:from-slate-800/50 p-[1px] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-400/10 dark:group-hover:from-cyan-400/10 dark:group-hover:to-blue-600/10 rounded-[2rem] transition-all duration-500" />
                  <div className="relative h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 xl:p-12 overflow-hidden">
                    {/* Decorative corner glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 dark:bg-cyan-500/10 blur-[40px] rounded-full group-hover:bg-blue-500/20 dark:group-hover:bg-cyan-500/20 transition-colors duration-500" />
                    
                    <h3 className="flex items-center gap-4 text-[#00072D] dark:text-white font-black text-2xl sm:text-3xl mb-8 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <span className="text-2xl drop-shadow-sm">🌐</span>
                      </div>
                      Key Features
                    </h3>
                    <div className="space-y-5 relative z-10">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-200 font-semibold text-base sm:text-lg group/item">
                          <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-[#004EE0] dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover/item:bg-[#004EE0] group-hover/item:text-white dark:group-hover/item:bg-cyan-400 dark:group-hover/item:text-slate-900 group-hover/item:border-transparent transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          {/* We use dangerouslySetInnerHTML in case the data has <mark> tags */}
                          <p className="leading-snug" dangerouslySetInnerHTML={{ __html: feature }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Benefits Card */}
              <ScrollReveal delay={0.2} className="h-full">
                <div className="relative h-full group rounded-[2rem] bg-gradient-to-b from-slate-200/50 to-transparent dark:from-slate-800/50 p-[1px] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-400/10 dark:group-hover:from-teal-400/10 dark:group-hover:to-emerald-600/10 rounded-[2rem] transition-all duration-500" />
                  <div className="relative h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 xl:p-12 overflow-hidden">
                    {/* Decorative corner glow */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 dark:bg-emerald-500/10 blur-[40px] rounded-full group-hover:bg-emerald-500/20 dark:group-hover:bg-emerald-500/20 transition-colors duration-500" />
                    
                    <h3 className="flex items-center gap-4 text-[#00072D] dark:text-white font-black text-2xl sm:text-3xl mb-8 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <span className="text-2xl drop-shadow-sm">⚡</span>
                      </div>
                      Business Benefits
                    </h3>
                    <div className="space-y-5 relative z-10">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-200 font-semibold text-base sm:text-lg group/item">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover/item:bg-emerald-500 group-hover/item:text-white dark:group-hover/item:bg-emerald-400 dark:group-hover/item:text-slate-900 group-hover/item:border-transparent transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <p className="leading-snug" dangerouslySetInnerHTML={{ __html: benefit }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* SECTION 2: OUR METHODOLOGY PIPELINE */}
        <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-[#020617] relative">
          <div className="container mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[#00072D] dark:text-white font-black text-3xl sm:text-5xl text-center tracking-tight mb-3">Our Methodology</h2>
              <p className="text-slate-600 dark:text-slate-300 text-center font-normal text-base sm:text-lg">How we deliver exceptional results, step-by-step.</p>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto relative pl-8 sm:pl-10 space-y-12">
              <div className="absolute left-3 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#004EE0] via-cyan-400 to-emerald-400 opacity-40 rounded-full" />
              
              {service.process.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative group hover:translate-x-2 transition-transform duration-300">
                    <div className="absolute -left-[45px] sm:-left-[53px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-[#004EE0] dark:border-cyan-400 shadow-[0_0_12px_rgba(0,78,224,0.4)] dark:shadow-[0_0_12px_rgba(34,211,238,0.4)] flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#004EE0] dark:bg-cyan-400 animate-pulse" />
                    </div>
                    <span className="text-[#004EE0] dark:text-cyan-400 font-mono text-xs font-black uppercase tracking-widest mb-1 block">Step {idx + 1}</span>
                    <h3 className="text-[#00072D] dark:text-white font-black text-xl sm:text-2xl mb-2" dangerouslySetInnerHTML={{ __html: step.title }} />
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: TECHNOLOGY STACK USED */}
        <section className="py-16 px-4 sm:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
          <div className="container mx-auto text-center">
            <h3 className="font-mono text-xs font-black uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-8">
              TECHNOLOGY STACK USED
            </h3>
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
              {service.techStack.map(tech => (
                <div key={tech} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:border-[#004EE0] dark:hover:border-cyan-400 hover:text-[#004EE0] dark:hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-default">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS ACCORDION */}
        <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white dark:bg-[#020617]">
          <div className="container mx-auto max-w-3xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-[#00072D] dark:text-white font-black text-3xl sm:text-5xl text-center tracking-tight mb-4">Frequently Asked Questions</h2>
            </ScrollReveal>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md data-[state=open]:shadow-md">
                  <AccordionTrigger className="w-full p-6 text-left flex items-center justify-between gap-4 font-black text-lg text-[#00072D] dark:text-white hover:text-[#004EE0] dark:hover:text-cyan-400 transition-colors group [&[data-state=open]>div]:rotate-180">
                    <span dangerouslySetInnerHTML={{ __html: faq.q }} />
                    <div className="w-8 h-8 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-transform duration-300 shrink-0">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 5: RELATED SERVICES NAVIGATION */}
        <section className="py-16 px-4 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-center font-black text-xl text-[#00072D] dark:text-white mb-6">Related Services</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-mono font-bold text-[#004EE0] dark:text-cyan-400">
              <Link to="/services/ai-machine-learning" className="hover:underline flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                AI & Machine Learning Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services/custom-web-development" className="hover:underline flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                Custom Web Development <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services/mobile-app-development" className="hover:underline flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                Mobile App Development <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: RELATED INSIGHTS & GUIDES GRID */}
        {displayInsights.length > 0 && (
          <section className="py-20 px-4 sm:px-8 lg:px-12 bg-white dark:bg-[#020617]">
            <div className="container mx-auto">
              <h2 className="text-[#00072D] dark:text-white font-black text-3xl text-center tracking-tight mb-12">Related Insights & Guides</h2>
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayInsights.map((insight) => (
                  <Link key={insight.slug} to={`/insights/${insight.slug}`} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#004EE0]/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2 block">
                    <div className="w-full aspect-video overflow-hidden">
                      <img src={insight.featuredImage} alt="" aria-hidden="true" loading="lazy" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-[#004EE0] dark:text-cyan-400 font-mono text-[10px] font-black uppercase tracking-widest mb-2 block">{insight.category}</span>
                      <h3 className="text-[#00072D] dark:text-white font-black text-lg leading-snug mb-2 group-hover:text-[#004EE0] dark:group-hover:text-cyan-400 transition-colors line-clamp-2">{insight.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">{insight.description}</p>
                      <span className="text-xs font-mono font-bold text-[#004EE0] dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* SECTION 7: SEAMLESS FOOTER CTA TRANSITION */}
        <div className="w-full h-12 bg-gradient-to-b from-white dark:from-[#020617] to-[#020B24] pointer-events-none"></div>

        {/* CTA */}
      </main>

                </>
  );
};

export default ServiceDetail;
