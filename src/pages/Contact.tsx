import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionLabel } from "../components/ui/SectionLabel";
import { GradientText } from "../components/ui/GradientText";
import { Button } from "../components/ui/Button";
import { Mail, MessageCircle, Calendar, Clock, ShieldCheck, Lock } from "lucide-react";

// Form Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  country: z.string().min(1, "Please select a country"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  description: z.string().min(10, "Please provide more details (min 10 chars)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // TODO: Connect to backend API or Formspree
    console.log("Form Data:", data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-violet/5 blur-[120px] rounded-full -z-10" />
      
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <SectionLabel text="LET'S TALK" />
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-display">
            Start Your <GradientText>Project</GradientText>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl">
            Fill out the form below or reach out directly. We'll get back to you within 4 business hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT - Form */}
          <div className="w-full lg:w-[60%]">
            <GlassCard className="border-border/50 bg-bg-surface/80 p-6 md:p-8">
              {isSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/30 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-success mb-1">Message Sent Successfully!</h3>
                  <p className="text-text-secondary text-sm">We've received your request and will be in touch shortly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">Name *</label>
                    <input 
                      {...register("name")}
                      className={`w-full bg-bg-primary border ${errors.name ? 'border-destructive' : 'border-border'} rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-destructive text-xs mt-1 block">{errors.name.message}</span>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">Email *</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className={`w-full bg-bg-primary border ${errors.email ? 'border-destructive' : 'border-border'} rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <span className="text-destructive text-xs mt-1 block">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">Company / Organisation</label>
                    <input 
                      {...register("company")}
                      className="w-full bg-bg-primary border border-border rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  
                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1.5">Country *</label>
                    <select 
                      {...register("country")}
                      className={`w-full bg-bg-primary border ${errors.country ? 'border-destructive' : 'border-border'} rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors appearance-none`}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States 🇺🇸</option>
                      <option value="UK">United Kingdom 🇬🇧</option>
                      <option value="AU">Australia 🇦🇺</option>
                      <option value="CA">Canada 🇨🇦</option>
                      <option value="IN">India 🇮🇳</option>
                      <option value="OTHER">Other</option>
                    </select>
                    {errors.country && <span className="text-destructive text-xs mt-1 block">{errors.country.message}</span>}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Service Interested In *</label>
                  <select 
                    {...register("service")}
                    className={`w-full bg-bg-primary border ${errors.service ? 'border-destructive' : 'border-border'} rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors appearance-none`}
                  >
                    <option value="">Select a service</option>
                    <option value="web">Custom Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="design">UI/UX Design & Prototyping</option>
                    <option value="ai">AI & Machine Learning Solutions</option>
                    <option value="cloud">Cloud Infrastructure & DevOps</option>
                    <option value="ecommerce">E-Commerce Development</option>
                    <option value="saas">SaaS Product Development</option>
                    <option value="api">API Development & Integration</option>
                    <option value="consulting">IT Consulting & Strategy</option>
                  </select>
                  {errors.service && <span className="text-destructive text-xs mt-1 block">{errors.service.message}</span>}
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Project Budget *</label>
                  <select 
                    {...register("budget")}
                    className={`w-full bg-bg-primary border ${errors.budget ? 'border-destructive' : 'border-border'} rounded-md px-4 py-2.5 text-text-primary focus:outline-none focus:border-accent-blue transition-colors appearance-none`}
                  >
                    <option value="">Select a budget range</option>
                    <option value="<1k">&lt; $1,000</option>
                    <option value="1k-5k">$1,000 – $5,000</option>
                    <option value="5k-20k">$5,000 – $20,000</option>
                    <option value="20k+">$20,000+</option>
                  </select>
                  {errors.budget && <span className="text-destructive text-xs mt-1 block">{errors.budget.message}</span>}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Project Description *</label>
                  <textarea 
                    {...register("description")}
                    rows={5}
                    className={`w-full bg-bg-primary border ${errors.description ? 'border-destructive' : 'border-border'} rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue transition-colors resize-none`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                  {errors.description && <span className="text-destructive text-xs mt-1 block">{errors.description.message}</span>}
                </div>

                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-success" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  <span>100% Confidential (NDA available)</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT - Info */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-text-primary">Get in Touch</h3>
              
              <a href="mailto:hello@qorynta.in" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-bg-surface/50 hover:bg-bg-surface hover:border-accent-blue/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:text-accent-blue transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Email Us</div>
                  <div className="font-semibold text-text-primary">hello@qorynta.in</div>
                </div>
              </a>
              
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-bg-surface/50 hover:bg-bg-surface hover:border-success/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:text-success transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">WhatsApp (Click to chat)</div>
                  <div className="font-semibold text-text-primary">+91 XXXXX XXXXX</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-bg-surface/50 hover:bg-bg-surface hover:border-accent-violet/50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:text-accent-violet transition-colors">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary mb-1">Schedule a Meeting</div>
                  <div className="font-semibold text-text-primary">Book a 30-min discovery call →</div>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-bg-surface/30">
              <h4 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-cyan" />
                Business Hours
              </h4>
              <p className="text-text-secondary text-sm mb-2">Mon–Fri: 9:00 AM – 7:00 PM IST</p>
              <p className="text-text-muted text-xs mb-6">(Which is: 3:30 AM – 1:30 PM UTC)</p>
              
              <h4 className="font-bold text-text-primary mb-3 text-sm">Response Time SLA:</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Email</span>
                  <span className="font-medium text-text-primary">&lt; 4 hours</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>WhatsApp</span>
                  <span className="font-medium text-text-primary">&lt; 1 hour</span>
                </li>
                <li className="flex justify-between">
                  <span>Calls</span>
                  <span className="font-medium text-text-primary">By appointment</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl border border-border/50 bg-bg-surface/30">
               <h4 className="font-bold text-text-primary mb-3 text-sm">We serve clients globally</h4>
               <div className="flex gap-4 text-2xl">
                 <span title="India">🇮🇳</span>
                 <span title="United States">🇺🇸</span>
                 <span title="United Kingdom">🇬🇧</span>
                 <span title="Australia">🇦🇺</span>
               </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
