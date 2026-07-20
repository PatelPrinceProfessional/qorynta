import { useState, useEffect, useRef } from 'react';
import SEO from '@/components/SEO';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { SectionLabel } from '@/components/ui/SectionLabel';
import emailjs from '@emailjs/browser';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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

// Custom Magnetic Button for the "Send Message" action
const MagneticButton = ({ isSubmitting, children }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3); // Magnetic pull strength
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      type="submit"
      disabled={isSubmitting}
      style={{ x: smoothX, y: smoothY, willChange: 'transform' }}
      className="w-full h-14 text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-shadow duration-300 group overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.1 }
  })
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        phone_number: formData.phone || 'Not provided',
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
        phone: '',
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
      <SEO
        title="Contact Qorynta – Free Consultation"
        description="Get a free consultation for your next AI, web, or mobile project. Tell us about your goals and timeline."
        canonical="https://www.qorynta.in/contact"
      />

            <main className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 pt-20 relative overflow-hidden transition-colors duration-500">
        
        {/* Ambient Pulsing Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[180px] animate-pulse-slow pointer-events-none z-0" />

        {/* Header Section */}
        <section className="py-16 md:py-24 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
          >
            <SectionLabel text="GET IN TOUCH" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] dark:text-white mb-6 tracking-tight">
              Let's Build Something <br className="hidden md:block" /> Extraordinary Together
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="pb-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">

              {/* Left Column - Contact Info */}
              <motion.div 
                initial="hidden" animate="visible" custom={1} variants={fadeUp}
                className="lg:col-span-5 space-y-8"
              >
                {/* Glass-morphic Info Container */}
                <div className="p-8 md:p-10 rounded-[2rem] bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 shadow-2xl relative overflow-hidden group/container">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                  
                  <h2 className="text-2xl font-black text-[#0F172A] dark:text-white mb-8 relative z-10">Contact Information</h2>
                  
                  <div className="space-y-6 relative z-10">
                    {contactInfo.map((item, idx) => (
                      <div key={idx} className="group flex items-start gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-blue-600">
                          <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="pt-1">
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">{item.title}</p>
                          {item.href ? (
                            <a href={item.href} className="text-base text-[#0F172A] dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-base text-[#0F172A] dark:text-white font-bold">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What Happens Next - Trust Container */}
                <div className="p-8 md:p-10 rounded-[2rem] bg-[#f0f7ff]/90 dark:bg-blue-950/40 backdrop-blur-xl border border-blue-100 dark:border-blue-900/50 shadow-xl">
                  <h3 className="text-xl font-black text-[#0F172A] dark:text-white mb-6">What happens next?</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-800/50 flex items-center justify-center shrink-0 mt-1">
                        <Clock className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">24-Hour Response</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">We'll review your requirements and respond promptly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-800/50 flex items-center justify-center shrink-0 mt-1">
                        <MessageSquare className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Discovery Call</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">A 30-minute free consultation to discuss tech stack and scope.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-800/50 flex items-center justify-center shrink-0 mt-1">
                        <Globe className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0F172A] dark:text-white mb-1">Detailed Proposal</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">You'll receive a comprehensive timeline, architecture plan, and quote.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div 
                initial="hidden" animate="visible" custom={2} variants={fadeUp}
                className="lg:col-span-7"
              >
                {/* Glass-morphic Form Container */}
                <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 border border-white/50 dark:border-slate-700/50 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

                  <h2 className="text-3xl font-black text-[#0F172A] dark:text-white mb-8 relative z-10">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A] dark:text-slate-300">Full Name <span className="text-blue-600">*</span></label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 h-14 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all font-medium placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A] dark:text-slate-300">Email Address <span className="text-blue-600">*</span></label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 h-14 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all font-medium placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A] dark:text-slate-300">Contact Number <span className="text-blue-600">*</span></label>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={formData.phone}
                          onChange={(value) => setFormData({ ...formData, phone: value || '' })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A] dark:text-slate-300">Company Name</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company Name"
                          className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 h-14 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all font-medium placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#0F172A] dark:text-slate-300">Project Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full h-14 px-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                        >
                          <option value="" disabled className="text-slate-400">Select a range</option>
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0F172A] dark:text-slate-300">Project Details <span className="text-blue-600">*</span></label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your goals, timeline, and any specific requirements..."
                        rows={6}
                        className="bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rounded-xl resize-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all p-5 font-medium placeholder:text-slate-400"
                      />
                    </div>

                    <MagneticButton isSubmitting={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </MagneticButton>
                  </form>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
                </>
  );
};

export default Contact;
