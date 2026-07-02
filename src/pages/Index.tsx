import { Helmet } from 'react-helmet';
import { HeroSection } from '@/components/home/HeroSection';
import { WhyQorynta } from '@/components/home/WhyQorynta';
import React, { Suspense } from 'react';

const TrustBar = React.lazy(() => import('@/components/home/TrustBar').then(m => ({ default: m.TrustBar })));
const HomeServicesSection = React.lazy(() => import('@/components/home/HomeServicesSection').then(m => ({ default: m.HomeServicesSection })));
const ProcessSection = React.lazy(() => import('@/components/home/ProcessSection').then(m => ({ default: m.ProcessSection })));
const CaseStudySection = React.lazy(() => import('@/components/home/CaseStudySection').then(m => ({ default: m.CaseStudySection })));
const TechStackSection = React.lazy(() => import('@/components/home/TechStackSection').then(m => ({ default: m.TechStackSection })));
const CTABanner = React.lazy(() => import('@/components/home/CTABanner').then(m => ({ default: m.CTABanner })));
const Footer = React.lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppButton = React.lazy(() => import('@/components/WhatsAppButton').then(m => ({ default: m.WhatsAppButton })));

import { AmbientGlow } from '@/components/ui/AmbientGlow';
import { Navbar } from '@/components/Navbar';

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
          <Suspense fallback={<div className="h-40 w-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <TrustBar />
            <HomeServicesSection />
          </Suspense>
          <WhyQorynta />
          <Suspense fallback={<div className="h-40 w-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <ProcessSection />
            <CaseStudySection />
            <TechStackSection />
            <CTABanner />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </>
  );
};

export default Index;
