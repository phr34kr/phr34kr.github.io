# phr34kr

Biblioteca digital e portal de mídia marxista-leninista-maoista, em português do
Brasil. Reúne uma coleção de obras (links para PDFs e textos online) e os
endereços de jornais, blogs e organizações afins.

Publicado via **GitHub Pages**: <https://phr34kr.github.io>

> *Rebelar-se é justo!*

## Estrutura

O site é **estático**, sem etapa de build. Conteúdo e apresentação são separados:

| Arquivo      | Descrição                                                       |
| ------------ | --------------------------------------------------------------- |
| `data.js`    | **Todo o conteúdo** — biblioteca, mídia, organizações e a ordem dos autores |
| `index.html` | Marcação, estilos e o script que monta a página a partir de `data.js` |
| `*.png`      | Logos e imagens das organizações                                |
| `README.md`  | Este arquivo                                                    |

Para atualizar o site, em geral só é preciso editar **`data.js`**. Ele expõe um
objeto `window.SITE_DATA` com quatro partes: `books`, `midia`, `orgs` e
`authorOrder`. O `index.html` lê esse objeto, ordena as obras, monta as listas,
liga a busca e preenche a data de atualização.

## Como adicionar ou editar uma obra

1. Abra `data.js` e localize o array `books`.
2. Adicione (ou edite) um objeto. Cada obra tem o formato:

   ```js
   { title: "Título da Obra", author: "Nome do Autor", url: "https://..." }
   ```

3. Para **destacar** uma obra (fixada no topo, em "Em destaque"), acrescente
   `highlight: true`:

   ```js
   { title: "O Capital", author: "Karl Marx", url: "https://...", highlight: true }
   ```

4. Salve e faça commit. Não é preciso ordenar manualmente — a ordenação é
   automática.

### Como a ordenação funciona

- Obras com `highlight: true` aparecem primeiro, em "Em destaque".
- As demais são agrupadas por autor, na ordem da lista `authorOrder` (também em
  `data.js`). Autores fora dessa lista caem em "Outros autores", no fim.
- Dentro de cada grupo, a ordem é alfabética por título.

Para dar a um **novo autor** a sua própria seção — ou mudar a ordem das seções —
edite a lista `authorOrder`. Um autor que não esteja nela ainda aparece, só que
agrupado em "Outros autores".

## Como adicionar Mídia ou Organizações

Mesma ideia: edite o array correspondente em `data.js`.

- **`midia`** — um objeto por vídeo do YouTube. Use só o ID do vídeo; a miniatura
  e o link são montados sozinhos. `title` é opcional e, quando definido, aparece
  como legenda abaixo do vídeo:

  ```js
  { youtube: "MKQffXlaBW0", title: "Título do vídeo" }
  ```

- **`orgs`** — um objeto por site. `logo` é o nome do arquivo `.png` no
  repositório:

  ```js
  { name: "A Nova Democracia", logo: "and.png", url: "https://...", tagline: "..." }
  ```

## Busca

O campo de busca abre uma **lista de resultados** logo abaixo dele, sem alterar a
biblioteca na página. Filtra por **título ou autor** e ignora acentuação — buscar
`contradicao` encontra "Sobre a Contradição". `Esc` (ou clicar fora) fecha a lista.

## Data de atualização

O texto "Atualizado em …" é preenchido automaticamente a partir de
`document.lastModified` (a data de publicação do arquivo no GitHub Pages). A data
fixa no HTML serve apenas de fallback quando o JavaScript está desativado.

## Pré-visualizar localmente

Como `data.js` é carregado por `<script src>` (e não por `fetch`), basta abrir o
`index.html` direto no navegador — um duplo-clique funciona, sem precisar de
servidor.

## Publicação

Qualquer commit na branch `main` é publicado automaticamente pelo GitHub Pages.
