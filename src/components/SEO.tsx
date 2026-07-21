import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "https://www.qorynta.in/social-preview.jpg",
  children,
}: SEOProps) {
  const siteTitle = "Qorynta Services";
  const defaultDescription =
    "AI, machine learning, and custom software development agency in Ahmedabad, India.";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={canonical || "https://www.qorynta.in/"} />
      <meta
        property="og:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      {children}
    </Helmet>
  );
}
