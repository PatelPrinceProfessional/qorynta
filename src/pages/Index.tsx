import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { ClutchValidation } from '@/components/home/ClutchValidation';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProductionProof } from '@/components/home/ProductionProof';
import { WhyQorynta } from '@/components/home/WhyQorynta';
import { ProcessSection } from '@/components/home/ProcessSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ClutchValidation />
        <ServicesSection />
        <ProductionProof />
        <WhyQorynta />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
