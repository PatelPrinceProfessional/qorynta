import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowLeft, CheckCircle2, Building2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { allProjects } from '@/data/projects';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = allProjects.find(p => p.slug === slug);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <Navigate to="/case-studies" replace />;
  }

  // 1. Exclude the currently viewed case study and score them
  const remaining = allProjects.filter(cs => cs.slug !== slug);
  
  const scored = remaining.map(cs => {
    let score = 0;
    if (cs.category === project.category) score += 5;
    const sharedTech = cs.techStack.filter(tech => project.techStack.includes(tech));
    score += sharedTech.length * 2;
    return { ...cs, score };
  }).sort((a, b) => b.score - a.score);

  // Derive the active 3 projects for the viewport based on currentIndex
  const visibleProjects = scored.length > 0 ? [
    scored[(currentIndex) % scored.length],
    scored[(currentIndex + 1) % scored.length],
    scored[(currentIndex + 2) % scored.length],
  ] : [];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scored.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + scored.length) % scored.length);
  };

  // Helper to render SEO highlights for the specific CRM project
  const renderSolution = () => {
    if (project.slug === 'nexus-logistics-crm') {
      return (
        <>
          We built a bespoke, highly secure CRM from the ground up using <strong>React</strong> and <strong>PostgreSQL</strong>. We implemented granular <mark className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Role-Based Access Control (RBAC)</mark>, <mark className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Custom Audit Logging for Compliance</mark>, and automated workflow triggers. A custom <mark className="bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">REST API Sync Layer</mark> was developed to connect seamlessly with their legacy ERP system without replacing it.
        </>
      );
    }
    if (project.slug === 'finstream-ml-fraud') {
      return (
        <>
          We developed an end-to-end <mark className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Machine Learning Pipeline</mark> using <strong>Python</strong> and <strong>TensorFlow</strong>. The Deep Learning model was trained on millions of historical transactions and deployed via a highly available <mark className="bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">FastAPI Microservice</mark>. We built a secure React dashboard utilizing <mark className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Explainable AI (SHAP Values)</mark> so risk analysts understand exact decision factors.
        </>
      );
    }
    if (project.slug === 'medisync-booking') {
      return (
        <>
          We designed a sleek, brand-aligned <strong>Next.js</strong> application optimized for <mark className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Core Web Vitals Performance</mark>. We integrated a custom booking engine with <mark className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Automated Google Workspace Syncing</mark> and two-way <mark className="bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Twilio SMS Reminders</mark>, wrapped in Framer Motion animations.
        </>
      );
    }
    if (project.slug === 'aurora-ecommerce-scale') {
      return (
        <>
          We architected a modern <mark className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Headless E-Commerce Solution</mark> using <strong>Shopify Plus</strong> as the backend commerce engine and a custom <strong>Next.js</strong> frontend. We implemented aggressive <mark className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Vercel Edge CDN Caching</mark> and localized pricing via edge computing with a <mark className="bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Single-Page Checkout Flow</mark>.
        </>
      );
    }
    if (project.slug === 'brewcore-analytics-dashboard') {
      return (
        <>
          We engineered a centralized analytics dashboard using <strong>React</strong> and <strong>D3.js</strong>. By building custom <mark className="bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">POS Hardware API Connectors</mark>, we aggregated real-time sales and inventory data into a unified <strong>Firebase</strong> backend, enabling <mark className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Predictive Ordering Inventory Alerts</mark> and <mark className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Interactive D3.js Data Visualizations</mark>.
        </>
      );
    }
    if (project.slug === 'ledgerflow-b2b-saas') {
      return (
        <>
          We architected a secure, <mark className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Multi-Tenant SaaS Architecture</mark> using <strong>Django</strong> and <strong>Vue.js</strong>. We prioritized a rock-solid <mark className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">HIPAA & SOC2 Compliant PostgreSQL Schema</mark>, deploying infrastructure on <strong>AWS</strong> using <mark className="bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-md font-semibold bg-transparent">Automated CI/CD Pipelines</mark> alongside integrated Stripe subscription billing.
        </>
      );
    }
    return project.solution;
  };

  return (
    <>
      <SEO
        title={`${project.title} | Case Study | Qorynta Services`}
        description={project.overview}
        canonical={`https://www.qorynta.in/case-studies/${slug}`}
      />

      <main className="min-h-screen bg-[#f2faf4] dark:bg-[#00072d] transition-colors duration-500 pb-20">
        
        {/* 1. NAVIGATION FIX & SUB-HERO BREADCRUMB TOOLBAR */}
        <div className="pt-28 pb-6 px-4 sm:px-8 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/80">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#004EE0] dark:text-cyan-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Link to="/" className="hover:text-[#004EE0] dark:hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-[#004EE0] dark:hover:text-cyan-400 transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">{project.title}</span>
          </div>
        </div>

        <div className="px-4 sm:px-8 max-w-7xl mx-auto">
          {/* 2. CASE STUDY HERO & VIBRANT SEO BADGES */}
          <div className="flex flex-wrap items-center gap-3 mb-6 mt-8">
            <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 font-mono text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg shadow-sm">
              {project.category}
            </div>
            {project.client && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-lg flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" />
                {project.client}
              </div>
            )}
          </div>

          <h1 className="text-[#00072d] dark:text-white font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            {project.title}
          </h1>
          
          <p className="text-slate-700 dark:text-slate-200 text-lg sm:text-2xl font-medium leading-relaxed max-w-4xl mb-12">
            {project.overview}
          </p>

          {/* 3. INTERACTIVE UI MOCKUP & FLOATING METRIC STATS BANNER */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-500/20 dark:border-slate-800 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.2)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] bg-white dark:bg-slate-900 mb-12">
            <img 
              src={project.image}
              alt={`${project.title} Interface`}
              className="w-full h-auto max-h-[600px] object-cover object-top"
            />
          </div>

          {project.metrics && project.metrics.length >= 3 && (
            <div className="mx-auto max-w-5xl -mt-24 sm:-mt-28 relative z-20 mb-16 px-4 sm:px-0">
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-2 border-emerald-500/40 dark:border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(16,185,129,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-800 gap-6 sm:gap-0 text-center">
                
                <div className="pt-0 sm:pt-0 pb-6 sm:pb-0 sm:px-6 flex flex-col justify-center">
                  <div className="text-indigo-600 dark:text-indigo-400 font-black text-4xl sm:text-5xl tracking-tight">{project.metrics[0].value}</div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2 block">{project.metrics[0].label}</span>
                </div>
                
                <div className="py-6 sm:py-0 sm:px-6 flex flex-col justify-center">
                  <div className="text-emerald-500 dark:text-emerald-400 font-black text-4xl sm:text-5xl tracking-tight">{project.metrics[1].value}</div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2 block">{project.metrics[1].label}</span>
                </div>
                
                <div className="pt-6 sm:pt-0 sm:pb-0 sm:px-6 flex flex-col justify-center">
                  <div className="text-cyan-500 dark:text-cyan-400 font-black text-4xl sm:text-5xl tracking-tight">{project.metrics[2].value}</div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2 block">{project.metrics[2].label}</span>
                </div>

              </div>
            </div>
          )}

          {/* 4. TWO-COLUMN LAYOUT: MAIN NARRATIVE & STICKY TECH SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto py-12">
            
            {/* Left Column Narrative */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* SECTION 01: THE CHALLENGE */}
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-black text-[#00072d] dark:text-white mb-6">
                  <span className="bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/30 font-mono text-sm px-3 py-1 rounded-lg">01</span>
                  The Challenge
                </h2>
                <ul className="space-y-4">
                  {project.challenge.map((point, idx) => (
                    <li key={idx} className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 02: OUR ENGINEERED SOLUTION */}
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-black text-[#00072d] dark:text-white mb-6">
                  <span className="bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30 font-mono text-sm px-3 py-1 rounded-lg">02</span>
                  Our Engineered Solution
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {renderSolution()}
                </p>
              </div>

              {/* SECTION 03: KEY FEATURES & RESULTS */}
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-black text-[#00072d] dark:text-white mb-6">
                  <span className="bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 font-mono text-sm px-3 py-1 rounded-lg">03</span>
                  Key Features & Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.featuresAndResults.map((feature, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-start gap-3.5 shadow-sm hover:border-emerald-500/50 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STRATEGIC BUSINESS IMPACT QUOTE BOX */}
              <div className="bg-gradient-to-r from-indigo-950 to-slate-900 dark:from-slate-900 dark:to-indigo-950 border-2 border-indigo-500/30 p-8 rounded-3xl relative overflow-hidden shadow-xl mt-8">
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-indigo-500 via-emerald-400 to-cyan-400" />
                <p className="text-white font-medium text-lg sm:text-xl italic leading-relaxed relative z-10 pl-4">
                  "{project.businessValue}"
                </p>
              </div>

            </div>

            {/* Right Column Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-8">
                
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest font-black text-indigo-600 dark:text-indigo-400 block mb-4">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold px-3 py-1.5 rounded-xl hover:border-indigo-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <hr className="border-slate-200 dark:border-slate-800" />

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest font-black text-indigo-600 dark:text-indigo-400 block mb-4">
                    Project Highlights
                  </span>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-4 block">
                      Primary Outcome
                    </span>
                    <div className="text-[#00072d] dark:text-white font-bold text-base mt-1 leading-snug">
                      {project.result}
                    </div>
                  </div>
                  <div className="mt-5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Industry
                    </span>
                    <div className="text-[#00072d] dark:text-white font-bold text-base mt-1">
                      {project.category}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Related Case Studies Section */}
        {scored.length > 0 && (
          <section className="bg-gradient-to-b from-[#f2faf4] via-[#eaf5ff] to-[#f2faf4] dark:from-[#00072d] dark:via-[#020d3b] dark:to-[#00072d] transition-colors duration-500 py-24 px-4 sm:px-8 relative overflow-hidden mt-24">
            <div className="bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.15),transparent_60%)] absolute inset-0 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-[#004EE0] dark:text-cyan-400 mb-2 block">Up Next</span>
                <h2 className="text-[#00072d] dark:text-white font-black text-3xl sm:text-5xl tracking-tight">Related Case Studies</h2>
              </div>
              <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-1.5 rounded-2xl shadow-sm">
                <button onClick={handlePrev} className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#004EE0] hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all shadow-sm active:scale-95" aria-label="Previous">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={handleNext} className="w-11 h-11 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#004EE0] hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all shadow-sm active:scale-95" aria-label="Next">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
              {visibleProjects.map((p, idx) => {
                if (!p) return null;
                return (
                  <Link key={`${p.slug}-${idx}`} to={`/case-studies/${p.slug}`} className="relative group rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,78,224,0.18)] dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)] flex flex-col justify-between before:absolute before:inset-0 before:rounded-3xl before:p-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-[#004EE0] dark:before:via-cyan-400 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none">
                    
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 dark:bg-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
                    
                    <div className="relative w-full h-60 overflow-hidden bg-slate-950">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
                      
                      <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md border border-indigo-500/30 dark:border-cyan-500/30 rounded-2xl p-3 flex items-center justify-between shadow-xl group-hover:border-indigo-500/60 dark:group-hover:border-cyan-400/60 transition-colors">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 font-black text-xl sm:text-2xl tracking-tight">
                          {p.metrics?.[0]?.value || ''}
                        </span>
                        <span className="text-slate-300 font-mono text-[10px] uppercase tracking-wider font-extrabold text-right max-w-[120px] leading-tight">
                          {p.metrics?.[0]?.label || ''}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-indigo-500/10 text-indigo-600 dark:text-cyan-300 border border-indigo-500/20 text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            {p.category}
                          </span>
                          <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full">
                            {p.techStack?.[0]}
                          </span>
                        </div>
                        
                        <h3 className="text-[#00072d] dark:text-white font-black text-xl tracking-tight mb-2 group-hover:text-[#004EE0] dark:group-hover:text-cyan-400 transition-colors">
                          {p.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-300 text-sm font-medium line-clamp-2 leading-relaxed mb-6">
                          {p.overview}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs font-mono font-black uppercase tracking-wider text-[#004EE0] dark:text-cyan-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                          Explore Case Architecture
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#004EE0] dark:text-cyan-400 group-hover:bg-[#004EE0] group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 group-hover:translate-x-1 transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default CaseStudyDetail;
