const fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8'),source=fs.readFileSync('js/i18n.js','utf8');
const dict=vm.runInNewContext('('+source.slice(source.indexOf('const I18N =')+13,source.indexOf('  window.__setLang')).replace(/;\s*$/, '')+')');
const title=html.match(/<title>(.*?)<\/title>/)[1];
const desc=html.match(/name="description"\s+content="([^"]+)"/)[1];
const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
let en = html.replace(/(<([a-z0-9]+)\b[^>]*data-i18n="([^"]+)"[^>]*>)[\s\S]*?(<\/\2\s*>)/g, (all, open, tag, key, close) => dict.en[key] == null ? all : open + dict.en[key] + close);
en = en.replace('lang="pt-BR"', 'lang="en"').replaceAll(title, 'Thirty Pieces — an interactive story about Judas Iscariot').replaceAll(desc, 'An interactive fictional story about Judas Iscariot, the thirty pieces of silver and the kiss of betrayal. Read his testimony in English or Portuguese.')
  .replace('rel="canonical" href="https://thirtypieces.me/"', 'rel="canonical" href="https://thirtypieces.me/en/"')
  .replace('property="og:url" content="https://thirtypieces.me/"', 'property="og:url" content="https://thirtypieces.me/en/"')
  .replace('content="pt_BR"', 'content="en_US"').replace('class="active" aria-current="page"', '').replace('href="/en/" hreflang="en" lang="en"', 'href="/en/" hreflang="en" lang="en" class="active" aria-current="page"')
  .replace('Trinta moedas · Judas Iscariotes', 'Thirty Pieces · Judas Iscariot')
  .replace('aria-label="Depoimento"', 'aria-label="Testimony"').replace('aria-label="Fechar"', 'aria-label="Close"')
  .replace(/<footer class="about-work">[\s\S]*?<\/footer>/, '<footer class="about-work"><h2>About Thirty Pieces</h2><p>Thirty Pieces is a work of fiction and digital art by Henrique Guimarães. In this interactive story, Judas Iscariot tells his version of the thirty pieces of silver, the last supper and the kiss of betrayal. Readers explore five testimonies and decide how to interpret his voice.</p><p>The experience combines literature with chiaroscuro imagery inspired by Caravaggio. It is an artistic interpretation, rather than a historical account or a translation of religious texts.</p><p><a href="/" hreflang="pt-BR">Leia Trinta moedas em português</a></p></footer>');
const enSchema = {...schema, '@id': 'https://thirtypieces.me/en/#work', name: 'Thirty Pieces', url: 'https://thirtypieces.me/en/', inLanguage: 'en', description: 'An interactive fictional story told by Judas Iscariot.', genre: ['digital art', 'interactive fiction', 'scrollytelling']};
en = en.replace(/(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/, `$1\n${JSON.stringify(enSchema, null, 2)}\n$2`);
fs.mkdirSync('en', {recursive:true}); fs.writeFileSync('en/index.html', en);
