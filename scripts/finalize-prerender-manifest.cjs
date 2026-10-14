#!/usr/bin/env node
'use strict';
/* Reconcile prerender hashes after approved H1 HTML modifications.
   This runs only inside the SEO build, after the final site-output gate.
   Original page backups and beforeHash values remain untouched. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const manifestFile = path.join(ROOT, 'seo-prerender-report', 'manifest.json');
const hash = b => crypto.createHash('sha256').update(b).digest('hex');
if (!fs.existsSync(manifestFile)) throw Error('Missing prerender manifest');
const m = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
if (m.state !== 'applied' || !Array.isArray(m.files) || m.files.length === 0) {
  throw Error('Cannot finalize missing, empty or unapplied manifest');
}
const seen = new Set();
let changed = 0;
for (const entry of m.files) {
  if (typeof entry.path !== 'string' || typeof entry.afterHash !== 'string') throw Error('Invalid manifest entry');
  const absolute = path.resolve(ROOT, entry.path);
  if (!absolute.startsWith(BUILD + path.sep) || !absolute.endsWith('.html') || seen.has(absolute)) {
    throw Error('Invalid or duplicate manifest path: ' + entry.path);
  }
  seen.add(absolute);
  if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) throw Error('Missing generated HTML: ' + entry.path);
  const currentHash = hash(fs.readFileSync(absolute));
  if (currentHash !== entry.afterHash) {
    if (!entry.originalPrerenderHash) entry.originalPrerenderHash = entry.afterHash;
    entry.afterHash = currentHash;
    changed++;
  }
}
// Write atomically; do not alter the original page backups or rollback hashes.
const temp = manifestFile + '.tmp-' + process.pid;
try {
  fs.writeFileSync(temp, JSON.stringify(m, null, 2) + '\n', 'utf8');
  fs.renameSync(temp, manifestFile);
} finally {
  if (fs.existsSync(temp)) fs.unlinkSync(temp);
}
console.log('FINAL HTML HASHES RECONCILED:', m.files.length, 'pages;', changed, 'updated after H1 verification');
