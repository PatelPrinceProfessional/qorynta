import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CTABanner } from '@/components/home/CTABanner';
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

  return (
    <>
      <Helmet>
        <title>{industryName} Software Development | Qorynta Services</title>
        <meta name="description" content={`Custom software development and digital transformation for the ${industryName} sector.`} />
      </Helmet>

      
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

        {/* Value Prop Grid */}
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

        <CTABanner />
      </main>

                </>
  );
};

export default IndustryDetail;
