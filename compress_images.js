import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src', 'assets', 'dokumentasi');
const outputDir = path.join(__dirname, 'public', 'dokumentasi');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    // Resize width to max 1200px and compress to webp
    sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Compressed: ${file} -> .webp`))
      .catch(err => console.error(`Error processing ${file}:`, err.message));
  }
});
