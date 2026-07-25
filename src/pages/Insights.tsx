import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import { CTABanner } from '@/components/home/CTABanner';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Filter } from 'lucide-react';
import { insights } from '@/data/insights';

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

  return (
    <>
      <SEO
        exactTitle={true}
        title="Tech Insights Blog | Web Dev, AI & Software Engineering | Qorynta"
        description="Expert articles on web development, mobile apps, AI/ML, cloud DevOps & SaaS engineering. Written by the Qorynta team for founders, CTOs & product managers. Published weekly."
        canonical="https://www.qorynta.in/insights"
      />

      
      <main className="min-h-screen bg-background pt-20">
        
        {/* Header */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
                Engineering <span className="text-primary">Insights.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Deep technical dives, architecture patterns, and case studies from the engineers building the digital backbone of industry leaders.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pillar Guides */}
        <section className="py-12 border-b border-border/50 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">Complete Guides & Pillar Topics</h2>
              <p className="text-muted-foreground mt-4">In-depth roadmaps for building and scaling in 2026.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <Link to={`/insights/${pillar.slug}`} className="group block h-full relative rounded-3xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={pillar.featuredImage} 
                        alt="" 
                        aria-hidden="true" 
                        loading="lazy" 
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full backdrop-blur-md border border-primary/20">
                          {pillar.pillarTopic}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col h-[calc(100%-12rem)]">
                      <h3 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {pillar.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary flex items-center gap-2 transition-colors">
                          Read Guide <ArrowRight className="w-4 h-4" />
                        </span>
                        <span className="text-xs text-muted-foreground">{pillar.readingTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Article Grid & Filters */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                <Filter className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedClusters.map((post, idx) => (
                <ScrollReveal key={idx} delay={0.1 * (idx % 3)}>
                  <Link to={`/insights/${post.slug}`} className="group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt="" 
                        aria-hidden="true" 
                        loading="lazy" 
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4">{post.category}</span>
                      <h3 className="text-xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Read Article</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            
            {filteredClusters.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No articles found in this category.
              </div>
            )}

            {hasMore && (
              <div className="mt-16 text-center">
                <button 
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Load More Articles <ArrowRight className="w-4 h-4" />
                </button>
                {/* Fallback for SEO bots that don't execute JS */}
                <noscript>
                  <a href={`?page=${currentPage + 1}`} className="block mt-4 text-primary underline">Next Page</a>
                </noscript>
              </div>
            )}
          </div>
        </section>

        <CTABanner />
      </main>

          </>
  );
};

export default Insights;
