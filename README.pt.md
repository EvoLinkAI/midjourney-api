# Midjourney API V8.1 + V7: Preços, Documentação Oficial, Fluxos de Trabalho e Guia de Integração

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Preços, Documentação Oficial e Guia de Integração" width="100%" />
  </a>
</p>

<p align="center">
  Compare os preços da Midjourney API, revise a documentação oficial do fluxo de trabalho do Midjourney V8.1 e integre a geração e edição de imagens através de uma API unificada.
</p>

## Início Rápido

Use a geração de imagens do Midjourney V8.1 em uma única chamada de API.

```bash
curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v8.1",
    "prompt": "A cinematic shot of a Maine Coon cat on a neon-lit balcony --ar 16:9 --s 500",
    "quality": "standard",
    "model_params": {
      "speed": "fast"
    }
  }'
```

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Ver Preços da Midjourney API</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obter Chave de API</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Ler Documentação da API</a>
</p>

## O Que É a Midjourney API?

Midjourney API on EvoLink.ai gives developers access to Midjourney image generation and editing workflows through one unified API key. This repository now covers the latest Midjourney V8.1 generation family while preserving the existing Midjourney V7 workflow references for integrations that still depend on V7 model IDs.

This repository is built for developers who want to:

- integrate Midjourney V8.1 image generation into production apps
- understand V8.1 speed, quality, prompt parameter, and workflow behavior
- keep existing V7 workflow examples available during migration
- choose the right Midjourney operation for generation, variation, remix, edit, retexture, or background removal


## Por Que Usar o EvoLink para a Midjourney API?

- one API key for Midjourney V8.1 and preserved V7 workflow examples
- asynchronous task flow designed for production integration
- V8.1 native HD output through the top-level `quality` field
- V8.1 speed control through `model_params.speed`
- support for native Midjourney prompt parameters and reference workflows
- HTTPS callback support for task completion workflows


## Preços da Midjourney API

Os preços abaixo seguem a referência do produto Midjourney V7 fornecida para este repositório.

| Modelo | Modo | Velocidade | Preço | Notas |
|---|---|---|---:|---|
| `mj-v7` | geração de imagens | draft | $0,040 / solicitação | aprox. 2,7 créditos, 4 imagens por solicitação |
| `mj-v7` | geração de imagens | fast | $0,079 / solicitação | modo padrão, aprox. 5,4 créditos |
| `mj-v7` | geração de imagens | turbo | $0,159 / solicitação | modo prioritário, aprox. 10,8 créditos |

> Cada solicitação produz 4 imagens. A moderação de conteúdo do Midjourney pode filtrar alguns resultados, portanto o resultado retornado pode conter de 1 a 4 imagens. A cobrança é por solicitação, não por imagem.

## Latest Midjourney V8.1 Workflows

| Workflow | Model | Summary |
|---|---|---|
| Image Generation | `mj-v8.1` | text-to-image and image-to-image with V8.1 prompt syntax, `quality`, and `speed` |
| Variation | `mj-v8.1-variation` | create subtle or strong variants from a completed V8.1 task |
| Remix | `mj-v8.1-remix` | reinterpret a completed result with a required new prompt |
| Retexture | `mj-v8.1-retexture` | change image texture or style directly from an input image URL |
| Upload Paint | `mj-v8.1-upload-paint` | advanced canvas editing from uploaded image, mask, and placement fields |
| Canvas Edit | `mj-v8.1-edit` | reposition an existing task image on a canvas and fill blank areas |
| Remove Background | `mj-v8.1-remove-bg` | remove the background from one input image URL without prompt or speed fields |

## Preserved Fluxos de Trabalho do Midjourney V7 Suportados

| Fluxo de Trabalho | Modelo | Resumo |
|---|---|---|
| Geração de Imagens | `mj-v7` | texto para imagem e imagem para imagem com sintaxe de prompt nativa do Midjourney V7 |
| Upscale | `mj-v7-upscale` | ampliar uma imagem selecionada de uma tarefa concluída |
| Inpaint | `mj-v7-inpaint` | editar uma área mascarada em uma imagem selecionada |
| Outpaint | `mj-v7-outpaint` | expandir além do limite original da imagem |
| Pan | `mj-v7-pan` | estender a composição em uma direção |
| Remix | `mj-v7-remix` | reinterpretar uma imagem existente com um novo prompt |
| Retexture | `mj-v7-retexture` | alterar textura ou estilo preservando a estrutura |
| Canvas Edit | `mj-v7-edit` | reposicionar a imagem na tela e preencher áreas em branco |
| Enhance | `mj-v7-enhance` | melhorar uma imagem gerada selecionada |
| Remove Background | `mj-v7-remove-bg` | gerar recorte transparente do sujeito a partir de uma imagem de entrada |
| Upload Paint | `mj-v7-upload-paint` | fluxo de edição avançada usando imagem enviada, máscara e configurações de tela |

## Documentos Oficiais da API

As referências detalhadas dos fluxos de trabalho estão em documentos separados para que o README permaneça focado em navegação, preços e orientação de integração. Cada página abaixo está alinhada com os materiais de referência oficiais fornecidos para este repositório.

Latest V8.1 docs:

- [V8.1 Image Generation](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Remove Background](./docs/official-api/v8-1-remove-background.md)

Preserved V7 docs:

- [Geração de Imagens](./docs/official-api/image-generation.md)
- [Imagem para Imagem e Referência](./docs/official-api/image-to-image-and-reference.md)
- [Parâmetros de Prompt](./docs/prompt-parameters.md)
- [Upscale](./docs/official-api/upscale.md)
- [Inpaint](./docs/official-api/inpaint.md)
- [Outpaint](./docs/official-api/outpaint.md)
- [Pan](./docs/official-api/pan.md)
- [Remix](./docs/official-api/remix.md)
- [Retexture](./docs/official-api/retexture.md)
- [Canvas Edit](./docs/official-api/canvas-edit.md)
- [Enhance](./docs/official-api/enhance.md)
- [Remove Background](./docs/official-api/remove-background.md)
- [Upload Paint](./docs/official-api/upload-paint.md)

## Visão Geral dos Parâmetros de Prompt

O Midjourney V7 suporta sintaxe de parâmetros nativos diretamente dentro do campo `prompt`.

Midjourney V8.1 supports native parameter syntax inside the `prompt` field, but speed and output quality are API fields. Use top-level `quality` (`standard` or `hd`) and `model_params.speed` (`draft`, `fast`, or `turbo`). V8.1 `draft` returns 24 lightweight 0.5K sketch images and cannot be combined with `quality: hd`.

Preserved V7 parameter overview:

| Parâmetro | Exemplo | Propósito |
|---|---|---|
| `--ar` | `--ar 16:9` | proporção de aspecto |
| `--s` | `--s 500` | intensidade de estilização |
| `--c` / `--chaos` | `--c 30` | diversidade de resultados |
| `--q` | `--q 2` | nível de qualidade |
| `--seed` | `--seed 12345` | exploração reproduzível |
| `--no` | `--no text, watermark` | excluir elementos |
| `--iw` | `--iw 1.5` | peso do prompt de imagem |
| `--sref` | `--sref https://...` | referência de estilo |
| `--oref` | `--oref https://...` | referência de objeto |
| `--raw` | `--raw` | reduzir embelezamento |
| `--tile` | `--tile` | geração de padrões contínuos |
| `--w` | `--w 500` | estranheza |
| `--exp` | `--exp 25` | estética experimental |

As regras detalhadas de parâmetros estão em [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Fluxo de Integração

1. obtenha uma chave de API no EvoLink.ai
2. crie uma tarefa de geração ou edição com `POST /v1/images/generations`
3. armazene o ID da tarefa retornado
4. consulte `GET /v1/tasks/{task_id}` até que a tarefa seja concluída
5. baixe e salve as imagens resultantes rapidamente porque os links gerados são temporários

## Exemplos de Código

Latest V8.1 examples:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Preserved V7 examples:

- [cURL: geração básica](./examples/curl/generate-image.sh)
- [cURL: imagem para imagem](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: geração básica](./examples/javascript/basic.mjs)
- [JavaScript: imagem para imagem](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Comparação de Fluxos de Trabalho

| Se você precisar... | Fluxo recomendado | Por quê |
|---|---|---|
| geração inicial | `mj-v7` | geração de imagens nativa V7 |
| usar uma ou mais imagens de referência no prompt | `mj-v7` | suporta URLs de imagens no início do prompt |
| alterar apenas uma área local selecionada | `mj-v7-inpaint` | edição baseada em máscara |
| expandir a composição para fora | `mj-v7-outpaint` | enquadramento mais amplo além da imagem original |
| estender à esquerda, direita, cima ou baixo | `mj-v7-pan` | extensão direcional |
| reinterpretar um resultado com um novo prompt | `mj-v7-remix` | variação baseada em prompt a partir de uma tarefa existente |
| preservar o layout mas alterar material ou acabamento | `mj-v7-retexture` | transformação de estilo e textura a partir de uma imagem de entrada |
| recortar o sujeito de uma imagem | `mj-v7-remove-bg` | sem prompt necessário |
| reposicionar uma imagem em uma tela maior | `mj-v7-edit` | expansão de tela com controle de posicionamento |

## Notas de Produção

- V8.1 is the latest integration path for new Midjourney image-generation work
- V8.1 generated image links are valid for 30 days according to the official V8.1 image-generation docs
- V8.1 speed is controlled with `model_params.speed`, not prompt flags
- V8.1 output resolution is controlled with top-level `quality`, not `--q` or `--hd`
- V8.1 `draft` returns 24 lightweight sketches and is incompatible with `quality: "hd"`
- V8.1 remove background only accepts `model` and `image_urls`
- todos os endpoints requerem autenticação com token Bearer
- os fluxos de trabalho de geração e edição do Midjourney são assíncronos
- os callbacks devem usar HTTPS e não podem apontar para endereços IP privados
- o tempo limite do callback é de 10 segundos com até 3 tentativas
- os links de imagens geradas são válidos por 24 horas, salve-os rapidamente
- `--v`, `--version` e `--niji` não são suportados em solicitações V7 aqui
- `--fast`, `--draft` e `--turbo` não devem ser escritos no prompt, use `model_params.speed`
- os fluxos de trabalho de edição geralmente requerem um ID de tarefa concluída e o número da imagem selecionada
- remove background não usa parâmetros de prompt ou velocidade
- retexture e remove background aceitam URLs de imagens de entrada diretamente, sem depender de uma tarefa de origem

## Perguntas Frequentes

### Como a Midjourney API é cobrada?
A geração do Midjourney V7 é cobrada por solicitação, não por imagem. Uma solicitação visa 4 resultados, mas a filtragem de moderação pode reduzir o número de imagens retornadas.

### Como faço imagem para imagem?
Coloque uma ou mais URLs de imagens no início do `prompt`, depois adicione sua descrição de texto e os parâmetros do Midjourney.

### Por que os endpoints de edição precisam de um ID de tarefa?
Operações como upscale, inpaint, outpaint, pan, enhance e remix funcionam em uma imagem selecionada de uma tarefa concluída, portanto requerem a referência da tarefa original.

### Posso usar `--turbo` ou `--draft` no prompt?
Não. A velocidade é controlada através de `model_params.speed`.

## Links Relacionados

- [Página do Produto Midjourney V7](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Obter Chave de API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Documentação da Midjourney API](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Nota do Repositório

Este repositório é um hub de documentação e exemplos para o uso da Midjourney API no EvoLink.ai. Os materiais oficiais detalhados dos fluxos de trabalho estão organizados em `docs/official-api/`, enquanto `mjv7参考/` permanece como material de referência local e está excluído dos uploads através do `.gitignore`.
