import SEO from '@/components/SEO';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Qorynta Services"
        description="Privacy policy and data handling practices at Qorynta Services."
        canonical="https://www.qorynta.in/privacy-policy"
      />

      
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8">Privacy Policy</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">


              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Introduction</h2>
              <p className="mb-6">
                Qorynta Services ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Fill out contact forms or lead generation forms (e.g., ROI Calculator)</li>
                <li>Apply for a job on our Careers page</li>
                <li>Communicate with us via email, phone, or WhatsApp</li>
              </ul>
              <p className="mb-6">The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include names, phone numbers, email addresses, job titles, and company names.</p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use personal information collected via our website for a variety of business purposes described below:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To facilitate the delivery of services to you.</li>
                <li>To respond to your inquiries and offer support.</li>
                <li>To send you marketing and promotional communications (if you have opted in).</li>
                <li>To send you technical architecture proposals and ROI reports.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Sharing Your Information</h2>
              <p className="mb-6">
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Security of Your Information</h2>
              <p className="mb-6">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Contact Us</h2>
              <p className="mb-6">
                If you have questions or comments about this Privacy Policy, please contact us at: <br />
                <strong>Email:</strong> qorynta@gmail.com
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>

          </>
  );
};

export default PrivacyPolicy;
