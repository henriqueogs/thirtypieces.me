# Trinta moedas / Thirty Pieces

Uma narrativa interativa em primeira pessoa sobre Judas Iscariotes, construída como uma experiência de scrollytelling em claro-escuro. O projeto reconta a traição a partir de uma voz íntima, ambígua e confessional: não para absolver, mas para criar distância entre o julgamento herdado e aquilo que se ouve quando alguém finalmente fala.

Publicado em: [https://thirtypieces.me/](https://thirtypieces.me/)

## A experiência

O site é uma peça digital curta, bilíngue e visualmente cinematográfica. A leitura avança por atos:

- chegada e acusação;
- o peso da prata;
- cinco depoimentos interativos;
- a virada narrativa;
- o veredito deixado ao leitor.

A direção visual usa uma paleta de noite, osso, prata e vela, com composições inspiradas por chiaroscuro e retratos à maneira de Caravaggio. A interação é deliberadamente simples: scroll, cards clicáveis e alternância de idioma. O resto é silêncio, imagem e texto.

## Idiomas

O projeto suporta:

- português brasileiro (`pt-BR`);
- inglês (`en`).

A escolha de idioma fica disponível no canto superior direito. O script detecta preferência salva em `localStorage`, depois o idioma do navegador, e usa inglês como fallback para visitantes de outros idiomas.

## Estrutura

```txt
.
+-- index.html
+-- css/
|   +-- styles.css
+-- js/
|   +-- app.js
|   +-- i18n.js
+-- assets/
|   +-- images/
+-- scripts/
    +-- analyze-inline-assets.js
    +-- replace-body-assets.js
    +-- split-static-assets.js
    +-- validate-http-static.js
    +-- validate-static-refs.js
```

## Tecnologia

Este é um site estático puro. Não há etapa obrigatória de build.

- HTML, CSS e JavaScript vanilla;
- GSAP + ScrollTrigger via CDN;
- Google Fonts via CDN;
- imagens locais em `assets/images`;
- metadados Open Graph, Twitter Card e JSON-LD no `index.html`;
- scripts auxiliares em Node.js para organização e validação dos assets.

## Rodando localmente

Como os arquivos usam caminhos relativos, abrir `index.html` no navegador já funciona para uma inspeção rápida. Para testar mais perto de produção, use um servidor estático local:

```powershell
python -m http.server 8787
```

Depois acesse:

```txt
http://127.0.0.1:8787/
```

## Validação

Os scripts de validação não fazem build; eles apenas conferem se os arquivos estáticos continuam íntegros.

Checar referências locais em HTML/CSS:

```powershell
node scripts/validate-static-refs.js
```

Subir um servidor temporário e validar respostas HTTP de arquivos-chave:

```powershell
node scripts/validate-http-static.js
```

## Deploy

O projeto pode ser publicado diretamente no Cloudflare Pages como site estático.

Configuração recomendada:

- **Build command:** vazio;
- **Build output directory:** `.` ou `/`;
- **Root directory:** raiz do repositório;
- **Arquivos necessários:** `index.html`, `css/`, `js/`, `assets/`.

Se o deploy for manual, suba o conteúdo da pasta raiz. A pasta `scripts/` é útil para manutenção, mas não é necessária para servir o site.

## Manutenção editorial

O texto principal em português está no `index.html`; as versões bilíngues usadas na alternância ficam em `js/i18n.js`. Ao alterar uma passagem narrativa, mantenha as duas fontes coerentes.

As imagens usadas pelo CSS ficam mapeadas em `css/styles.css`. Os nomes dos arquivos foram pensados para refletir sua função narrativa:

- `hero-judas-*`;
- `silver-hand-3-4`;
- `card-*`;
- `echo-judas-*`;
- `hero-background-plate`;
- `grain`.

Depois de qualquer troca de asset ou caminho, rode os scripts de validação.

## Notas de acessibilidade

A experiência respeita `prefers-reduced-motion`: quando o visitante pede redução de movimento, as animações pesadas são reduzidas e o corredor de cards passa a se comportar como uma coluna navegável.

Os depoimentos usam overlay com `role="dialog"`, fechamento por botão, clique fora e tecla `Escape`.

## Autoria

Criado por Henrique de Oliveira Guimarães Santos.

Esta é uma obra autoral. Código, texto e imagens devem ser tratados como material protegido, salvo autorização explícita do autor.
