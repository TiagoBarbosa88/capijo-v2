# Auditoria SEO - Capijo Music Produções

## O que foi implementado

- Criado `src/robots.txt` com:
  - `User-agent: *`
  - `Allow: /`
  - `Sitemap: https://capijo.com/sitemap.xml`
- Criado `src/sitemap.xml` com todas as rotas públicas indexáveis do Angular:
  - `/`
  - `/artistas`
  - `/estudio`
  - `/eventos`
  - `/equipe`
  - `/parceiros`
  - `/contato`
- Criado/ajustado `src/.htaccess` para fallback de rotas SPA no Apache:
  - mantém arquivos existentes
  - redireciona rotas não existentes para `index.html`
- Atualizado `angular.json` para copiar `src/robots.txt`, `src/sitemap.xml` e `src/.htaccess` para o build final
- Atualizado `src/index.html` para usar `https://capijo.com` em metatags `og:url`, `og:image`, `twitter:url` e `twitter:image`

## Arquivos criados/modificados

- `src/robots.txt`
- `src/sitemap.xml`
- `src/.htaccess`
- `SEO.md`
- `angular.json`
- `src/index.html`

## Páginas indexáveis

- https://capijo.com/
- https://capijo.com/artistas
- https://capijo.com/estudio
- https://capijo.com/eventos
- https://capijo.com/equipe
- https://capijo.com/parceiros
- https://capijo.com/contato

## Titles / Descriptions

O projeto já usa `SeoService` centralizado com meta dinâmico em `app-routing.module.ts`.

### Página inicial

- Title: `Capijo Music Produções - Produtora Musical`
- Description: `Capijo Music - Estúdio e produtora musical em São Paulo. Gravação, mixagem, masterização em Perus e shows na região.`

### Artistas

- Title: `Capijo Music Produções - Artistas`
- Description: `Conheça os artistas da Capijo Music: Senhor Florista, Willian Rodrigues, Alex Lacerda e mais talentos de Perus e região.`

### Estúdio

- Title: `Capijo Music Produções - Estúdio`
- Description: `Estúdio de gravação profissional em Perus, São Paulo. Equipamentos de ponta para gravação, mixagem e masterização.`

### Eventos

- Title: `Capijo Music Produções - Eventos`
- Description: `Shows e eventos musicais realizados pela Capijo Music em Perus, Franco da Rocha, Francisco Morato e região.`

### Equipe

- Title: `Capijo Music Produções - Nossa Equipe`
- Description: `Conheça a equipe por trás da Capijo Music Produções — produtores, técnicos e profissionais da música.`

### Parceiros

- Title: `Capijo Music Produções - Parceiros`
- Description: `Parceiros e apoiadores da Capijo Music: luthieria, som, bares e comércios locais de Perus e região.`

### Contato

- Title: `Capijo Music Produções - Contato`
- Description: `Entre em contato com a Capijo Music em Perus, São Paulo. Telefone, email e endereço do estúdio e produtora musical.`

## Structured data

O projeto já contém generators de JSON-LD no `src/app/config/seo-schemas.ts`:

- `buildLocalBusinessSchema()`
- `buildArtistsItemListSchema()`
- `buildEventsSchema()`

O `SeoService` adiciona `script[type="application/ld+json"]` ao `head` quando a rota define `jsonLd`.

## Configuração necessária na Hostinger

No diretório raiz do site (`public_html/`):

1. Verificar se existe `.htaccess`.
2. Se não existir, criar com o conteúdo abaixo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^index\.html$ - [L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

3. Confirmar que `robots.txt` e `sitemap.xml` estão presentes na raiz do build.

## Como testar o build

1. Rodar `npm run build`
2. Verificar em `dist/capijo_v2/`:
   - `robots.txt`
   - `sitemap.xml`
   - `.htaccess`
3. Verificar o cabeçalho HTML do build para `og:url` e `twitter:url` usando `https://capijo.com`

## Checklist pós-deploy

- [ ] https://capijo.com retorna 200
- [ ] acesso direto às rotas Angular retorna 200
- [ ] /robots.txt está acessível
- [ ] /sitemap.xml está acessível
- [ ] canonical correto em cada página
- [ ] title muda entre páginas
- [ ] meta description muda entre páginas
- [ ] sitemap enviado ao Google Search Console
- [ ] domínio verificado no Google Search Console
- [ ] páginas principais solicitadas para indexação

## Observações

- Não foi implementado SSR ou prerendering neste momento.
- A estrutura atual de SEO dinâmico já está configurada por rota e pode evoluir com conteúdos mais detalhados.
- Para próximos passos, recomenda-se validar as URLs no Search Console e testar as rotas profundas diretamente no navegador.
