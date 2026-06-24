import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CTABanner } from '@/components/home/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) {
      // Redirect to services index if slug is invalid
      navigate('/services', { replace: true });
    }
    // Scroll to top when loading the page
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Qorynta Services</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        
        {/* Back Link */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <SectionLabel text="SERVICE DETAILS" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-muted border border-border rounded-full text-sm font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-full bg-primary/5 border border-border/50 flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60 rounded-full" />
                  <service.icon className="w-full h-full text-primary drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-float relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 bg-muted border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
                <div className="space-y-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Business Benefits</h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-4 h-4 text-secondary" />
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServiceDetail;
