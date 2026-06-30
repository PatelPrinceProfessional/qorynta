import { Helmet } from 'react-helmet';
import { Target, Lightbulb, Users, Globe2 } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTABanner } from '@/components/home/CTABanner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const values = [
  {
    icon: Target,
    title: 'Precision Execution',
    description: 'We do not believe in "good enough". Our code is clean, our architectures scale, and our products work flawlessly.',
  },
  {
    icon: Lightbulb,
    title: 'Radical Transparency',
    description: 'No hidden fees, no black-box development. You have full visibility into our process, sprints, and codebases.',
  },
  {
    icon: Users,
    title: 'True Partnership',
    description: 'We act as your extended tech team. Your success is our success. We push back if we see a better way to achieve your goals.',
  },
  {
    icon: Globe2,
    title: 'Global Perspective',
    description: 'Building for the world. We combine Indian engineering excellence with Western design sensibilities and project management.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Qorynta Services</title>
        <meta name="description" content="Learn about Qorynta Services' mission, values, and the team building world-class digital products for global businesses." />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        
        {/* Header Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <SectionLabel text="OUR STORY" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Engineering the Future of <br className="hidden md:block" /> Digital Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Qorynta Services was founded with a simple mission: to bridge the gap between Indian engineering talent and global business needs. We deliver Silicon Valley-grade software at accessible prices.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel text="OUR CORE VALUES" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                How We Operate
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <GlassCard key={idx} className="flex gap-6 p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Headquartered in India, <br /> Built for the World
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our timezone overlaps effectively with the US, UK, EU, and AU. We've optimized our async communication and agile sprints to ensure geography is never a barrier.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Clients</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-secondary mb-2">8+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Countries</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-accent mb-2">120+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Projects</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">In-House</div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
