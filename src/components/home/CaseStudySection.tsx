import { ArrowDownRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projects = [
  {
    title: 'Cafe Dashboard',
    image: '/portfolio/cafe-dashboard.webp',
  },
  {
    title: 'Salon Professional Website',
    image: '/portfolio/salon-professional.webp',
  },
  {
    title: 'CRM Solution Project',
    image: '/portfolio/crm-solution.webp',
  },
  {
    title: 'E-Commerce Store Website',
    image: '/portfolio/e-commerce-store.webp',
  },
  {
    title: 'ML End-to-End Project',
    image: '/portfolio/ml-end-to-end.webp',
  },
  {
    title: 'SaaS Based Complete Product',
    image: '/portfolio/saas-product.webp',
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div 
      className="group relative h-full flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-[600ms] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer border border-gray-100"
      style={{ 
        willChange: 'transform',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {/* Header Section (Title + Icon) */}
      <div className="flex items-start justify-between p-6 sm:p-8 z-10 bg-white">
        <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] leading-tight max-w-[80%]">{project.title}</h3>
        
        {/* Arrow Icon */}
        <div className="text-[#3b82f6] transition-transform duration-[600ms] group-hover:rotate-[-45deg]" style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
           <ArrowDownRight className="w-6 h-6 stroke-[2.5px]" />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-1 min-h-[240px] md:min-h-[280px] w-full mt-2 mx-auto mb-4 w-[90%] rounded-2xl overflow-hidden self-center bg-transparent">
          <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-[800ms] group-hover:scale-105"
          />
      </div>
    </div>
  );
};

export const CaseStudySection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] mt-4 leading-tight">
              Explore Our <br className="hidden sm:block"/>
              <span className="text-[#38bdf8]">Recent Projects</span>
            </h2>
        </ScrollReveal>

        {/* Carousel Grid */}
        <StaggerContainer staggerChildren={0.15}>
          <StaggerItem direction="up">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3">
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="position-static transform-none static w-12 h-12 bg-white border-gray-200 hover:bg-gray-50 hover:text-primary shadow-sm" />
                <CarouselNext className="position-static transform-none static w-12 h-12 bg-white border-gray-200 hover:bg-gray-50 hover:text-primary shadow-sm" />
              </div>
            </Carousel>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
};
