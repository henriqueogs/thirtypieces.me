const assert=require('node:assert/strict');
(async()=>{
for(const route of ['/','/en/','/robots.txt','/sitemap.xml','/assets/images/social-card.jpg','/assets/images/card-beijo.webp','/definitely-missing-seo-check']){
 const response=await fetch('https://thirtypieces.me'+route);
 assert.equal(response.status,route.includes('definitely-missing')?404:200,route);
 if(route==='/'||route==='/en/'){
   const text=await response.text();
   assert(text.includes('hreflang="en"'));
   assert(text.includes('class="about-work"'));
   assert(text.includes('https://thirtypieces.me'+route+'" />'));
 }else await response.arrayBuffer();
 console.log(response.status,route);
}
})().catch(error=>{console.error(error);process.exitCode=1});
