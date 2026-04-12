# Midjourney V7 Canvas Edit

## Model
`mj-v7-edit`

## Summary
- repositions a generated image on a larger canvas
- fills blank areas with AI-generated content
- requires task ID, image number, canvas size, and image placement
- suitable for composition adjustment and scene expansion

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-edit",
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
}
```

## Required inputs
- `prompt`: desired fill content
- `task_id`: completed source task
- `image_number`: selected image index
- `canvas`: output canvas dimensions
- `img_pos`: placement of the original image inside the canvas
