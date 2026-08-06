import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

import { insights } from '@/data/insights';

export const BlogPreviewSection = () => {
  const blogPosts = insights.slice(0, 3);

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

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f2faf4] via-[#eaf5ff] to-[#f2faf4] dark:from-[#00072d] dark:via-[#020d3b] dark:to-[#00072d] overflow-hidden transition-colors duration-500 border-y border-slate-200/50 dark:border-slate-800/50 z-10">
      
      {/* Micro-Dot Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#004ee0_1px,transparent_1px)] dark:bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] dark:opacity-[0.12] pointer-events-none z-0"></div>
      
      {/* Center Ambient Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] font-extrabold text-[#004EE0] dark:text-cyan-400 mb-4 bg-blue-500/10 dark:bg-cyan-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 dark:border-cyan-500/30 shadow-sm">
              ENGINEERING INSIGHTS
            </span>
            <h2 className="text-[#00072D] dark:text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
              Explore Our <span className="font-serif italic font-normal text-[#004EE0] dark:text-cyan-400 pr-1">Thinking.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium max-w-2xl leading-relaxed">
              Latest thoughts on software architecture, AI integration, and digital transformation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <Link to="/insights" className="group inline-flex items-center justify-center px-6 py-3 bg-[#00072D] dark:bg-white text-white dark:text-[#00072D] font-mono text-xs font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-slate-900/10 dark:shadow-white/10 hover:shadow-blue-500/25 dark:hover:shadow-cyan-400/25 transition-all duration-300 hover:-translate-y-1 active:scale-95">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to={`/insights/${post.slug}`} className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,78,224,0.15)] dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.22)] transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between before:absolute before:top-0 before:left-0 before:right-0 before:h-1.5 before:bg-gradient-to-r before:from-[#004EE0] before:via-cyan-400 before:to-emerald-400 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 z-20 h-full">
                
                {/* Screenshot Media Container */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-950 p-3">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Floating Date & Read Time Ribbon */}
                  <div className="absolute bottom-5 left-5 right-5 bg-slate-950/90 backdrop-blur-md border border-blue-500/30 dark:border-cyan-500/30 rounded-2xl p-3 flex items-center justify-between shadow-xl group-hover:border-blue-500/60 transition-colors">
                    <div className="flex items-center gap-2 text-sky-300 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-extrabold">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 font-mono text-xs uppercase tracking-wider font-extrabold">
                      <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                    </div>
                  </div>
                </div>
                
                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10 bg-white/50 dark:bg-transparent">
                  <div>
                    {/* Category Pill */}
                    <div className="mb-4">
                      <span className="bg-blue-500/10 text-[#004EE0] dark:text-cyan-300 border border-blue-500/20 text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Case Title with SEO Highlights */}
                    <h3 className="text-[#00072D] dark:text-white font-black text-xl tracking-tight mb-3 leading-snug group-hover:text-[#004EE0] dark:group-hover:text-cyan-400 transition-colors">
                      {highlightText(post.title, [
                        { phrase: 'Flutter vs React Native', className: 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-500/30 px-1.5 rounded font-black not-italic' },
                        { phrase: 'Mobile App Development Cost', className: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 px-1.5 rounded font-black not-italic' },
                        { phrase: 'Offshore Software Development', className: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 px-1.5 rounded font-black not-italic' }
                      ])}
                    </h3>
                    
                    {/* Summary Text with SEO Highlights */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-medium line-clamp-3 leading-relaxed mb-6">
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
      </div>
    </section>
  );
};

export default BlogPreviewSection;
