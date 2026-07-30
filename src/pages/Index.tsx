import SEO from '@/components/SEO';
import { HeroSection } from '@/components/home/HeroSection';
import React, { Suspense } from 'react';

const WhyQorynta = React.lazy(() => import('@/components/home/WhyQorynta').then(m => ({ default: m.WhyQorynta })));
const TrustBar = React.lazy(() => import('@/components/home/TrustBar').then(m => ({ default: m.TrustBar })));
const HomeServicesSection = React.lazy(() => import('@/components/home/HomeServicesSection').then(m => ({ default: m.HomeServicesSection })));
const ProcessSection = React.lazy(() => import('@/components/home/ProcessSection').then(m => ({ default: m.ProcessSection })));
const CaseStudySection = React.lazy(() => import('@/components/home/CaseStudySection').then(m => ({ default: m.CaseStudySection })));
const TechStackSection = React.lazy(() => import('@/components/home/TechStackSection').then(m => ({ default: m.TechStackSection })));
// New Phase 1 Sections
const IndustriesSection = React.lazy(() => import('@/components/home/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const CertificationsSection = React.lazy(() => import('@/components/home/CertificationsSection').then(m => ({ default: m.CertificationsSection })));
const FAQSection = React.lazy(() => import('@/components/home/FAQSection').then(m => ({ default: m.FAQSection })));
const BlogPreviewSection = React.lazy(() => import('@/components/home/BlogPreviewSection').then(m => ({ default: m.BlogPreviewSection })));
const GlobalTrustSection = React.lazy(() => import('@/components/home/GlobalTrustSection').then(m => ({ default: m.GlobalTrustSection })));

import { AmbientGlow } from '@/components/ui/AmbientGlow';

const Index = () => {
  return (
    <>
      <SEO
        exactTitle={true}
        title="Qorynta Services | Custom Web, Mobile App & AI Development — India"
        description="Qorynta Services: Custom web apps, mobile apps (Flutter/React Native), AI/ML solutions & SaaS platforms for US, UK & UAE clients. Clutch verified. $25–49/hr. Free consultation."
        canonical="https://www.qorynta.in/"
      >
        <meta name="keywords" content="custom software development company India, web development company Ahmedabad, mobile app development India, AI development company India, offshore software development" />
        <meta name="twitter:site" content="@qorynta" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.qorynta.in/#organization",
                "name": "Qorynta Services",
                "alternateName": "Qorynta",
                "url": "https://www.qorynta.in",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.qorynta.in/logo.webp",
                  "width": 300,
                  "height": 300
                },
                "description": "Custom software development company specialising in web apps, mobile applications, AI/ML solutions, SaaS platforms, and cloud DevOps for clients in the US, UK, UAE, and India.",
                "email": "qorynta@gmail.com",
                "foundingLocation": {
                  "@type": "Place",
                  "name": "Ahmedabad, Gujarat, India"
                },
                "areaServed": ["US", "GB", "AE", "IN", "CA"],
                "numberOfEmployees": {"@type": "QuantitativeValue", "minValue": 2, "maxValue": 10},
                "sameAs": [
                  "https://www.linkedin.com/company/qorynta-services",
                  "https://www.instagram.com/qoryntaservices",
                  "https://twitter.com/qorynta"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+91-9876543210",
                    "contactType": "customer support",
                    "email": "qorynta@gmail.com",
                    "availableLanguage": ["English", "Hindi"]
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.qorynta.in/#website",
                "url": "https://www.qorynta.in",
                "name": "Qorynta Services",
                "publisher": {
                  "@id": "https://www.qorynta.in/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://www.qorynta.in/#webpage",
                "url": "https://www.qorynta.in",
                "name": "Custom Software Development Company | Qorynta Services",
                "isPartOf": {
                  "@id": "https://www.qorynta.in/#website"
                }
              }
            ]
          })}
        </script>
        <link rel="alternate" hreflang="en-us" href="https://www.qorynta.in/" />
        <link rel="alternate" hreflang="en-gb" href="https://www.qorynta.in/" />
        <link rel="alternate" hreflang="en-in" href="https://www.qorynta.in/" />
        <link rel="alternate" hreflang="x-default" href="https://www.qorynta.in/" />
      </SEO>


      <main className="min-h-screen">
        <HeroSection />

        {/* Main content wrapper */}
        <div id="content-wrapper" className="relative z-10 bg-background diagonal-geometric-bg flex flex-col gap-0 pb-0">
          <Suspense fallback={<div className="h-40 w-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
            <TrustBar />
            <HomeServicesSection />
            <ProcessSection />
            <WhyQorynta />
            <IndustriesSection />
            <CaseStudySection />
            <TechStackSection />
            <CertificationsSection />
            <FAQSection />
            <GlobalTrustSection />
            <BlogPreviewSection />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Index;
