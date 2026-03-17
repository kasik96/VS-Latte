import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const snippetsPath = resolve(__dirname, '../snippets/snippets.json');

let raw;
try {
  raw = readFileSync(snippetsPath, 'utf8');
} catch (err) {
  console.error(`ERROR: Could not read ${snippetsPath}: ${err.message}`);
  process.exit(1);
}

// Strip // line comments (JSONC format)
const stripped = raw.replace(/\/\/[^\n]*/g, '');

let snippets;
try {
  snippets = JSON.parse(stripped);
} catch (err) {
  console.error(`ERROR: snippets.json is not valid JSON: ${err.message}`);
  process.exit(1);
}

let errors = 0;
for (const [name, snippet] of Object.entries(snippets)) {
  if (typeof snippet.prefix !== 'string') {
    console.error(`ERROR: snippet "${name}" missing or invalid "prefix" (expected string)`);
    errors++;
  }
  if (typeof snippet.body !== 'string' && !Array.isArray(snippet.body)) {
    console.error(`ERROR: snippet "${name}" missing or invalid "body" (expected string or array)`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n${errors} snippet validation error(s) found.`);
  process.exit(1);
}

console.log(`OK: ${Object.keys(snippets).length} snippets validated successfully.`);
