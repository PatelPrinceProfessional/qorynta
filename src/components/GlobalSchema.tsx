import { Helmet } from "react-helmet-async";

export default function GlobalSchema() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qorynta Services",
    url: "https://www.qorynta.in",
    logo: "https://www.qorynta.in/logo.webp",
    sameAs: [
      "https://www.linkedin.com/company/qorynta",
      "https://github.com/qorynta",
      "https://clutch.co/profile/qorynta-services",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "qorynta@gmail.com",
      telephone: "+91-9316157949",
      areaServed: ["US", "UK", "UAE", "IN"],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Qorynta Services",
    url: "https://www.qorynta.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.qorynta.in/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify([orgSchema, webSiteSchema])}
      </script>
    </Helmet>
  );
}
