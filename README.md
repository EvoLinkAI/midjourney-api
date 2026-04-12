# Midjourney API: Pricing, Official Docs, Workflows, and Integration Guide

<p align="center">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=banner&utm_campaign=midjourney-api">
    <img src="./assets/banner.jpg" alt="Midjourney API - Pricing, Official Docs, and Integration Guide" width="100%" />
  </a>
</p>

<p align="center">
  Compare Midjourney API pricing, review official Midjourney V7 workflow documentation, and integrate image generation and editing through one unified API.
</p>

## Quick Start

Use Midjourney V7 image generation in one API call.

```bash
curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v7",
    "prompt": "A cinematic shot of a Maine Coon cat on a neon-lit balcony --ar 16:9 --s 500",
    "model_params": {
      "speed": "fast"
    }
  }'
```

<p align="left">
  <a href="https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">View Midjourney API Pricing</a> ·
  <a href="https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Get API Key</a> ·
  <a href="https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api">Read API Docs</a>
</p>

## What Is Midjourney API?

Midjourney API on EvoLink.ai gives developers access to Midjourney V7 image generation and editing workflows through one unified API key. Based on the official references provided for this repository, the currently covered operations include image generation, image-to-image, style and object reference workflows, upscale, inpaint, outpaint, pan, remix, retexture, canvas edit, enhance, remove background, and upload paint.

This repository is built for developers who want to:

- understand Midjourney API pricing and billing behavior
- review official Midjourney V7 workflow coverage in one place
- choose the right Midjourney operation for a task
- integrate Midjourney generation and editing into production apps

## Why Use EvoLink for Midjourney API?

- one API key for Midjourney V7 generation and editing workflows
- transparent per-request pricing for draft, fast, and turbo generation
- asynchronous task flow designed for production integration
- support for native Midjourney V7 prompt parameters and reference workflows
- HTTPS callback support for task completion workflows
- 99.9% uptime positioning on the official product page

## Midjourney API Pricing

Pricing below follows the Midjourney V7 product reference provided for this repository.

| Model | Mode | Speed | Price | Notes |
|---|---|---|---:|---|
| `mj-v7` | image generation | draft | $0.040 / request | about 2.7 credits, 4 images per request |
| `mj-v7` | image generation | fast | $0.079 / request | default mode, about 5.4 credits |
| `mj-v7` | image generation | turbo | $0.159 / request | priority mode, about 10.8 credits |

> Each request produces 4 images. Midjourney content moderation may filter some outputs, so the returned result may contain 1 to 4 images. Billing is per request, not per image.

## Supported Midjourney V7 Workflows

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

The detailed workflow references live in separate docs so the README stays focused on navigation, pricing, and integration guidance. Each page below is aligned to the official reference materials you provided for this repository.

- [Image Generation](./docs/official-api/image-generation.md)
- [Image-to-Image and Reference](./docs/official-api/image-to-image-and-reference.md)
- [Prompt Parameters](./docs/prompt-parameters.md)
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

## Prompt Parameters Overview

Midjourney V7 supports native parameter syntax directly inside the `prompt` field.

| Parameter | Example | Purpose |
|---|---|---|
| `--ar` | `--ar 16:9` | aspect ratio |
| `--s` | `--s 500` | stylize strength |
| `--c` / `--chaos` | `--c 30` | result diversity |
| `--q` | `--q 2` | quality level |
| `--seed` | `--seed 12345` | repeatable exploration |
| `--no` | `--no text, watermark` | exclude elements |
| `--iw` | `--iw 1.5` | image prompt weight |
| `--sref` | `--sref https://...` | style reference |
| `--oref` | `--oref https://...` | object reference |
| `--raw` | `--raw` | reduce beautification |
| `--tile` | `--tile` | seamless pattern generation |
| `--w` | `--w 500` | weirdness |
| `--exp` | `--exp 25` | experimental aesthetics |

Detailed parameter rules are in [`docs/prompt-parameters.md`](./docs/prompt-parameters.md).

## Integration Workflow

1. get an API key from EvoLink.ai
2. create a generation or edit task with `POST /v1/images/generations`
3. store the returned task ID
4. poll `GET /v1/tasks/{task_id}` until the task is completed
5. download and save the resulting images promptly because generated links are temporary

## Code Examples

- [cURL: basic generation](./examples/curl/generate-image.sh)
- [cURL: image-to-image](./examples/curl/image-to-image.sh)
- [cURL: upscale](./examples/curl/upscale.sh)
- [cURL: inpaint](./examples/curl/inpaint.sh)
- [JavaScript: basic generation](./examples/javascript/basic.mjs)
- [JavaScript: image-to-image](./examples/javascript/image-to-image.mjs)
- [JavaScript: upscale](./examples/javascript/upscale.mjs)
- [JavaScript: inpaint](./examples/javascript/inpaint.mjs)

## Workflow Comparison

| If you need... | Recommended workflow | Why |
|---|---|---|
| first-pass generation | `mj-v7` | native V7 image generation |
| use one or more reference images in the prompt | `mj-v7` | supports image URLs at the beginning of the prompt |
| change only a selected local area | `mj-v7-inpaint` | mask-based edit |
| expand composition outward | `mj-v7-outpaint` | wider framing beyond the original image |
| extend left, right, up, or down | `mj-v7-pan` | directional extension |
| reinterpret one result with a new prompt | `mj-v7-remix` | prompt-based variation from an existing task |
| preserve layout but change material or finish | `mj-v7-retexture` | style and texture transformation from an input image |
| cut out subject from one image | `mj-v7-remove-bg` | no prompt required |
| reposition an image on a larger canvas | `mj-v7-edit` | canvas expansion with placement control |

## Production Notes

- all endpoints require Bearer token authentication
- Midjourney generation and edit workflows are asynchronous
- callbacks must use HTTPS and cannot target private IP addresses
- callback timeout is 10 seconds with up to 3 retries
- generated image links are valid for 24 hours, so save them promptly
- `--v`, `--version`, and `--niji` are not supported in V7 requests here
- `--fast`, `--draft`, and `--turbo` should not be written in the prompt, use `model_params.speed`
- edit workflows usually require a completed task ID and selected image number
- remove background does not use prompt or speed parameters
- retexture and remove background accept input image URLs directly instead of relying on a source task

## FAQ

### How is Midjourney API billed?
Midjourney V7 generation is billed per request, not per image. A request targets 4 outputs, but moderation filtering can reduce the number of returned images.

### How do I do image-to-image?
Put one or more image URLs at the beginning of the `prompt`, then add your text description and Midjourney parameters.

### Why do edit endpoints need a task ID?
Operations like upscale, inpaint, outpaint, pan, enhance, and remix work on a selected image from a completed task, so they require the original task reference.

### Can I use `--turbo` or `--draft` in the prompt?
No. Speed is controlled through `model_params.speed`.

## Related Links

- [Midjourney V7 Product Page](https://evolink.ai/midjourney-v7?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Get API Key](https://evolink.ai/signup?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)
- [Midjourney API Docs](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v7-image-generate?utm_source=github&utm_medium=readme&utm_campaign=midjourney-api)

## Repo Note

This repository is a documentation and examples hub for Midjourney API usage on EvoLink.ai. The detailed official workflow materials are organized under `docs/official-api/`, while `mjv7参考/` remains local reference material and is excluded from uploads through `.gitignore`.
