# Midjourney V8.1 Remix

Official source: [Midjourney V8.1 Remix](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-remix).

## Model
`mj-v8.1-remix`

## Summary
- re-creates a previously generated image with a new prompt
- changes content or style while preserving the original image structure
- requires a prompt, unlike variation
- returns an asynchronous task instead of final images immediately

## Endpoint
`POST /v1/images/generations`

## Example request

```bash
curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v8.1-remix",
    "prompt": "Convert to oil painting style --ar 1:1",
    "model_params": {
      "task_id": "task-unified-xxx",
      "image_number": 0,
      "mode": "strong",
      "speed": "fast"
    }
  }'
```

## Core request fields
- `model`: must be `mj-v8.1-remix`
- `prompt`: required, supports Midjourney parameter syntax
- `model_params.task_id`: required source task ID
- `model_params.image_number`: optional source image index, `0` to `3`, default `0`
- `model_params.mode`: optional remix strength, `strong` or `subtle`, default `strong`
- `model_params.speed`: optional `fast` or `turbo`, default `fast`
- `callback_url`: optional HTTPS callback URL
