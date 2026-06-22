# Midjourney V8.1 Remove Background

Official source: [Midjourney V8.1 Remove Background](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-remove-bg).

## Model
`mj-v8.1-remove-bg`

## Summary
- automatically removes image background and generates transparent output
- only requires one input image URL
- does not depend on a source task
- does not support prompt, speed, or other model parameters
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
    "model": "mj-v8.1-remove-bg",
    "image_urls": [
      "https://example.com/photo.jpg"
    ]
  }'
```

## Core request fields
- `model`: must be `mj-v8.1-remove-bg`
- `image_urls`: required array; the first image URL is used
- `callback_url`: optional HTTPS callback URL

## Important restrictions
- do not send `prompt`
- do not send `model_params.speed`
- do not send other generation parameters
