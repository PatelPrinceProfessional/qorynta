import { Helmet } from 'react-helmet';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { HomeServicesSection } from '@/components/home/HomeServicesSection';
import { WhyQorynta } from '@/components/home/WhyQorynta';
import { ProcessSection } from '@/components/home/ProcessSection';

import { CaseStudySection } from '@/components/home/CaseStudySection';
import { TechStackSection } from '@/components/home/TechStackSection';
import { CTABanner } from '@/components/home/CTABanner';
import { AmbientGlow } from '@/components/ui/AmbientGlow';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Qorynta Services | Web & Mobile App Development Company India</title>
        <meta name="description" content="Production-grade digital solutions for Indian and global businesses. Custom web development, mobile apps, AI & Machine Learning, and Cloud DevOps." />
      </Helmet>

      <Navbar />
      <AmbientGlow />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        
        {/* Content wrapper to slide over sticky Hero */}
        <div id="content-wrapper" className="relative z-10 bg-background shadow-[0_-20px_40px_rgba(0,0,0,0.1)] diagonal-geometric-bg flex flex-col gap-8 md:gap-16 pb-20">
          <TrustBar />
          <HomeServicesSection />
          <WhyQorynta />
          <ProcessSection />

          <CaseStudySection />
          <TechStackSection />
          <CTABanner />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
