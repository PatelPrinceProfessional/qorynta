import { Target, Rocket, Handshake } from 'lucide-react';

const differentiators = [
  {
    icon: Target,
    title: 'ML-First Boutique',
    description: 'No generic dev outsourcing. Pure machine learning expertise.',
  },
  {
    icon: Rocket,
    title: 'Production Focus',
    description: 'We deploy to production, not POCs that gather dust.',
  },
  {
    icon: Handshake,
    title: 'Founder Involvement',
    description: 'Direct access to senior leadership on every project.',
  },
];

export const WhyQorynta = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why <span className="gradient-text">Qorynta</span>?
          </h2>
          <p className="text-muted-foreground">
            For Clutch comparison shoppers — here's what sets us apart.
          </p>
        </div>

        {/* Differentiators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center max-w-xs group"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                <item.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{item.description}</p>

              {/* Connector Line (except last) */}
              {index < differentiators.length - 1 && (
                <div className="hidden md:block absolute">
                  {/* Line handled by flex gap */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
