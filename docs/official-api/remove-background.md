# Midjourney V7 Remove Background

## Model
`mj-v7-remove-bg`

## Summary
- removes the background and returns a transparent-image result
- only needs one input image URL
- does not use prompt or speed parameters
- does not depend on a source task

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-remove-bg",
  "image_urls": [
    "https://example.com/photo.jpg"
  ]
}
```

## Required inputs
- `image_urls`: one input image URL

## Notes
According to the official reference material, this is the simplest Midjourney V7 image workflow in the set because it only requires an input image.
