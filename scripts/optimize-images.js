import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];

const optimizeImages = async () => {
  console.log('🚀 Starting Image Optimization Process...');
  
  const files = fs.readdirSync(PUBLIC_DIR);
  let optimizedCount = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (SUPPORTED_FORMATS.includes(ext)) {
      const filePath = path.join(PUBLIC_DIR, file);
      const fileName = path.basename(file, ext);
      
      const webpPath = path.join(PUBLIC_DIR, `${fileName}.webp`);
      const avifPath = path.join(PUBLIC_DIR, `${fileName}.avif`);

      try {
        // Convert to WebP
        if (!fs.existsSync(webpPath)) {
          await sharp(filePath)
            .webp({ quality: 80, effort: 6 }) // effort 6 gives better compression
            .toFile(webpPath);
          console.log(`✅ Converted to WebP: ${file}`);
          optimizedCount++;
        }

        // Convert to AVIF (smaller but slower)
        if (!fs.existsSync(avifPath)) {
          await sharp(filePath)
            .avif({ quality: 70, effort: 4 })
            .toFile(avifPath);
          console.log(`✅ Converted to AVIF: ${file}`);
          optimizedCount++;
        }
      } catch (err) {
        console.error(`❌ Failed to optimize ${file}:`, err);
      }
    }
  }

  console.log(`🎉 Optimization Complete! Generated ${optimizedCount} new modern formats.`);
};

optimizeImages();
