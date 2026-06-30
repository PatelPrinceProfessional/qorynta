import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { SectionLabel } from '@/components/ui/SectionLabel';
import emailjs from '@emailjs/browser';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'qorynta@gmail.com',
    href: 'mailto:qorynta@gmail.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 9316157949 / 9328606539',
    href: 'tel:+919316157949',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Ahmedabad, Gujarat, India',
    href: null,
  },
];

const budgetOptions = [
  'Less than $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000+',
  'Not Sure Yet',
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
    // Keep existing emailjs init
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
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours to schedule a call.",
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
        title: "Error sending message",
        description: "Please try again or email us directly at qorynta@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Qorynta Services</title>
        <meta name="description" content="Get in touch with Qorynta Services to discuss your web, mobile, or AI project. Free scoping call and proposal within 24 hours." />
      </Helmet>

      <Navbar />
      <main className="min-h-screen bg-background pt-20">

        {/* Header Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <SectionLabel text="GET IN TOUCH" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Let's Build Something <br className="hidden md:block" /> Extraordinary Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

              {/* Left Column - Contact Info */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium mb-1">{item.title}</p>
                          {item.href ? (
                            <a href={item.href} className="text-base text-foreground font-semibold hover:text-primary transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-base text-foreground font-semibold">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-4">What happens next?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">24-Hour Response</h4>
                        <p className="text-sm text-muted-foreground">We'll review your requirements and respond promptly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">Discovery Call</h4>
                        <p className="text-sm text-muted-foreground">A 30-minute free consultation to discuss tech stack and scope.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">Detailed Proposal</h4>
                        <p className="text-sm text-muted-foreground">You'll receive a comprehensive timeline, architecture plan, and quote.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-7">
                <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

                  <h2 className="text-2xl font-bold text-foreground mb-8 relative z-10">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name <span className="text-destructive">*</span></label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="bg-muted border-border/50 h-12 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address <span className="text-destructive">*</span></label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="bg-muted border-border/50 h-12 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Company Name</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company Name"
                          className="bg-muted border-border/50 h-12 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Project Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full h-12 px-3 rounded-md bg-muted border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                        >
                          <option value="" disabled className="text-muted-foreground">Select a range</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Project Details <span className="text-destructive">*</span></label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your goals, timeline, and any specific requirements..."
                        rows={6}
                        className="bg-muted border-border/50 resize-none focus-visible:ring-primary p-4"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base font-bold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
