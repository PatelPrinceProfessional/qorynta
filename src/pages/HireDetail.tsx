import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SEO from '@/components/SEO';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, CheckCircle2, Users, Code2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RevealContent } from '@/components/ui/RevealContent';

export const HireDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Format slug to Title Case (e.g., react-developers -> React Developers)
  const formatTitle = (s: string) => s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const roleName = slug ? formatTitle(slug) : 'Developers';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const benefits = [
    "Top 1% pre-vetted engineering talent",
    "Timezone overlap for daily stand-ups",
    "Seamless integration with your internal team",
    "Flexible scaling (ramp up or down as needed)",
    "Rigorous code quality and architectural standards",
    "Transparent pricing with no hidden overhead"
  ];

  return (
    <>
      {slug === 'ai-ml-experts' ? (
        <SEO
          exactTitle={true}
          title="Hire AI & ML Engineers India | $25–49/hr | Clutch Verified | Qorynta"
          description="Hire dedicated AI and ML engineers from Qorynta. Python, TensorFlow, PyTorch, LangChain & OpenAI specialists. Clutch verified at $25–49/hr. NDA first. Start in 48 hours."
          canonical="https://www.qorynta.in/hire/ai-ml-experts"
        />
      ) : slug === 'flutter-developers' ? (
        <SEO
          exactTitle={true}
          title="Hire Flutter Developers India | $25–49/hr | Clutch Verified | Qorynta"
          description="Hire dedicated Flutter developers from Qorynta. 3+ years experience, Clutch verified at $25–49/hr. iOS & Android from one codebase. Start in 48 hours. NDA included."
          canonical="https://www.qorynta.in/hire/flutter-developers"
        />
      ) : slug === 'react-developers' ? (
        <SEO
          exactTitle={true}
          title="Hire React Developers India | $25–49/hr | Senior Engineers | Qorynta"
          description="Hire senior React developers from India at $25–49/hr. Next.js, TypeScript & Node.js specialists. Clutch verified. Dedicated engineers, NDA first, 48-hour onboarding."
          canonical="https://www.qorynta.in/hire/react-developers"
        />
      ) : (
        <SEO
          title={`Hire ${roleName} | Qorynta Services Team Augmentation`}
          description={`Hire elite, pre-vetted ${roleName} to scale your engineering team rapidly.`}
          canonical={`https://www.qorynta.in/hire/${slug}`}
        />
      )}

      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-900/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <ScrollReveal className="lg:w-1/2">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 text-sm font-black tracking-wider uppercase mb-6">
                  Team Augmentation
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 tracking-tight leading-[1.1]">
                  Hire Elite <br />
                  <span className="text-primary">{roleName}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
                  Scale your engineering capacity instantly. We provide senior-level {roleName} who integrate seamlessly into your agile workflows and ship code from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] px-8 h-14 text-base overflow-hidden group">
                    <Link to="/contact">
                      <RevealContent>
                        Request Profiles <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </RevealContent>
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="lg:w-1/2 w-full">
                <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                  <h3 className="text-2xl font-black text-foreground mb-8 relative z-10">Why Choose Our {roleName}?</h3>
                  <div className="space-y-6 relative z-10">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <p className="text-foreground font-medium text-lg">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {slug === 'ai-ml-experts' && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              
              <ScrollReveal className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Why Hire AI & Machine Learning Engineers from Qorynta?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The artificial intelligence landscape is evolving at an unprecedented pace, and finding top-tier engineering talent capable of building production-grade AI systems is a massive challenge. At Qorynta, we completely eliminate the grueling recruitment process by providing you with elite, rigorously pre-vetted AI and Machine Learning experts who are ready to integrate into your team immediately. Whether you need an experienced machine learning engineer to architect a complex recommendation engine, a data scientist to build predictive analytics models from the ground up, or an LLM specialist to integrate generative AI and RAG (Retrieval-Augmented Generation) pipelines into your enterprise SaaS product, our talent pool delivers. We do not just provide coders; we provide strategic technical partners who understand how to deploy highly accurate, scalable AI solutions while maintaining strict data governance and optimizing cloud compute costs.
                </p>
              </ScrollReveal>

              <ScrollReveal className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6">The "Why Qorynta" Advantage</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Immediate Availability:</strong> Bypass months of interviewing. Our elite AI engineers can be fully onboarded and contributing code within 48 hours.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Rigorous Vetting Process:</strong> Only the top 1% of applicants pass our exhaustive technical assessments, algorithmic challenges, and system design interviews.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Timezone Synchronization:</strong> We provide dedicated overlap hours (EST/PST/GMT) to ensure seamless communication during your daily agile stand-ups.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Strict IP Protection:</strong> You maintain 100% ownership of all source code, models, and data, secured by ironclad NDAs signed before Day 1.</span></li>
                </ul>
              </ScrollReveal>

              <ScrollReveal className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-6">Expertise Across the Modern AI Tech Stack</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our AI and ML experts are proficient in the most advanced industry frameworks and cloud infrastructures. They write clean, optimized <strong>Python</strong> and <strong>C++</strong>, and construct sophisticated neural networks utilizing <strong>TensorFlow</strong>, <strong>PyTorch</strong>, and <strong>Keras</strong>. For generative AI workloads, they expertly leverage <strong>OpenAI APIs</strong>, <strong>Anthropic</strong>, and <strong>Hugging Face</strong> transformers, orchestrated through robust <strong>LangChain</strong> or <strong>LlamaIndex</strong> pipelines. All deployments are masterfully managed via <strong>Docker</strong> and <strong>Kubernetes</strong> on <strong>AWS SageMaker</strong>, <strong>GCP Vertex AI</strong>, or <strong>Azure ML</strong>, utilizing scalable vector databases like <strong>Pinecone</strong> or <strong>Milvus</strong>.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h3 className="text-2xl font-bold text-foreground mb-6">How We Work: The 4-Step Onboarding Process</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">1. Requirements Gathering</h4>
                    <p className="text-muted-foreground">We jump on a quick discovery call to understand your specific technical needs, tech stack, and ideal candidate profile.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">2. Candidate Matching</h4>
                    <p className="text-muted-foreground">Within 24 hours, we present 2-3 highly curated profiles of pre-vetted AI engineers perfectly matched to your specific project requirements.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">3. Technical Interview</h4>
                    <p className="text-muted-foreground">You conduct a final technical interview to ensure a perfect cultural fit and verify their advanced machine learning expertise.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    <h4 className="font-bold text-foreground">4. Immediate Onboarding</h4>
                    <p className="text-muted-foreground">The selected engineer signs NDAs, integrates into your Slack/Jira, and begins contributing production-ready code immediately.</p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </section>
        )}

        {slug === 'flutter-developers' && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <ScrollReveal className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Why Hire Dedicated Flutter Developers from Qorynta?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Building native apps for both iOS and Android traditionally required two distinct engineering teams, effectively doubling your costs and slowing down time-to-market. Flutter changes that paradigm, allowing you to compile native ARM code for both platforms from a single Dart codebase. However, writing performant Flutter code requires deep expertise in State Management (BLoC, Riverpod), custom animations, and native bridging. At Qorynta, we provide you with dedicated, Clutch-verified Flutter experts who have successfully shipped dozens of production apps. Our developers integrate seamlessly into your team, working in your timezone and ensuring your app runs flawlessly at 60-120 FPS.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Flutter Expertise</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Advanced State Management:</strong> Mastery of BLoC, Riverpod, and Provider for scalable app architecture.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Custom Animations:</strong> Creating fluid, 60fps custom animations using Flutter's robust animation library.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Native Integrations:</strong> Writing platform-specific channels (Kotlin/Swift) for deep hardware access when required.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>CI/CD Pipelines:</strong> Setting up automated testing and deployments via Codemagic, Fastlane, and Bitrise.</span></li>
                </ul>
              </ScrollReveal>
            </div>
          </section>
        )}

        {slug === 'react-developers' && (
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <ScrollReveal className="mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Why Hire Senior React Developers from Qorynta?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  React is the industry standard for building dynamic, high-performance web applications. But poorly architected React apps suffer from excessive re-renders, sluggish load times, and tangled component states. Our senior React developers bring deep expertise in React 18, Server-Side Rendering (SSR) via Next.js, and strictly typed enterprise architecture using TypeScript. When you hire from Qorynta, you get engineers capable of building scalable, SEO-optimized frontends that effortlessly handle complex business logic and real-time data flows.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our React & Frontend Tech Stack</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Frameworks & Architectures:</strong> React 18, Next.js (App Router), Vite, and Micro-frontends.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>State & Data Fetching:</strong> Redux Toolkit, Zustand, React Query (TanStack), and Apollo GraphQL.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Type Safety:</strong> Enforcing strict TypeScript paradigms to drastically reduce runtime bugs.</span></li>
                  <li className="flex gap-3"><div className="w-6 h-6 shrink-0 bg-primary/20 rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary"/></div><span className="text-muted-foreground"><strong>Performance Optimization:</strong> Code splitting, memorization techniques (useMemo/useCallback), and Core Web Vitals optimization.</span></li>
                </ul>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Engagement Models */}
        <section className="py-24 bg-muted/30 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Flexible Engagement Models</h2>
              <p className="text-lg text-muted-foreground">Hire {roleName} on your terms.</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1} className="bg-card p-8 rounded-3xl border border-border/50 text-center hover:border-primary/50 transition-colors">
                <Users className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Dedicated Team</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">A full squad of {roleName} managed by a dedicated tech lead, acting as an extension of your company.</p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} className="bg-card p-8 rounded-3xl border border-border/50 text-center hover:border-primary/50 transition-colors relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <Code2 className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Staff Augmentation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Hire individual {roleName} to plug specific skill gaps in your existing engineering team.</p>
              </ScrollReveal>

              <ScrollReveal delay={0.3} className="bg-card p-8 rounded-3xl border border-border/50 text-center hover:border-primary/50 transition-colors">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">Hourly Retainer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Need part-time help? Hire our {roleName} on a flexible monthly block of hours for maintenance.</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>

                </>
  );
};

export default HireDetail;
