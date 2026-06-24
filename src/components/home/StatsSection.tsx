import { CountUp } from '@/components/ui/CountUp';

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-[#0A0E1A] to-[#0F1629]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary mb-3">
              <CountUp end={120} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
              Projects Delivered
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary mb-3">
              <CountUp end={40} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
              Clients Served
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary mb-3">
              <CountUp end={2} suffix="M+" />
            </div>
            <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
              Revenue Generated
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary mb-3">
              <CountUp end={98} suffix="%" />
            </div>
            <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
              On-Time Delivery
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
