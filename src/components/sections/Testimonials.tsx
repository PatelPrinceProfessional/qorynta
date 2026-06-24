import { useState, useEffect } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { GlassCard } from "../ui/GlassCard";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Qorynta delivered our React Native app 2 weeks ahead of schedule. The code quality was exceptional — better than agencies we've paid 3x more.",
      name: "James R.",
      title: "CTO, UK SaaS Startup",
      flag: "🇬🇧",
      avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
      id: 2,
      quote: "From the first discovery call, they understood exactly what we needed. The ML fraud model they built outperforms our previous vendor's system.",
      name: "Priya S.",
      title: "Product Head, Mumbai FinTech",
      flag: "🇮🇳",
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    {
      id: 3,
      quote: "Clear communication, daily updates, and zero surprises on the invoice. Will definitely engage them for our next three projects.",
      name: "Michael T.",
      title: "Founder, Australian E-Commerce Brand",
      flag: "🇦🇺",
      avatar: "https://i.pravatar.cc/150?u=michael"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section className="py-24 relative overflow-hidden bg-bg-primary border-t border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] -z-10" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel text="CLIENT STORIES" className="justify-center flex" />
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[300px] sm:h-[250px] overflow-hidden">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-all duration-700 ease-in-out px-4",
                  idx === activeIndex 
                    ? "opacity-100 translate-x-0 pointer-events-auto" 
                    : idx < activeIndex 
                      ? "opacity-0 -translate-x-[50%] pointer-events-none"
                      : "opacity-0 translate-x-[50%] pointer-events-none"
                )}
              >
                <GlassCard className="h-full flex flex-col justify-center border-accent-cyan/10 bg-bg-surface/60">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-center text-lg md:text-xl italic text-text-primary mb-8 px-4 md:px-12 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-border object-cover"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <div className="font-bold text-text-primary flex items-center gap-2">
                        {testimonial.name} <span>{testimonial.flag}</span>
                      </div>
                      <div className="text-sm text-text-secondary">{testimonial.title}</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  idx === activeIndex 
                    ? "bg-accent-blue w-6" 
                    : "bg-border hover:bg-text-secondary"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
