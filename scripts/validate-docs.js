const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const docsDir = path.join(root, 'docs');
const requiredDocs = [
  'architecture.html',
  'pipeline.html',
  'algorithm.html',
  'data-schema.html',
  'skills.html',
];

function fail(message) {
  console.error(`DOC VALIDATION FAILED: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(docsDir)) fail('docs directory is missing');

requiredDocs.forEach((file) => {
  const filePath = path.join(docsDir, file);
  if (!fs.existsSync(filePath)) fail(`${file} is missing`);
  const html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('<main') || !html.includes('<h1')) fail(`${file} must be a standalone HTML document`);
});

const app = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');
requiredDocs.forEach((file) => {
  if (!app.includes(`docs/${file}`)) fail(`app.js does not link docs/${file}`);
});

if (app.includes('MVP 限制</h3>') || app.includes('Pipeline 架构</h3>')) {
  fail('architecture article is still hard-coded in app.js');
}

console.log(`Validated ${requiredDocs.length} docs and app.js doc links.`);
