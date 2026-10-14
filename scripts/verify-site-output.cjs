#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const REPORT_DIR = path.join(ROOT, 'seo-prerender-report');
const DOMAIN = 'https://www.inchtomilez.com';
const errors = [];
const summary = { generated: new Date().toISOString(), sitemapCount: 0, expectedPages: [], actualPages: [], errors };
function fail(message) { errors.push(message); }
function normalize(u) {
  let url;
  try { url = new URL(u); } catch { throw Error('Invalid sitemap URL: ' + u); }
  if (url.origin !== DOMAIN || url.search || url.hash) throw Error('Unexpected sitemap origin/query/fragment: ' + u);
  const decoded = decodeURIComponent(url.pathname);
  if (decoded.includes('\\') || decoded.split('/').includes('..') || !/^\/[A-Za-z0-9_/-]*$/.test(decoded)) throw Error('Unsupported/unsafe sitemap path: ' + u);
  const pathname = decoded === '/' ? '/' : decoded.replace(/\/+$/, '');
  return pathname;
}
function htmlFor(p) { return p === '/' ? 'index.html' : p.slice(1) + '/index.html'; }
function listHtml(dir, rel = '') {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(ent => {
    const nextRel = path.posix.join(rel, ent.name);
    if (ent.isDirectory()) return listHtml(path.join(dir, ent.name), nextRel);
    if (ent.isFile() && ent.name === 'index.html') return [nextRel];
    return [];
  });
}
function attr(tag, name) { const m=tag.match(new RegExp('\\b'+name+'\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')','i')); return m ? (m[1] ?? m[2]) : ''; }
function tags(html, name) { return [...html.matchAll(new RegExp('<'+name+'\\b[^>]*>','gi'))].map(x => x[0]); }
function strip(s) {return s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&(?:amp|nbsp|#39|quot);/g,' ').replace(/\s+/g,' ').trim();}
let paths=[];
try {
  const xml=fs.readFileSync(path.join(ROOT,'public','sitemap.xml'),'utf8');
  const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim().replace(/&amp;/g,'&'));
  summary.sitemapCount=urls.length;
  if (!urls.length) fail('Sitemap is empty');
  paths=urls.map(normalize);
  if (new Set(paths).size !== paths.length) fail('Sitemap contains duplicate normalized paths');
} catch(e) {fail(e.message);}
const expected=new Set(paths.map(htmlFor));
const actual=listHtml(BUILD).map(s => s.replace(/\\/g,'/'));
summary.expectedPages=[...expected].sort();summary.actualPages=[...actual].sort();
for(const file of expected) if(!actual.includes(file))fail('Missing prerendered HTML: '+file);
for(const file of actual) if(!expected.has(file))fail('Unexpected generated route HTML: '+file);
const auditPath=path.join(REPORT_DIR,'audit.json');
if(!fs.existsSync(auditPath)) fail('Prerender audit.json missing');
else {
 try {
  const a=JSON.parse(fs.readFileSync(auditPath,'utf8'));
  if(a.summary?.checked !== paths.length || a.summary?.eligible !== paths.length || a.summary?.skipped !== 0) fail('Prerender audit coverage mismatch: '+JSON.stringify(a.summary));
  const audited=new Set();
  for(const p of a.pages||[]) {if(p.status!=='eligible')fail('Noneligible prerender audit entry: '+p.path); if(audited.has(p.path))fail('Duplicate audit route: '+p.path);audited.add(p.path);}
  if(audited.size!==paths.length) fail('Prerender audit route count mismatch');
  for(const p of paths) if(!audited.has(p))fail('Missing audited route: '+p);
  for(const p of audited) if(!paths.includes(p))fail('Unexpected audited route: '+p);
 }catch(e){fail('Could not verify prerender audit: '+e.message)}
}
for(let i=0;i<paths.length;i++) {
 const p=paths[i], rel=htmlFor(p), full=path.join(BUILD,...rel.split('/'));
 if(!fs.existsSync(full))continue;
 const html=fs.readFileSync(full,'utf8');
 const title=strip(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]||'');
 const descriptions=tags(html,'meta').filter(t=>attr(t,'name').toLowerCase()==='description');
 const canon=tags(html,'link').filter(t=>attr(t,'rel').toLowerCase().split(/\s+/).includes('canonical'));
 const h1=[...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(x=>strip(x[1])).filter(Boolean);
 const robots=tags(html,'meta').filter(t=>['robots','googlebot'].includes(attr(t,'name').toLowerCase()));
 const body=strip(html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1]||'');
 if(!title)fail('Missing title: '+p);
 if(descriptions.length!==1 || !attr(descriptions[0],'content').trim())fail('Missing/nonunique meta description: '+p);
 if(canon.length!==1)fail('Missing/nonunique canonical: '+p);
 else {try{if(normalize(attr(canon[0],'href'))!==p)fail('Canonical mismatch: '+p);}catch{fail('Invalid canonical: '+p)}}
 if(h1.length!==1)fail('H1 count '+h1.length+': '+p);
 if(robots.some(t=>/\b(noindex|none)\b/i.test(attr(t,'content'))))fail('Nonindexable robots meta: '+p);
 if(body.length<60)fail('Page HTML contains insufficient rendered body text: '+p);
 for(const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi))try{JSON.parse(match[1]);}catch{fail('Invalid JSON-LD: '+p)}
}
fs.mkdirSync(REPORT_DIR,{recursive:true});
fs.writeFileSync(path.join(REPORT_DIR,'phase1-deployment-gate.json'),JSON.stringify(summary,null,2)+'\n');
if(errors.length){console.error('PHASE 1 GATE FAILED:', errors.length, 'problems\n'+errors.slice(0,50).join('\n'));process.exit(2)}
console.log('PHASE 1 GATE PASSED:',paths.length,'sitemap URLs, all generated HTML matched, no unexpected routes');
