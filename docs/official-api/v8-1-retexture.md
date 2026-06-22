# Midjourney V8.1 Retexture

Official source: [Midjourney V8.1 Retexture](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-retexture).

## Model
`mj-v8.1-retexture`

## Summary
- changes image texture and style while preserving original structure
- does not depend on a source task
- accepts an input image URL directly
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
    "model": "mj-v8.1-retexture",
    "prompt": "Cyberpunk neon style",
    "image_urls": [
      "https://example.com/photo.jpg"
    ],
    "model_params": {
      "speed": "fast"
    }
  }'
```

## Core request fields
- `model`: must be `mj-v8.1-retexture`
- `prompt`: required target texture or style description
- `image_urls`: required array; the first image URL is used
- `model_params.speed`: optional `fast` or `turbo`, default `fast`
- `callback_url`: optional HTTPS callback URL
