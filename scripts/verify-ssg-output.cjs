#!/usr/bin/env node
'use strict';
/* Run ONLY at the end of build:seo, against final static HTML. No source edits. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const ROOT=path.resolve(__dirname,'..'), OUT=path.join(ROOT,'build');
const urls=[...fs.readFileSync(path.join(ROOT,'public','sitemap.xml'),'utf8').matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim().replace(/&amp;/g,'&'));
const fail=[],warn=[],seenTitles=new Map(),seenDescriptions=new Map();
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const text=s=>s.replace(/<[^>]*>/g,' ').replace(/&(?:amp|nbsp);/g,' ').replace(/\s+/g,' ').trim();
const tags=(html,name)=>[...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(x=>x[0]);
const attr=(tag,key)=>{const m=tag.match(new RegExp(`\\b${key}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,'i'));return m?(m[1]??m[2]??m[3]??''):''};
const norm=url=>{const u=new URL(url);return u.origin+u.pathname.replace(/\/$/,'')};
if(urls.length===0)fail.push('Sitemap contains no URLs');
if(new Set(urls).size!==urls.length)fail.push(`Duplicate sitemap URLs: ${urls.length} entries, ${new Set(urls).size} unique`);
const records=[];
for(const url of urls){
 let u;try{u=new URL(url)}catch{fail.push('Invalid sitemap URL '+url);continue}
 if(u.origin!=='https://www.inchtomilez.com'||u.search||u.hash){fail.push('Invalid sitemap host/query '+url);continue}
 let p;try{p=decodeURIComponent(u.pathname)}catch{fail.push('Invalid path encoding '+url);continue}
 if(p.includes('\\')||p.split('/').includes('..')||!/^[a-zA-Z0-9/_-]*$/.test(p)){fail.push('Unsafe sitemap path '+url);continue}
 const slug=p.replace(/^\/+|\/+$/g,'');const file=path.join(OUT,slug,'index.html');
 if(!fs.existsSync(file)){fail.push('Missing generated HTML '+url);continue}
 const html=fs.readFileSync(file,'utf8');
 const tt=html.match(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i);const title=tt?text(tt[1]):'';
 const descs=tags(html,'meta').filter(t=>attr(t,'name').toLowerCase()==='description');
 const description=descs.length===1?attr(descs[0],'content').trim():'';
 const canon=tags(html,'link').filter(t=>attr(t,'rel').toLowerCase().split(/\s+/).includes('canonical'));
 const canonical=canon.length===1?attr(canon[0],'href'):'';
 const h1=[...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/gi)].map(m=>text(m[1])).filter(Boolean);
 const robots=tags(html,'meta').filter(t=>['robots','googlebot'].includes(attr(t,'name').toLowerCase())).map(t=>attr(t,'content'));
 const body=html.match(/<body\b[^>]*>([\s\S]*?)<\/body\s*>/i)?.[1]||'';
 const bodyText=text(body.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi,'').replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi,''));
 if(title.length<12)fail.push('Missing/short title '+url);
 if(descs.length!==1||description.length<40)fail.push('Missing/short/duplicate description '+url);
 if(canon.length!==1||norm(canonical||'https://invalid.example/')!==norm(url))fail.push('Canonical missing/incorrect '+url);
 if(h1.length!==1)fail.push(`H1 count ${h1.length} ${url}`);
 if(robots.some(r=>/(?:^|[,\s])(noindex|none)(?:$|[,\s])/i.test(r)))fail.push('Noindex directive '+url);
 if(bodyText.length<100)fail.push('Insufficient prerendered body content '+url);
 for(const [val,kind,map] of [[title,'title',seenTitles],[description,'description',seenDescriptions]]){if(val){if(map.has(val))warn.push(`Duplicate ${kind}: ${url} and ${map.get(val)}`);else map.set(val,url)}}
 const ld=[...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
 for(const x of ld){try{JSON.parse(x[1])}catch{fail.push('Invalid JSON-LD '+url)}}
 records.push({url,file:path.relative(ROOT,file).replace(/\\/g,'/'),title,h1:h1[0]||'',canonical,bodyTextLength:bodyText.length});
}
const reportDir=path.join(ROOT,'seo-prerender-report');fs.mkdirSync(reportDir,{recursive:true});
const report={checked:urls.length,htmlFound:records.length,errors:fail,warnings:warn,pages:records};
fs.writeFileSync(path.join(reportDir,'final-ssg-gate.json'),JSON.stringify(report,null,2)+'\n');
if(fail.length){console.error(`FINAL SSG FAILED: ${fail.length} errors`,fail.slice(0,35));process.exit(2)}
// The H1 CSV patch changes rendered HTML; refresh manifest hashes only after this complete gate passes.
const manifest=path.join(reportDir,'manifest.json');
if(fs.existsSync(manifest)){
 const m=JSON.parse(fs.readFileSync(manifest,'utf8'));
 for(const f of m.files||[]){const abs=path.resolve(ROOT,f.path);if(!abs.startsWith(OUT+path.sep)&&abs!==path.join(OUT,'index.html'))throw Error('Unsafe manifest path');f.afterHash=hash(fs.readFileSync(abs))}
 fs.writeFileSync(manifest,JSON.stringify(m,null,2)+'\n');
}
console.log(`FINAL SSG PASS: ${records.length}/${urls.length} prerendered pages; warnings: ${warn.length}`);