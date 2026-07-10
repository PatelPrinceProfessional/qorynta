import { Helmet } from 'react-helmet';
import { CTABanner } from '@/components/home/CTABanner';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Code2, Globe2, Coffee, Laptop, Heart, Rocket, ArrowRight } from 'lucide-react';

const perks = [
  {
    icon: Globe2,
    title: 'Remote-First Culture',
    description: 'Work from anywhere in the world. We care about output and code quality, not office hours.'
  },
  {
    icon: Laptop,
    title: 'Top-Tier Equipment',
    description: 'We provide you with the latest MacBook Pro and a generous home office setup budget.'
  },
  {
    icon: Code2,
    title: 'Modern Tech Stack',
    description: 'Work with Next.js, React, Node, Python, and cutting-edge AI integrations.'
  },
  {
    icon: Heart,
    title: 'Comprehensive Health',
    description: 'Premium medical insurance covering you and your immediate family.'
  },
  {
    icon: Rocket,
    title: 'R&D Time',
    description: 'Spend 15% of your paid time exploring new frameworks, libraries, and side projects.'
  },
  {
    icon: Coffee,
    title: 'Generous PTO',
    description: 'Unlimited paid time off (with a mandatory minimum of 3 weeks) to prevent burnout.'
  }
];

const jobs = [
  {
    id: 'senior-frontend',
    role: 'Senior Frontend Engineer (React/Next.js)',
    type: 'Full-Time',
    location: 'Remote (Worldwide)',
    department: 'Engineering',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    id: 'backend-node',
    role: 'Backend Systems Engineer (Node.js/AWS)',
    type: 'Full-Time',
    location: 'Remote (Worldwide)',
    department: 'Engineering',
    tags: ['Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: 'ai-engineer',
    role: 'AI / Machine Learning Engineer',
    type: 'Full-Time',
    location: 'Remote (Worldwide)',
    department: 'R&D',
    tags: ['Python', 'LangChain', 'TensorFlow']
  },
  {
    id: 'product-manager',
    role: 'Technical Product Manager',
    type: 'Full-Time',
    location: 'Remote (US/EU Timezones)',
    department: 'Product',
    tags: ['Agile', 'Jira', 'Strategy']
  }
];

export const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Qorynta Services | Join the Elite Team</title>
        <meta name="description" content="Join Qorynta Services. We are hiring the top 1% of software engineers, designers, and product managers to build the future of digital products." />
      </Helmet>

      
      <main className="min-h-screen bg-background pt-20">
        
        {/* Header Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <ScrollReveal>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6">
                Careers & Culture
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
                Build the Future. <br /> <span className="text-primary">With the Best.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto mb-10">
                We are an elite engineering task force. We tackle complex architectural problems, ship at high velocity, and maintain a culture of radical transparency.
              </p>
              <Button asChild size="lg" className="rounded-full font-bold px-8">
                <a href="#open-roles">View Open Roles</a>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Why Join Us?</h2>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                We treat our team as well as we treat our clients. We offer tier-1 benefits to ensure you can do your best work.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <perk.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{perk.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed flex-1">
                      {perk.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section id="open-roles" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <ScrollReveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Open Positions</h2>
                <p className="text-lg text-muted-foreground font-medium">
                  We are actively hiring for these roles. Don't see a fit? Send us an open application.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {jobs.map((job, idx) => (
                <ScrollReveal key={job.id} delay={0.1 * idx}>
                  <Link 
                    to="/contact" 
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 bg-card rounded-2xl border border-border/50 shadow-sm hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium mb-4 md:mb-0">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded uppercase tracking-wider text-xs font-bold">{job.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="flex gap-2 w-full sm:w-auto">
                        {job.tags.map(tag => (
                          <span key={tag} className="bg-muted px-3 py-1 rounded-full text-xs font-medium text-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Don't see a matching role?</p>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/contact">Send Open Application</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />

      </main>
      
          </>
  );
};

export default Careers;
