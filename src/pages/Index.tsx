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

// New Phase 1 Sections
const IndustriesSection = React.lazy(() => import('@/components/home/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const CertificationsSection = React.lazy(() => import('@/components/home/CertificationsSection').then(m => ({ default: m.CertificationsSection })));
const FAQSection = React.lazy(() => import('@/components/home/FAQSection').then(m => ({ default: m.FAQSection })));
const BlogPreviewSection = React.lazy(() => import('@/components/home/BlogPreviewSection').then(m => ({ default: m.BlogPreviewSection })));

import { AmbientGlow } from '@/components/ui/AmbientGlow';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Qorynta Services | Web & Mobile App Development Company India</title>
        <meta name="description" content="Production-grade digital solutions for Indian and global businesses. Custom web development, mobile apps, AI & Machine Learning, and Cloud DevOps." />
      </Helmet>


      <main className="flex min-h-screen flex-col">
        <HeroSection />

        {/* Main content wrapper */}
        <div id="content-wrapper" className="relative z-10 bg-background diagonal-geometric-bg flex flex-col gap-0 pb-0">
          <Suspense fallback={<div className="h-40 w-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <TrustBar />
            <HomeServicesSection />
          </Suspense>

          <WhyQorynta />

          <Suspense fallback={<div className="h-40 w-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <ProcessSection />
            <IndustriesSection />
            <CaseStudySection />
            <TechStackSection />
            <CertificationsSection />
            <FAQSection />
            <BlogPreviewSection />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Index;
