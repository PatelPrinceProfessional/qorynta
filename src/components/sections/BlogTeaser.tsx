import { Link } from "react-router-dom";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export function BlogTeaser() {
  const articles = [
    {
      id: 1,
      category: "Web Dev",
      date: "Oct 12, 2025",
      title: "Why Indian Dev Teams Are Winning Global SaaS Contracts in 2025",
      excerpt: "An inside look at how remote talent, agile methodologies, and deep technical expertise are shifting the global tech balance.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      category: "Mobile",
      date: "Sep 28, 2025",
      title: "React Native vs Flutter: Which Should You Choose in 2025?",
      excerpt: "A comprehensive comparison of performance, developer experience, and community support for modern cross-platform development.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      category: "AI/ML",
      date: "Sep 15, 2025",
      title: "The 5 Signs Your Business Needs a Custom Software Solution",
      excerpt: "Stop relying on duct-taped no-code tools. Here's how to identify when it's time to build a scalable, proprietary software platform.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel text="INSIGHTS" />
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold">
              From Our Knowledge Base
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group rounded-xl overflow-hidden bg-bg-surface border border-border/50 hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-white border border-white/10 uppercase tracking-wide">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-text-muted mb-3">{article.date}</div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-snug group-hover:text-accent-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to="/#blog" className="text-text-primary font-medium text-sm flex items-center group/btn hover:text-accent-cyan transition-colors">
                    Read Article <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link to="/#blog">
            <Button variant="ghost" className="text-text-secondary hover:text-text-primary">
              See All Articles →
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
