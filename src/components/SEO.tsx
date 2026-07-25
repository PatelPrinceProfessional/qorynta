import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  exactTitle?: boolean;
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = "https://www.qorynta.in/social-preview.jpg",
  exactTitle = false,
  children,
}: SEOProps) {
  const siteTitle = "Qorynta Services";
  const defaultDescription =
    "AI, machine learning, and custom software development agency in Ahmedabad, India.";
    
  const finalTitle = exactTitle && title ? title : title ? `${title} | ${siteTitle}` : siteTitle;

  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qorynta.in" }
  ];

  let currentUrl = "https://www.qorynta.in";
  pathSegments.forEach((segment, index) => {
    currentUrl += `/${segment}`;
    
    // Format name: capitalize and replace dashes with spaces
    const name = segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    breadcrumbItems.push({
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: currentUrl
    });
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };


  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={canonical || "https://www.qorynta.in/"} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Breadcrumb Schema for all pages */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {children}
    </Helmet>
  );
}
