import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Mail, MessageSquare, Clock, MapPin, Send, Linkedin, Github, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'qorynta@gmail.com',
    href: 'mailto:qorynta@gmail.com',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
  {
    icon: MapPin,
    title: 'Timezone Overlap',
    value: '4+ hours EST/GMT daily',
    href: null,
  },
];

const budgetOptions = [
  '$1K - Discovery',
  '$5K - MVP',
  '$15K+ - Production',
  'Custom / Ongoing',
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('yHHD-5T8TmlJkFBl7');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send('service_5br3fjc', 'template_g3k7h5m', {
        to_email: 'qorynta@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        budget: formData.budget || 'Not provided',
        message: formData.message,
      });

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
      });
    } catch (error) {
      console.error('Email error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden particles-bg">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Start Your </span>
                <span className="gradient-text">$1K+ Project</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Book a free 30-minute discovery call. Get ROI projections before any commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left - Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Let's Build Something <span className="gradient-text">Scalable</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you need fraud detection, inventory optimization, or AI automation — 
                  we'll map your requirements to a clear ROI projection within one week.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/rishvmiyani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 p-6 rounded-xl bg-muted/20 border border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    What You'll Get
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Free 30-min discovery call',
                      'ROI projection within 1 week',
                      'No commitment required',
                      'Direct access to founder',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right - Form */}
              <div>
                <div className="card-gradient-border">
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Get Your Free ROI Projection
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Fill out the form and we'll get back to you within 24 hours.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="bg-muted/50 border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full h-10 px-3 rounded-md bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select budget</option>
                        {budgetOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your project *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe what problem are you suffering..."
                        rows={4}
                        className="bg-muted/50 border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glow-sm hover:shadow-glow-md transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our privacy policy. We'll never share your data.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Prefer a quick chat? Email us directly:
              </p>
              <a
                href="mailto:qorynta@gmail.com"
                className="text-2xl font-bold gradient-text hover:underline"
              >
                qorynta@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
