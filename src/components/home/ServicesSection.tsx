import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, Brain, Cloud, ShoppingCart, Package, Link as LinkIcon, Target, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';

import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

export const ServicesSection = () => {

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <SectionLabel text="WHAT WE BUILD" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End-to-End Digital Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment — everything your business needs to dominate online.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, index) => (
            <StaggerItem key={index} direction="up" className="h-full">
              <GlassCard 
                hover 
                className="flex flex-col group h-full"
              >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-muted border border-border rounded-md text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors mt-auto group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4} direction="up" className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 text-base font-semibold text-muted-foreground hover:text-foreground transition-colors px-6 py-3 rounded-full border border-border hover:border-primary/50 bg-card hover:bg-muted"
          >
            Need something specific? <span className="text-primary group-hover:text-secondary ml-1">Let's Talk <ArrowRight className="inline-block w-4 h-4 ml-1" /></span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
};
