# Midjourney V7 Inpaint

## Model
`mj-v7-inpaint`

## Summary
- edits a masked region in one selected image
- requires a completed task ID and selected image number
- requires mask data inside `model_params.mask`
- prompt describes what should appear in the masked region

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
  "model": "mj-v7-inpaint",
  "prompt": "Add a cherry blossom tree",
  "model_params": {
    "task_id": "task-unified-xxx",
    "image_number": 0,
    "mask": {
      "areas": [
        {
          "width": 200,
          "height": 200,
          "points": [50, 50, 50, 250, 250, 250, 250, 50]
        }
      ]
    }
  }
}
```

## Required inputs
- `prompt`: desired content for the inpaint region
- `task_id`: completed source task
- `image_number`: selected image index
- `mask.areas`: polygon points and region dimensions

## Response shape
The response is an asynchronous image task.

## Notes
This workflow is suitable when only a local region should change instead of regenerating the entire image.
