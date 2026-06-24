import { Link } from "react-router-dom";
import { GlassCard } from "../ui/GlassCard";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Brain, 
  Cloud, 
  ShoppingCart, 
  Box, 
  Link as LinkIcon, 
  Target 
} from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      id: "web",
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Pixel-perfect, performance-optimised websites and web apps built with React, Next.js, and Node.js. From landing pages to full SaaS platforms.",
      tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native iOS & Android apps and cross-platform solutions using React Native and Flutter. Built for speed, scale, and user delight.",
      tags: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      id: "design",
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design & Prototyping",
      description: "Research-driven design that converts. We craft intuitive interfaces, design systems, and interactive prototypes in Figma.",
      tags: ["Figma", "Design Systems", "Wireframing"],
    },
    {
      id: "ai",
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning Solutions",
      description: "Production-grade ML models, LLM integrations, fraud detection systems, and data pipelines — specifically for FinTech and enterprise teams.",
      tags: ["Python", "TensorFlow", "LLMs", "FinTech"],
    },
    {
      id: "cloud",
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable AWS/GCP/Azure architecture, CI/CD pipelines, Docker/Kubernetes deployments, and 24/7 monitoring.",
      tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Development",
      description: "High-converting online stores built on Shopify, WooCommerce, or custom stacks — with payment gateway integration and inventory management.",
      tags: ["Shopify", "WooCommerce", "Stripe", "Razorpay"],
    },
    {
      id: "saas",
      icon: <Box className="w-8 h-8" />,
      title: "SaaS Product Development",
      description: "Full-cycle SaaS builds from MVP to scale — architecture, auth, billing, multi-tenancy, admin dashboards, and API development.",
      tags: ["Subscription", "Multi-tenant", "REST APIs"],
    },
    {
      id: "api",
      icon: <LinkIcon className="w-8 h-8" />,
      title: "API Development & Integration",
      description: "RESTful and GraphQL APIs, third-party integrations (payment, CRM, ERP, WhatsApp, Twilio), and microservice architecture.",
      tags: ["REST", "GraphQL", "Webhooks", "OAuth"],
    },
    {
      id: "consulting",
      icon: <Target className="w-8 h-8" />,
      title: "IT Consulting & Digital Strategy",
      description: "Technology audits, digital transformation roadmaps, tech stack advisory, and CTO-as-a-service for startups and SMEs.",
      tags: ["Tech Audit", "CTO-as-a-Service", "Roadmapping"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-primary">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="WHAT WE BUILD" className="justify-center flex" />
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            End-to-End Digital Services
          </h2>
          <p className="text-text-secondary text-lg">
            From concept to deployment — everything your business needs to dominate online.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-32 h-full">
              <GlassCard 
                className="h-full group flex flex-col hover:-translate-y-1 hover:border-accent-blue/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-bg-secondary flex items-center justify-center text-text-primary mb-6 group-hover:text-accent-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow text-[15px] leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-text-muted bg-bg-secondary px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Link to={`/contact?service=${service.id}`} className="text-accent-blue font-medium text-sm flex items-center hover:text-accent-cyan transition-colors">
                    Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary">
              Need something specific? <span className="text-accent-cyan ml-2">Let's Talk →</span>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
