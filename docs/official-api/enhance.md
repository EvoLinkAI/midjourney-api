# Midjourney V7 Enhance

## Model
`mj-v7-enhance`

## Summary
- improves one selected generated image
- requires task ID and image number
- returns an asynchronous image task

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-enhance",
  "model_params": {
    "task_id": "task-unified-xxx",
    "image_number": 0
  }
}
```

## Required inputs
- `task_id`: completed source task
- `image_number`: selected image index
