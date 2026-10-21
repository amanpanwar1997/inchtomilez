#!/usr/bin/env node
'use strict';
/* Integrated SEO build. Fails closed when core pages cannot be prerendered.
   Run npm run build:seo once before enabling it in vercel.json. */
const fs=require('fs'),path=require('path'),cp=require('child_process');
const ROOT=path.resolve(__dirname,'..');
process.chdir(ROOT);
const tool=path.join(ROOT,'inchtomilez-prerender-indexing.cjs');
if(!fs.existsSync(tool))throw Error('Missing inchtomilez-prerender-indexing.cjs');
const run=(args)=>cp.execFileSync(process.execPath,args,{cwd:ROOT,stdio:'inherit'});
// Preserve previous reports, including prerender backups, before starting a new build.
const report=path.join(ROOT,'seo-prerender-report');
if(fs.existsSync(path.join(report,'manifest.json'))){
 const history=path.join(ROOT,'seo-prerender-history');fs.mkdirSync(history,{recursive:true});
 let suffix=new Date().toISOString().replace(/[:.]/g,'-'),dest=path.join(history,suffix),i=0;
 while(fs.existsSync(dest))dest=path.join(history,suffix+'-'+(++i));
 fs.renameSync(report,dest);
 console.log('Preserved previous SEO prerender report:',dest);
}
run([path.join(ROOT,'node_modules','vite','bin','vite.js'),'build']);
run([tool,'--apply']);
run([tool,'--verify']);
// H1 content must be corrected in source, never rewritten during deployment.
run([path.join(ROOT,'update-sitemap-h1.cjs'),'--verify']);
run([path.join(ROOT,'scripts','verify-site-output.cjs')]);

run([path.join(ROOT,'scripts','finalize-prerender-manifest.cjs')]);
run([tool,'--verify']);
run([path.join(ROOT,'scripts','verify-ssg-output.cjs')]);
