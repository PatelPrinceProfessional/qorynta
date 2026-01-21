import { Link } from 'react-router-dom';
import { Brain, BarChart3, Bot, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: 'AI Development',
    percentage: '40%',
    description: 'Production ML models that scale securely',
    metrics: '99.2% Fraud Accuracy',
    techs: ['TensorFlow', 'PyTorch', 'MLflow'],
    gradient: 'from-primary to-primary/60',
    glowColor: 'primary',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    percentage: '30%',
    description: 'Executive dashboards driving measurable ROI',
    metrics: '15% Cost Reduction',
    techs: ['PowerBI', 'Tableau', 'Looker'],
    gradient: 'from-secondary to-secondary/60',
    glowColor: 'secondary',
  },
  {
    icon: Bot,
    title: 'Gen AI',
    percentage: '20%',
    description: 'LLM agents, RAG pipelines, internal automation',
    metrics: '40% Faster Reviews',
    techs: ['LangChain', 'GPT-4', 'RAG'],
    gradient: 'from-accent to-accent/60',
    glowColor: 'accent',
  },
  {
    icon: Settings,
    title: 'Digital Systems',
    percentage: '10%',
    description: 'Microservices APIs and cloud infrastructure',
    metrics: '99.9% Uptime',
    techs: ['Kafka', 'OCI', 'AWS'],
    gradient: 'from-green-500 to-green-500/60',
    glowColor: 'green',
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particles-bg opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            3 Core Services <span className="gradient-text">Decision Framework</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Match your need to the right service. Each delivered with enterprise precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative p-[1px] rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative bg-card rounded-xl p-6 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Percentage Badge */}
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground mb-3 w-fit">
                  <span>{service.percentage}</span>
                  <span>Clutch</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>

                {/* Metrics */}
                <div className="py-3 px-4 rounded-lg bg-muted/50 mb-4">
                  <p className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.metrics}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between text-muted-foreground hover:text-foreground group/btn"
                >
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
