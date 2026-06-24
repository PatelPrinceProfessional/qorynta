import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { WhyUs } from "../components/sections/WhyUs";
import { Process } from "../components/sections/Process";
import { StatsBanner } from "../components/sections/StatsBanner";
import { CaseStudies } from "../components/sections/CaseStudies";
import { TechStack } from "../components/sections/TechStack";
import { Testimonials } from "../components/sections/Testimonials";
import { BlogTeaser } from "../components/sections/BlogTeaser";
import { CtaBanner } from "../components/sections/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <WhyUs />
        <Process />
        <StatsBanner />
        <CaseStudies />
        <TechStack />
        <Testimonials />
        <BlogTeaser />
        <CtaBanner />
      </main>
    </div>
  )
}
