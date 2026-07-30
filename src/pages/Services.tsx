import SEO from '@/components/SEO';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TechStackSection } from '@/components/home/TechStackSection';
const Services = () => {
  return (
    <>
      <SEO
        title="Web, Mobile & AI Development Services"
        description="Custom web development, mobile apps, and AI/ML solutions from Qorynta. End-to-end product engineering for startups and enterprises."
        canonical="https://www.qorynta.in/services"
      />

      {/* --- NEW LIGHT MODE --- */}
      <main className="flex min-h-screen flex-col bg-[#f2faf4] relative dark:hidden">
        {/* Structural Background Grid - Page Level */}
        <div className="absolute inset-0 bg-[radial-gradient(#042E7B_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0"></div>
        
        {/* Ambient Mesh Glows - Page Level */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E3F2FF] via-[#99CAFF]/20 to-transparent blur-3xl opacity-70 pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#004EE0]/5 via-[#1831FF]/10 to-[#0069D9]/5 blur-2xl pointer-events-none z-0"></div>

        {/* Page Header */}
        <section className="relative pt-32 pb-12 text-center px-4 z-10">
          <div className="container mx-auto max-w-4xl flex flex-col items-center">
            
            {/* Top Header */}
            <div className="mb-14">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                <span className="text-[#00072d] font-extrabold tracking-tight">Engineering </span>
                <span className="bg-gradient-to-r from-[#042E7B] via-[#004EE0] to-[#1831FF] bg-clip-text text-transparent font-extrabold tracking-tight">Excellence</span>
                <br className="hidden md:block" />
                <span className="text-[#051650] font-extrabold tracking-tight drop-shadow-sm"> Across the Stack</span>
              </h1>
              <p className="text-[#042E7B] font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                We provide end-to-end technology solutions tailored for your business scale, from high-converting landing pages to complex ML infrastructure.
              </p>
            </div>

            {/* Container Card */}
            <div className="bg-white/80 backdrop-blur-xl border border-[#99CAFF]/40 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(4,46,123,0.07)] transition-all duration-300 hover:border-[#004EE0]/40 hover:shadow-[0_25px_60px_-10px_rgba(0,78,224,0.12)] flex flex-col items-center">
              
              {/* Eyebrow Pill */}
              <div className="bg-[#E3F2FF] border border-[#99CAFF] shadow-[0_2px_10px_rgba(0,78,224,0.1)] text-[#004EE0] font-mono text-xs uppercase tracking-[0.2em] font-extrabold px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0069D9] animate-pulse"></span>
                OUR CAPABILITIES
              </div>

              {/* Main Feature Headline */}
              <h2 className="text-3xl md:text-4xl mb-5">
                <span className="text-[#00072d] font-black tracking-tight">A Structured Path to </span>
                <span className="bg-gradient-to-r from-[#004EE0] via-[#0069D9] to-[#042E7B] bg-clip-text text-transparent font-black tracking-tight">Digital Dominance</span>
              </h2>

              <p className="text-[#0a2472] font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                We follow a highly calculated, professional process to deliver high-quality, scalable products that transform ideas into digital dominance.
              </p>
            </div>
            
          </div>
        </section>

        {/* We reuse the components built for the homepage */}
        <div className="relative z-10 -mt-10 pb-10 services-page-hide-header">
          <style dangerouslySetInnerHTML={{__html: `
            .services-page-hide-header .max-w-3xl.mx-auto.mb-8 { display: none !important; }
          `}} />
          <ServicesSection />
        </div>
        
        <div className="relative z-10 bg-white/50 backdrop-blur-md border-t border-white/20">
          <TechStackSection />
        </div>

      </main>

      {/* --- ORIGINAL DARK MODE --- */}
      <main className="min-h-screen flex-col bg-background hidden dark:flex">
        {/* Page Header */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Engineering Excellence <br className="hidden md:block" /> Across the Stack
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We provide end-to-end technology solutions tailored for your business scale, from high-converting landing pages to complex ML infrastructure.
            </p>
          </div>
        </section>

        {/* We reuse the components built for the homepage */}
        <div className="-mt-20">
          <ServicesSection />
        </div>
        
        <TechStackSection />
        
      </main>
    </>
  );
};

export default Services;
