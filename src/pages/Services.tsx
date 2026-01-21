import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, Bot, Settings, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: 'AI Development',
    percentage: '40%',
    description: 'Production ML models that scale securely',
    metric: '99.2% Fraud Accuracy',
    features: [
      'Real-time transaction anomaly detection',
      'TensorFlow & PyTorch deployments',
      'MLflow experiment tracking',
      'Auto-scaling inference endpoints',
    ],
    techs: ['TensorFlow', 'PyTorch', 'MLflow', 'SageMaker'],
    gradient: 'from-primary to-primary/60',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    percentage: '30%',
    description: 'Executive dashboards driving measurable ROI',
    metric: '15% Cost Reduction',
    features: [
      'Interactive PowerBI dashboards',
      'Time-series forecasting models',
      'KPI tracking and alerting',
      'Data warehouse optimization',
    ],
    techs: ['PowerBI', 'Tableau', 'Looker', 'Snowflake'],
    gradient: 'from-secondary to-secondary/60',
  },
  {
    icon: Bot,
    title: 'Gen AI Solutions',
    percentage: '20%',
    description: 'LLM agents, RAG pipelines, internal automation',
    metric: '40% Faster Reviews',
    features: [
      'Custom LLM fine-tuning',
      'RAG pipeline development',
      'SOC2/GDPR compliant deployments',
      'Internal automation agents',
    ],
    techs: ['LangChain', 'GPT-4', 'RAG', 'Vector DBs'],
    gradient: 'from-accent to-accent/60',
  },
  {
    icon: Settings,
    title: 'Digital Systems',
    percentage: '10%',
    description: 'Microservices APIs and cloud infrastructure',
    metric: '99.9% Uptime',
    features: [
      'Event-driven microservices',
      'Kafka streaming pipelines',
      'OCI & AWS deployments',
      'Zero-downtime migrations',
    ],
    techs: ['Kafka', 'OCI', 'AWS', 'Kubernetes'],
    gradient: 'from-green-500 to-green-500/60',
  },
];

const techStack = {
  'ML/MLOps': ['TensorFlow', 'PyTorch', 'MLflow', 'Scikit-learn'],
  'BI Tools': ['PowerBI', 'Tableau', 'Looker', 'Metabase'],
  'Data Engineering': ['Snowflake', 'Kafka', 'Databricks', 'Airflow'],
  'Cloud/DevOps': ['AWS SageMaker', 'OCI', 'Azure ML', 'Kubernetes'],
};

const pricing = [
  {
    tier: 'Discovery',
    price: '$1K',
    duration: '1 week',
    description: 'Free ROI projection included',
    highlight: 'Start Here',
    features: ['Requirements analysis', 'Technical assessment', 'ROI projection', 'Solution architecture'],
  },
  {
    tier: 'MVP',
    price: '$5K',
    duration: '4-6 weeks',
    description: 'Working prototype',
    highlight: 'Most Popular',
    features: ['Core model development', 'Basic integrations', 'Testing & validation', 'Documentation'],
  },
  {
    tier: 'Production',
    price: '$15K+',
    duration: '8-12 weeks',
    description: 'Full deployment',
    highlight: 'Enterprise',
    features: ['Production deployment', 'Scaling infrastructure', 'Monitoring setup', '30-day support'],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="py-20 md:py-32 relative overflow-hidden particles-bg">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Production ML for FinTech → </span>
                <span className="gradient-text">$25-49/hr</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                40% AI | 30% Analytics | 20% GenAI | 10% Systems
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glow-md hover:shadow-glow-lg transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start $1K Discovery
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service <span className="gradient-text">Breakdown</span>
              </h2>
              <p className="text-muted-foreground">4 glowing service cards with hover metrics</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="service-card group relative p-[1px] rounded-2xl overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  <div className="relative bg-card rounded-2xl p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                        {service.percentage} Clutch
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>

                    <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-6`}>
                      <span className="font-bold text-foreground">{service.metric}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {service.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground tech-icon-pulse"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 md:py-32 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tech Stack <span className="gradient-text">Proof</span>
              </h2>
              <p className="text-muted-foreground">Production-tested in 500K+ transaction fraud engine</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, tools]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                  <div className="space-y-3">
                    {tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-xs font-bold text-primary">{tool.charAt(0)}</span>
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="gradient-text">Pricing</span> Tower
              </h2>
              <p className="text-muted-foreground">Transparent tiers for every stage</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((tier, index) => (
                <div
                  key={tier.tier}
                  className={`relative p-[1px] rounded-2xl overflow-hidden ${
                    index === 1 ? 'md:-mt-8' : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index === 0 ? 'from-green-500/50 to-green-500/20' :
                    index === 1 ? 'from-primary to-secondary' :
                    'from-accent/50 to-accent/20'
                  }`} />
                  
                  <div className="relative bg-card rounded-2xl p-8">
                    {/* Highlight Badge */}
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      index === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {tier.highlight}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{tier.tier}</h3>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                      {tier.tier !== 'Production' && <span className="text-muted-foreground"> fixed</span>}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{tier.duration}</p>
                    <p className="text-muted-foreground mb-6">{tier.description}</p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full transition-all duration-300 group ${
                        index === 1
                          ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-glow-md hover:scale-105'
                          : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg'
                      }`}
                    >
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Hourly Rate */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Hourly: <span className="font-semibold text-foreground">$25-49</span> Clutch Verified
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready for 99.2% fraud detection or 15% cost savings?
              </h2>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glow-md hover:shadow-glow-lg transition-all duration-300 group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Free 30min Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <p className="mt-6 text-muted-foreground">
                ⭐ Clutch Profile Live | 4+hr EST Overlap
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
