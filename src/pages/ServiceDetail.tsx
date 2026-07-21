import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CTABanner } from '@/components/home/CTABanner';
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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) {
      navigate('/services', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) return null;

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

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        canonical={`https://www.qorynta.in/services/${service.slug}`}
      >
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-muted border border-border rounded-full text-sm font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button size="lg" className="rounded-full shadow-lg h-14 px-8 text-base overflow-hidden group" asChild>
                  <Link to="/contact">
                    <RevealContent>
                      Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </RevealContent>
                  </Link>
                </Button>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-full bg-primary/5 border border-border/50 flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 rounded-full" />
                  <service.icon className="w-full h-full text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-float relative z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What's Included / Benefits Grid */}
        <section className="py-24 bg-muted border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Deliverables & Business Impact</h2>
              <p className="text-muted-foreground text-lg">What you get when you partner with us for {service.title.toLowerCase()}.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Features */}
              <ScrollReveal delay={0.1}>
                <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <Layers className="w-6 h-6 text-primary" /> Key Features
                  </h3>
                  <div className="space-y-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-foreground font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.2}>
                <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-[#F59E0B]" /> Business Benefits
                  </h3>
                  <div className="space-y-6">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                        </div>
                        <p className="text-foreground font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* Our Process Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology</h2>
              <p className="text-muted-foreground text-lg">How we deliver exceptional results, step-by-step.</p>
            </ScrollReveal>

            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-12">
              {service.process.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                    <span className="text-sm font-bold text-primary mb-1 block uppercase tracking-wider">Step {idx + 1}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee (Static layout for now) */}
        <section className="py-16 bg-muted/30 border-y border-border/50 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-10">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {service.techStack.map(tech => (
                <div key={tech} className="px-6 py-3 bg-card border border-border/50 rounded-xl shadow-sm text-foreground font-bold">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </ScrollReveal>

            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/40 py-2">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* See More Services */}
        <section className="py-24 bg-muted/50 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Explore Other Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.slug !== service.slug).slice(0, 3).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="group block bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-all hover:border-primary/30">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">{s.description}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Insights */}
        {displayInsights.length > 0 && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="text-3xl font-bold mb-10 text-center">Related Insights & Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayInsights.map((insight) => (
                  <Link key={insight.slug} to={`/insights/${insight.slug}`} className="group block bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img src={insight.featuredImage} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">{insight.category}</span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{insight.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{insight.description}</p>
                      <span className="text-sm font-medium text-primary flex items-center gap-2">
                        Read Guide <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTABanner />

      </main>

                </>
  );
};

export default ServiceDetail;
