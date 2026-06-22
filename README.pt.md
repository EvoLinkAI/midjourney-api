# Midjourney API: documentação, workflows e exemplos de integração para V8.1 e V7

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - documentação oficial e exemplos de integração para V8.1 e V7" width="100%" />
  </a>
</p>

<p align="center">
  Integre os workflows mais recentes de geração de imagens Midjourney V8.1 com EvoLink e mantenha a documentação V7 para integrações existentes.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Ler documentação V8.1</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Ler guia de prompts V8.1</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Obter chave de API</a>
</p>

## Início rápido com EvoLink

Use a geração de imagens Midjourney V8.1 com uma única chamada de API.

```bash
export EVOLINK_API_KEY="your_key_here"

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

## Fluxo completo da primeira execução

A geração e edição no Midjourney são assíncronas. Em produção, crie uma tarefa, salve o ID, consulte o status ou receba um callback, e salve as URLs finais antes que expirem.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Exemplos completos:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## O que é a Midjourney API?

A Midjourney API na EvoLink.ai dá aos desenvolvedores acesso a workflows de geração e edição de imagens da Midjourney com uma única chave de API. Este repositório cobre a família mais recente Midjourney V8.1 e preserva as referências V7 para integrações que ainda dependem de modelos V7.

Este repositório foi criado para desenvolvedores que querem:

- integrar Midjourney V8.1 em aplicações de produção
- entender velocidade, qualidade, parâmetros de prompt e workflows da V8.1
- manter exemplos V7 disponíveis durante a migração
- escolher a operação certa para geração, variação, remix, edição, retexturização ou remoção de fundo

## Por que usar EvoLink para a Midjourney API

- uma única chave de API para Midjourney V8.1 e exemplos V7 preservados
- fluxo assíncrono de tarefas projetado para produção
- saída HD nativa da V8.1 pelo campo superior `quality`
- controle de velocidade V8.1 por `model_params.speed`
- suporte a parâmetros nativos de prompt e workflows de referência da Midjourney
- callbacks HTTPS para workflows de conclusão de tarefas

## Notas de preço do Midjourney V8.1

A documentação oficial da V8.1 descreve a cobrança por multiplicadores de velocidade e qualidade. Este repositório não inventa preços fixos em dólar para V8.1.

| Configuração | Valores | Nota de cobrança |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` / `fast` = 1x; `turbo` ≈ 2x |
| `quality` | `standard`, `hd` | `standard` = 1x; `hd` = 1.5x |
| Custo combinado | speed x quality | `turbo` + `hd` ≈ 3x |

> O modo V8.1 `draft` retorna 24 esboços leves de 0.5K em uma execução e não pode ser combinado com `quality: "hd"`. Os modos fast e turbo retornam 4 imagens por geração.

## Preços preservados da geração Midjourney V7

| Modelo | Modo | Velocidade | Preço | Notas |
|---|---|---|---:|---|
| `mj-v7` | geração de imagens | draft | $0.040 / solicitação | 2,7 créditos; 4 imagens por solicitação |
| `mj-v7` | geração de imagens | fast | $0.079 / solicitação | modo padrão; 5,4 créditos |
| `mj-v7` | geração de imagens | turbo | $0.159 / solicitação | modo prioritário; 10,8 créditos |

## Workflows mais recentes do Midjourney V8.1

| Workflow | Modelo | Resumo |
|---|---|---|
| Geração de imagens | `mj-v8.1` | texto para imagem e imagem para imagem com sintaxe V8.1, `quality` e `speed` |
| Variação | `mj-v8.1-variation` | criar variantes subtle ou strong a partir de uma tarefa V8.1 concluída |
| Remix | `mj-v8.1-remix` | reinterpretar um resultado concluído com um novo prompt obrigatório |
| Retexture | `mj-v8.1-retexture` | alterar textura ou estilo diretamente a partir de uma URL de imagem |
| Upload Paint | `mj-v8.1-upload-paint` | edição avançada de canvas com imagem enviada, máscara e posição |
| Canvas Edit | `mj-v8.1-edit` | reposicionar uma imagem de tarefa no canvas e preencher áreas vazias |
| Remover fundo | `mj-v8.1-remove-bg` | remover o fundo de uma URL de imagem sem prompt nem speed |

## Workflows preservados do Midjourney V7

| Workflow | Modelo | Resumo |
|---|---|---|
| Geração de imagens | `mj-v7` | V7 texto para imagem / imagem para imagem |
| Upscale | `mj-v7-upscale` | ampliar uma imagem selecionada |
| Inpaint | `mj-v7-inpaint` | editar uma área mascarada |
| Outpaint | `mj-v7-outpaint` | expandir além da borda da imagem |
| Pan | `mj-v7-pan` | estender em uma direção |
| Remix | `mj-v7-remix` | reinterpretar com um novo prompt |
| Retexture | `mj-v7-retexture` | alterar textura ou estilo preservando a estrutura |
| Canvas Edit | `mj-v7-edit` | reposicionar a imagem e preencher áreas vazias |
| Enhance | `mj-v7-enhance` | melhorar um resultado selecionado |
| Remover fundo | `mj-v7-remove-bg` | recorte transparente do sujeito |
| Upload Paint | `mj-v7-upload-paint` | edição avançada com upload, máscara e canvas |

## Documentação oficial da API

As referências detalhadas ficam em documentos separados para que o README foque navegação, notas de preço e integração.

Documentação V8.1 mais recente:

- [V8.1 Geração de imagens](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variação](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Remover fundo](./docs/official-api/v8-1-remove-background.md)
- [Parâmetros de prompt](./docs/prompt-parameters.md)

Documentação V7 preservada:

- [V7 Geração de imagens](./docs/official-api/image-generation.md)
- [V7 imagem para imagem e referência](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Remover fundo](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Visão geral dos parâmetros de prompt

Midjourney V8.1 aceita sintaxe nativa de parâmetros no `prompt`, mas velocidade e qualidade de saída são campos da API.

| Controle | Onde configurar | Valores |
|---|---|---|
| Velocidade | `model_params.speed` | `draft`, `fast`, `turbo` |
| Qualidade de saída | `quality` no nível superior | `standard`, `hd` |
| Parâmetros de prompt | `prompt` | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 não expõe `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, permutações, flags public/stealth, `--niji` nem multi-prompt `::` nesta rota.

## Fluxo de integração

1. chave de API da EvoLink.ai
2. `POST /v1/images/generations`
3. salvar o ID da tarefa
4. consultar `GET /v1/tasks/{task_id}` ou usar callback
5. salvar as URLs finais antes de expirarem

## Exemplos de código

Exemplos V8.1 mais recentes:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Exemplos V7 preservados:

- [cURL: fluxo completo da primeira execução](./examples/curl/complete-flow.sh)
- [cURL: geração básica](./examples/curl/generate-image.sh)
- [cURL: imagem para imagem](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: fluxo completo da primeira execução](./examples/python/complete_flow.py)
- [JavaScript: fluxo completo da primeira execução](./examples/javascript/complete-flow.mjs)
- [JavaScript: geração básica](./examples/javascript/basic.mjs)
- [JavaScript: imagem para imagem](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Comparação de workflows

| Se você precisa... | Workflow recomendado | Por quê |
|---|---|---|
| geração mais recente | `mj-v8.1` | modelo V8.1 mais recente |
| esboços rápidos | `mj-v8.1` + `speed: "draft"` | 24 esboços leves 0.5K |
| saída HD | `mj-v8.1` + `quality: "hd"` | native saída HD |
| variantes | `mj-v8.1-variation` | subtle / strong variantes |
| reinterpretação com prompt | `mj-v8.1-remix` | novo prompt preservando a estrutura fonte |
| edição de canvas | `mj-v8.1-edit` | reposicionar e preencher áreas vazias |
| edição de imagem enviada | `mj-v8.1-upload-paint` | workflow de máscara e canvas |
| remoção de fundo | `mj-v8.1-remove-bg` | sem campos prompt nem speed |
| fluxos V7 existentes | V7 模型 | compatibilidade preservada |

## Notas de produção

- autenticação com Bearer token
- tarefas assíncronas
- somente callback HTTPS; URLs com IP privado não são permitidas
- timeout do callback: 10 segundos, até 3 novas tentativas
- segundo a documentação oficial, links de imagem V8.1 são válidos por 30 dias
- `model_params.speed` controla a velocidade
- `quality` no nível superior 控制输出分辨率
- `draft` retorna 24 esboços e é incompatível com `quality: "hd"`
- `mj-v8.1-remove-bg` 只接受 `model` 和 `image_urls`
- documentos e exemplos V7 são preservados para compatibilidade

## Perguntas frequentes

### Qual modelo devo usar em novas integrações da Midjourney API?
Use `mj-v8.1` para nova geração de imagens, a menos que precise especificamente de um workflow V7 preservado.

### Como ativo saída HD na V8.1?
Defina `"quality": "hd"` no nível superior e use `model_params.speed` como `fast` ou `turbo`. Não combine `hd` com `draft`.

### Posso escrever `--turbo`, `--draft` ou `--hd` no prompt?
Não. A velocidade é controlada por `model_params.speed`, e a qualidade de saída pelo campo superior `quality`.

### Ainda posso usar exemplos V7?
Sim. A documentação e os exemplos V7 são preservados intencionalmente para integrações existentes.

## Links relacionados

- [Midjourney V8.1 Geração de imagens Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Geração de imagens Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Chave de API](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Nota do repositório

Este repositório é um hub de documentação e exemplos para usar a Midjourney API na EvoLink.ai. Os workflows oficiais detalhados ficam em `docs/official-api/`, enquanto `mjv7参考/` permanece como referência local excluída de uploads via `.gitignore`.
