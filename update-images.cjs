const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'insights.ts');
let content = fs.readFileSync(filePath, 'utf8');

const imageUpdates = {
  'what-is-an-ai-agent': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  'ai-chatbot-customer-support': 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=1200&q=80',
  'generative-ai-for-ecommerce': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
  'custom-ai-development-cost': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  'llm-vs-traditional-ml': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'react-vs-nextjs-for-saas': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
  'react-native-vs-flutter': 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80',
  'ai-for-fintech-overview': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
  'ai-for-healthcare-overview': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
};

for (const [slug, newImage] of Object.entries(imageUpdates)) {
  const regex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?featuredImage:\\s*['"])([^'"]+)(['"])`);
  content = content.replace(regex, `$1${newImage}$3`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Images updated successfully');
