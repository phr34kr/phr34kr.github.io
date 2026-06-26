# phr34kr

Biblioteca digital e portal de mídia marxista-leninista-maoista, em português do
Brasil. Reúne uma coleção de obras (links para PDFs e textos online) e os
endereços de jornais, blogs e organizações afins.

Publicado via **GitHub Pages**: <https://phr34kr.github.io>

> *Rebelar-se é justo!*

## Estrutura

O site é **estático**, sem etapa de build. Tudo vive em um único arquivo:

| Arquivo        | Descrição                                                        |
| -------------- | ---------------------------------------------------------------- |
| `index.html`   | Página completa: marcação, estilos, dados da biblioteca e script |
| `*.png`        | Logos e imagens dos veículos de mídia                            |
| `README.md`    | Este arquivo                                                     |

Dentro do `index.html`:

- A **biblioteca** é gerada a partir de um array JSON embutido na tag
  `<script type="application/json" id="books-data">`.
- Um script logo abaixo ordena as obras, monta a lista, liga a busca e
  preenche a data de atualização.

## Como adicionar ou editar uma obra

1. Abra o `index.html` e localize a tag `<script ... id="books-data">`.
2. Adicione (ou edite) um objeto no array. Cada obra tem o formato:

   ```json
   { "title": "Título da Obra", "author": "Nome do Autor", "url": "https://..." }
   ```

3. Para **destacar** uma obra (moldura vermelha, fixada no topo), acrescente
   `"highlight": true`:

   ```json
   { "title": "O Capital", "author": "Karl Marx", "url": "https://...", "highlight": true }
   ```

4. Salve e faça commit. Não é preciso ordenar manualmente nem copiar marcação —
   a ordenação é automática.

### Como a ordenação funciona

- Obras com `"highlight": true` aparecem primeiro.
- Em seguida, as demais são agrupadas por autor, seguindo a lista
  `AUTHOR_ORDER` no script. Autores fora dessa lista vão para o fim.
- Dentro de cada grupo, a ordem é alfabética por título.

Para fixar a posição de um **novo autor**, basta incluí-lo na constante
`AUTHOR_ORDER`. Caso contrário, ele será listado ao final (ainda ordenado por
título).

## Busca

O campo de busca filtra por **título ou autor** e ignora acentuação — buscar
`contradicao` encontra "Sobre a Contradição".

## Data de atualização

O texto "Atualizado em …" é preenchido automaticamente a partir de
`document.lastModified` (a data de publicação do arquivo no GitHub Pages). A data
fixa no HTML serve apenas de fallback quando o JavaScript está desativado.

## Pré-visualizar localmente

Como não há build, basta abrir o arquivo no navegador:

```sh
# abra index.html diretamente, ou sirva a pasta:
python -m http.server 8000   # depois acesse http://localhost:8000
```

## Publicação

Qualquer commit na branch `main` é publicado automaticamente pelo GitHub Pages.
