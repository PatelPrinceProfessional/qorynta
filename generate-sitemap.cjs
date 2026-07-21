const fs = require('fs');
const path = require('path');

const domain = 'https://www.qorynta.in';
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
const insightsPath = path.join(__dirname, 'src', 'data', 'insights.ts');

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Static Pages
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/industries', priority: '0.9', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/case-studies', priority: '0.9', changefreq: 'weekly' },
    { url: '/insights', priority: '0.9', changefreq: 'daily' },
    { url: '/contact', priority: '0.8', changefreq: 'yearly' },
    { url: '/careers', priority: '0.7', changefreq: 'monthly' },
  ];

  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${domain}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // 2. Dynamic Insights Pages
  if (fs.existsSync(insightsPath)) {
    const fileContent = fs.readFileSync(insightsPath, 'utf-8');
    
    // Simple regex to parse slugs and dates and published flag
    // We assume published is true unless explicitly false
    const regex = /slug:\s*['"]([^'"]+)['"][\s\S]*?date:\s*['"]([^'"]+)['"](?:[\s\S]*?published:\s*(false|true))?/g;
    
    let match;
    while ((match = regex.exec(fileContent)) !== null) {
      const slug = match[1];
      const date = match[2];
      const publishedStr = match[3];
      
      const isPublished = publishedStr !== 'false';
      
      if (isPublished) {
        sitemap += `
  <url>
    <loc>${domain}/insights/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }
    }
  }

  sitemap += `\n</urlset>`;
  
  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
};

generateSitemap();
