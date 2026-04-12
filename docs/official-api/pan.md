# Midjourney V7 Pan

## Model
`mj-v7-pan`

## Summary
- extends a selected result in one direction
- uses completed task ID plus image number
- supports directional extension and scale
- optional prompt can guide the newly extended area

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-pan",
  "model_params": {
    "task_id": "task-unified-xxx",
    "image_number": 0,
    "direction": "right",
    "scale": 2
  }
}
```

## Required inputs
- `task_id`: completed source task
- `image_number`: selected image index
- `direction`: extension direction
- `scale`: expansion amount

## Notes
Use pan when you want directional expansion, for example extending a composition left, right, up, or down.
