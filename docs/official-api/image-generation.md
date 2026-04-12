# Midjourney V7 Image Generation

## Model
`mj-v7`

## Summary
- supports text-to-image and image-to-image
- supports native Midjourney V7 parameter syntax inside the prompt
- returns an asynchronous task instead of final images immediately
- generated links are valid for 24 hours
- approximate timeout is around 20 minutes according to the reference material

## Authentication
All endpoints require Bearer token authentication.

```text
Authorization: Bearer YOUR_API_KEY
```

## Endpoint
`POST /v1/images/generations`

## Example request

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

## Core request fields
- `model`: must be `mj-v7`
- `prompt`: required, supports Midjourney V7 native syntax
- `model_params.speed`: optional speed tier, default is `fast`
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
| `draft` | economy mode |
| `fast` | default mode |
| `turbo` | priority mode |

## Important restrictions
- no need to specify `--v 7`
- `--v`, `--version`, and `--niji` are not supported
- `--fast`, `--draft`, and `--turbo` should not be placed in the prompt
- speed is controlled through `model_params.speed`

## Response shape
The API returns an asynchronous task object including:
- `id`
- `status`
- `progress`
- `task_info`
- `usage`

## Notes
Midjourney moderation may filter some generated images. Billing is still applied per request.
