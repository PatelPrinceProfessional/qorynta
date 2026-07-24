import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import { CTABanner } from '@/components/home/CTABanner';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { insights } from '@/data/insights';

export const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = insights.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/insights', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.featuredImage,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author.name
    }
  };

  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonical={post.canonical}
        ogImage={post.featuredImage}
      >
        {post.published === false && <meta name="robots" content="noindex" />}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </SEO>

      <main className="min-h-screen bg-background pt-20">
        
        {/* Back Link */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 max-w-4xl">
          <div className="flex items-center justify-between mb-12">
            <Link 
              to="/insights" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              Go to Home
            </Link>
          </div>
          
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm font-bold text-primary tracking-widest uppercase">{post.category}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm font-medium px-2 py-1 bg-secondary rounded-full">{post.pillarTopic}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-y border-border/50 py-6">
              <div className="flex items-center gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm text-muted-foreground font-medium">{post.date}</p>
                <p className="text-sm text-muted-foreground font-medium">{post.readingTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative">
            <img src={post.featuredImage} alt={`Illustration for ${post.title}`} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mb-12">
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl">
            {post.content.split('\n').map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('##')) {
                return <h2 key={i} className="text-3xl font-black mt-12 mb-6">{trimmed.replace('##', '').trim()}</h2>;
              }
              
              const isBullet = trimmed.startsWith('- ');
              const isNumbered = /^\d+\.\s/.test(trimmed);
              
              if (isBullet || isNumbered) {
                const content = isBullet ? trimmed.replace(/^- /, '') : trimmed.replace(/^\d+\.\s/, '');
                
                const formattedContent = content.split(/(\*\*.*?\*\*)/).map((part, index) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index} className="text-foreground">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
                
                return <li key={i} className="mb-2 text-muted-foreground ml-6 list-outside" style={{ listStyleType: isNumbered ? 'decimal' : 'disc' }}>{formattedContent}</li>;
              }

              if (trimmed === '') return null;
              
              const formattedParagraph = paragraph.split(/(\*\*.*?\*\*)/).map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={index} className="text-foreground">{part.slice(2, -2)}</strong>;
                }
                return part;
              });

              return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{formattedParagraph}</p>;
            })}
          </article>
        </div>

        {/* FAQ Section */}
        {post.faq && post.faq.length > 0 && (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mb-24">
            <div className="bg-muted/30 border border-border/50 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-black mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faq.map((item, idx) => (
                  <div key={idx} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* See More Insights */}
        <section className="py-24 bg-muted border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold mb-10 text-center">Related Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.filter(p => p.slug !== post.slug && (p.pillarTopic === post.pillarTopic || p.category === post.category)).slice(0, 3).map((insight) => (
                <Link key={insight.slug} to={`/insights/${insight.slug}`} className="group block bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={insight.featuredImage} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">{insight.category}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{insight.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{insight.description}</p>
                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                View All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
};

export default InsightDetail;
