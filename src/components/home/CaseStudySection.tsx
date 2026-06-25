import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

const projects = [
  {
    title: 'FinTech ML Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['FinTech', 'Python ML', 'React'],
    result: 'Reduced fraud detection time by 60%',
    description: 'Built a real-time fraud detection dashboard for a US FinTech client using Python ML + React. Achieved 99.2% detection accuracy.',
  },
  {
    title: 'Multi-Vendor E-Commerce App',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['E-Commerce', 'React Native', 'Node.js'],
    result: 'Scaled to 10,000+ daily users',
    description: 'Developed a cross-platform mobile app serving daily users across India with Razorpay + Stripe payment integration.',
  },
];

export const CaseStudySection = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <SectionLabel text="OUR WORK" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Projects That Speak for Themselves
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 transition-colors rounded-full"
          >
            <Link to="/case-studies">View All Projects</Link>
          </Button>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index} direction="up" className={`group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-lg`}>
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/60 to-transparent" />
              </div>

              {/* Content (Overlayed at bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs font-semibold px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                
                {/* Result Highlight */}
                <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-md mb-3 w-fit">
                  <span className="text-sm font-semibold text-secondary">{project.result}</span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                  {project.description}
                </p>

                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors w-fit"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
