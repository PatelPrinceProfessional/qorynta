import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Filter, Clock, Calendar } from 'lucide-react';
import { insights } from '@/data/insights';

// Vivid SEO Keyword Highlighting Engine
const highlightText = (text: string, phrases: { phrase: string, className: string }[]) => {
  let result: React.ReactNode[] = [text];
  phrases.forEach(({ phrase, className }) => {
    result = result.flatMap(segment => {
      if (typeof segment !== 'string') return segment;
      const parts = segment.split(new RegExp(`(${phrase})`, 'gi'));
      return parts.map((part, i) => 
        part.toLowerCase() === phrase.toLowerCase() 
          ? <mark key={`${phrase}-${i}`} className={className}>{part}</mark>
          : part
      );
    });
  });
  return result;
};

export const Insights = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Parse page from URL, default to 1
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const POSTS_PER_PAGE = 6;

  // Filter out drafts
  const publishedInsights = useMemo(() => insights.filter(p => p.published !== false), []);

  // Extract pillars (the first 3 items we defined)
  const pillars = publishedInsights.slice(0, 3);

  // Extract clusters
  const clusters = publishedInsights.slice(3);

  const categories = ['All', ...Array.from(new Set(clusters.map(p => p.category)))];

  const filteredClusters = activeCategory === 'All'
    ? clusters
    : clusters.filter(p => p.category === activeCategory);

  // Pagination logic
  const paginatedClusters = filteredClusters.slice(0, currentPage * POSTS_PER_PAGE);
  const hasMore = paginatedClusters.length < filteredClusters.length;

  const handleLoadMore = () => {
    setSearchParams({ page: (currentPage + 1).toString() });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        exactTitle={true}
        title="Tech Insights Blog | Web Dev, AI & Software Engineering | Qorynta"
        description="Expert articles on web development, mobile apps, AI/ML, cloud DevOps & SaaS engineering. Written by the Qorynta team for founders, CTOs & product managers. Published weekly."
        canonical="https://www.qorynta.in/insights"
      />

      {/* 1. PORTFOLIO HERO CONTAINER & GRID ATMOSPHERE */}
      <main className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#f2faf4] via-[#eaf5ff] to-[#f2faf4] dark:from-[#00072d] dark:via-[#020d3b] dark:to-[#00072d] overflow-hidden transition-colors duration-500 z-10">
        
        {/* Micro-Dot Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#004ee0_1px,transparent_1px)] dark:bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] dark:opacity-[0.12] pointer-events-none z-0"></div>
        
        {/* Center Ambient Glow Aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* 2. HERO HEADLINE & EYEBROW TYPOGRAPHY */}
        <div className="relative z-10 text-center max-w-4xl mx-auto mb-6">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-[#004EE0] dark:text-cyan-400 mb-4 bg-blue-500/10 dark:bg-cyan-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 dark:border-cyan-500/30 shadow-sm">
            OUR INSIGHTS
          </span>
          <h1 className="text-[#00072D] dark:text-white font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] mb-6">
            Engineering <span className="font-serif italic font-normal text-[#004EE0] dark:text-cyan-400 pr-1">Insights.</span>
          </h1>
          <p className="relative z-10 text-slate-600 dark:text-slate-300 text-base sm:text-xl font-normal text-center max-w-2xl mx-auto leading-relaxed">
            Deep technical dives, architecture patterns, and case studies from the engineers building the digital backbone of industry leaders.
          </p>
        </div>

        {/* PILLAR GUIDES SECTION */}
        <div className="relative z-10 mt-16 mb-20 max-w-7xl mx-auto">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-3xl font-black text-[#00072D] dark:text-white">Complete Guides & Pillar Topics</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 font-medium">In-depth roadmaps for building and scaling in 2026.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {pillars.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <Link to={`/insights/${pillar.slug}`} className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,78,224,0.15)] dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)] transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-[#004EE0] before:via-cyan-400 before:to-emerald-400 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-20 h-full">
                  
                  {/* Screenshot Media Container */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-950 p-3">
                    <img 
                      src={pillar.featuredImage} 
                      alt={pillar.title}
                      className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Floating Date & Read Time Ribbon */}
                    <div className="absolute bottom-5 left-5 right-5 bg-slate-950/90 backdrop-blur-md border border-blue-500/30 dark:border-cyan-500/30 rounded-2xl p-3 flex items-center justify-between shadow-xl group-hover:border-blue-500/60 transition-colors">
                      <div className="flex items-center gap-2 text-sky-300 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-extrabold">
                        <Calendar className="w-3.5 h-3.5" /> {pillar.date}
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-xs uppercase tracking-wider font-extrabold">
                        <Clock className="w-3.5 h-3.5" /> {pillar.readingTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10 bg-white/50 dark:bg-transparent">
                    <div>
                      {/* Category Pill */}
                      <div className="mb-4">
                        <span className="bg-blue-500/10 text-[#004EE0] dark:text-cyan-300 border border-blue-500/20 text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          {pillar.pillarTopic}
                        </span>
                      </div>
                      
                      {/* Case Title with SEO Highlights */}
                      <h3 className="text-[#00072D] dark:text-white font-black text-xl tracking-tight mb-3 leading-snug group-hover:text-[#004EE0] dark:group-hover:text-cyan-400 transition-colors">
                        {highlightText(pillar.title, [
                          { phrase: 'Flutter vs React Native', className: 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-1.5 rounded font-black not-italic' },
                          { phrase: 'Mobile App Development Cost', className: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-1.5 rounded font-black not-italic' },
                          { phrase: 'Offshore Software Development', className: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-1.5 rounded font-black not-italic' }
                        ])}
                      </h3>
                      
                      {/* Summary Text with SEO Highlights */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-medium line-clamp-3 leading-relaxed mb-6">
                        {highlightText(pillar.description, [
                          { phrase: 'startups and enterprises', className: 'text-[#004EE0] dark:text-cyan-400 font-bold bg-blue-500/10 dark:bg-cyan-500/10 px-1 rounded' },
                          { phrase: 'budget for your MVP', className: 'text-violet-600 dark:text-violet-400 font-bold bg-violet-500/10 px-1 rounded' },
                          { phrase: 'outsource your software development', className: 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded' }
                        ])}
                      </p>
                    </div>
                    
                    {/* Card Footer CTA Action */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-mono font-black uppercase tracking-wider text-[#004EE0] dark:text-cyan-400 group-hover:text-emerald-500 transition-colors">
                        Read Guide <ArrowRight className="w-3 h-3 inline-block ml-1" />
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#004EE0] dark:text-cyan-400 group-hover:bg-[#004EE0] group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* LATEST ARTICLES GRID */}
        <div className="relative z-10 max-w-7xl mx-auto pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h2 className="text-3xl font-black text-[#00072D] dark:text-white">Latest Articles</h2>

            {/* Sticky Category Filter Pill Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              <Filter className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all border ${activeCategory === cat
                    ? 'bg-[#004EE0] dark:bg-cyan-500 text-white dark:text-slate-900 border-[#004EE0] dark:border-cyan-500 shadow-md'
                    : 'bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {paginatedClusters.map((post, idx) => (
              <ScrollReveal key={idx} delay={0.1 * (idx % 3)}>
                <Link to={`/insights/${post.slug}`} className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,78,224,0.15)] dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)] transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-[#004EE0] before:via-cyan-400 before:to-emerald-400 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-20 h-full">
                  
                  {/* Screenshot Media Container */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-950 p-3">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Floating Date & Read Time Ribbon */}
                    <div className="absolute bottom-5 left-5 right-5 bg-slate-950/90 backdrop-blur-md border border-blue-500/30 dark:border-cyan-500/30 rounded-2xl p-3 flex items-center justify-between shadow-xl group-hover:border-blue-500/60 transition-colors">
                      <div className="flex items-center gap-2 text-sky-300 dark:text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-extrabold">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </div>
                      <div className="flex items-center gap-2 text-slate-300 font-mono text-[10px] uppercase tracking-wider font-extrabold">
                        <Clock className="w-3 h-3" /> {post.readingTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative z-10 bg-white/50 dark:bg-transparent">
                    <div>
                      {/* Category Pill */}
                      <div className="mb-3">
                        <span className="bg-blue-500/10 text-[#004EE0] dark:text-cyan-300 border border-blue-500/20 text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Case Title */}
                      <h3 className="text-[#00072D] dark:text-white font-black text-lg tracking-tight mb-2 leading-snug group-hover:text-[#004EE0] dark:group-hover:text-cyan-400 transition-colors">
                        {highlightText(post.title, [
                          { phrase: 'Flutter vs React Native', className: 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-1 rounded font-black not-italic' },
                          { phrase: 'Mobile App Development Cost', className: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-1 rounded font-black not-italic' },
                          { phrase: 'Offshore Software Development', className: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-1 rounded font-black not-italic' }
                        ])}
                      </h3>
                      
                      {/* Summary Text */}
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-medium line-clamp-2 leading-relaxed mb-4">
                        {highlightText(post.description, [
                          { phrase: 'startups and enterprises', className: 'text-[#004EE0] dark:text-cyan-400 font-bold bg-blue-500/10 dark:bg-cyan-500/10 px-1 rounded' },
                          { phrase: 'budget for your MVP', className: 'text-violet-600 dark:text-violet-400 font-bold bg-violet-500/10 px-1 rounded' },
                          { phrase: 'outsource your software development', className: 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-1 rounded' }
                        ])}
                      </p>
                    </div>
                    
                    {/* Card Footer CTA Action */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-mono font-black uppercase tracking-wider text-[#004EE0] dark:text-cyan-400 group-hover:text-emerald-500 transition-colors">
                        Read Article <ArrowRight className="w-3 h-3 inline-block ml-1" />
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#004EE0] dark:text-cyan-400 group-hover:bg-[#004EE0] group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950 group-hover:translate-x-1 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredClusters.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No articles found in this category.
            </div>
          )}

          {hasMore && (
            <div className="mt-16 flex justify-center pb-12">
              <button
                onClick={handleLoadMore}
                className="group inline-flex items-center justify-center px-6 py-3 bg-[#00072D] dark:bg-white text-white dark:text-[#00072D] font-mono text-xs font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-slate-900/10 dark:shadow-white/10 hover:shadow-blue-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Load More Articles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
              <noscript>
                <a href={`?page=${currentPage + 1}`} className="block mt-4 text-[#004EE0] underline">Next Page</a>
              </noscript>
            </div>
          )}
        </div>

      </main>

    </>
  );
};

export default Insights;
