import { ShieldCheck, TrendingDown, Zap, Lock } from 'lucide-react';

const results = [
  {
    icon: ShieldCheck,
    metric: '99.2%',
    title: 'Fraud Detection Accuracy',
    description: 'Real-time transaction anomaly model',
    gradient: 'from-primary to-primary/60',
  },
  {
    icon: TrendingDown,
    metric: '15%',
    title: 'Inventory Cost Reduction',
    description: 'Time-series demand forecasting',
    gradient: 'from-secondary to-secondary/60',
  },
  {
    icon: Zap,
    metric: '40%',
    title: 'Faster Review Cycles',
    description: 'AI-assisted image pre-screening',
    gradient: 'from-accent to-accent/60',
  },
];

export const ProductionProof = () => {
  return (
    <section className="py-20 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Production <span className="gradient-text">Proof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise results that speak louder than promises. Risk reversal through proven delivery.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <div
              key={result.title}
              className="relative group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow Effect - Enhanced */}
              <div className={`absolute inset-0 bg-gradient-to-br ${result.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 scale-95 group-hover:scale-105`} />
              
              <div className="relative p-8 rounded-2xl bg-muted/30 border border-border group-hover:border-primary/50 group-hover:bg-muted/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Icon - Enhanced */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${result.gradient} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
                  <result.icon className="w-8 h-8 text-primary-foreground transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Metric - Enhanced */}
                <div className="mb-4 overflow-hidden">
                  <span className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 inline-block`}>
                    {result.metric}
                  </span>
                </div>

                {/* Title - Enhanced */}
                <h3 className="text-xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">{result.title}</h3>

                {/* Description - Enhanced */}
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{result.description}</p>
                
                {/* Decorative corner accent on hover */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${result.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150`} />
              </div>
            </div>
          ))}
        </div>

        {/* NDA Notice */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Lock className="w-4 h-4" />
          <span className="text-sm">Client identities protected under NDA</span>
        </div>
      </div>
    </section>
  );
};
