#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');
const root = process.cwd();
const site = 'https://www.inchtomilez.com';
const sitemapFile = path.join(root, 'public', 'sitemap.xml');
const buildRoot = path.join(root, 'build');
if (!fs.existsSync(sitemapFile) || !fs.existsSync(buildRoot)) {
 console.error('Missing public/sitemap.xml or build/. Run this only after build:seo.'); process.exit(1);
}
const sitemap = fs.readFileSync(sitemapFile, 'utf8');
const urls = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(x => x[1].trim().replace(/&amp;/g,'&'));
const issue = [];
const records = [];
function attr(tag, name) { const m = tag.match(new RegExp('\\b'+name+'\\s*=\\s*(?:"([^"]*)"|\'([^\']*)\')','i'));return m ? (m[1]??m[2]) : ''; }
function textOf(html, tag) { const m=html.match(new RegExp('<'+tag+'\\b[^>]*>([\\s\\S]*?)<\\/'+tag+'\\s*>','gi'));return m||[]; }
function report(url, why){issue.push({url,issue:why});}
if (urls.length !== 311) report('sitemap','Expected 311 sitemap URLs; found '+urls.length);
const seen = new Set();
for(const url of urls){
 let pathname;
 try { const u = new URL(url); if(u.origin !== site) report(url,'Noncanonical sitemap host');pathname=u.pathname; } catch {report(url,'Invalid sitemap URL');continue;}
 if(seen.has(pathname)) report(url,'Duplicate sitemap pathname'); seen.add(pathname);
 const segment=decodeURI(pathname).replace(/^\/+|\/+$/g,'');
 const candidates = segment ? [path.join(buildRoot,segment,'index.html'),path.join(buildRoot,segment+'.html')] : [path.join(buildRoot,'index.html')];
 const found=candidates.find(p=>fs.existsSync(p));
 if(!found){report(url,'Missing prerendered HTML');continue;}
 const html=fs.readFileSync(found,'utf8');
 const titleTags = textOf(html,'title');
 const h1Tags = textOf(html,'h1');
 const canonicalTags=[...html.matchAll(/<link\b[^>]*>/gi)].map(x=>x[0]).filter(t=>/\brel\s*=\s*["']canonical["']/i.test(t));
 const robotsTags=[...html.matchAll(/<meta\b[^>]*>/gi)].map(x=>x[0]).filter(t=>/^robots$/i.test(attr(t,'name')));
 const jsonLdTags=[...html.matchAll(/<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
 if(titleTags.length !== 1 || !titleTags[0].replace(/<[^>]*>/g,'').trim()) report(url,'Missing, empty, or multiple title tags: '+titleTags.length);
 if(h1Tags.length !== 1) report(url,'H1 count '+h1Tags.length);
 if(canonicalTags.length !== 1) report(url,'Canonical count '+canonicalTags.length);
 else {const c=attr(canonicalTags[0],'href');if(c !== site+pathname && c !== site+pathname.replace(/\/$/,'') && !(pathname==='/'&&c===site+'/')) report(url,'Non-self canonical: '+c);}
 if(robotsTags.some(t=>/\bnoindex\b/i.test(attr(t,'content')))) report(url,'Unexpected noindex');
 jsonLdTags.forEach((m,i)=>{try{JSON.parse(m[1]);}catch(e){report(url,'Invalid JSON-LD block '+(i+1)+': '+e.message);}});
 records.push({url,html: path.relative(root,found),titleCount:titleTags.length,h1Count:h1Tags.length,canonicalCount:canonicalTags.length,jsonLdCount:jsonLdTags.length});
}
const output = {generated:new Date().toISOString(), expected:311, sitemapUrls:urls.length, inspected:records.length, failures:issue.length, issues:issue, pages:records};
const outPath=path.join(root,'rendered-seo-audit.json');
fs.writeFileSync(outPath,JSON.stringify(output,null,2)+'\n');
console.log(`RENDERED SEO GATE: ${records.length}/${urls.length} HTML pages inspected; ${issue.length} findings. Report: rendered-seo-audit.json`);
for(const e of issue.slice(0,25)) console.error(' - '+e.url+': '+e.issue);
if(issue.length) process.exit(1);
