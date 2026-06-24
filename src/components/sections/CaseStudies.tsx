import { Link } from "react-router-dom";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export function CaseStudies() {
  const projects = [
    {
      id: "fintech-ml",
      title: "FinTech ML Dashboard",
      description: "Built a real-time fraud detection dashboard for a US FinTech client using Python ML + React. Achieved 99.2% detection accuracy.",
      result: "Reduced fraud detection time by 60%",
      tags: ["FinTech", "Machine Learning", "India + US"],
      bgClass: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center",
    },
    {
      id: "ecommerce-app",
      title: "Multi-Vendor E-Commerce App",
      description: "Developed a cross-platform mobile app (React Native) serving 10,000+ daily users across India with Razorpay + Stripe payment integration.",
      result: "Increased sales conversion by 24%",
      tags: ["React Native", "E-Commerce", "India"],
      bgClass: "bg-[url('https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center",
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel text="OUR WORK" />
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold">
              Projects That Speak for Themselves
            </h2>
          </div>
          <Link to="/#portfolio" className="hidden md:block">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative h-[500px] rounded-xl overflow-hidden group border border-border/50 hover:border-accent-blue/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-500`}
            >
              {/* Background Image with Overlay */}
              <div className={`absolute inset-0 ${project.bgClass} transition-transform duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 group-hover:from-black group-hover:via-black/90 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-semibold text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-[15px] leading-relaxed mb-4 max-w-lg translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-success font-medium text-sm">{project.result}</span>
                  </div>
                  <Link to="/contact" className="text-white font-medium flex items-center group/btn">
                    Read Case Study <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 md:hidden text-center">
          <Link to="/#portfolio">
            <Button variant="outline" className="w-full">View All Projects</Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
