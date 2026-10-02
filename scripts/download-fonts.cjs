const fs=require('node:fs');
const assets=[
 ['cormorant-normal-latin.woff2','https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtKky2F7g.woff2'],
 ['cormorant-italic-latin.woff2','https://fonts.gstatic.com/s/cormorantgaramond/v21/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSqn7B6D.woff2'],
 ['inter-latin.woff2','https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2'],
 ['Cormorant-OFL.txt','https://raw.githubusercontent.com/google/fonts/main/ofl/cormorantgaramond/OFL.txt'],
 ['Inter-OFL.txt','https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt']
];
(async()=>{fs.mkdirSync('assets/fonts',{recursive:true});for(const [name,url] of assets){const response=await fetch(url);if(!response.ok)throw Error(`${response.status} ${url}`);fs.writeFileSync('assets/fonts/'+name,Buffer.from(await response.arrayBuffer()));console.log(name)}})().catch(e=>{console.error(e);process.exitCode=1});
