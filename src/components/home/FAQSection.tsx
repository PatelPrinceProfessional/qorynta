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
    <section className="py-24 relative bg-gradient-to-b from-[#E3F2FF] to-[#F2FAF4] dark:bg-none dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-white/50 dark:bg-white/5 border border-[#99CAFF]/50 dark:border-white/10 text-[#0A2472] dark:text-primary text-sm font-[700] tracking-[2px] uppercase mb-6 backdrop-blur-md shadow-sm dark:shadow-none">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#00072D] dark:text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[#051650] dark:text-muted-foreground text-lg">
            Everything you need to know about partnering with <span className="font-[600] text-[#004EE0] dark:text-primary">Qorynta Services</span>.
          </p>
        </ScrollReveal>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="group border border-[#99CAFF]/50 dark:border-white/10 bg-[#FFFFFF] dark:bg-card rounded-[12px] shadow-[0px_4px_12px_rgba(5,22,80,0.02)] dark:shadow-sm px-6 py-2 transition-all duration-300 ease-in-out hover:border-[#99CAFF] hover:-translate-y-[2px] hover:shadow-[0px_8px_20px_rgba(0,78,224,0.08)] data-[state=open]:bg-gradient-to-b data-[state=open]:from-[#FFFFFF] data-[state=open]:to-[#E3F2FF] dark:data-[state=open]:from-card dark:data-[state=open]:to-card/80 data-[state=open]:border-[1.5px] data-[state=open]:border-[#004EE0] data-[state=open]:shadow-[0px_10px_25px_rgba(0,78,224,0.12)]"
            >
              <AccordionTrigger className="text-left text-lg font-[600] text-[#00072D] dark:text-foreground group-hover:text-[#004EE0] dark:group-hover:text-primary data-[state=open]:text-[#004EE0] hover:no-underline transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#051650] dark:text-muted-foreground text-base leading-[1.6] border-t border-[#99CAFF] dark:border-white/10 pt-4 mt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
