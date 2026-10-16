#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');const out=path.join(root,'.vercel','output');const dir=path.join(out,'static');
const failures=[];const fail=s=>failures.push(s);
let cfg;try{cfg=JSON.parse(fs.readFileSync(path.join(out,'config.json'),'utf8'))}catch(e){fail('Invalid or missing config.json: '+e.message)}
let urls=[];try{urls=[...fs.readFileSync(path.join(root,'public','sitemap.xml'),'utf8').matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>new URL(m[1].trim().replace(/&amp;/g,'&')))}catch(e){fail('Invalid sitemap: '+e.message)}
const paths=[];for(const u of urls){if(u.origin!=='https://www.inchtomilez.com'||u.search||u.hash)fail('Unexpected sitemap URL '+u.href);let p=u.pathname==='/'?'/':u.pathname.replace(/\/+$/,'');if(!/^\/[A-Za-z0-9_/-]*$/.test(p)||p.includes('//'))fail('Unsupported URL path: '+p);paths.push(p)}
if(!paths.length||new Set(paths).size!==paths.length)fail('Empty or duplicate sitemap URLs');
if(cfg?.version!==3||!Array.isArray(cfg.routes))fail('Invalid Vercel routes/version');
else{
 const r=cfg.routes;if(r[0]?.handle!=='filesystem')fail('Filesystem handler must be first');
 const fallback=r[r.length-1];if(fallback?.src!=='^/.*$'||fallback?.status!==404||fallback?.dest!=='/404.html')fail('Fallback must serve 404 status and HTML');
 const expected=paths.filter(p=>p!=='/').map(p=>({src:'^'+p+'/?$',dest:p+'/index.html'}));
 const actual=r.slice(1,-1);if(actual.length!==expected.length)fail('Route count mismatch '+actual.length+' vs '+expected.length);
 expected.forEach((e,i)=>{if(actual[i]?.src!==e.src||actual[i]?.dest!==e.dest||actual[i]?.status!==undefined)fail('Incorrect route for '+e.dest)});
}
for(const p of paths){const file=path.join(dir,p==='/'?'index.html':p.slice(1)+'/index.html');if(!fs.existsSync(file))fail('Missing mapped HTML: '+p)}
for(const rel of ['index.html','404.html','robots.txt','sitemap.xml'])if(!fs.existsSync(path.join(dir,rel)))fail('Missing static file: '+rel);
if(fs.existsSync(path.join(dir,'404.html'))){let h=fs.readFileSync(path.join(dir,'404.html'),'utf8');if(!/noindex/i.test(h))fail('404 HTML should be noindex')}
if(failures.length){console.error('VERCEL PACKAGE GATE FAILED:',failures.length);failures.slice(0,30).forEach(x=>console.error('-',x));process.exit(2)}
console.log('VERCEL PACKAGE GATE PASSED:',paths.length,'sitemap URLs; exact route mapping; filesystem; 404; static assets');
