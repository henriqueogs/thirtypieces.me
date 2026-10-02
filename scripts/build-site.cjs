const fs=require('node:fs');
const path=require('node:path');
const dest=path.resolve('dist');
fs.mkdirSync(dest,{recursive:true});
for(const file of ['index.html','404.html','robots.txt','sitemap.xml','site.webmanifest','_headers']) fs.copyFileSync(file,path.join(dest,file));
for(const dir of ['en','css','js']) fs.cpSync(dir,path.join(dest,dir),{recursive:true});
fs.mkdirSync(path.join(dest,'assets/images'),{recursive:true});
for(const file of fs.readdirSync('assets/images')) if(/\.(jpg|webp|svg)$/.test(file)||/^(favicon-|apple-touch-icon)/.test(file)) fs.copyFileSync(path.join('assets/images',file),path.join(dest,'assets/images',file));
console.log('Public site assembled in dist/');
