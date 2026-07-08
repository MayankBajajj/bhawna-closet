import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = 'c:/Users/Mayank Bajaj/OneDrive/Desktop/Bhawna_closet/Bhumi_couture';

const scanDir = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        scanDir(fullPath);
      }
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.json')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.toLowerCase().includes('coordset') || content.toLowerCase().includes('coorset')) {
          const lines = content.split('\n');
          lines.forEach((line, idx) => {
            if (line.toLowerCase().includes('coordset') || line.toLowerCase().includes('coorset')) {
              console.log(`${path.relative(rootDir, fullPath)}:L${idx + 1}: ${line.trim()}`);
            }
          });
        }
      }
    }
  }
};

console.log('Scanning codebase for "coordset" and "coorset"...');
scanDir(rootDir);
