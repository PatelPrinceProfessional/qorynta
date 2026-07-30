import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Users,
  Code2,
  Rocket,
  CheckCircle2,
  Target,
  Cpu,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealContent } from "@/components/ui/RevealContent";
const engagementModels = [
  {
    title: "Dedicated Teams",
    icon: Users,
    description:
      "A fully managed, elite engineering squad seamlessly integrated into your workflows. Perfect for scaling rapidly without the overhead of internal hiring.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-cyan-500/50",
    features: [
      "Agile Integration",
      "Direct Communication",
      "Long-term Roadmap Delivery",
    ],
  },
  {
    title: "Staff Augmentation",
    icon: Code2,
    description:
      "Plug critical skill gaps instantly. We provide top 1% senior engineers to work directly under your management and accelerate your existing team.",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "hover:border-purple-500/50",
    features: ["Instant Scaling", "Niche Expertise", "Flexible Duration"],
  },
  {
    title: "Project-Based Delivery",
    icon: Rocket,
    description:
      "End-to-end product development. You provide the vision, we provide the architecture, code, and deployment with guaranteed milestones.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "hover:border-emerald-500/50",
    features: [
      "Fixed Scope & Budget",
      "Guaranteed Delivery",
      "Turnkey Solution",
    ],
  },
];
const techStack = [
  {
    name: "Frontend",
    icon: Smartphone,
    technologies: ["React", "Next.js", "Vue", "React Native", "TailwindCSS"],
    slug: "frontend",
  },
  {
    name: "Backend",
    icon: Database,
    technologies: ["Node.js", "Go", "Python", "Java", "PostgreSQL"],
    slug: "backend",
  },
  {
    name: "Cloud & DevOps",
    icon: Globe,
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    slug: "devops",
  },
  {
    name: "AI & Data",
    icon: Cpu,
    technologies: [
      "LLM Integration",
      "TensorFlow",
      "PyTorch",
      "Data Pipelines",
    ],
    slug: "ai-data",
  },
];
export const Hire = () => {
  return (
    <>
      
      <SEO
        title="Hire Software Engineers & AI Experts | Team Augmentation | Qorynta"
        description="Hire dedicated software developers, AI/ML engineers, and UI/UX designers from Qorynta Services to scale your engineering capacity rapidly."
        canonical="https://www.qorynta.in/hire"
      />
      <main className="min-h-screen bg-[#f2faf4] transition-colors duration-300 pt-20 overflow-hidden">
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 flex items-center justify-center min-h-[70vh]">
          
          {/* THEME-SCOPED ATMOSPHERIC CANVAS & LIGHTING MESH */}
          <div className="absolute inset-0 bg-[radial-gradient(#042E7B_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_40%,black_30%,transparent_100%)] pointer-events-none z-0" />
          <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E3F2FF] via-[#99CAFF]/30 to-transparent w-[900px] h-[450px] blur-3xl absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none z-0" />
          <div className="bg-[#99CAFF]/15 blur-3xl w-72 h-72 absolute top-20 left-10 pointer-events-none z-0" />
          <div className="bg-[#004EE0]/8 blur-3xl w-80 h-80 absolute top-10 right-10 pointer-events-none z-0" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
            
            <ScrollReveal>
              
              {/* EYEBROW BADGE */}
              <div className="bg-white/90 backdrop-blur-xl border border-[#99CAFF] shadow-[0_4px_20px_rgba(0,78,224,0.08)] px-5 py-2 rounded-full inline-flex items-center gap-2.5 mb-8 hover:border-[#004EE0] hover:bg-[#E3F2FF] hover:scale-105 transition-all duration-300 cursor-pointer">
                
                <div className="w-2 h-2 rounded-full bg-[#004EE0] animate-pulse shadow-[0_0_8px_#004EE0]" />
                <span className="text-[#042E7B] font-mono text-xs uppercase tracking-[0.2em] font-extrabold">
                  Top 1% Global Talent
                </span>
              </div>
              {/* HERO HEADLINE & SUBTITLE TYPOGRAPHY */}
              <h1 className="text-[#00072d] font-black tracking-tight text-4xl sm:text-6xl sm:leading-[1.1] max-w-4xl mx-auto">
                
                Scale Your Engineering Capacity with
                <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent">
                  Elite Talent.
                </span>
              </h1>
              <p className="text-[#051650] font-medium text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed mt-6 mb-10">
                
                Bypass the painful hiring cycle. Instantly inject world-class
                architects, senior developers, and product engineers directly
                into your most critical initiatives.
              </p>
              {/* DUAL CTA BUTTON ARCHITECTURE */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#0a2472] via-[#042E7B] to-[#004EE0] text-white font-bold text-sm sm:text-base px-8 py-4 h-14 rounded-full shadow-[0_12px_28px_rgba(4,46,123,0.25)] flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,78,224,0.35)] hover:-translate-y-0.5 hover:brightness-110"
                >
                  
                  <Link to="/contact">
                    
                    <RevealContent>Build Your Team Today</RevealContent>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/80 backdrop-blur-md border-2 border-[#99CAFF] text-[#042E7B] font-bold text-sm sm:text-base px-8 py-4 h-14 rounded-full shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#E3F2FF] hover:border-[#004EE0] hover:text-[#00072d] hover:-translate-y-0.5 hover:shadow-md"
                >
                  
                  <a href="#models">Explore Engagement Models</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Engagement Models */}
        <section
          id="models"
          className="py-24 relative bg-[#f2faf4] transition-colors duration-300 overflow-hidden border-y border-transparent "
        >
          
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E3F2FF] via-[#99CAFF]/25 to-transparent w-[1000px] h-[500px] blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <ScrollReveal>
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#00072d] mb-6">
                  
                  Flexible
                  <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent">
                    Software Engineering Engagement Models
                  </span>
                </h2>
                <p className="text-[#051650] font-medium text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed mt-4">
                  
                  Whether you need a
                  <strong>specialized AI software architect</strong> or a
                  <strong>full-stack dedicated engineering squad</strong>, our
                  agile integration models adapt to your product velocity and
                  tech stack seamlessly.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Card 1: Dedicated Teams */}
              <ScrollReveal delay={0.1}>
                
                <div className="group relative flex flex-col h-full bg-white/80 backdrop-blur-2xl border border-[#99CAFF]/70 rounded-3xl p-8 sm:p-10 shadow-[0_12px_40px_-15px_rgba(4,46,123,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-10px_rgba(0,78,224,0.15)] hover:border-[#004EE0] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#99CAFF] before:to-transparent group-hover:before:via-[#004EE0]">
                  
                  <div className="bg-[#E3F2FF]/80 border border-[#99CAFF]/60 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#004EE0] group-hover:text-white transition-all duration-300">
                    
                    <Users className="w-7 h-7 stroke-[2] text-[#004EE0] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#00072d] font-black text-2xl tracking-tight mb-3">
                    
                    Dedicated Engineering Squads
                  </h3>
                  <p className="text-[#051650] font-medium text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                    
                    A fully managed software development squad seamlessly
                    integrated into your workflows. Perfect for scaling rapidly
                    with zero internal overhead.
                  </p>
                  <div className="space-y-3.5 pt-6 border-t border-[#99CAFF]/40 mt-auto">
                    
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Agile Integration
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Direct Communication
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Long-term Roadmap Delivery
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              {/* Card 2: Staff Augmentation (Featured) */}
              <ScrollReveal delay={0.2}>
                
                <div className="group relative flex flex-col h-full bg-gradient-to-b from-white/95 via-[#E3F2FF]/40 to-white/90 backdrop-blur-3xl border-2 border-[#004EE0] rounded-3xl p-8 sm:p-10 shadow-[0_22px_50px_-10px_rgba(0,78,224,0.20)] lg:-translate-y-4">
                  
                  <div className="absolute -top-0 right-8 bg-gradient-to-r from-[#004EE0] to-[#1831FF] text-white font-mono text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-b-xl shadow-md shadow-[#004EE0]/30 z-10">
                    
                    Most Popular For Velocity
                  </div>
                  <div className="bg-gradient-to-br from-[#004EE0] to-[#0069D9] text-white rounded-2xl w-14 h-14 flex items-center justify-center mb-6 shadow-lg shadow-[#004EE0]/30">
                    
                    <Code2 className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-[#00072d] font-black text-2xl tracking-tight mb-3">
                    
                    On-Demand IT Staff Augmentation
                  </h3>
                  <p className="text-[#051650] font-medium text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                    
                    Plug critical skill gaps instantly. We provide top 1% senior
                    engineers to work directly under your management and
                    accelerate your existing team.
                  </p>
                  <div className="space-y-3.5 pt-6 border-t border-[#99CAFF]/40 mt-auto">
                    
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Instant Developer Onboarding
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Top 1% Niche Tech Stack Expertise
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Flexible Monthly Scalability
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              {/* Card 3: Project-Based */}
              <ScrollReveal delay={0.3}>
                
                <div className="group relative flex flex-col h-full bg-white/80 backdrop-blur-2xl border border-[#99CAFF]/70 rounded-3xl p-8 sm:p-10 shadow-[0_12px_40px_-15px_rgba(4,46,123,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_-10px_rgba(0,78,224,0.15)] hover:border-[#004EE0] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#99CAFF] before:to-transparent group-hover:before:via-[#004EE0]">
                  
                  <div className="bg-[#E3F2FF]/80 border border-[#99CAFF]/60 rounded-2xl w-14 h-14 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#004EE0] group-hover:text-white transition-all duration-300">
                    
                    <Rocket className="w-7 h-7 stroke-[2] text-[#004EE0] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#00072d] font-black text-2xl tracking-tight mb-3">
                    
                    Turnkey Project-Based Delivery
                  </h3>
                  <p className="text-[#051650] font-medium text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                    
                    End-to-end fixed-price product delivery with SLA milestone
                    guarantees. You provide the vision, we provide the
                    architecture, code, and deployment.
                  </p>
                  <div className="space-y-3.5 pt-6 border-t border-[#99CAFF]/40 mt-auto">
                    
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Fixed Scope & Budget
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Guaranteed Delivery
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#042E7B] ">
                      
                      <div className="w-5 h-5 rounded-full bg-[#E3F2FF] text-[#004EE0] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      Turnkey Solution
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* The Vetting Process */}
        <section className="bg-[#f2faf4] transition-colors duration-300 relative overflow-hidden py-24">
          
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E3F2FF] via-[#99CAFF]/25 to-transparent w-[1000px] h-[450px] blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              
              <ScrollReveal>
                
                <h2 className="text-[#00072d] font-black tracking-tight text-3xl sm:text-5xl mb-6">
                  
                  The Qorynta
                  <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent">
                    Standard.
                  </span>
                </h2>
                <p className="text-[#051650] font-medium text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed mt-4">
                  
                  We don't forward raw resumes. We deploy
                  <strong>battle-tested software engineers</strong> who have
                  passed the industry's most rigorous
                  <strong>4-stage technical vetting process</strong>.
                </p>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
              
              <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#99CAFF]/50 to-transparent -translate-y-12 pointer-events-none" />
              {[
                {
                  step: "01",
                  title: "Top 1% Global Sourcing",
                  desc: (
                    <>
                      We actively headhunt
                      <strong>senior software engineering talent</strong> from
                      leading global tech hubs, accepting only the top 1% of
                      applicants.
                    </>
                  ),
                },
                {
                  step: "02",
                  title: "Live Architectural Deep-Dives",
                  desc: (
                    <>
                      Candidates undergo rigorous
                      <strong>live system architecture evaluations</strong> and
                      <strong>extreme pair programming sessions</strong> led by
                      principal architects.
                    </>
                  ),
                },
                {
                  step: "03",
                  title: "Cross-Cultural Communication",
                  desc: (
                    <>
                      Strict assessment of
                      <strong>native-level English fluency</strong>, proactive
                      problem-solving, and seamless remote collaboration
                      protocols.
                    </>
                  ),
                },
                {
                  step: "04",
                  title: "Mandatory Continuous Upskilling",
                  desc: (
                    <>
                      Once hired, engineers participate in mandatory internal
                      hackathons and
                      <strong>bleeding-edge AI toolchain workshops</strong>.
                    </>
                  ),
                },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  
                  <div className="group bg-white/85 backdrop-blur-2xl border border-[#99CAFF]/70 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,78,224,0.18)] hover:border-[#004EE0] min-h-[280px] flex flex-col justify-between before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#99CAFF] before:to-transparent group-hover:before:via-[#004EE0]">
                    
                    <div className="absolute top-4 right-6 font-mono text-5xl font-black text-[#99CAFF]/40 group-hover:text-[#004EE0]/20 transition-colors duration-300 select-none pointer-events-none">
                      
                      {item.step}
                    </div>
                    <div className="relative z-10">
                      
                      <h4 className="text-[#00072d] font-black text-xl tracking-tight mb-3 group-hover:text-[#004EE0] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[#051650] text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-8 h-1 rounded-full bg-[#99CAFF]/60 group-hover:bg-[#004EE0] group-hover:w-12 transition-all duration-300 mt-6 relative z-10" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        {/* Tech Stack Capabilities */}
        <section className="bg-[#f2faf4] transition-colors duration-300 relative overflow-hidden py-24">
          
          <div className="bg-[#E3F2FF] blur-3xl w-96 h-96 absolute top-1/3 left-0 pointer-events-none" />
          <div className="bg-[#99CAFF]/20 blur-3xl w-[500px] h-[500px] absolute bottom-10 right-0 pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left Column */}
              <div className="lg:w-1/3">
                
                <ScrollReveal>
                  
                  <h2 className="text-[#00072d] font-black tracking-tight text-3xl sm:text-5xl mb-6">
                    
                    Hire by
                    <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent">
                      Technology Stack.
                    </span>
                  </h2>
                  <p className="text-[#051650] font-medium text-base sm:text-lg leading-relaxed mt-4 mb-8 max-w-md">
                    
                    Need a specialized skill set? Our pre-vetted senior software
                    engineers are domain experts in
                    <strong>
                      modern web frameworks, high-throughput backend systems,
                      cloud infrastructure, and enterprise AI models
                    </strong>
                    —ready to deploy immediately into your codebase.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-white border-2 border-[#004EE0] text-[#004EE0] font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_20px_rgba(0,78,224,0.12)] hover:bg-[#004EE0] hover:text-white hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
                  >
                    
                    Request Technical Matrix
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </ScrollReveal>
              </div>
              {/* Right Grid */}
              <div className="lg:w-2/3 w-full">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card 1: Frontend */}
                  <ScrollReveal delay={0.1}>
                    
                    <div className="bg-gradient-to-br from-white via-[#E3F2FF]/60 to-[#E3F2FF]/30 backdrop-blur-2xl border border-[#99CAFF]/80 rounded-3xl p-7 shadow-[0_10px_30px_-10px_rgba(0,78,224,0.08)] hover:border-[#004EE0] hover:shadow-[0_20px_45px_-10px_rgba(0,78,224,0.18)] transition-all duration-300 h-full">
                      
                      <div className="bg-[#E3F2FF] border border-[#99CAFF] text-[#004EE0] rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                        
                        <Smartphone className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[#00072d] font-black text-xl mb-4 block">
                        Frontend & Mobile Development
                      </span>
                      <div className="flex flex-wrap gap-2">
                        
                        {[
                          "React",
                          "Next.js",
                          "Vue.js",
                          "React Native",
                          "TailwindCSS",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/90 border border-[#99CAFF]/60 text-[#042E7B] font-semibold text-xs px-3.5 py-1.5 rounded-xl shadow-sm hover:bg-[#004EE0] hover:text-white hover:border-[#004EE0] hover:scale-105 transition-all cursor-pointer"
                          >
                            
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                  {/* Card 2: Backend */}
                  <ScrollReveal delay={0.2}>
                    
                    <div className="bg-gradient-to-br from-white via-[#E3F2FF]/40 to-[#99CAFF]/20 backdrop-blur-2xl border border-[#99CAFF]/80 rounded-3xl p-7 shadow-[0_10px_30px_-10px_rgba(4,46,123,0.08)] hover:border-[#042E7B] hover:shadow-[0_20px_45px_-10px_rgba(4,46,123,0.18)] transition-all duration-300 h-full">
                      
                      <div className="bg-[#042E7B] text-white rounded-2xl w-12 h-12 flex items-center justify-center mb-4 shadow-md shadow-[#042E7B]/20">
                        
                        <Database className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[#00072d] font-black text-xl mb-4 block">
                        Backend & Microservices
                      </span>
                      <div className="flex flex-wrap gap-2">
                        
                        {[
                          "Node.js",
                          "Go (Golang)",
                          "Python",
                          "Java",
                          "PostgreSQL",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/90 border border-[#99CAFF]/60 text-[#042E7B] font-semibold text-xs px-3.5 py-1.5 rounded-xl shadow-sm hover:bg-[#042E7B] hover:text-white hover:border-[#042E7B] hover:scale-105 transition-all cursor-pointer"
                          >
                            
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                  {/* Card 3: Cloud & DevOps */}
                  <ScrollReveal delay={0.3}>
                    
                    <div className="bg-gradient-to-br from-white via-[#E3F2FF]/50 to-white backdrop-blur-2xl border border-[#99CAFF]/80 rounded-3xl p-7 shadow-[0_10px_30px_-10px_rgba(0,105,217,0.08)] hover:border-[#0069D9] hover:shadow-[0_20px_45px_-10px_rgba(0,105,217,0.18)] transition-all duration-300 h-full">
                      
                      <div className="bg-[#E3F2FF] border border-[#99CAFF] text-[#0069D9] rounded-2xl w-12 h-12 flex items-center justify-center mb-4">
                        
                        <Globe className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[#00072d] font-black text-xl mb-4 block">
                        Cloud, DevOps & Security
                      </span>
                      <div className="flex flex-wrap gap-2">
                        
                        {[
                          "AWS",
                          "Kubernetes",
                          "Docker",
                          "Terraform",
                          "CI/CD Pipelines",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/90 border border-[#99CAFF]/60 text-[#042E7B] font-semibold text-xs px-3.5 py-1.5 rounded-xl shadow-sm hover:bg-[#0069D9] hover:text-white hover:border-[#0069D9] hover:scale-105 transition-all cursor-pointer"
                          >
                            
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                  {/* Card 4: AI & Data */}
                  <ScrollReveal delay={0.4}>
                    
                    <div className="bg-gradient-to-br from-white via-[#E3F2FF]/70 to-[#1831FF]/10 backdrop-blur-2xl border-2 border-[#1831FF]/30 rounded-3xl p-7 shadow-[0_12px_35px_-10px_rgba(24,49,255,0.15)] hover:border-[#1831FF] hover:shadow-[0_22px_50px_-10px_rgba(24,49,255,0.25)] transition-all duration-300 h-full">
                      
                      <div className="bg-gradient-to-r from-[#004EE0] to-[#1831FF] text-white rounded-2xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg shadow-[#1831FF]/30">
                        
                        <Cpu className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[#00072d] font-black text-xl mb-4 block">
                        AI, Machine Learning & Data
                      </span>
                      <div className="flex flex-wrap gap-2">
                        
                        {[
                          "LLM Integration",
                          "TensorFlow",
                          "PyTorch",
                          "Data Pipelines",
                          "Vector DBs",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/90 border border-[#1831FF]/30 text-[#042E7B] font-semibold text-xs px-3.5 py-1.5 rounded-xl shadow-sm hover:bg-[#1831FF] hover:text-white hover:border-[#1831FF] hover:scale-105 transition-all cursor-pointer"
                          >
                            
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Hire;
