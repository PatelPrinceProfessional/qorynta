import { Quote, Star } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { GlassCard } from '@/components/ui/GlassCard';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Director, FinTech Solutions UK',
    content: "Qorynta rebuilt our core ML infrastructure from the ground up. Their understanding of FinTech compliance and performance optimization is unmatched. Delivered 2 weeks ahead of schedule.",
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    role: 'Founder, RetailPro India',
    content: "We hired Qorynta for our cross-platform mobile app. The UX is incredibly smooth, and the integration with our legacy ERP was flawless. A highly professional team.",
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'CTO, DataTech Analytics USA',
    content: "Finding an agency that truly understands both complex backend architecture and modern frontend design is rare. Qorynta excels at both. Highly recommended for enterprise projects.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-muted">
      {/* Top Divider */}
      <div className="section-divider absolute top-0 left-0 w-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <SectionLabel text="CLIENT FEEDBACK" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Don't Just Take Our Word For It
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((test, index) => (
            <GlassCard key={index} className="relative pt-12 p-8">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic">
                "{test.content}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-bold text-foreground">{test.name}</h4>
                <p className="text-xs text-muted-foreground">{test.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
