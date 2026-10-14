// Run from the website root: node update-sitemap-h1.cjs --export | --apply | --verify
// CSV format: url,h1 (UTF-8, quoted fields supported)
const fs=require('fs'),path=require('path');
const root=process.cwd(),mode=process.argv[2],build=path.join(root,'build');
const xmlPath=['sitemap.xml','public/sitemap.xml','build/sitemap.xml'].map(x=>path.join(root,x)).find(fs.existsSync);
if(!xmlPath) throw Error('Place sitemap.xml in the project root.');
if(!fs.existsSync(build)) throw Error('Missing build folder. Run npm run build:seo first.');
const xml=fs.readFileSync(xmlPath,'utf8');
const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(x=>x[1].trim().replace(/&amp;/g,'&')).filter(x=>!new URL(x).pathname.match(/\.(xml|txt|json|png|jpg|webp|pdf)$/i));
const csvPath=path.join(root,'h1-updates.csv'),reportPath=path.join(root,'h1-update-report.json');
const escapeCSV=s=>'"'+String(s??'').replace(/"/g,'""')+'"';
function parseCSV(s){const rows=[];let row=[],v='',q=false;for(let i=0;i<s.length;i++){const c=s[i];if(c==='"'){if(q&&s[i+1]==='"'){v+='"';i++}else q=!q}else if(c===','&&!q){row.push(v);v=''}else if((c==='\n'||c==='\r')&&!q){if(c==='\r'&&s[i+1]==='\n')i++;row.push(v);if(row.some(x=>x.length))rows.push(row);row=[];v=''}else v+=c;}if(q)throw Error('Unclosed CSV quote');if(v||row.length){row.push(v);rows.push(row)}return rows;}
function target(u){const p=decodeURIComponent(new URL(u).pathname).replace(/^\/+|\/+$/g,'');if(p.split('/').some(x=>x==='..'))return null;const candidates=p?[path.join(build,p,'index.html'),path.join(build,p+'.html')]:[path.join(build,'index.html')];return candidates.find(fs.existsSync)||null;}
const h1Re=/<h1\b([^>]*)>([\s\S]*?)<\/h1\s*>/gi;
const strip=s=>s.replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim();
const entities=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const entries=urls.map(url=>({url,file:target(url)}));
if(mode==='--export'){
 const lines=['url,h1'];for(const e of entries){let h='';if(e.file){const html=fs.readFileSync(e.file,'utf8'),m=/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/i.exec(html);if(m)h=strip(m[1]);}lines.push([e.url,h].map(escapeCSV).join(','));}
 fs.writeFileSync(csvPath,'\uFEFF'+lines.join('\r\n'),'utf8');console.log(`Exported ${entries.length} sitemap page rows to ${csvPath}. Edit the h1 column, then run --apply.`);process.exit(0);
}
if(!['--apply','--verify'].includes(mode))throw Error('Usage: node update-sitemap-h1.cjs --export | --apply | --verify');
if(!fs.existsSync(csvPath))throw Error('Missing h1-updates.csv. Run --export first.');
const rows=parseCSV(fs.readFileSync(csvPath,'utf8').replace(/^\uFEFF/,''));if(rows[0]?.[0]?.trim().toLowerCase()!=='url'||rows[0]?.[1]?.trim().toLowerCase()!=='h1')throw Error('CSV columns must be url,h1');
const map=new Map();for(const r of rows.slice(1)){if(!r[0])continue;if(map.has(r[0].trim()))throw Error('Duplicate URL in CSV: '+r[0]);map.set(r[0].trim(),(r[1]||'').trim());}
const results=[];for(const e of entries){const h=map.get(e.url);if(!e.file){results.push({url:e.url,status:'missing_html'});continue;}if(!h){results.push({url:e.url,status:'blank_or_missing_h1_mapping'});continue;}let html=fs.readFileSync(e.file,'utf8');const matches=[...html.matchAll(h1Re)];if(matches.length!==1){results.push({url:e.url,status:'requires_review_h1_count_'+matches.length});continue;}
const m=matches[0];const old=strip(m[2]);if(old===h){results.push({url:e.url,status:'match'});continue;}
if(mode==='--verify'){results.push({url:e.url,status:'mismatch',current:old,expected:h});continue;}
const backup=e.file+'.h1-backup';if(!fs.existsSync(backup))fs.copyFileSync(e.file,backup);
// Preserve H1 attributes; replace text only. Skip nested markup rather than damage it.
if(/<[^>]+>/.test(m[2])){results.push({url:e.url,status:'requires_review_nested_h1'});continue;}
html=html.slice(0,m.index)+`<h1${m[1]}>${entities(h)}</h1>`+html.slice(m.index+m[0].length);
fs.writeFileSync(e.file,html,'utf8');results.push({url:e.url,status:'updated',from:old,to:h});
}
const summary=results.reduce((a,r)=>(a[r.status]=(a[r.status]||0)+1,a),{});
fs.writeFileSync(reportPath,JSON.stringify({mode,total:entries.length,summary,results},null,2));
console.log(JSON.stringify({mode,total:entries.length,summary,report:reportPath},null,2));
if(results.some(r=>!['updated','match'].includes(r.status)))process.exitCode=1;
