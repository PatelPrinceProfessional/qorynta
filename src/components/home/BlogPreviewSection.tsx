import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

import { insights } from '@/data/insights';

export const BlogPreviewSection = () => {
  const blogPosts = insights.slice(0, 3);
  return (
    <section className="py-24 relative bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Insights & Engineering
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Latest thoughts on software architecture, AI integration, and digital transformation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <Button variant="outline" className="rounded-full group" asChild>
              <Link to="/insights">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to={`/insights/${post.slug}`} className="group block h-full">
                <div className="h-full p-6 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                  <div className="mb-6 flex gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readingTime}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {post.description}
                  </p>
                  
                  <div className="mt-auto flex items-center text-primary font-semibold text-sm">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
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
