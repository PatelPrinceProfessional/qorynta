import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

import { insights } from '@/data/insights';

export const BlogPreviewSection = () => {
  const blogPosts = insights.slice(0, 3);

  const highlightText = (text: string, phrases: { phrase: string, className: string }[]) => {
    let result: React.ReactNode[] = [text];
    phrases.forEach(({ phrase, className }) => {
      result = result.flatMap(segment => {
        if (typeof segment !== 'string') return segment;
        const parts = segment.split(new RegExp(`(${phrase})`, 'gi'));
        return parts.map((part, i) => 
          part.toLowerCase() === phrase.toLowerCase() 
            ? <span key={`${phrase}-${i}`} className={className}>{part}</span>
            : part
        );
      });
    });
    return result;
  };

  return (
    <section className="py-24 relative bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#00072D] dark:text-foreground mb-4">
              Insights & <span className="font-[800] bg-clip-text text-transparent bg-gradient-to-br from-[#004EE0] via-[#0069D9] to-[#183EFF] dark:from-primary dark:to-primary">Engineering</span>
            </h2>
            <p className="text-[#051650] dark:text-muted-foreground text-lg max-w-2xl">
              Latest thoughts on <span className="font-[600] text-[#004EE0] dark:text-primary">software architecture</span>, <span className="font-[600] text-[#004EE0] dark:text-primary">AI integration</span>, and <span className="font-[600] text-[#004EE0] dark:text-primary">digital transformation</span>.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <Link to="/insights" className="group inline-flex items-center justify-center px-6 py-3 bg-[#FFFFFF] dark:bg-card border-[1.5px] border-[#004EE0] dark:border-primary text-[#004EE0] dark:text-primary font-[700] rounded-[50px] shadow-[0px_4px_15px_rgba(0,78,224,0.12)] dark:shadow-none transition-all duration-[350ms] ease-in-out hover:-translate-y-[2px] hover:bg-gradient-to-br hover:from-[#004EE0] hover:to-[#0A2472] dark:hover:from-primary dark:hover:to-primary/80 hover:text-[#F2FAF4] dark:hover:text-primary-foreground hover:shadow-[0px_10px_25px_rgba(0,78,224,0.28)] dark:hover:shadow-lg">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-[4px] transition-transform duration-[350ms]" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to={`/insights/${post.slug}`} className="group block h-full">
                <div className="h-full p-[24px] rounded-[18px] bg-[#FFFFFF] dark:bg-card border border-[#99CAFF]/50 dark:border-border/50 shadow-[0px_10px_25px_rgba(5,22,80,0.04)] dark:shadow-sm hover:-translate-y-[6px] hover:border-[1.5px] hover:border-[#004EE0] dark:hover:border-primary hover:shadow-[0px_20px_40px_rgba(0,78,224,0.16)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-[350ms] ease-in-out flex flex-col">
                  <div className="mb-6 flex gap-4 text-xs font-[600] text-[#0A2472] dark:text-muted-foreground uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#004EE0] dark:text-primary" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#004EE0] dark:text-primary" />{post.readingTime}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-[20px] bg-[#E3F2FF] dark:bg-primary/10 border border-[#99CAFF] dark:border-transparent text-[#004EE0] dark:text-primary text-xs font-[700] mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-[800] leading-[1.35] text-[#00072D] dark:text-foreground group-hover:text-[#004EE0] dark:group-hover:text-primary transition-colors duration-[350ms]">
                      {highlightText(post.title, [
                        { phrase: 'Flutter vs React Native', className: 'text-[#004EE0] dark:text-blue-400' },
                        { phrase: 'Mobile App Development Cost', className: 'text-[#004EE0] dark:text-blue-400' },
                        { phrase: 'Offshore Software Development', className: 'text-[#004EE0] dark:text-blue-400' }
                      ])}
                    </h3>
                  </div>
                  
                  <p className="text-[#051650] dark:text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {highlightText(post.description, [
                      { phrase: 'startups and enterprises', className: 'font-[600] text-[#0A2472] dark:text-blue-300' },
                      { phrase: 'budget for your MVP', className: 'font-[600] text-[#004EE0] dark:text-blue-400' },
                      { phrase: 'outsource your software development in 2026', className: 'font-[600] text-[#0A2472] dark:text-blue-300' }
                    ])}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#004EE0] dark:text-primary font-[700] text-sm group-hover:text-[#0A2472] dark:group-hover:text-primary/80 transition-colors duration-[350ms]">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-[5px] transition-transform duration-[350ms]" />
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
