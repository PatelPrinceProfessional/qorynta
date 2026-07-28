import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTABanner } from '@/components/home/CTABanner';
import { 
  Users, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Target, 
  Cpu, 
  Database,
  Globe,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RevealContent } from '@/components/ui/RevealContent';

const engagementModels = [
  {
    title: 'Dedicated Teams',
    icon: Users,
    description: 'A fully managed, elite engineering squad seamlessly integrated into your workflows. Perfect for scaling rapidly without the overhead of internal hiring.',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-cyan-500/50',
    features: ['Agile Integration', 'Direct Communication', 'Long-term Roadmap Delivery']
  },
  {
    title: 'Staff Augmentation',
    icon: Code2,
    description: 'Plug critical skill gaps instantly. We provide top 1% senior engineers to work directly under your management and accelerate your existing team.',
    color: 'from-purple-500/20 to-indigo-500/20',
    border: 'hover:border-purple-500/50',
    features: ['Instant Scaling', 'Niche Expertise', 'Flexible Duration']
  },
  {
    title: 'Project-Based Delivery',
    icon: Rocket,
    description: 'End-to-end product development. You provide the vision, we provide the architecture, code, and deployment with guaranteed milestones.',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/50',
    features: ['Fixed Scope & Budget', 'Guaranteed Delivery', 'Turnkey Solution']
  }
];

const techStack = [
  { name: 'Frontend', icon: Smartphone, technologies: ['React', 'Next.js', 'Vue', 'React Native', 'TailwindCSS'], slug: 'frontend' },
  { name: 'Backend', icon: Database, technologies: ['Node.js', 'Go', 'Python', 'Java', 'PostgreSQL'], slug: 'backend' },
  { name: 'Cloud & DevOps', icon: Globe, technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'], slug: 'devops' },
  { name: 'AI & Data', icon: Cpu, technologies: ['LLM Integration', 'TensorFlow', 'PyTorch', 'Data Pipelines'], slug: 'ai-data' }
];

export const Hire = () => {
  return (
    <>
      <SEO
        title="Hire Software Engineers & AI Experts | Team Augmentation | Qorynta"
        description="Hire dedicated software developers, AI/ML engineers, and UI/UX designers from Qorynta Services to scale your engineering capacity rapidly."
        canonical="https://www.qorynta.in/hire"
      />

      <main className="min-h-screen bg-background pt-20 overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 flex items-center justify-center min-h-[70vh]">
          {/* Subtle animated background gradients */}
          <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-8">
                <Target className="w-4 h-4" /> Top 1% Global Talent
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 sm:mb-8 tracking-tight leading-tight sm:leading-[1.1]">
                Scale Your Engineering Capacity with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Elite Talent.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto mb-10 sm:mb-12">
                Bypass the painful hiring cycle. Instantly inject world-class architects, senior developers, and product engineers directly into your most critical initiatives.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:scale-105 transition-all overflow-hidden group">
                  <Link to="/contact">
                    <RevealContent>Build Your Team Today</RevealContent>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg border-border hover:bg-muted transition-all">
                  <a href="#models">Explore Engagement Models</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Engagement Models */}
        <section id="models" className="py-24 relative bg-muted/20 border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                  Flexible Engagement Models
                </h2>
                <p className="text-lg text-muted-foreground">
                  Whether you need a single specialized architect or a complete engineering squad, we tailor our integration to match your velocity and operational style.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {engagementModels.map((model, idx) => {
                const Icon = model.icon;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className={`group relative flex flex-col h-full bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${model.border}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-background transition-all duration-500 shadow-sm">
                          <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {model.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          {model.description}
                        </p>
                        
                        <div className="mt-auto pt-8 border-t border-border/50">
                          <ul className="space-y-3">
                            {model.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Vetting Process */}
        <section className="py-24 bg-foreground dark:bg-card text-background dark:text-foreground relative overflow-hidden border-y dark:border-border/50 border-transparent">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary via-background to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                  The Qorynta <span className="text-primary">Standard.</span>
                </h2>
                <p className="text-lg text-slate-300 dark:text-muted-foreground">
                  We don't forward resumes. We provide battle-tested engineers who have survived one of the most rigorous technical vetting processes in the industry.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Top 1% Sourcing', desc: 'We actively headhunt elite talent from leading tech hubs globally, accepting only the top 1% of applicants.' },
                { step: '02', title: 'Technical Grilling', desc: 'Live architectural deep-dives and extreme pair programming sessions with our principal engineers.' },
                { step: '03', title: 'Culture & Communication', desc: 'Rigorous assessment of English fluency, proactive problem-solving, and cross-cultural collaboration skills.' },
                { step: '04', title: 'Continuous Upskilling', desc: 'Once hired, our engineers participate in mandatory internal hackathons and bleeding-edge tech workshops.' }
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative p-6 rounded-2xl bg-slate-900 dark:bg-background border border-slate-800 dark:border-border hover:border-primary/50 dark:hover:border-primary/50 transition-colors h-full">
                    <div className="text-6xl font-black text-slate-800 dark:text-border absolute top-4 right-4 pointer-events-none select-none">
                      {item.step}
                    </div>
                    <div className="relative z-10 pt-8">
                      <h4 className="text-xl font-bold text-white dark:text-foreground mb-4">{item.title}</h4>
                      <p className="text-slate-400 dark:text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Capabilities */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                <ScrollReveal>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                    Hire by <span className="text-primary">Technology</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Need a specific skill set? Our engineers are specialized masters of their domains, ready to hit the ground running in your stack.
                  </p>
                  <Button asChild variant="outline" className="rounded-full group">
                    <Link to="/contact">
                      Request Technical Matrix <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </ScrollReveal>
              </div>
              
              <div className="lg:w-2/3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techStack.map((stack, idx) => {
                    const Icon = stack.icon;
                    return (
                      <ScrollReveal key={idx} delay={idx * 0.1}>
                        <Link 
                          to={`/hire/${stack.slug}`}
                          className="group block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary hover:shadow-lg transition-all"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{stack.name}</h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {stack.technologies.map((tech, tIdx) => (
                              <span key={tIdx} className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground group-hover:bg-primary/5 group-hover:text-foreground transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </Link>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
    </>
  );
};

export default Hire;
