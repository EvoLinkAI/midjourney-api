# Midjourney API: V8.1 and V7 Docs, Workflows, and Integration Guide

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.es.md">Español</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.fr.md">Français</a> · <a href="./README.tr.md">Türkçe</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.ru.md">Русский</a>
</p>

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - V8.1 and V7 official docs and integration examples" width="100%" />
  </a>
</p>

<p align="center">
  Integrate the latest Midjourney V8.1 image generation workflows through EvoLink, with preserved V7 workflow documentation for existing integrations.
</p>

<p align="left">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Read V8.1 image generation docs</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Read V8.1 prompt guide</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Get your API key</a>
</p>

## EvoLink Quick Start

Use Midjourney V8.1 image generation in one API call.

<p align="center">
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api"><strong>V8.1 Docs</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api"><strong>Prompt Guide</strong></a> &nbsp;·&nbsp;
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api"><strong>API Key</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts"><strong>GPT Image Prompts</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/EvoLinkAI/evolink-media-mcp"><strong>Media MCP</strong></a>
</p>

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

## Full First-Run Flow

Midjourney generation and editing are asynchronous. A production integration should create a task, store the task ID, poll or receive a callback, and save the final image URLs before they expire.

```bash
export EVOLINK_API_KEY="your_key_here"
bash examples/curl/complete-flow.sh
```

Complete examples:

- [cURL complete flow](./examples/curl/complete-flow.sh)
- [Python complete flow](./examples/python/complete_flow.py)
- [JavaScript complete flow](./examples/javascript/complete-flow.mjs)
- [cURL V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript V8.1 generation](./examples/javascript/basic-v8-1.mjs)

## What Is Midjourney API?

Midjourney API on EvoLink.ai gives developers access to Midjourney image generation and editing workflows through one unified API key. This repository now covers the latest Midjourney V8.1 generation family while preserving the existing Midjourney V7 workflow references for integrations that still depend on V7 model IDs.

This repository is built for developers who want to:

- integrate Midjourney V8.1 image generation into production apps
- understand V8.1 speed, quality, prompt parameter, and workflow behavior
- keep existing V7 workflow examples available during migration
- choose the right Midjourney operation for generation, variation, remix, edit, retexture, or background removal

## Why Use EvoLink for Midjourney API?

- one API key for Midjourney V8.1 and preserved V7 workflow examples
- asynchronous task flow designed for production integration
- V8.1 native HD output through the top-level `quality` field
- V8.1 speed control through `model_params.speed`
- support for native Midjourney prompt parameters and reference workflows
- HTTPS callback support for task completion workflows

## Midjourney V8.1 Pricing Notes

The V8.1 official docs describe pricing through speed and quality multipliers. This repository does not invent fixed dollar prices for V8.1.

| Setting | Values | Billing note |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` and `fast` use the same speed multiplier; `turbo` is about 2x fast |
| `quality` | `standard`, `hd` | `standard` is 1x; `hd` is 1.5x |
| Combined cost | speed x quality | for example, `turbo` + `hd` is about 3x the base |

> V8.1 `draft` returns 24 lightweight 0.5K sketch images in one run and cannot be combined with `quality: "hd"`. Fast and turbo modes return 4 images per generation.

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

## Preserved Midjourney V7 Workflows

The original V7 docs and examples remain available for existing integrations.

| Workflow | Model | Summary |
|---|---|---|
| Image Generation | `mj-v7` | text-to-image and image-to-image with native Midjourney V7 prompt syntax |
| Upscale | `mj-v7-upscale` | upscale one selected image from a completed task |
| Inpaint | `mj-v7-inpaint` | edit a masked area in one selected image |
| Outpaint | `mj-v7-outpaint` | expand beyond the original image boundary |
| Pan | `mj-v7-pan` | extend composition in one direction |
| Remix | `mj-v7-remix` | reinterpret an existing image with a new prompt |
| Retexture | `mj-v7-retexture` | change texture or style while preserving structure |
| Canvas Edit | `mj-v7-edit` | reposition image on canvas and fill blank areas |
| Enhance | `mj-v7-enhance` | improve one selected generated image |
| Remove Background | `mj-v7-remove-bg` | generate transparent subject cutout from one input image |
| Upload Paint | `mj-v7-upload-paint` | advanced edit flow using uploaded image, mask, and canvas settings |

## Official API Documents

The detailed workflow references live in separate docs so the README stays focused on navigation, pricing notes, and integration guidance.

Latest V8.1 docs:

- [V8.1 Image Generation](./docs/official-api/v8-1-image-generation.md)
- [V8.1 Variation](./docs/official-api/v8-1-variation.md)
- [V8.1 Remix](./docs/official-api/v8-1-remix.md)
- [V8.1 Retexture](./docs/official-api/v8-1-retexture.md)
- [V8.1 Upload Paint](./docs/official-api/v8-1-upload-paint.md)
- [V8.1 Canvas Edit](./docs/official-api/v8-1-canvas-edit.md)
- [V8.1 Remove Background](./docs/official-api/v8-1-remove-background.md)
- [Prompt Parameters](./docs/prompt-parameters.md)

Preserved V7 docs:

- [V7 Image Generation](./docs/official-api/image-generation.md)
- [V7 Image-to-Image and Reference](./docs/official-api/image-to-image-and-reference.md)
- [V7 Upscale](./docs/official-api/upscale.md)
- [V7 Inpaint](./docs/official-api/inpaint.md)
- [V7 Outpaint](./docs/official-api/outpaint.md)
- [V7 Pan](./docs/official-api/pan.md)
- [V7 Remix](./docs/official-api/remix.md)
- [V7 Retexture](./docs/official-api/retexture.md)
- [V7 Canvas Edit](./docs/official-api/canvas-edit.md)
- [V7 Enhance](./docs/official-api/enhance.md)
- [V7 Remove Background](./docs/official-api/remove-background.md)
- [V7 Upload Paint](./docs/official-api/upload-paint.md)

## Prompt Parameters Overview

Midjourney V8.1 supports native parameter syntax inside the `prompt` field, but speed and output quality are API fields.

| Control | Where to set it | Values |
|---|---|---|
| Speed | `model_params.speed` | `draft`, `fast`, `turbo` |
| Output quality | top-level `quality` | `standard`, `hd` |
| Prompt parameters | `prompt` text | `--ar`, `--c`, `--seed`, `--s`, `--exp`, `--raw`, `--iw`, `--sref`, `--sw`, `--oref`, `--ow` |

V8.1 does not expose `--q`, `--no`, `--weird`, `--tile`, `--sv`, `--stop`, `--cref`, `--cw`, `--relax`, `--repeat`, `--p`, permutations, public/stealth flags, `--niji`, or multi-prompt `::` on this route.

Detailed parameter rules are in [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Integration Workflow

1. get an API key from EvoLink.ai
2. create a generation or edit task with `POST /v1/images/generations`
3. store the returned task ID
4. poll `GET /v1/tasks/{task_id}` until the task is completed
5. download and save the resulting images promptly because generated links are temporary

Detailed lifecycle docs:

- [Response Schema](./docs/response-schema.md)
- [Error Handling](./docs/errors.md)
- [Callback / Webhook](./docs/callbacks.md)

## Code Examples

Latest V8.1 examples:

- [cURL: V8.1 generation](./examples/curl/generate-image-v8-1.sh)
- [JavaScript: V8.1 generation](./examples/javascript/basic-v8-1.mjs)

Preserved V7 examples:

- [cURL: complete first-run flow](./examples/curl/complete-flow.sh)
- [cURL: basic generation](./examples/curl/generate-image.sh)
- [cURL: image-to-image](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [Python: complete first-run flow](./examples/python/complete_flow.py)
- [JavaScript: complete first-run flow](./examples/javascript/complete-flow.mjs)
- [JavaScript: basic generation](./examples/javascript/basic.mjs)
- [JavaScript: image-to-image](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Workflow Comparison

| If you need... | Recommended workflow | Why |
|---|---|---|
| latest first-pass generation | `mj-v8.1` | latest V8.1 image model with speed and quality controls |
| fast ideation sketches | `mj-v8.1` with `speed: "draft"` | returns 24 lightweight 0.5K sketches |
| native HD output | `mj-v8.1` with `quality: "hd"` | top-level API quality field enables HD output |
| create variants from a V8.1 task | `mj-v8.1-variation` | subtle or strong variations from a selected source image |
| reinterpret a V8.1 result | `mj-v8.1-remix` | requires a new prompt and preserves source structure |
| edit a V8.1 task on a canvas | `mj-v8.1-edit` | reposition source image and fill blank areas |
| edit directly from uploaded image URLs | `mj-v8.1-upload-paint` | mask and canvas workflow without an existing task |
| remove a background from one image | `mj-v8.1-remove-bg` | no prompt, speed, or other model parameters |
| use existing V7-only flows | preserved V7 models | V7 docs remain available for upscale, inpaint, outpaint, pan, enhance, and existing integrations |

## Production Notes

- all endpoints require Bearer token authentication
- Midjourney generation and edit workflows are asynchronous
- callbacks must use HTTPS and cannot target private IP addresses
- callback timeout is 10 seconds with up to 3 retries
- V8.1 generated image links are valid for 30 days according to the official V8.1 image-generation docs
- V8.1 speed is controlled with `model_params.speed`, not prompt flags
- V8.1 output resolution is controlled with top-level `quality`, not `--q` or `--hd`
- V8.1 `draft` returns 24 lightweight sketches and is incompatible with `quality: "hd"`
- V8.1 image prompts and references require `fast` or `turbo`, not `draft`
- V8.1 remove background only accepts `model` and `image_urls`
- V7 docs and examples remain in this repo for backward compatibility

## FAQ

### Which model should I use for new Midjourney API integrations?
Use `mj-v8.1` for new image generation unless you specifically need a preserved V7 workflow.

### How do I enable V8.1 HD output?
Set top-level `"quality": "hd"` and use `model_params.speed` as `fast` or `turbo`. Do not combine `hd` with `draft`.

### Can I write `--turbo`, `--draft`, or `--hd` in the prompt?
No. Speed is controlled through `model_params.speed`, and output quality is controlled through top-level `quality`.

### Can I still use V7 examples?
Yes. V7 docs and examples are intentionally preserved for existing integrations.

## Related Links

- [Midjourney V8.1 Image Generation Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney V8.1 Prompt Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Preserved Midjourney V7 Image Generation Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Get your API key](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
