import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Clock, Mail, Zap, Target, Rocket, Handshake, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const journey = [
  {
    problem: 'ML agencies promise → deliver POCs that never scale',
    solution: 'Founder codes PRODUCTION',
  },
  {
    problem: 'Juniors break production',
    solution: 'Scalable from day 1',
  },
  {
    problem: 'No one understands our ROI',
    solution: 'ROI metrics before contracts',
  },
];

const communication = [
  { icon: Clock, title: '4+hr EST/GMT overlap', description: '9AM-1PM IST daily' },
  { icon: MessageSquare, title: 'Daily standups', description: 'Slack/Teams updates' },
  { icon: Mail, title: 'Weekly ROI reviews', description: 'With executives' },
];

const results = [
  { metric: '$1.8M/yr', label: 'Fraud savings', sub: '99.2% accuracy' },
  { metric: '15%', label: 'Cost reduction', sub: 'Inventory optimization' },
  { metric: '40%', label: 'Faster reviews', sub: 'AI automation' },
];

const comparison = [
  { agency: '50 devs → 3 weeks scope', qorynta: '3 ML experts → 1 week' },
  { agency: 'Junior breaks prod', qorynta: 'Founder stress-tests' },
  { agency: '"Send to India"', qorynta: 'US-timezone partner' },
  { agency: 'POC graveyard', qorynta: 'Revenue-generating ML' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden particles-bg">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Why we built Qorynta — for real business results. FinTech paid millions for ML demos that crashed.
                We created scalable systems that save real money.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem We Solve */}
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                The Problem <span className="gradient-text">We Solve Daily</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Problems */}
                <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-destructive mb-6">
                    <X className="w-5 h-5" />
                    Customers told us:
                  </h3>
                  <ul className="space-y-4">
                    {journey.map((item) => (
                      <li key={item.problem} className="text-muted-foreground">
                        "{item.problem}"
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-primary mb-6">
                    <Check className="w-5 h-5" />
                    Our Answer:
                  </h3>
                  <ul className="space-y-4">
                    {journey.map((item) => (
                      <li key={item.solution} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {item.solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              How We Work <span className="gradient-text">Professionally</span>
            </h2>

            {/* Communication */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {communication.map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="p-8 rounded-2xl bg-muted/20 border border-border">
              <h3 className="text-lg font-semibold text-foreground text-center mb-8">
                🔧 Solving Real Problems
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {results.map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">{item.metric}</div>
                    <p className="text-foreground font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Badge */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border text-center">
              <p className="text-muted-foreground">
                "80% of our code is production battle-tested"
              </p>
            </div>
          </div>
        </section>

        {/* Why Boutique Beats Agency */}
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Why <span className="gradient-text">Boutique</span> Beats Agency
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Header */}
                <div className="p-4 rounded-t-xl bg-destructive/10 text-center">
                  <span className="text-destructive font-semibold">❌ Agency Nightmare</span>
                </div>
                <div className="p-4 rounded-t-xl bg-primary/10 text-center">
                  <span className="text-primary font-semibold">✅ Qorynta Reality</span>
                </div>

                {/* Rows */}
                {comparison.map((row, index) => (
                  <>
                    <div key={`agency-${index}`} className="p-4 bg-destructive/5 border-b border-destructive/10">
                      <span className="text-muted-foreground">{row.agency}</span>
                    </div>
                    <div key={`qorynta-${index}`} className="p-4 bg-primary/5 border-b border-primary/10">
                      <span className="text-foreground">{row.qorynta}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              {[
                { icon: Target, title: 'ML-First', desc: 'Not generic outsourcing' },
                { icon: Rocket, title: 'Production', desc: 'Not POCs' },
                { icon: Handshake, title: 'Founder Access', desc: 'Direct involvement' },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                    <item.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Stack */}
        <section className="py-12 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>⭐ Clutch Verified 2025</span>
              <span>🔒 SOC2 Process</span>
              <span>🌐 EST Overlap Certified</span>
              <span>📱 Founder Direct</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready for scalable ML that drives revenue?
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glow-md hover:shadow-glow-lg transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Free ROI Workshop → 30min
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
