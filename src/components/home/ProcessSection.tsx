import { Search, Code, Rocket, Headphones, MessageSquare, Clock, Mail } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    duration: '1 week',
    description: 'Deep dive into your requirements and ROI projections',
  },
  {
    icon: Code,
    title: 'MVP',
    duration: '4 weeks',
    description: 'Working prototype with core functionality',
  },
  {
    icon: Rocket,
    title: 'Production',
    duration: '8 weeks',
    description: 'Full deployment with 99.9% uptime guarantee',
  },
  {
    icon: Headphones,
    title: 'Support',
    duration: 'Ongoing',
    description: '30 days free, then $49/hr as needed',
  },
];

const communication = [
  { icon: MessageSquare, text: 'Dedicated project manager' },
  { icon: Clock, text: '4+ hours overlap with EST/GMT' },
  { icon: Mail, text: 'Slack / Teams / Email' },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 md:py-32 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clear Path to <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our battle-tested process handles objections before they arise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300 text-center md:text-left">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto md:mx-0 mt-4 mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>

                  {/* Duration Badge */}
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    {step.duration}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Communication Assurance */}
        <div className="mt-16 p-6 rounded-xl bg-muted/20 border border-border max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">
            Communication Assurance
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {communication.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
