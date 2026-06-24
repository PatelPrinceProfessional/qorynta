import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { CTABanner } from '@/components/home/CTABanner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const allProjects = [
  {
    title: 'FinTech ML Dashboard',
    category: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['Python', 'React', 'TensorFlow', 'AWS'],
    result: 'Reduced fraud detection time by 60%',
    description: 'Built a real-time fraud detection dashboard for a US FinTech client. Integrated custom ML models with a high-performance React frontend.',
  },
  {
    title: 'Multi-Vendor E-Commerce Platform',
    category: 'Web & Mobile App',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe'],
    result: 'Scaled to 10,000+ daily active users',
    description: 'Developed a scalable cross-platform mobile app and admin dashboard for a rapidly growing retail startup in India.',
  },
  {
    title: 'Healthcare SaaS Portal',
    category: 'SaaS Development',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['Next.js', 'GraphQL', 'Docker', 'HIPAA'],
    result: 'Automated 80% of patient onboarding',
    description: 'A fully compliant, multi-tenant healthcare SaaS platform featuring telemedicine integrations, electronic health records, and billing.',
  },
  {
    title: 'Real Estate Asset Management',
    category: 'Enterprise Web App',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800',
    tags: ['React', 'Express', 'MongoDB', 'MapBox'],
    result: 'Managed $500M+ in assets',
    description: 'A custom ERP solution for a real estate firm, featuring interactive maps, financial reporting, and document management.',
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Qorynta</title>
        <meta name="description" content="Explore our portfolio of successful web, mobile, and AI projects delivered for clients across the globe." />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        
        {/* Header Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
            <SectionLabel text="OUR PORTFOLIO" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              We Ship Impact. <br className="hidden md:block" /> See For Yourself.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore how we've helped startups and enterprises solve complex technical challenges and scale their operations.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {allProjects.map((project, index) => (
                <div 
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-lg flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow bg-card">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">{project.category}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-md mb-6 w-fit">
                      <span className="text-sm font-semibold text-primary">{project.result}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-muted border border-border rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default CaseStudies;
