import { useState, useRef } from 'react';
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

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <StaggerItem direction="up" className="h-full">
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full rounded-[18px] p-[2px] overflow-hidden transition-transform duration-500 hover:scale-[1.03] shadow-lg flex flex-col"
        style={{ willChange: 'transform' }}
      >
        {/* Animated Gradient-Border Aura */}
        <div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(90deg,#3B82F6,#A855F7,#3B82F6)] z-0"
          style={{
            animation: `aura-border ${isHovered ? '2s' : '4s'} linear infinite`,
            willChange: 'transform'
          }}
        />
        
        {/* Inner Card Container */}
        <div 
          className="relative flex flex-col flex-1 rounded-[16px] overflow-hidden transition-colors duration-500 z-10"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(5px)',
            willChange: 'background-color'
          }}
        >
          {/* Deep Navy Hover Background Shift */}
          <div 
            className="absolute inset-0 bg-[#0A0F1E]/90 backdrop-blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" 
            style={{ willChange: 'opacity' }}
          />

          {/* Cinematic Mask Image Section */}
          <div className="relative h-64 md:h-72 overflow-hidden shrink-0 z-10 rounded-t-[16px]">
            {/* Grayscale & Blurred Base Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: 'grayscale(80%) blur(2px)', willChange: 'filter, transform' }}
            />
            {/* Full Color Wipe Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
              style={{
                clipPath: `circle(${isHovered ? '150%' : '0%'} at ${mousePos.x}% ${mousePos.y}%)`,
                transition: 'clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s ease',
                willChange: 'clip-path, transform'
              }}
            />
            {/* Soft Overlay to blend with card */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
          </div>

          {/* Content Section */}
          <div className="relative flex-1 flex flex-col justify-end p-6 md:p-8 z-20">
            {/* Tags (Always Visible) */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] sm:text-xs font-semibold px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#E6FFFA] transition-colors">{project.title}</h3>
            
            {/* Slide-up Entrance Content */}
            <div className="overflow-hidden">
              <div className="flex flex-col gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out" style={{ willChange: 'transform, opacity' }}>
                
                {/* Result Highlight */}
                <div className="inline-block px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-md w-fit">
                  <span className="text-sm font-semibold text-secondary">{project.result}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#8892B0] line-clamp-2">
                  {project.description}
                </p>

                {/* Button */}
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#64FFDA] hover:text-white transition-colors w-fit mt-2"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </StaggerItem>
  );
};

export const CaseStudySection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      {/* Inject custom animation for the border aura (GPU Accelerated) */}
      <style>{`
        @keyframes aura-border {
          0% { transform: scale(1) translateX(0) rotate(0deg); }
          100% { transform: scale(1) translateX(0) rotate(360deg); }
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel text="OUR WORK" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
              Projects That Speak for Themselves
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 transition-colors rounded-full shrink-0"
          >
            <Link to="/case-studies">View All Projects</Link>
          </Button>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
