import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8] to-[#7C3AED] -z-20" />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay -z-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Join 40+ businesses that trusted Qorynta to bring their digital vision to life. Get a free consultation today — no commitment, no pressure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-bg-primary hover:bg-white/90 font-bold shadow-xl">
                  Book Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us Now
                </Button>
              </a>
            </div>
          </div>
          
          {/* Abstract Graphic */}
          <div className="hidden md:flex w-full lg:w-[45%] relative justify-center items-center h-[300px] z-10">
            <div className="absolute w-64 h-64 border border-white/20 rounded-full animate-spin-slow" />
            <div className="absolute w-48 h-48 border border-white/30 rounded-full animate-spin-slow [animation-direction:reverse]" />
            <div className="absolute w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl rotate-12 animate-float shadow-2xl border border-white/20" />
            <div className="absolute w-24 h-24 bg-accent-cyan/80 backdrop-blur-md rounded-full -rotate-12 animate-float [animation-delay:2s] shadow-[0_0_40px_rgba(6,182,212,0.6)] mix-blend-screen" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
