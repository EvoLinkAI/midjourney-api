# Midjourney V7 Upscale

## Model
`mj-v7-upscale`

## Summary
- upscales one selected image from a completed Midjourney task
- supports `standard` and `creative` modes
- already upscaled images cannot be upscaled again according to the reference material
- returns an asynchronous task

## Authentication
All endpoints require Bearer token authentication.

```text
Authorization: Bearer YOUR_API_KEY
```

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-upscale",
  "model_params": {
    "task_id": "task-unified-xxx",
    "image_number": 1,
    "type": "standard"
  }
}
```

## Required inputs
- `task_id`: completed source task
- `image_number`: selected image from the source task
- `type`: upscale mode

## Callback support
The reference material states that callback URLs must:
- use HTTPS
- avoid private IP destinations
- respond within 10 seconds
- expect up to 3 retries on failure

## Response shape
The response is an asynchronous image task with `id`, `status`, `progress`, `task_info`, and `usage`.
