import { Calendar, ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const posts = [
  {
    title: 'The Future of Mobile Apps: Cross-Platform vs Native in 2024',
    date: 'March 15, 2024',
    category: 'Engineering',
    readTime: '5 min read',
  },
  {
    title: 'How We Reduced AWS Costs by 40% for a SaaS Client',
    date: 'March 02, 2024',
    category: 'Case Study',
    readTime: '8 min read',
  },
  {
    title: '10 UI/UX Mistakes Killing Your Conversion Rate',
    date: 'February 18, 2024',
    category: 'Design',
    readTime: '6 min read',
  },
];

export const BlogTeaser = () => {
  const revealRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-20 bg-background relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 reveal">
          <div>
            <SectionLabel text="INSIGHTS" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest from the Lab
            </h2>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className={`group flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-wider font-bold text-primary px-2 py-1 bg-primary/10 rounded">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-xs font-medium text-muted-foreground">{post.readTime}</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
