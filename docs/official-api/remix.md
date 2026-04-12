# Midjourney V7 Remix

## Model
`mj-v7-remix`

## Summary
- recreates a selected image with a new prompt
- preserves original structure more than starting from scratch
- requires task ID, image number, and a new prompt
- supports `mode` and `speed` inside `model_params`

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-remix",
  "prompt": "Convert to oil painting style --ar 1:1",
  "model_params": {
    "task_id": "task-unified-xxx",
    "image_number": 0,
    "mode": "strong",
    "speed": "fast"
  }
}
```

## Required inputs
- `prompt`: new target description
- `task_id`: completed source task
- `image_number`: selected image index
- `mode`: remix mode
- `speed`: generation speed tier

## Notes
The reference material describes remix as different from variation because remix requires a prompt that reinterprets the original result.
