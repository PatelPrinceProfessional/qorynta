import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { RevealContent } from '@/components/ui/RevealContent';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Qorynta Services</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      
      <main className="min-h-screen bg-background flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
          <h1 className="text-[8rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-800 leading-none mb-4 select-none drop-shadow-2xl">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Page not found
          </h2>
          <p className="text-xl text-muted-foreground font-medium mb-12">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 w-full sm:w-auto font-bold text-base bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1 overflow-hidden group">
              <Link to="/">
                <RevealContent>
                  <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> Back to Homepage
                </RevealContent>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 w-full sm:w-auto font-bold text-base transition-all hover:bg-muted">
              <Link to="/contact">
                Contact Support <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

          </>
  );
};

export default NotFound;
