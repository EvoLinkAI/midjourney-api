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
- `--oref` is V7-only and can increase cost
