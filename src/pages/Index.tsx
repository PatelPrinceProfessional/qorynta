import { Helmet } from 'react-helmet';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyQorynta } from '@/components/home/WhyQorynta';
import { ProcessSection } from '@/components/home/ProcessSection';

import { CaseStudySection } from '@/components/home/CaseStudySection';
import { TechStackSection } from '@/components/home/TechStackSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogTeaser } from '@/components/home/BlogTeaser';
import { CTABanner } from '@/components/home/CTABanner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Qorynta | Web & Mobile App Development Company India</title>
        <meta name="description" content="Production-grade digital solutions for Indian and global businesses. Custom web development, mobile apps, AI & Machine Learning, and Cloud DevOps." />
      </Helmet>

      <Navbar />
      <main className="flex min-h-screen flex-col bg-background">
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <WhyQorynta />
        <ProcessSection />

        <CaseStudySection />
        <TechStackSection />
        <TestimonialsSection />
        <BlogTeaser />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
