import { GradientText } from "../ui/GradientText";

export function StatsBanner() {
  const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "40+", label: "Clients Served" },
    { value: "$2M+", label: "Revenue Generated for Clients" },
    { value: "98%", label: "On-Time Delivery" },
  ];

  return (
    <section className="relative py-20 border-y border-accent-blue/10 overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] bg-accent-blue/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 lg:divide-x divide-border/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl lg:text-[60px] font-bold font-display mb-3 metric-glow">
                <GradientText>{stat.value}</GradientText>
              </div>
              <div className="text-sm md:text-base text-text-secondary font-medium max-w-[160px] mx-auto leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
