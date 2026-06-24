import { ServicesGrid } from "../components/sections/ServicesGrid";
import { CtaBanner } from "../components/sections/CtaBanner";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 bg-bg-primary">
      <main>
        <div className="text-center pt-12 pb-8 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-lg text-text-secondary">We build scalable, robust, and beautiful digital products for modern businesses.</p>
        </div>
        <ServicesGrid />
        <CtaBanner />
      </main>
    </div>
  )
}
