import { GradientText } from "../ui/GradientText";

export function TrustBar() {
  const metrics = [
    { value: "40+", label: "Happy Clients" },
    { value: "120+", label: "Projects Delivered" },
    { value: "8+", label: "Countries Served" },
    { value: "5.0", label: "Average Rating", hasStar: true },
    { value: "3yr", label: "In Business" },
  ];

  const technologies = [
    "React", "Node.js", "AWS", "Figma", "Flutter", 
    "Stripe", "Google Cloud", "MongoDB", "Firebase", "Next.js"
  ];

  // Duplicate for seamless infinite scrolling
  const tickerItems = [...technologies, ...technologies];

  return (
    <section className="w-full bg-bg-secondary relative border-y border-accent-cyan/10">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      
      {/* Row 1 - Metrics */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 text-center divide-x divide-border/0 md:divide-border/50">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="text-3xl md:text-4xl font-extrabold font-display mb-1 flex items-center">
                <GradientText>{metric.value}</GradientText>
                {metric.hasStar && <span className="text-accent-cyan ml-1 text-2xl">★</span>}
              </div>
              <div className="text-[11px] md:text-xs text-text-secondary uppercase tracking-[0.1em] font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Scrolling Ticker */}
      <div className="w-full overflow-hidden bg-bg-primary/30 border-t border-border/50 py-4 relative flex items-center">
        {/* Left and right gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-bg-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-bg-secondary to-transparent z-10" />
        
        <div className="flex w-max animate-marquee">
          {tickerItems.map((tech, idx) => (
            <div 
              key={idx} 
              className="px-8 md:px-12 flex items-center justify-center whitespace-nowrap text-text-muted/60 font-semibold tracking-wider hover:text-text-primary transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />
    </section>
  );
}
