# Midjourney Prompt Parameters

This page is versioned. Midjourney V8.1 is the latest path for new integrations, while the original V7 parameter reference is preserved below for existing integrations.

## Midjourney V8.1 Prompt Parameters

Official source: [Midjourney V8.1 Prompt Parameter Guide](https://docs.evolink.ai/en/api-manual/image-series/midjourney/midjourney-v8-1-prompt-guide).

### API-level controls

Two V8.1 controls are not prompt flags:

| Control | API field | Values | Notes |
|---|---|---|---|
| Speed | `model_params.speed` | `draft`, `fast`, `turbo` | do not write `--draft`, `--fast`, or `--turbo` in the prompt |
| Output quality | top-level `quality` | `standard`, `hd` | do not write `--hd`; `hd` conflicts with `draft` |

V8.1 `draft` returns 24 lightweight 0.5K sketch images in one run. Unlike V7 draft behavior, V8.1 `draft` uses the same speed multiplier as `fast`; it is for fast exploration, not a half-price mode.

### Supported prompt parameters

| Parameter | Example | Range / Type | Purpose |
|---|---|---|---|
| `--ar` | `--ar 16:9` | positive integer ratio | set aspect ratio |
| `--c` / `--chaos` | `--c 50` | 0-100 | increase result diversity |
| `--seed` | `--seed 23453422` | 0-4294967295 | reproducible exploration; not applicable in turbo speed |
| `--s` / `--stylize` | `--s 500` | 0-1000 | artistic style intensity |
| `--exp` | `--exp 25` | 0-100 | experimental aesthetics |
| `--raw` | `--raw` | flag | disable default beautification |
| `--iw` | `--iw 1.5` | 0-3 | image prompt influence |
| `--sref` | `--sref https://...` | URL, multiple URLs, or `random` | style reference |
| `--sw` | `--sw 500` | 0-1000 | style reference strength |
| `--oref` | `--oref https://...` | one URL | object reference |
| `--ow` | `--ow 300` | 1-1000 | object reference strength |

### V8.1 image reference rules

- image URLs for image-to-image must appear at the beginning of the prompt
- supported formats include `.png`, `.gif`, `.webp`, `.jpg`, and `.jpeg`
- maximum 20 image prompts
- 1 image plus no text is invalid
- 1 image plus text is valid
- 2 or more images plus no text is valid
- 2 or more images plus text is valid
- image prompts and `--sref` / `--oref` require `fast` or `turbo`; they are not available with `draft`
- `--sref` and `--oref` must be used with a text prompt
- only one object reference image can be used
- keep `--ow` below 400 for more predictable object-reference results

### V8.1 dependencies

| Parameter | Prerequisite |
|---|---|
| `--sw` | requires `--sref` |
| `--ow` | requires `--oref` |
| `--iw` | requires an image prompt |
| `--sref`, `--oref` | require a text prompt |
| single image prompt | requires a text prompt |

### V8.1 conflicts

| Setting A | Setting B | Rule |
|---|---|---|
| `model_params.speed: "draft"` | `quality: "hd"` | draft mode cannot be combined with HD |
| `model_params.speed: "draft"` | image prompt / `--sref` / `--oref` | image references require `fast` or `turbo` |
| image-only prompt | `--stylize` / `--exp` | incompatible without text |
| `--exp` above 25 | `--stylize` | high `--exp` may suppress stylize effects |

### Unsupported in V8.1 API

| Parameter | Use Instead / Note |
|---|---|
| `--q` / `--quality` | use top-level `quality` for output resolution |
| `--no` | negative prompt is not exposed on this route |
| `--weird` / `--w` | not supported |
| `--tile` | not supported |
| `--sv` | style version is locked and not exposed |
| `--stop` | not supported |
| `--cref` / `--cw` | use `--oref` object reference |
| `--relax` | not supported |
| `--repeat` / `--r` | not supported via API |
| `--p` | personalization is not supported via API |
| `{}` permutations | not supported via API |
| `--stealth` / `--public` | images are not publicly accessible through this API |
| `--niji` | a different model, not V8.1 |
| multi-prompt `::` | not supported |

### V8.1 prompt format

```text
[image URL] text description --param1 value1 --param2 value2
```

- Put parameters at the end of the text prompt.
- Add a space before each `--`.
- Do not add punctuation inside parameter syntax.
- Do not add more text after parameters.

## Preserved Midjourney V7 Prompt Parameters

This summary follows the Midjourney V7 prompt parameter reference material originally provided for this repository.

| Parameter | Example | Range / Type | Purpose |
|---|---|---|---|
| `--ar` | `--ar 16:9` | integer ratio | set aspect ratio |
| `--c` / `--chaos` | `--c 50` | 0-100 | increase diversity |
| `--no` | `--no text, watermark` | keywords | exclude unwanted elements |
| `--q` | `--q 2` | 1, 2, 4 | quality level |
| `--seed` | `--seed 23453422` | 0-4294967295 | reproducible exploration |
| `--s` | `--s 500` | 0-1000 | stylize strength |
| `--w` | `--w 800` | 0-3000 | weirdness |
| `--exp` | `--exp 25` | 0-100 | experimental aesthetics |
| `--raw` | `--raw` | flag | disable default beautification |
| `--tile` | `--tile` | flag | seamless pattern |
| `--iw` | `--iw 1.5` | 0-3 | image prompt influence |
| `--sref` | `--sref https://...` | URL | style reference |
| `--sw` | `--sw 500` | 0-1000 | style reference strength |
| `--sv` | `--sv 4` | 1-6 | style reference version |
| `--oref` | `--oref https://...` | URL | object reference |
| `--ow` | `--ow 300` | 1-1000 | object reference strength |

### V7 key rules

- image URLs for image-to-image must appear at the beginning of the prompt
- one image without text is invalid
- two or more images without text is valid
- `--v`, `--version`, and `--niji` are not supported
- speed mode is controlled with `model_params.speed`, not prompt flags
- `--oref` is V7-only, doubles object-reference cost, accepts only one object reference image, and should usually stay below `--ow 400`
- `--sref` and `--oref` must be used with a text prompt
- `--sv` and `--sw` require `--sref`
- `--iw` requires an image prompt
- `--ow` requires `--oref`
- `--seed` is not applicable in turbo speed mode

### V7 conflicts

| Parameter | Conflict | Rule |
|---|---|---|
| `--oref` | draft / turbo speed | object reference is only compatible with fast mode |
| `--oref` | `--q 4` | quality 4 is incompatible with object reference |
| `--oref` | inpaint / pan / outpaint | object reference images cannot be used for these operations |
| `--draft` | `--tile` | draft mode does not support tiling |
| image-only prompt | `--s` / `--w` | stylize and weird are incompatible without text |

### Unsupported in V7 API

| Parameter | Use Instead / Note |
|---|---|
| `--stop` | not supported in V7 |
| `--cref` / `--cw` | use `--oref` object reference |
| `--relax` | V7 does not support relax mode |
| `--repeat` / `--r` | not supported via API |
| `--p` | personalization is not supported via API |
| `{}` permutations | not supported via API |
| `--stealth` / `--public` | not supported; images are not publicly accessible |
| multi-prompt `::` | not supported in V7; `::` is only valid inside `--sref` weight syntax |
