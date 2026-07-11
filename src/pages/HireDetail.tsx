import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CTABanner } from '@/components/home/CTABanner';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, CheckCircle2, Users, Code2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RevealContent } from '@/components/ui/RevealContent';

export const HireDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Format slug to Title Case (e.g., react-developers -> React Developers)
  const formatTitle = (s: string) => s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const roleName = slug ? formatTitle(slug) : 'Developers';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const benefits = [
    "Top 1% pre-vetted engineering talent",
    "Timezone overlap for daily stand-ups",
    "Seamless integration with your internal team",
    "Flexible scaling (ramp up or down as needed)",
    "Rigorous code quality and architectural standards",
    "Transparent pricing with no hidden overhead"
  ];

  return (
    <>
      <Helmet>
        <title>Hire {roleName} | Qorynta Services Team Augmentation</title>
        <meta name="description" content={`Hire elite, pre-vetted ${roleName} to scale your engineering team rapidly.`} />
      </Helmet>

      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-900/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <ScrollReveal className="lg:w-1/2">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 text-sm font-black tracking-wider uppercase mb-6">
                  Team Augmentation
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tight leading-[1.1]">
                  Hire Elite <br />
                  <span className="text-primary">{roleName}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
                  Scale your engineering capacity instantly. We provide senior-level {roleName} who integrate seamlessly into your agile workflows and ship code from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] px-8 h-14 text-base overflow-hidden group">
                    <Link to="/contact">
                      <RevealContent>
                        Request Profiles <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </RevealContent>
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="lg:w-1/2 w-full">
                <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                  <h3 className="text-2xl font-black text-foreground mb-8 relative z-10">Why Choose Our {roleName}?</h3>
                  <div className="space-y-6 relative z-10">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground font-medium text-lg">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Flexible Engagement Models</h2>
              <p className="text-lg text-muted-foreground">Hire {roleName} on your terms.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1} className="bg-card p-8 rounded-3xl border border-border/50 text-center hover:border-primary/50 transition-colors">
                <Users className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Dedicated Team</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">A full squad of {roleName} managed by a dedicated tech lead, acting as an extension of your company.</p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="bg-card p-8 rounded-3xl border border-border/50 text-center hover:border-primary/50 transition-colors relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <Code2 className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Staff Augmentation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Hire individual {roleName} to plug specific skill gaps in your existing engineering team.</p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="bg-card p-8 rounded-3xl border border-border/50 text-center hover:border-primary/50 transition-colors">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Hourly Retainer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Need part-time help? Hire our {roleName} on a flexible monthly block of hours for maintenance.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

                </>
  );
};

export default HireDetail;
