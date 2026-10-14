#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const ROOT=path.resolve(__dirname,'..'),BUILD=path.join(ROOT,'build');
cp.execFileSync(process.execPath,[path.join(__dirname,'verify-site-output.cjs')],{cwd:ROOT,stdio:'inherit'});
const urls=[...fs.readFileSync(path.join(ROOT,'public','sitemap.xml'),'utf8').matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(x=>new URL(x[1].trim().replace(/&amp;/g,'&')).pathname);
const routes=[{handle:'filesystem'}];
const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
for(const raw of urls){const pathname=raw==='/'?'/':raw.replace(/\/+$/,'');if(pathname==='/')continue;const src='^'+escapeRegex(pathname)+'/?$';routes.push({src,dest:pathname+'/index.html'});}
// Anything not matched by a real generated file or explicit mapped route is a genuine 404.
routes.push({src:'^/.*$',status:404,dest:'/404.html'});
const out=path.join(ROOT,'.vercel','output'),staticDir=path.join(out,'static');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(staticDir,{recursive:true});
fs.cpSync(BUILD,staticDir,{recursive:true});
const notFound=path.join(staticDir,'404.html');
if(!fs.existsSync(notFound))fs.writeFileSync(notFound,'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>404 | Page not found</title></head><body><main><h1>Page not found</h1><p>The requested page does not exist.</p><a href="/">Return home</a></main></body></html>\n');
fs.writeFileSync(path.join(out,'config.json'),JSON.stringify({version:3,routes},null,2)+'\n');
console.log('VERCEL BUILD OUTPUT READY:', urls.length,'mapped sitemap URLs; unknown routes => 404');
