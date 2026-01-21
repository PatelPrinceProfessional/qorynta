import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, ShieldCheck, TrendingDown, Zap, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 'fintech-fraud',
    icon: ShieldCheck,
    category: 'FinTech',
    title: 'Fraud Detection Engine',
    problem: '10K transactions/min with 3.2% fraud loss ($2M/year)',
    solution: 'Real-time ML anomaly detection + auto-alert system',
    results: [
      { label: 'Fraud Rate', before: '3.2%', after: '99.2% accuracy' },
      { label: 'Annual Loss', before: '$2M', after: '$1.8M saved/yr' },
      { label: 'Alert Time', before: '5min', after: '<50ms' },
    ],
    tech: ['TensorFlow', 'Kafka', 'OCI Autonomous DB', 'MLflow'],
    gradient: 'from-primary to-primary/60',
    diagram: 'Data → Model → Alert',
  },
  {
    id: 'retail-inventory',
    icon: TrendingDown,
    category: 'Retail',
    title: 'Inventory Optimizer',
    problem: 'Overstock + stockouts costing 20% margin loss',
    solution: 'Time-series forecasting + auto-reorder dashboard',
    results: [
      { label: 'Waste', before: '25%', after: '15% cost ↓' },
      { label: 'Orders', before: 'Manual', after: 'Auto-optimized' },
      { label: 'Reporting', before: 'Excel', after: 'PowerBI live' },
    ],
    tech: ['PyTorch', 'Snowflake', 'PowerBI', 'Databricks'],
    gradient: 'from-secondary to-secondary/60',
    diagram: 'POS Data → Snowflake → PyTorch → PowerBI',
  },
  {
    id: 'healthcare-review',
    icon: FileText,
    category: 'Healthcare',
    title: 'Review Accelerator',
    problem: 'Manual document review = 40hr/case delays',
    solution: 'GenAI RAG agent + LLM pre-screening',
    results: [
      { label: 'Time/Case', before: '40hr', after: '24hr (40% ↓)' },
      { label: 'Staff', before: '3 reviewers', after: 'AI + 1 human' },
      { label: 'Error Rate', before: '12%', after: '98% precision' },
    ],
    tech: ['LangChain RAG', 'GPT-4 fine-tuned', 'SOC2 Vector DB', 'Vercel'],
    gradient: 'from-accent to-accent/60',
    diagram: 'Docs → RAG → LLM Agent → Human Review',
  },
];

const framework = [
  { step: 1, title: 'DISCOVERY', description: 'Your exact pain metrics' },
  { step: 2, title: 'MVP', description: '4-week proof-of-concept' },
  { step: 3, title: 'PRODUCTION', description: '99% uptime deployment' },
  { step: 4, title: 'SUPPORT', description: 'Free 30 days + $49/hr scale' },
];

const CaseStudies = () => {
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
                <span className="text-foreground">Proven </span>
                <span className="gradient-text">Results</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Case Studies with Real Impact. Each project follows a battle-tested framework that delivers measurable ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} rounded-3xl blur-3xl opacity-10`} />
                  
                  <div className="relative p-[1px] rounded-3xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-30`} />
                    
                    <div className="relative bg-card rounded-3xl p-8 md:p-12">
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left - Info */}
                        <div>
                          {/* Category Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-6">
                            <study.icon className="w-4 h-4" />
                            {study.category}
                          </div>

                          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {study.title}
                          </h2>

                          {/* Problem */}
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                              🏦 Problem
                            </h3>
                            <p className="text-muted-foreground">{study.problem}</p>
                          </div>

                          {/* Solution */}
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                              🚀 Solution
                            </h3>
                            <p className="text-muted-foreground">{study.solution}</p>
                          </div>

                          {/* Tech Stack */}
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              🛠️ Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {study.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Diagram */}
                          <div className="p-4 rounded-lg bg-muted/30 border border-border">
                            <p className="text-sm font-mono text-muted-foreground">{study.diagram}</p>
                          </div>
                        </div>

                        {/* Right - Results */}
                        <div>
                          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                            📈 Results
                          </h3>
                          
                          <div className="space-y-4">
                            {study.results.map((result) => (
                              <div
                                key={result.label}
                                className="p-4 rounded-xl bg-muted/30 border border-border"
                              >
                                <p className="text-sm text-muted-foreground mb-3">{result.label}</p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <span className="text-lg text-muted-foreground line-through opacity-50">
                                      {result.before}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                    <span className={`text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                      {result.after}
                                    </span>
                                  </div>
                                  <Check className="w-5 h-5 text-green-500" />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="mt-8">
                            <Button
                              asChild
                              className={`bg-gradient-to-r ${study.gradient} text-primary-foreground group`}
                            >
                              <Link to="/contact" className="flex items-center gap-2">
                                Same framework for you?
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repeatable Framework */}
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Repeatable <span className="gradient-text">Framework</span>
              </h2>
              <p className="text-muted-foreground">Why Every Client Wins</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {framework.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
