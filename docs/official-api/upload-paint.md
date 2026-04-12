# Midjourney V7 Upload Paint

## Model
`mj-v7-upload-paint`

## Summary
- supports advanced editing from an uploaded image
- does not depend on an existing task
- supports mask, canvas, and image position controls
- combines image upload with prompt-guided canvas editing

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-upload-paint",
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
}
```

## Required inputs
- `prompt`: edit target description
- `image_urls`: one uploaded image URL
- `mask`: masked paint area
- `canvas`: output canvas dimensions
- `img_pos`: original image placement on canvas
