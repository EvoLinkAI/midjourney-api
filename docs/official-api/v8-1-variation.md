# Midjourney V8.1 Variation

Official source: [Midjourney V8.1 Variation](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-variation).

## Model
`mj-v8.1-variation`

## Summary
- creates subtle or strong variants from a completed `mj-v8.1` series task
- supports an optional prompt; when present, content can change along with the variation
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
    "model": "mj-v8.1-variation",
    "model_params": {
      "task_id": "task-unified-xxx",
      "image_number": 2,
      "type": "strong"
    }
  }'
```

## Core request fields
- `model`: must be `mj-v8.1-variation`
- `prompt`: optional; modifies content along with the variation when provided
- `model_params.task_id`: required completed source task ID
- `model_params.image_number`: optional source image index, `0` to `3`, default `0`
- `model_params.type`: optional variation strength, `subtle` or `strong`, default `subtle`
- `model_params.speed`: optional `fast` or `turbo`; only effective when a prompt is provided
- `callback_url`: optional HTTPS callback URL

## Notes
The source task must be a completed V8.1 series task that belongs to the current user.
