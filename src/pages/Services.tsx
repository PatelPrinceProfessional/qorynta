import { Helmet } from 'react-helmet';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechStackSection } from '@/components/home/TechStackSection';
import { CTABanner } from '@/components/home/CTABanner';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Qorynta Services - Web & Mobile App Development</title>
        <meta name="description" content="Explore our full range of digital services including web development, mobile apps, UI/UX design, AI solutions, and Cloud DevOps." />
      </Helmet>

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
