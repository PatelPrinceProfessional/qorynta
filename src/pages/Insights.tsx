import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CTABanner } from '@/components/home/CTABanner';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { insights } from '@/data/insights';
import { Button } from '@/components/ui/button';

export const Insights = () => {
  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <>
      <Helmet>
        <title>Engineering Insights & Blog | Qorynta Services</title>
        <meta name="description" content="Technical deep dives, architecture patterns, and engineering insights from the Qorynta team." />
      </Helmet>

      
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

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <Link to={`/insights/${featured.slug}`} className="group block relative rounded-3xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="lg:w-3/5 relative overflow-hidden h-72 lg:h-[500px]">
                    <img src={featured.image} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/20 lg:to-background" />
                  </div>
                  <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4">{featured.category}</span>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div>
                        <p className="text-sm font-bold text-foreground">Featured Insight</p>
                        <p className="text-xs text-muted-foreground">{featured.publishDate} · {featured.readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {rest.map((post, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx}>
                  <Link to={`/insights/${post.slug}`} className="group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img src={post.image} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4">{post.category}</span>
                      <h3 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div>
                          <p className="text-sm font-bold text-foreground">Read Insight</p>
                          <p className="text-xs text-muted-foreground">{post.publishDate} · {post.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

          </>
  );
};

export default Insights;
