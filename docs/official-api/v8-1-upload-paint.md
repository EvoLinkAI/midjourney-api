# Midjourney V8.1 Upload Paint

Official source: [Midjourney V8.1 Upload Paint](https://docs.evolink.ai/en/api-manual/image-series/midjourney/mj-v8-1-upload-paint).

## Model
`mj-v8.1-upload-paint`

## Summary
- performs advanced canvas editing from uploaded image URLs
- supports mask area specification and position adjustment
- is similar to `mj-v8.1-edit`, but does not depend on an existing task
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
    "model": "mj-v8.1-upload-paint",
    "prompt": "Beautiful mountain scenery background",
    "image_urls": [
      "https://example.com/photo.jpg"
    ],
    "model_params": {
      "mask": {
        "areas": [
          {
            "width": 100,
            "height": 100,
            "points": [10, 10, 10, 100, 100, 100, 100, 10]
          }
        ]
      },
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
- `model`: must be `mj-v8.1-upload-paint`
- `prompt`: required edit prompt
- `image_urls`: required array; the first image URL is used
- `model_params.mask`: required polygon area or mask image URL
- `model_params.canvas`: required canvas size
- `model_params.img_pos`: required image position and size inside the canvas
- `model_params.speed`: optional `fast` or `turbo`, default `fast`
- `callback_url`: optional HTTPS callback URL

## Mask note
For mask image URLs, the official docs specify alpha-channel behavior as opaque means repaint and transparent means keep, which is the opposite of many typical inpaint masks.
