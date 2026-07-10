import { Helmet } from 'react-helmet';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Qorynta Services</title>
        <meta name="description" content="Terms of Service for Qorynta Services." />
      </Helmet>

      
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8">Terms of Service</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">


              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Agreement to Terms</h2>
              <p className="mb-6">
                By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Intellectual Property Rights</h2>
              <p className="mb-6">
                Other than the content you own, under these Terms, Qorynta Services and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website. All code, design, and architecture produced during client engagements are subject to the specific Master Services Agreement (MSA) signed between Qorynta Services and the client.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Restrictions</h2>
              <p className="mb-4">You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Publishing any Website material in any other media without prior consent.</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                <li>Using this Website in any way that impacts user access to this Website.</li>
                <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. No Warranties</h2>
              <p className="mb-6">
                This Website is provided "as is," with all faults, and Qorynta Services expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">5. Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall Qorynta Services, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Qorynta Services, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">6. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at: <br />
                <strong>Email:</strong> qorynta@gmail.com
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>

          </>
  );
};

export default TermsOfService;
