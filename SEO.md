# SEO — Trinta moedas

Implementado e publicado em 2 de outubro de 2026.

- Português em `/`; inglês completo e estático em `/en/`, com canonical próprio e hreflang recíproco. O idioma não depende de cookies, localStorage ou navegador.
- Títulos e descrições específicos, JSON-LD CreativeWork coerente com cada idioma e imagem social real de 1200 × 630.
- Sitemap com as duas URLs canônicas e robots.txt apontando para ele.
- Contexto visível sobre a obra e sua natureza ficcional, mantendo a narrativa original.
- Sete ilustrações convertidas para WebP: 13.629.115 → 778.560 bytes (94,3% de redução). Originais preservados.
- Preload responsivo da imagem inicial; scripts deferidos; texto inicial imediatamente visível; contraste ampliado; navegação por teclado dos depoimentos.
- Leitura integral dos depoimentos sem JavaScript ou sem GSAP; página 404 para URLs inexistentes.
- Publicação isolada em dist, com cache de uma hora para CSS/JS e um dia para imagens.

## Manutenção

Após editar a versão em português ou as traduções em js/i18n.js:

```powershell
rtk node scripts/sync-english.cjs
rtk node scripts/validate-static-refs.js
rtk node scripts/validate-http-static.js
rtk node scripts/build-site.cjs
rtk proxy npx wrangler deploy
rtk node scripts/check-live.cjs
```

O teste scripts/verify-seo.py usa Python com Playwright e Edge headless. Inicie um servidor em 127.0.0.1:8892 ou defina SEO_TEST_URL para outro endereço. Ele verifica metadados, idioma, diálogo por teclado, troca de idioma e leitura sem JavaScript.

## Acompanhamento externo

A propriedade URL-prefix `https://thirtypieces.me/` foi cadastrada e verificada por meta tag no Google Search Console em 2 de outubro de 2026. Preserve a tag `google-site-verification` no HTML.

O sitemap foi enviado e o Google confirmou a submissão. A primeira leitura retornou “Couldn't fetch”; o endpoint público responde HTTP 200 com Content-Type application/xml e XML válido. A leitura pelo Google permanece pendente de confirmação, apesar da submissão aceita.

Às 11:01 de 2 de outubro de 2026 (America/Sao_Paulo), o teste ao vivo do próprio Google para `/sitemap.xml` confirmou “Crawl allowed? Yes” e “Page fetch Successful”. O arquivo está acessível ao Google; o processamento pelo relatório Sitemaps continua pendente. Não foi solicitada indexação do XML. Evidência visual local: `seo-sitemap-live-test.png`.

O teste ao vivo da página `/` confirmou “URL is available to Google” e “Page can be indexed”. As solicitações de indexação de `/` e `/en/` foram aceitas e entraram na fila prioritária. O sitemap foi reenviado uma vez após esses testes, com confirmação de submissão bem-sucedida. Acompanhar a próxima leitura do sitemap, indexação, consultas e Core Web Vitals com dados reais; submissão e testes não comprovam indexação efetiva nem posicionamento.

Referências: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites e https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap.

Publicação Cloudflare com verificação Google: versão 3bd6ebaa-11d0-4724-b428-1958ff1e4468. Versão anterior ao trabalho para eventual rollback: 7e8efa6b-2a3f-48ff-a3f4-0d0d7a6ef926.
