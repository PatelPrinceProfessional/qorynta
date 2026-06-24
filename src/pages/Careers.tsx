import { SectionLabel } from "../components/ui/SectionLabel";
import { GradientText } from "../components/ui/GradientText";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Senior Full-Stack Engineer",
      location: "Remote (India/US)",
      type: "Full-Time",
      department: "Engineering"
    },
    {
      title: "UI/UX Lead Designer",
      location: "Remote",
      type: "Full-Time",
      department: "Design"
    },
    {
      title: "AI/ML Solutions Architect",
      location: "Remote",
      type: "Contract",
      department: "Engineering"
    },
    {
      title: "Technical Project Manager",
      location: "Remote (UK/EU timezone)",
      type: "Full-Time",
      department: "Product"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 blur-[120px] rounded-full -z-10" />
      
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel text="JOIN OUR TEAM" className="justify-center flex" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display">
            Build the Future of <br className="hidden md:block" />
            <GradientText>Digital Products</GradientText>
          </h1>
          <p className="text-text-secondary text-lg">
            We are a remote-first, globally distributed team of engineers, designers, and strategists. Work on high-impact projects with world-class clients without the corporate red tape.
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-4 text-accent-cyan text-2xl font-bold">🌍</div>
            <h3 className="text-xl font-bold mb-2">Remote-First Culture</h3>
            <p className="text-text-secondary text-sm">Work from anywhere in the world. We care about output, not hours logged at a desk.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mx-auto mb-4 text-accent-blue text-2xl font-bold">🚀</div>
            <h3 className="text-xl font-bold mb-2">Rapid Growth</h3>
            <p className="text-text-secondary text-sm">Get hands-on with cutting-edge tech (AI, modern React) and fast-track your career.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center mx-auto mb-4 text-accent-violet text-2xl font-bold">❤️</div>
            <h3 className="text-xl font-bold mb-2">Comprehensive Perks</h3>
            <p className="text-text-secondary text-sm">Competitive pay, learning budgets, flexible time off, and premium health coverage.</p>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          
          <div className="flex flex-col gap-4">
            {jobs.map((job, idx) => (
              <GlassCard key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 border-border/50 hover:border-accent-blue/50 transition-colors group">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.department}</span>
                  </div>
                </div>
                
                <a href={`mailto:careers@qorynta.in?subject=Application for ${job.title}`}>
                  <Button variant="outline" className="w-full md:w-auto group-hover:bg-accent-blue/10 group-hover:border-accent-blue group-hover:text-accent-blue transition-all">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-xl bg-bg-surface/50 border border-border text-center">
            <h3 className="text-xl font-bold mb-2">Don't see a fit?</h3>
            <p className="text-text-secondary mb-6">We're always looking for talented individuals. Send your resume and portfolio to us anyway.</p>
            <a href="mailto:careers@qorynta.in">
              <Button>Submit General Application</Button>
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
