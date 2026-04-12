# Midjourney V7 Outpaint

## Model
`mj-v7-outpaint`

## Summary
- expands beyond the original image boundary
- works from a completed task and selected image
- supports `scale` and optional prompt guidance for the expanded area
- returns an asynchronous image task

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-outpaint",
  "model_params": {
    "task_id": "task-unified-xxx",
    "image_number": 1,
    "scale": 1.5
  }
}
```

## Required inputs
- `task_id`: completed source task
- `image_number`: selected image index
- `scale`: outpaint expansion factor
- `prompt`: optional guidance for newly expanded content

## Notes
Use outpaint when you want a wider frame around an existing result rather than a direction-specific extension.
