# Source-only SSG configuration patch. Does NOT install dependencies or run builds.
$ErrorActionPreference = 'Stop'
$root = 'C:\Users\panwa\Downloads\updated-inchtomilez-main'
if (-not (Test-Path -LiteralPath $root -PathType Container)) { throw "Source directory not found: $root" }
$required = @('package.json','vercel.json','scripts\build-seo.cjs','inchtomilez-prerender-indexing.cjs','update-sitemap-h1.cjs','h1-updates.csv','public\sitemap.xml')
foreach ($f in $required) { if (-not (Test-Path -LiteralPath (Join-Path $root $f) -PathType Leaf)) { throw "Missing required source file: $f. No changes made." } }
$utf8 = New-Object System.Text.UTF8Encoding($false)
$vercelPath = Join-Path $root 'vercel.json'
$vercel = Get-Content -LiteralPath $vercelPath -Raw | ConvertFrom-Json
$vercel.buildCommand = 'npm run build:seo'
if ($vercel.PSObject.Properties['rewrites']) { $vercel.PSObject.Properties.Remove('rewrites') }
[System.IO.File]::WriteAllText($vercelPath, ($vercel | ConvertTo-Json -Depth 32) + "`n", $utf8)
# Keep one deployment workflow. The older static-output workflow is archived as non-YAML.
$oldWorkflow = Join-Path $root '.github\workflows\deploy-vercel.yml'
if (Test-Path -LiteralPath $oldWorkflow) {
  $archived = Join-Path $root '.github\workflows\deploy-vercel.yml.disabled'
  if (Test-Path -LiteralPath $archived) { throw "Refusing overwrite: $archived" }
  Move-Item -LiteralPath $oldWorkflow -Destination $archived
}
$flow = Join-Path $root '.github\workflows\deploy-seo.yml'
if (Test-Path -LiteralPath $flow) {
  $s = [System.IO.File]::ReadAllText($flow)
  # Remove runtime changes to vercel.json; it is now committed correctly.
  $s = [regex]::Replace($s, '(?m)^      - name: Enable SEO prerendering\r?\n        run: \|\r?\n          node -e "[^\r\n]*"\r?\n\r?\n', '')
  [System.IO.File]::WriteAllText($flow, $s, $utf8)
}
$buildScript = Join-Path $root 'scripts\build-seo.cjs'
$b = [System.IO.File]::ReadAllText($buildScript)
$needle = "run([path.join(ROOT,'update-sitemap-h1.cjs'),'--verify']);"
$addition = "`nrun([path.join(ROOT,'scripts','verify-ssg-output.cjs')]);"
if ($b -notmatch 'verify-ssg-output\.cjs') {
 if (-not $b.Contains($needle)) { throw 'Unexpected build-seo.cjs structure. Review before patching.' }
 $b = $b.Replace($needle, $needle + $addition)
 [System.IO.File]::WriteAllText($buildScript, $b, $utf8)
}
$checker = @'
#!/usr/bin/env node
'use strict';
// Final SSG gate, executed AFTER H1 edits. Checks deployable files and refreshes hashes.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),build=path.join(root,'build');
const xml=fs.readFileSync(path.join(root,'public','sitemap.xml'),'utf8');
const urls=[...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim());
const fail=[];const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
if(urls.length!==308||new Set(urls).size!==308)fail.push('Sitemap should contain 308 unique URLs');
for(const url of urls){
 const u=new URL(url);if(u.origin!=='https://www.inchtomilez.com'){fail.push('Unexpected host: '+url);continue}
 const p=decodeURIComponent(u.pathname).replace(/^\/+|\/+$/g,'');
 if(p.split('/').includes('..')||p.includes('\\')){fail.push('Unsafe path: '+url);continue}
 const file=path.join(build,p,'index.html');
 if(!fs.existsSync(file)){fail.push('Missing HTML: '+p);continue}
 const h=fs.readFileSync(file,'utf8');
 if(!/<title>[^<]+<\/title>/i.test(h))fail.push('Missing title: '+p);
 if(!/<meta\s+[^>]*name=["']description["']/i.test(h))fail.push('Missing description: '+p);
 const canon=[...h.matchAll(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi)];
 if(canon.length!==1)fail.push('Canonical count '+canon.length+': '+p);
 const headings=[...h.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1\s*>/gi)];
 if(headings.length!==1)fail.push('H1 count '+headings.length+': '+p);
}
if(fail.length){console.error('FINAL SSG GATE FAILED:\n'+fail.slice(0,60).join('\n'));process.exit(2)}
const mp=path.join(root,'seo-prerender-report','manifest.json');
if(fs.existsSync(mp)){
 const m=JSON.parse(fs.readFileSync(mp,'utf8'));
 for(const f of (m.files||[])){
  const file=path.resolve(root,f.path);
  if(!file.startsWith(build+path.sep)&&file!==path.join(build,'index.html'))throw Error('Unsafe manifest path: '+f.path);
  f.afterHash=hash(fs.readFileSync(file));
 }
 fs.writeFileSync(mp,JSON.stringify(m,null,2)+'\n');
}
console.log('FINAL SSG GATE PASSED:',urls.length,'route HTML files present with metadata and one H1');
'@
$checkerPath = Join-Path $root 'scripts\verify-ssg-output.cjs'
[System.IO.File]::WriteAllText($checkerPath, $checker, $utf8)
Write-Host 'SSG SOURCE CONFIGURATION UPDATED' -ForegroundColor Green
Write-Host 'No npm install, no build, and no deployment was run.'
Write-Host 'Updated: vercel.json, scripts/build-seo.cjs, scripts/verify-ssg-output.cjs, deploy-seo.yml'
Write-Host 'Disabled duplicate workflow: deploy-vercel.yml.disabled'
