import { CountUp } from '@/components/ui/CountUp';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

const metrics = [
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Countries Served' },
  { value: 4.7, suffix: 'â˜…', label: 'Average Rating', decimals: 1 },
  { value: 1, suffix: 'yr', label: 'In Business' },
];

const logos = [
  'React', 'Node.js', 'AWS', 'Figma', 'Flutter', 
  'Stripe', 'Google Cloud', 'MongoDB', 'Firebase', 'Next.js'
];

export const TrustBar = () => {
  return (
    <section className="bg-muted border-y border-border/50 relative overflow-hidden">
      {/* Top/Bottom Gradient Borders */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Row 1: Metrics */}
        <StaggerContainer staggerChildren={0.15} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {metrics.map((metric, idx) => (
            <StaggerItem key={idx} direction="up" className="flex flex-col items-center text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-800 dark:from-cyan-400 dark:to-blue-500 mb-2 inline-block">
                <CountUp end={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
              </div>
              <div className="text-xs tracking-widest uppercase font-medium text-muted-foreground">
                {metric.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Row 2: Scrolling Logos */}
        <ScrollReveal delay={0.2} direction="none" className="relative w-full overflow-hidden flex items-center h-12">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center justify-around min-w-full gap-12 px-6">
              {logos.map((logo, idx) => (
                <span key={`1-${idx}`} className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-500 dark:from-blue-200 dark:to-cyan-200 uppercase tracking-wider opacity-80">
                  {logo}
                </span>
              ))}
            </div>
            {/* Duplicate set for infinite loop */}
            <div className="flex items-center justify-around min-w-full gap-12 px-6">
              {logos.map((logo, idx) => (
                <span key={`2-${idx}`} className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-500 dark:from-blue-200 dark:to-cyan-200 uppercase tracking-wider opacity-80">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
