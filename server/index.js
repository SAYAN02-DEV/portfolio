import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();

// Proper __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Prefer Vite's default output folder `dist`, fall back to `build` if present
const distDir = path.join(__dirname, '..', 'dist');
const buildDir = path.join(__dirname, '..', 'build');
const staticDir = fs.existsSync(distDir) ? distDir : buildDir;

if (!fs.existsSync(staticDir)) {
  console.warn(`Warning: static directory not found: ${staticDir}. Make sure you built the project.`);
}

// Serve static files from the chosen directory
app.use(express.static(staticDir));

// Catch-all route to serve index.html for SPA routing
// Use '/*' instead of '*' to avoid path-to-regexp parsing issues
// Use a RegExp route to match any path (avoids path-to-regexp parsing issues with '*' in strings)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, serving from ${staticDir}`);
});
