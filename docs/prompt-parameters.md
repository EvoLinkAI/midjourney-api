# Midjourney V7 Prompt Parameters

This summary follows the Midjourney V7 prompt parameter reference material provided for this repository.

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

## Key rules

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

## Conflicts

| Parameter | Conflict | Rule |
|---|---|---|
| `--oref` | draft / turbo speed | object reference is only compatible with fast mode |
| `--oref` | `--q 4` | quality 4 is incompatible with object reference |
| `--oref` | inpaint / pan / outpaint | object reference images cannot be used for these operations |
| `--draft` | `--tile` | draft mode does not support tiling |
| image-only prompt | `--s` / `--w` | stylize and weird are incompatible without text |

## Unsupported in V7 API

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

## Prompt Format

```text
[image URL] text description --param1 value1 --param2 value2
```

- Put parameters at the end of the text prompt.
- Add a space before each `--`.
- Do not add punctuation inside parameter syntax.
- Do not add more text after parameters.
