# Midjourney V8.1 Canvas Edit

Official source: [Midjourney V8.1 Canvas Edit](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-edit).

## Model
`mj-v8.1-edit`

## Summary
- repositions the image of an existing task on a canvas
- fills blank areas with AI
- supports composition adjustment, outpaint-style expansion, and repainting
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
    "model": "mj-v8.1-edit",
    "prompt": "Beautiful mountain scenery background",
    "model_params": {
      "task_id": "task-unified-xxx",
      "image_number": 0,
      "canvas": {
        "width": 1024,
        "height": 1024
      },
      "img_pos": {
        "width": 512,
        "height": 512,
        "x": 256,
        "y": 256
      },
      "speed": "fast"
    }
  }'
```

## Core request fields
- `model`: must be `mj-v8.1-edit`
- `prompt`: required fill/edit prompt
- `model_params.task_id`: required source task ID
- `model_params.image_number`: optional source image index, `0` to `3`, default `0`
- `model_params.canvas`: required canvas size
- `model_params.img_pos`: required image position and size inside the canvas
- `model_params.speed`: optional `fast` or `turbo`, default `fast`
- `callback_url`: optional HTTPS callback URL

## Important restriction
The canvas aspect ratio must match the source task image aspect ratio. If it does not match, the task can fail during execution.
