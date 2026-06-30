import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

const getServiceImage = (slug: string) => {
  const images: Record<string, string> = {
    'custom-web-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    'mobile-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    'ui-ux-design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    'ai-machine-learning': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    'cloud-devops': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    'e-commerce-solutions': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    'saas-development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'api-integration': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    'it-consulting': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  };
  return images[slug] || images['custom-web-development'];
};

export const HomeServicesSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const images = gsap.utils.toArray('.parallax-image') as HTMLElement[];
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden bg-transparent">
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
              <div onClick={() => navigate(`/services/${service.slug}`)} className="h-full">
                <GlassCard 
                  hover 
                  className="flex flex-col group h-full rounded-[20px] overflow-hidden p-0 md:p-0"
                >
                  {/* Image Header */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-[20px]">
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src={getServiceImage(service.slug)}
                        alt={service.title}
                        loading="lazy"
                        className="parallax-image absolute -top-[10%] left-0 right-0 w-full h-[120%] object-cover"
                      />
                    </div>
                    {/* Brand Color Dodge Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 mix-blend-color-dodge pointer-events-none transition-opacity duration-300 group-hover:opacity-30"></div>
                  </div>

                {/* Card Content - Matching Original Layout */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
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
                </div>
              </GlassCard>
            </div>
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
