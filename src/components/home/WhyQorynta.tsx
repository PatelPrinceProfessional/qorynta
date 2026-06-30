import { ArrowRight, Briefcase, Headset } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const WhyQorynta = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-transparent group">
      {/* Decorative dot grid top right */}
      <div 
        className="absolute top-12 right-12 w-32 h-32 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left-Side Asset Cluster */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            {/* The wrapper that scales on section hover */}
            <div 
              className="relative w-full max-w-[400px] mx-auto group-hover:scale-[1.06]" 
              style={{ 
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
              }}
            >
              
              {/* Left Secondary Phone */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-8 sm:-translate-x-16 w-[160px] sm:w-[200px] h-[320px] sm:h-[400px] bg-gray-50 rounded-[2rem] border-[6px] border-gray-200 shadow-xl overflow-hidden -rotate-6 opacity-90 z-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                  <div className="w-full h-20 bg-white/80 rounded-xl shadow-sm mb-3"></div>
                  <div className="w-full h-12 bg-white/80 rounded-xl shadow-sm mb-3"></div>
                  <div className="w-full h-12 bg-white/80 rounded-xl shadow-sm"></div>
                </div>
              </div>

              {/* Right Secondary Phone */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-8 sm:translate-x-16 w-[160px] sm:w-[200px] h-[320px] sm:h-[400px] bg-gray-50 rounded-[2rem] border-[6px] border-gray-200 shadow-xl overflow-hidden rotate-6 opacity-90 z-0">
                <div className="w-full h-full bg-gradient-to-br from-teal-50 to-emerald-50 p-4">
                   <div className="w-full h-14 bg-white/80 rounded-xl shadow-sm mb-3"></div>
                   <div className="grid grid-cols-2 gap-2 mb-3">
                     <div className="h-16 bg-white/80 rounded-xl shadow-sm"></div>
                     <div className="h-16 bg-white/80 rounded-xl shadow-sm"></div>
                   </div>
                   <div className="w-full h-14 bg-white/80 rounded-xl shadow-sm"></div>
                </div>
              </div>

              {/* Center Primary Phone */}
              <div className="relative mx-auto w-[220px] sm:w-[260px] h-[440px] sm:h-[520px] bg-white rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden z-10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 pt-12 px-4 pb-4 flex flex-col gap-4 relative">
                  <div className="absolute top-0 left-0 w-full h-32 bg-primary/10 rounded-b-3xl"></div>
                  <div className="relative w-full h-32 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary font-bold text-lg border border-gray-100">
                    App UI
                  </div>
                  <div className="w-full h-14 bg-white rounded-xl shadow-sm border border-gray-50"></div>
                  <div className="w-full h-14 bg-white rounded-xl shadow-sm border border-gray-50"></div>
                  <div className="w-full h-24 bg-white rounded-xl shadow-sm border border-gray-50 mt-auto"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Right-Side Content Block */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              {/* Upper Tag */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
                About Our Company ~
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Choose The Best IT Service Company
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Qorynta services help businesses build powerful websites, mobile apps, and custom software. We deliver quality solutions with transparent communication, on-time delivery, and reliable support to help your business grow online.
              </p>

              {/* Feature Icons & Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Briefcase className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl mb-2">Business Solution</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">We provide tailored strategies and robust software to solve complex business challenges.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                    <Headset className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl mb-2">Technical Support</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">24/7 dedicated support to ensure your systems run smoothly without any downtime.</p>
                  </div>
                </div>
              </div>

              {/* Action Row */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group/btn">
                  Contact Us!
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-foreground font-semibold text-lg">
                  <span className="text-muted-foreground font-normal">Call for help:</span>
                  +91 70799-30300
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
