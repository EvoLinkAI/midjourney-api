# Midjourney V8.1 Image Generation

Official source: [Midjourney V8.1 Image Generation](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-image-generate).

## Model
`mj-v8.1`

## Summary
- supports text-to-image and image-to-image
- supports Midjourney V8.1 native prompt parameter syntax
- uses top-level `quality` for output resolution
- uses `model_params.speed` for speed mode
- returns an asynchronous task instead of final images immediately
- generated links are valid for 30 days according to the official V8.1 docs
- approximate timeout is around 20 minutes

## Authentication
All endpoints require Bearer token authentication.

```text
Authorization: Bearer ${EVOLINK_API_KEY}
```

## Endpoint
`POST /v1/images/generations`

## Example request

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

## Core request fields
- `model`: must be `mj-v8.1`
- `prompt`: required, supports Midjourney V8.1 native syntax
- `quality`: optional top-level output quality, `standard` by default
- `model_params.speed`: optional speed tier, `fast` by default
- `callback_url`: optional HTTPS callback URL

## Image-to-image rules
- place image URLs at the beginning of the prompt
- supported formats include png, gif, webp, jpg, and jpeg
- 1 image plus no text is invalid
- 1 image plus text is valid
- 2 or more images plus no text is valid
- 2 or more images plus text is valid
- maximum prompt length is 8192 characters

## Speed modes
| Value | Meaning |
|---|---|
| `draft` | returns 24 lightweight 0.5K sketch images; image-generation endpoint only |
| `fast` | default mode, returns 4 images |
| `turbo` | priority mode, returns 4 images and costs about 2x fast |

## Output quality
| Value | Meaning |
|---|---|
| `standard` | standard resolution, 1x quality multiplier |
| `hd` | native 2K HD output, 1.5x quality multiplier |

## Important restrictions
- `quality: "hd"` is mutually exclusive with `model_params.speed: "draft"`
- `--fast`, `--draft`, `--turbo`, and `--hd` should not be placed in the prompt
- `--q` is not the V8.1 quality control; use top-level `quality`
- image prompts and references require `fast` or `turbo`, not `draft`
- `--v`, `--version`, and `--niji` are not supported on this V8.1 route

## Response shape
The API returns an asynchronous task object including:
- `id`
- `status`
- `progress`
- `task_info`
- `usage`

## Notes
Midjourney moderation may filter some generated images. Billing is still applied per request.
