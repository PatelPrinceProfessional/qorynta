import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { globSync } from 'glob';

async function convertImages() {
  const imageFiles = globSync('**/*.{jpg,jpeg,png}', { 
    ignore: ['node_modules/**', 'dist/**'],
    cwd: process.cwd()
  });

  for (const file of imageFiles) {
    const ext = path.extname(file);
    if (ext === '.webp') continue;

    const newPath = file.replace(ext, '.webp');
    console.log(`Converting ${file} to ${newPath}`);
    
    try {
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(newPath);
      
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err);
    }
  }
}

convertImages();
