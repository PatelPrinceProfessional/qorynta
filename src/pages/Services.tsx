import SEO from '@/components/SEO';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechStackSection } from '@/components/home/TechStackSection';
import { CTABanner } from '@/components/home/CTABanner';

const Services = () => {
  return (
    <>
      <SEO
        title="Web, Mobile & AI Development Services"
        description="Custom web development, mobile apps, and AI/ML solutions from Qorynta. End-to-end product engineering for startups and enterprises."
        canonical="https://www.qorynta.in/services"
      />

            <main className="flex min-h-screen flex-col bg-background">
        
        {/* Page Header */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Engineering Excellence <br className="hidden md:block" /> Across the Stack
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We provide end-to-end technology solutions tailored for your business scale, from high-converting landing pages to complex ML infrastructure.
            </p>
          </div>
        </section>

        {/* We reuse the components built for the homepage */}
        <div className="-mt-20">
          <ServicesSection />
        </div>
        
        <TechStackSection />
        
        <CTABanner />

      </main>
                </>
  );
};

export default Services;
