import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CTABanner } from '@/components/home/CTABanner';
import { ArrowLeft } from 'lucide-react';
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

  return (
    <>
      <Helmet>
        <title>{post.title} | Qorynta Insights</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      
      <main className="min-h-screen bg-background pt-20">
        
        {/* Back Link */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 max-w-4xl">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">{post.category}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-y border-border/50 py-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-primary tracking-widest uppercase">{post.category}</span>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm text-muted-foreground font-medium">{post.publishDate}</p>
                <p className="text-sm text-muted-foreground font-medium">{post.readTime}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mb-24">
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl">
            {/* In a real app, you would use react-markdown here */}
            {post.content.split('\n').map((paragraph, i) => {
              if (paragraph.trim().startsWith('##')) {
                return <h2 key={i} className="text-3xl font-black mt-12 mb-6">{paragraph.replace('##', '').trim()}</h2>;
              }
              if (paragraph.trim() === '') return null;
              
              // Handle basic bold syntax
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

        <CTABanner />
      </main>

          </>
  );
};

export default InsightDetail;
