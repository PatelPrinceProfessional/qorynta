import { SectionLabel } from "../ui/SectionLabel";
import { GlassCard } from "../ui/GlassCard";

export function TechStack() {
  const stack = {
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Flutter"],
    backend: ["Node.js", "Python", "Django", "FastAPI", "PHP", "Laravel"],
    cloud: ["AWS", "GCP", "Azure", "Firebase", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"]
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#060a14]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="TECHNOLOGIES WE MASTER" className="justify-center flex" />
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold">
            Built with the Best Tools in the Industry
          </h2>
        </div>

        {/* Tech Grid Wrapper */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          
          {/* Row 1 - Frontend */}
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
            {stack.frontend.map(tech => (
              <GlassCard 
                key={tech} 
                className="w-[120px] h-[120px] md:w-32 md:h-32 flex-shrink-0 snap-center flex items-center justify-center group hover:border-accent-blue/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <span className="font-semibold text-text-secondary group-hover:text-text-primary group-hover:scale-110 transition-all text-center">
                  {tech}
                </span>
              </GlassCard>
            ))}
          </div>

          {/* Row 2 - Backend */}
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
            {stack.backend.map(tech => (
              <GlassCard 
                key={tech} 
                className="w-[120px] h-[120px] md:w-32 md:h-32 flex-shrink-0 snap-center flex items-center justify-center group hover:border-accent-cyan/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
              >
                <span className="font-semibold text-text-secondary group-hover:text-text-primary group-hover:scale-110 transition-all text-center">
                  {tech}
                </span>
              </GlassCard>
            ))}
          </div>

          {/* Row 3 - Cloud */}
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
            {stack.cloud.map(tech => (
              <GlassCard 
                key={tech} 
                className="w-[120px] h-[120px] md:w-32 md:h-32 flex-shrink-0 snap-center flex items-center justify-center group hover:border-accent-violet/60 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
              >
                <span className="font-semibold text-text-secondary group-hover:text-text-primary group-hover:scale-110 transition-all text-center">
                  {tech}
                </span>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>

      {/* Hide scrollbar styles for webkit */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
