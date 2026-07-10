import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most MVP builds take 8-12 weeks from kickoff to launch. For complex enterprise platforms, we establish phased deliverables, usually releasing the first phase within 3 months and iterating continuously."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes. We offer continuous integration, monitoring, and dedicated maintenance retainers to ensure your application remains secure, up-to-date, and capable of scaling as your user base grows."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We focus on modern, scalable stacks. Our core expertise includes React, Next.js, Node.js, Python (for AI/ML), React Native, and Flutter. We deploy primarily on AWS and Google Cloud."
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "We use agile methodologies with weekly sprints. You'll have a dedicated project manager, access to a shared Slack channel, and weekly video standups to review progress and test the latest build."
  },
  {
    question: "Can you integrate AI into our existing software?",
    answer: "Absolutely. We frequently help companies retrofit existing applications with LLM capabilities, predictive analytics, and automated data pipelines to improve efficiency and user experience."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel text="COMMON QUESTIONS" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about partnering with Qorynta Services.
          </p>
        </ScrollReveal>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/40 py-2">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary hover:no-underline transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
