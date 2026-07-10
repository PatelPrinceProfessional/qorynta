import { Helmet } from 'react-helmet';
import { CTABanner } from '@/components/home/CTABanner';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, Target, Clock, ShieldCheck, ArrowRight, Users } from 'lucide-react';

const models = [
  {
    id: 'dedicated',
    icon: Users,
    title: 'Dedicated Team',
    tagline: 'Scale Your Engineering Capacity',
    description: 'Best for startups and enterprises needing long-term, highly skilled engineering pods integrated directly into their agile workflows.',
    price: 'Custom Monthly Retainer',
    features: [
      'Top 1% Senior Engineers',
      'Direct integration with your Jira/Slack',
      'Flexible scaling up or down',
      'Dedicated Project Manager',
      'Full IP Ownership'
    ],
    highlight: true,
    cta: 'Assemble Your Team'
  },
  {
    id: 'fixed',
    icon: Target,
    title: 'Fixed Price',
    tagline: 'End-to-End Product Delivery',
    description: 'Perfect for well-defined projects with clear scopes. We take full ownership from initial UI/UX design to production deployment.',
    price: 'Milestone Based',
    features: [
      'Guaranteed delivery timelines',
      'Zero cost overruns',
      'Comprehensive QA & Testing',
      'Post-launch support period',
      'Clear milestone deliverables'
    ],
    highlight: false,
    cta: 'Get a Project Estimate'
  },
  {
    id: 'tnm',
    icon: Clock,
    title: 'Time & Materials',
    tagline: 'Agile R&D and Exploration',
    description: 'Ideal for AI/ML research, complex integrations, and evolving projects where the scope cannot be rigidly defined upfront.',
    price: 'Hourly or Daily Rate',
    features: [
      'Pay only for actual hours worked',
      'Maximum flexibility for scope changes',
      'Bi-weekly transparent timesheets',
      'Access to specialized experts (AI, DevOps)',
      'Stop or pause at any time'
    ],
    highlight: false,
    cta: 'Discuss Your Requirements'
  }
];

export const Engagement = () => {
  return (
    <>
      <Helmet>
        <title>Engagement Models & Pricing | Qorynta Services</title>
        <meta name="description" content="Discover how to partner with Qorynta Services. We offer Dedicated Teams, Fixed Price, and Time & Materials engagement models tailored for enterprise needs." />
      </Helmet>

      
      <main className="min-h-screen bg-background pt-20">
        
        {/* Header Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <ScrollReveal>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6">
                Partnership Models
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
                Transparent Pricing. <br /> <span className="text-primary">Zero Surprises.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto">
                We believe in radical transparency. Choose the engagement model that best aligns with your project scope, timeline, and risk profile.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {models.map((model, index) => (
                <ScrollReveal key={model.id} delay={0.1 * index}>
                  <div className={`relative flex flex-col h-full bg-card rounded-3xl border ${model.highlight ? 'border-primary shadow-xl shadow-primary/10 scale-100 md:scale-105 z-10' : 'border-border/50 shadow-sm'} p-8 hover:border-primary/50 transition-all duration-300`}>
                    
                    {model.highlight && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Most Popular
                        </span>
                      </div>
                    )}

                    <div className="mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${model.highlight ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-primary/10 text-primary'}`}>
                        <model.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-black text-foreground mb-2">{model.title}</h3>
                      <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">{model.tagline}</p>
                      <p className="text-muted-foreground text-sm font-medium h-20">{model.description}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-border/50">
                      <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-2">Billing Model</p>
                      <p className="text-xl font-black text-foreground">{model.price}</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${model.highlight ? 'text-primary' : 'text-primary/70'}`} />
                          <span className="text-sm text-foreground font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      asChild 
                      variant={model.highlight ? 'default' : 'outline'} 
                      className={`w-full h-12 rounded-full font-bold group ${model.highlight ? 'shadow-lg shadow-primary/25' : ''}`}
                    >
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        {model.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Common Questions</h2>
              <p className="text-lg text-muted-foreground font-medium">Everything you need to know about partnering with us.</p>
            </ScrollReveal>

            <div className="grid gap-6">
              {[
                {
                  q: "Who owns the Intellectual Property (IP)?",
                  a: "You do. 100%. Upon final payment for milestones or hourly invoices, all source code, designs, and intellectual property are fully transferred and owned by your company."
                },
                {
                  q: "How do you ensure code quality and security?",
                  a: "We implement strict CI/CD pipelines, mandatory peer code reviews, static code analysis (SonarQube), and automated security scanning on every single commit. We do not compromise on security."
                },
                {
                  q: "Can we switch from Time & Materials to Fixed Price?",
                  a: "Yes. Many of our enterprise clients start with a 4-week Time & Materials discovery phase to define the architecture, and then transition to a Fixed Price contract for the actual development phase."
                },
                {
                  q: "Do you work in our timezone?",
                  a: "Our core engineering teams are based in India, but we enforce mandatory daily overlap hours (usually 4-5 hours) with US, UK, and Australian clients for daily stand-ups and real-time collaboration."
                }
              ].map((faq, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-muted-foreground font-medium leading-relaxed">{faq.a}</p>
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

export default Engagement;
