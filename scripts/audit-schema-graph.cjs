#!/usr/bin/env node
'use strict';
// Read-only structured-data inventory for InchToMilez prerendered HTML.
const fs=require('node:fs'),path=require('node:path');
const root=process.cwd(),site='https://www.inchtomilez.com';
const sitemap=path.join(root,'public','sitemap.xml'),build=path.join(root,'build');
if(!fs.existsSync(sitemap)||!fs.existsSync(build)) {console.error('Requires public/sitemap.xml and build/. Run only in GitHub after npm run build:seo.');process.exit(2);}
const xml=fs.readFileSync(sitemap,'utf8');
const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim().replace(/&amp;/g,'&'));
const findings=[],pages=[],totals={};
function add(url,code,detail){findings.push({url,code,detail});}
function nodesOf(value,out=[]){
 if(Array.isArray(value)){for(const item of value) nodesOf(item,out);return out;}
 if(!value||typeof value!=='object')return out;
 if(Array.isArray(value['@graph'])){for(const node of value['@graph'])nodesOf(node,out);return out;}
 // Top-level JSON-LD nodes only; embedded address/contactPoint aren't separate blocks.
 out.push(value);return out;
}
for(const url of urls){
 let u;try{u=new URL(url);if(u.origin!==site) add(url,'wrong-host',u.origin);}catch{add(url,'invalid-sitemap-url','Cannot parse URL');continue;}
 const pathname=decodeURI(u.pathname).replace(/^\/+|\/+$/g,'');
 const candidates=pathname?[path.join(build,pathname,'index.html'),path.join(build,pathname+'.html')]:[path.join(build,'index.html')];
 const file=candidates.find(fs.existsSync);if(!file){add(url,'missing-html','No prerendered HTML file');continue;}
 const html=fs.readFileSync(file,'utf8');
 const matches=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)].filter(m=>/\btype\s*=\s*['"]application\/ld\+json['"]/i.test(m[1]));
 const nodes=[];
 for(let i=0;i<matches.length;i++){
   try{nodesOf(JSON.parse(matches[i][2]),nodes);}catch(e){add(url,'invalid-jsonld',`Block ${i+1}: ${e.message}`);}
 }
 const typeCounts={},ids=new Map();
 for(const node of nodes){
   const types=Array.isArray(node['@type'])?node['@type']:[node['@type']||'(missing @type)'];
   for(const type of types){typeCounts[type]=(typeCounts[type]||0)+1;totals[type]=(totals[type]||0)+1;}
   const id=node['@id'];
   if(typeof id==='string'&&id){const last=ids.get(id);if(last) add(url,'duplicate-id',`${id} occurs in more than one top-level entity (${last} and ${types.join(',')})`);else ids.set(id,types.join(','));}
   if(!node['@type']) add(url,'missing-type','JSON-LD top-level node without @type');
 }
 const pageClass=u.pathname==='/'?'home':/^\/blogs\//.test(u.pathname)?'blog':/^\/services\//.test(u.pathname)?'service':/^\/industries\//.test(u.pathname)?'industry':'other';
 pages.push({url,pageClass,blocks:matches.length,entities:nodes.length,types:typeCounts,ids:[...ids.keys()]});
}
const typeSummary=Object.entries(totals).sort((a,b)=>b[1]-a[1]).map(([type,count])=>({type,count}));
const summary={sitemapUrls:urls.length,inspected:pages.length,totalJsonLdBlocks:pages.reduce((a,p)=>a+p.blocks,0),totalTopLevelEntities:pages.reduce((a,p)=>a+p.entities,0),findings:findings.length,types:typeSummary};
const report={generated:new Date().toISOString(),summary,findings,pages};
const output=path.join(root,'schema-graph-audit.json');fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
console.log(`SCHEMA GRAPH INVENTORY: ${summary.inspected}/${summary.sitemapUrls} pages; ${summary.totalJsonLdBlocks} JSON-LD blocks; ${findings.length} findings.`);
console.log('Schema types: '+typeSummary.map(x=>`${x.type}=${x.count}`).join(', '));
console.log('Report: schema-graph-audit.json');
for(const f of findings.slice(0,15))console.log(` - ${f.url}: ${f.code}: ${f.detail}`);
if(findings.length)process.exitCode=1;
