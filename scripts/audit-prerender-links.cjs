#!/usr/bin/env node
'use strict';
// Read-only InchToMilez prerendered internal link audit. Node built-ins only.
const fs = require('node:fs');
const path = require('node:path');
const root = process.cwd();
const host = 'www.inchtomilez.com';
const sitemap = path.join(root,'public','sitemap.xml');
const candidates = [path.join(root,'build'),path.join(root,'.vercel','output','static')];
const output = path.join(root,'prerender-links-audit.json');
if (!fs.existsSync(sitemap)) { console.error('Missing public/sitemap.xml'); process.exit(2); }
const xml = fs.readFileSync(sitemap,'utf8');
const locs = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m => m[1].trim().replace(/&amp;/g,'&'));
function normalize(p) { try { return decodeURI(p).replace(/\/{2,}/g,'/').replace(/\/$/,'') || '/'; } catch { return p.replace(/\/$/,'') || '/'; } }
const urls = new Map();
for (const value of locs) {
  try { const u=new URL(value); if(u.hostname!==host) throw Error('Non-www sitemap hostname'); urls.set(normalize(u.pathname),value); }
  catch(e) { console.error(`Invalid sitemap entry ${value}: ${e.message}`); process.exit(2); }
}
if (!urls.size) { console.error('No sitemap URLs found'); process.exit(2); }
const found = [];
for (const dir of candidates) {
  if(!fs.existsSync(dir)) continue;
  let count=0;
  for(const p of urls.keys()) if(fs.existsSync(path.join(dir,p.slice(1),'index.html')) || (p==='/'&&fs.existsSync(path.join(dir,'index.html')))) count++;
  found.push({dir,count});
}
found.sort((a,b)=>b.count-a.count);
if(!found.length || found[0].count===0) { console.error('No prerendered HTML found. Run in GitHub after npm run build:seo; nothing was modified.'); process.exit(2); }
const dir=found[0].dir;
const inbound=new Map([...urls.keys()].map(k=>[k,new Set()]));
const missingHtml=[],badInternal=new Map(),externalHost=[],notLinkable=[];
let links=0,htmlRead=0;
for(const route of urls.keys()) {
  const file=path.join(dir,route.slice(1),'index.html');
  if(!fs.existsSync(file)){missingHtml.push(route);continue;}
  const html=fs.readFileSync(file,'utf8'); htmlRead++;
  const anchors=[...html.matchAll(/<a\b[^>]*\bhref\s*=\s*(["'])(.*?)\1/gi)].map(m=>m[2].replace(/&amp;/g,'&'));
  if(anchors.length===0) notLinkable.push(route);
  for(const href of anchors) {
    if(!href || href.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    let u;try {u=new URL(href,urls.get(route));}catch {continue;}
    if(!['http:','https:'].includes(u.protocol)) continue;
    if(u.hostname==='inchtomilez.com') externalHost.push({from:route,href});
    if(!['inchtomilez.com',host].includes(u.hostname))continue;
    links++;
    const target=normalize(u.pathname);
    if(urls.has(target)) {if(target!==route)inbound.get(target).add(route);continue;}
    // Assets, admin app routes, hash-only and other non-sitemap pages need separate analysis.
    if(/^\/(admin|api|assets|pwa)(\/|$)/.test(target) || /\.[a-z0-9]{2,6}$/i.test(target))continue;
    const key=`${route} => ${target}`;
    badInternal.set(key,{source:route,target,exampleHref:href,classification:'not-in-sitemap; check route and intended indexability'});
  }
}
const noIncoming=[...inbound].filter(([p,s])=>p!=='/'&&s.size===0).map(([p])=>p);
const lowIncoming=[...inbound].filter(([p,s])=>p!=='/'&&s.size>0&&s.size<=2).map(([p,s])=>({path:p,inboundSourcePages:s.size}));
const result={generatedAt:new Date().toISOString(),note:'Read-only audit. Orphan candidates mean no inbound <a href> from sitemap HTML; navigation via JS, non-sitemap pages and external links are not evaluated. Not-in-sitemap links are NOT confirmed broken.',htmlDirectory:path.relative(root,dir),sitemapUrls:urls.size,htmlRead,missingHtml,internalLinksScanned:links,orphanCandidates:noIncoming,lowInboundCandidates:lowIncoming,notInSitemapLinks:[...badInternal.values()],nonWwwLinks:externalHost,htmlPagesWithNoAnchors:notLinkable};
fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');
console.log(`READ-ONLY LINK AUDIT: HTML ${htmlRead}/${urls.size}; orphan candidates ${noIncoming.length}; non-sitemap link pairs ${badInternal.size}; non-www links ${externalHost.length}`);
console.log(`Report: ${output}`);
// Only truly missing build HTML should fail this gate. All link findings are review items.
if(missingHtml.length){console.error(`Missing ${missingHtml.length} prerendered HTML files`);process.exitCode=1;}
