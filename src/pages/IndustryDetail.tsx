import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RevealContent } from '@/components/ui/RevealContent';

export const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Format slug to Title Case (e.g., fin-tech -> Fin Tech)
  const formatTitle = (s: string) => s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const industryName = slug ? formatTitle(slug) : 'Industry';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const features = [
    { icon: ShieldCheck, title: 'Regulatory Compliance', desc: `We build ${industryName} applications that adhere to strict data privacy and security regulations by default.` },
    { icon: Zap, title: 'High-Performance Architecture', desc: 'Our systems are designed to handle massive data loads and concurrent users without breaking a sweat.' },
    { icon: BarChart3, title: 'Data-Driven Insights', desc: 'Integrated analytics and machine learning pipelines to turn your raw data into actionable intelligence.' },
    { icon: Lock, title: 'Enterprise-Grade Security', desc: 'End-to-end encryption, regular penetration testing, and secure cloud deployments.' }
  ];

  const generateFaqSchema = () => {
    if (slug === 'fintech') {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "Does Qorynta build software for FinTech companies?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Qorynta specialises in FinTech software development including fraud detection AI, payment platform development, risk scoring engines, KYC/AML tools, and regulatory compliance dashboards for US and UK financial companies."}},
          {"@type": "Question", "name": "What is the cost of FinTech software development at Qorynta?", "acceptedAnswer": {"@type": "Answer", "text": "Qorynta's rate is $25–49/hr, Clutch verified. FinTech MVP projects typically range from $15,000–$50,000 depending on complexity. We offer milestone-based billing and signed contracts before any work begins."}},
          {"@type": "Question", "name": "How does Qorynta handle data security for financial software?", "acceptedAnswer": {"@type": "Answer", "text": "All FinTech projects include NDA signing before Day 1, GDPR-compliant data handling, AES-256 encryption at rest and in transit, and infrastructure hosted on SOC 2 compliant cloud providers (AWS, GCP)."}},
          {"@type": "Question", "name": "Can Qorynta integrate with banking APIs and payment gateways?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We integrate with Stripe, Plaid, Braintree, Razorpay, PayPal, and custom banking APIs. We have experience with open banking standards including PSD2 and FDX."}},
          {"@type": "Question", "name": "Does Qorynta work with US-based FinTech companies?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We have delivered multiple projects for US-based FinTech clients, working in EST timezone overlap windows with 24-hour response SLA and weekly Loom video updates."}}
        ]
      };
    }
    
    if (slug === 'education') {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "Does Qorynta build software for EdTech companies?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We build scalable LMS platforms, AI tutoring tools, student analytics dashboards, and mobile learning apps for schools, universities, and EdTech startups."}},
          {"@type": "Question", "name": "What is the cost of EdTech software development?", "acceptedAnswer": {"@type": "Answer", "text": "Qorynta's rate is $25–49/hr. EdTech projects range based on complexity, with milestone-based billing and transparent contracts."}},
          {"@type": "Question", "name": "Do you ensure data privacy for student data?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we adhere to strict data privacy regulations including COPPA, FERPA, and GDPR to ensure all student and institutional data is completely secure."}}
        ]
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": `Does Qorynta build custom software for the ${industryName} industry?`, "acceptedAnswer": {"@type": "Answer", "text": `Yes. Qorynta specialises in custom software development for ${industryName} businesses, building scalable and secure digital solutions tailored to your specific operational needs.`}},
        {"@type": "Question", "name": `What is the cost of ${industryName} software development?`, "acceptedAnswer": {"@type": "Answer", "text": "Qorynta's rate is $25–49/hr, Clutch verified. We offer milestone-based billing, NDAs, and transparent contracts before any work begins."}},
        {"@type": "Question", "name": `How does Qorynta handle data security for ${industryName} clients?`, "acceptedAnswer": {"@type": "Answer", "text": "All projects include NDA signing before Day 1, GDPR-compliant data handling, AES-256 encryption at rest and in transit, and secure cloud infrastructure."}}
      ]
    };
  };

  const faqSchema = generateFaqSchema();

  return (
    <>
      {slug === 'fintech' ? (
        <SEO
          exactTitle={true}
          title="FinTech Software Development Company India | Fraud Detection & AI | Qorynta"
          description="Custom FinTech software: fraud detection AI (99.2% accuracy), payment platforms, risk scoring engines & regulatory compliance tools. Serving US & UK FinTech teams. $25–49/hr."
          canonical="https://www.qorynta.in/industries/fintech"
        >
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </SEO>
      ) : slug === 'education' ? (
        <SEO
          exactTitle={true}
          title="EdTech Software Development Company India | LMS & Learning Platforms | Qorynta"
          description="Custom EdTech software: LMS platforms, AI tutoring tools, student analytics dashboards & mobile learning apps. Built for schools, universities & ed-startups globally."
          canonical="https://www.qorynta.in/industries/education"
        >
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </SEO>
      ) : (
        <SEO
          title={`${industryName} Software Development`}
          description={`Custom software development and digital transformation for the ${industryName} sector.`}
          canonical={`https://www.qorynta.in/industries/${slug}`}
        >
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </SEO>
      )}

      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-900/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <ScrollReveal>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 text-sm font-black tracking-wider uppercase mb-6">
                Industry Expertise
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tight">
                Transforming <span className="text-primary">{industryName}</span> Through Technology.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                We partner with leading {industryName} enterprises to build scalable, secure, and highly compliant digital products that drive market dominance.
              </p>
              <Button asChild size="lg" className="rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] px-8 h-14 text-base overflow-hidden group">
                <Link to="/contact">
                  <RevealContent>
                    Discuss Your {industryName} Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </RevealContent>
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {slug === 'fintech' ? (
          <section className="py-24 bg-muted/30 border-y border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              
              <ScrollReveal className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">FinTech Software Development Excellence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The financial technology landscape demands absolute precision, unparalleled security, and lightning-fast transaction processing. At Qorynta, we engineer robust, scalable FinTech software solutions designed to revolutionize how businesses and consumers interact with money. From highly sophisticated, AI-driven fraud detection algorithms that protect your assets in real-time, to complex blockchain ledger integrations and seamless mobile payment gateways, our bespoke solutions are built for global scale. We strictly adhere to international financial compliance standards, including PCI-DSS, GDPR, and SOC 2, ensuring your digital products are not only innovative but also legally airtight and impenetrable to malicious actors.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"><ShieldCheck className="text-primary w-6 h-6"/> Why Partner with Qorynta?</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Bank-Grade Security Architecture:</strong> End-to-end encryption, regular penetration testing, and zero-trust networks protect every transaction.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Strict Regulatory Compliance:</strong> Built-in adherence to US, UK, and EU financial regulations, completely automating your compliance reporting.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>High-Frequency Performance:</strong> Microservices architectures capable of processing thousands of concurrent transactions with sub-millisecond latency.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Seamless API Integrations:</strong> Native connectivity with Plaid, Stripe, open banking protocols, and legacy mainframe systems.</span></li>
                </ul>
              </ScrollReveal>

              <ScrollReveal className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our FinTech Tech Stack</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We utilize enterprise-grade technologies to guarantee performance. Our backend services are typically constructed utilizing <strong>Node.js</strong> or <strong>Python</strong>, deployed across resilient <strong>AWS</strong> or <strong>Google Cloud</strong> Kubernetes clusters. Data is securely managed using highly available <strong>PostgreSQL</strong> databases, heavily cached by <strong>Redis</strong>. Frontend interfaces are engineered for maximum responsiveness using <strong>React</strong> and <strong>Next.js</strong>, while mobile wallets are built natively or using <strong>React Native</strong>.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h3 className="text-2xl font-bold text-foreground mb-6">How We Work (4-Step Process)</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">1. Architecture & Compliance Audit</h4>
                    <p className="text-muted-foreground">We meticulously map out the system architecture and establish stringent compliance and security protocols before writing a single line of code.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">2. Prototyping & Security Design</h4>
                    <p className="text-muted-foreground">We design intuitive user interfaces while simultaneously building out the zero-trust security perimeter and database schemas.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">3. Agile Development & Integration</h4>
                    <p className="text-muted-foreground">Our engineers develop the platform in two-week sprints, integrating essential third-party financial APIs and running continuous automated tests.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">4. Penetration Testing & Deployment</h4>
                    <p className="text-muted-foreground">The finalized product undergoes extreme load testing and third-party penetration audits before being deployed to production environments.</p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </section>
        ) : slug === 'education' ? (
          <section className="py-24 bg-muted/30 border-y border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              
              <ScrollReveal className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">EdTech Software Development Excellence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The future of learning is digital, deeply personalized, and endlessly accessible. At Qorynta, we develop transformative EdTech platforms that bridge the gap between educators and students globally. Whether you are building a massive Learning Management System (LMS) for a university, an AI-powered tutoring application for K-12 students, or a corporate training portal for enterprise upskilling, we deliver scalable solutions. Our engineering focuses heavily on intuitive UX/UI design to maximize student engagement, robust video streaming architectures for seamless virtual classrooms, and deep analytics dashboards that empower instructors with real-time performance insights, all while ensuring total compliance with FERPA and COPPA regulations.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"><ShieldCheck className="text-primary w-6 h-6"/> Why Partner with Qorynta?</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Immersive Learning Experiences:</strong> We incorporate gamification, interactive quizzes, and seamless video streaming to drastically improve retention rates.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Strict Data Privacy (FERPA/COPPA):</strong> We implement rigorous security measures to protect sensitive student records and institutional data at all times.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>AI-Powered Personalization:</strong> We leverage machine learning algorithms to adapt coursework difficulty based on individual student performance metrics.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><Zap className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Cross-Platform Accessibility:</strong> Our responsive web and native mobile applications ensure students can learn anywhere, on any device, flawlessly.</span></li>
                </ul>
              </ScrollReveal>

              <ScrollReveal className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our EdTech Tech Stack</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build educational platforms engineered for high concurrent usage. Frontends are crafted with <strong>React</strong> or <strong>Vue.js</strong> for interactive learning modules. Backends utilize <strong>Node.js</strong> and <strong>GraphQL</strong> for lightning-fast content delivery. Video infrastructure relies on <strong>WebRTC</strong> and <strong>AWS Media Services</strong>. We store vast amounts of educational content using scalable object storage and highly optimized <strong>PostgreSQL</strong> or <strong>MongoDB</strong> databases.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h3 className="text-2xl font-bold text-foreground mb-6">How We Work (4-Step Process)</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">1. Educational Strategy & Curriculum Mapping</h4>
                    <p className="text-muted-foreground">We collaborate with educators to map curriculum flows and define the exact technical requirements needed to support your pedagogical goals.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">2. Learner-Centric UI/UX Design</h4>
                    <p className="text-muted-foreground">We design highly accessible, distraction-free interfaces that cater to the specific age group and technological proficiency of your target students.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">3. Scalable Platform Development</h4>
                    <p className="text-muted-foreground">We engineer the core LMS features, integrating necessary payment gateways, video conferencing APIs, and secure student databases.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">4. Beta Testing & Global Launch</h4>
                    <p className="text-muted-foreground">We conduct rigorous usability testing with pilot user groups, optimizing performance before a flawless, highly scalable public release.</p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </section>
        ) : (
          <section className="py-24 bg-muted/30 border-y border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Why Partner With Us?</h2>
                <p className="text-lg text-muted-foreground">We understand the unique technical and regulatory challenges of the {industryName} space.</p>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {features.map((feature, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * idx}>
                    <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-all flex gap-6">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}


      </main>

                </>
  );
};

export default IndustryDetail;
