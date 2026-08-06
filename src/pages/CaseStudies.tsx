import React, { useEffect } from 'react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { allProjects } from '@/data/projects';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Our Portfolio – Case Studies & Impact"
        description="Explore how we've helped startups and enterprises solve complex technical challenges and scale their operations."
        canonical="https://www.qorynta.in/case-studies"
      />

      <main className="min-h-screen pt-20 bg-[#f2faf4] dark:bg-[#030508] dark:text-slate-100 transition-colors duration-500 relative z-10 overflow-hidden">
        <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-visible">

          {/* Ambient Lighting & Micro-Grid Overlay */}
          <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E3F2FF] via-[#99CAFF]/20 to-transparent dark:hidden w-[1200px] h-[600px] blur-3xl absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="bg-[radial-gradient(#042E7B_1.2px,transparent_1.2px)] dark:hidden [background-size:24px_24px] opacity-25 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black_30%,transparent_100%)] absolute inset-0 pointer-events-none" />

          {/* Cosmic Obsidian Dark Mode Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(13,27,62,0.85)_0%,rgba(3,5,8,0)_70%)] pointer-events-none z-0 hidden dark:block" />
          <div className="stars-bg hidden dark:block" />
          {/* Giant Background Ghost Watermark */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-slate-800/20 font-black text-6xl sm:text-[10rem] tracking-tighter uppercase pointer-events-none select-none z-0 hidden dark:block">PORTFOLIO</div>

          {/* HERO HEADER */}
          <div className="max-w-4xl mx-auto text-center leading-tight tracking-tight relative z-10 pt-4 md:pt-10 mb-16">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold text-[#004EE0] dark:text-sky-400 mb-4 text-center block">
              OUR PORTFOLIO
            </span>
            <h1 className="text-[#00072d] dark:text-white font-black text-4xl sm:text-6xl lg:text-7xl relative z-10">
              We Ship
              <span className="font-serif italic font-normal text-[#004EE0] dark:text-[#00F0FF] ml-3">
                Impact.
              </span>
              <span className="block text-[#00072d] dark:text-white font-black text-4xl sm:text-6xl lg:text-7xl mt-1 sm:mt-2">
                See For Yourself.
              </span>
            </h1>
            <p className="text-[#051650]/80 dark:text-slate-300 font-medium text-base sm:text-xl max-w-2xl mx-auto text-center mt-6 leading-relaxed">
              Explore how we've helped startups and enterprises solve complex technical challenges and scale their operations.
            </p>
          </div>

          {/* CASE STUDY GRID ARCHITECTURE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 pb-20">
            {allProjects.map((project) => {
              const metric = project.metrics[0];

              return (
                <Link
                  key={project.slug}
                  to={`/case-studies/${project.slug}`}
                  className="bg-white/90 dark:bg-[#070A10]/90 backdrop-blur-2xl border border-[#99CAFF]/60 dark:border-[#00F0FF]/20 rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(4,46,123,0.08)] dark:shadow-[0_0_25px_rgba(0,240,255,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#004EE0]/80 dark:hover:border-[#00F0FF]/50 hover:shadow-[0_25px_50px_-12px_rgba(0,78,224,0.18)] dark:hover:shadow-[0_0_35px_rgba(0,240,255,0.2)] flex flex-col group relative"
                >
                  {/* Card Thumbnail & Metric Banner Overlay System */}
                  <div className="relative w-full h-64 overflow-hidden bg-slate-100 dark:bg-[#040A18] shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[#00072d]/90 dark:bg-[#0B152E]/90 backdrop-blur-md border border-white/10 dark:border-[#00F0FF]/20 rounded-2xl p-3.5 flex items-center gap-3 shadow-lg">
                      <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-[#00F0FF]/10 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-4 h-4 text-sky-300 dark:text-[#00F0FF]" />
                      </div>
                      <div>
                        <div className="text-white dark:text-[#00F0FF] font-black text-xl sm:text-2xl tracking-tight leading-none">
                          {metric.value}
                        </div>
                        <div className="text-sky-300 dark:text-slate-300 font-mono text-[10px] sm:text-xs uppercase tracking-wider font-extrabold leading-tight mt-1">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#E3F2FF] dark:bg-[#00F0FF]/10 border border-[#99CAFF]/80 dark:border-[#00F0FF]/20 text-[#004EE0] dark:text-[#00F0FF] text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="bg-slate-100 dark:bg-[#00F0FF]/5 border border-slate-200 dark:border-[#00F0FF]/10 text-slate-700 dark:text-[#00F0FF] text-[11px] font-mono font-medium px-3 py-1 rounded-full">
                          {project.tags[0]}
                        </span>
                      </div>
                      <h3 className="text-[#00072d] dark:text-white font-black text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-[#004EE0] dark:group-hover:text-[#00F0FF] transition-colors relative z-10">
                        {project.title}
                      </h3>
                      <p className="text-[#051650]/80 dark:text-slate-300 text-sm font-medium line-clamp-3 leading-relaxed mb-6">
                        {project.overview}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[#004EE0] dark:text-[#00F0FF] font-extrabold text-sm group-hover:translate-x-1 transition-transform w-max">
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </section>
      </main>
    </>
  );
};

export default CaseStudies;
