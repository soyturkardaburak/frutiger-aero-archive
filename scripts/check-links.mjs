import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const htmlFiles = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}

function decode(url) {
  try {
    return decodeURIComponent(url);
  } catch {
    return url;
  }
}

await walk(dist);
const failures = [];
const seen = new Set();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (/lorem ipsum/i.test(html)) failures.push(`${file} contains lorem ipsum`);
  const refs = html.match(/(?:href|src)="([^"]+)"/g) ?? [];
  for (const ref of refs) {
    const raw = ref.slice(ref.indexOf('"') + 1, -1);
    if (raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('mailto:') || raw.startsWith('data:') || raw.startsWith('#')) {
      continue;
    }
    const withoutHash = raw.split('#')[0].split('?')[0];
    if (!withoutHash) continue;
    const baseDir = path.dirname(file);
    const target = withoutHash.startsWith('/')
      ? path.join(dist, decode(withoutHash.replace(/^\/frutiger-aero-archive/, '')))
      : path.resolve(baseDir, decode(withoutHash));
    const key = `${file} -> ${target}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const candidates = [target];
    if (!path.extname(target)) {
      candidates.push(path.join(target, 'index.html'));
      candidates.push(`${target}.html`);
    }
    let ok = false;
    for (const candidate of candidates) {
      try {
        await readFile(candidate);
        ok = true;
        break;
      } catch {
        ok = false;
      }
    }
    if (!ok) failures.push(`${path.relative(dist, file)} -> ${raw}`);
  }
}

if (failures.length) {
  console.error(failures.slice(0, 40).join('\n'));
  console.error(`${failures.length} link problems`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} HTML files.`);
