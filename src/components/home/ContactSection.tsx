import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-24 relative bg-[#0F172A] text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Ready to accelerate your digital growth?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Let's discuss your project. Our experts will review your requirements and provide a free technical proposal within 24 hours.
            </p>

            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                Signed NDA before we talk
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                Free architecture consultation
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                Detailed execution roadmap
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    required
                    placeholder="Your Name"
                    className="bg-slate-800/50 border-slate-700 h-12 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Input
                    required
                    type="email"
                    placeholder="Work Email"
                    className="bg-slate-800/50 border-slate-700 h-12 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Textarea
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base rounded-xl flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </Button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
