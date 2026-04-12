# Midjourney V7 Retexture

## Model
`mj-v7-retexture`

## Summary
- changes texture and style while preserving image structure
- does not depend on a source task
- accepts one input image URL directly
- only supports limited follow-up operations according to the reference material

## Endpoint
`POST /v1/images/generations`

## Example request

```json
{
  "model": "mj-v7-retexture",
  "prompt": "Cyberpunk neon style",
  "image_urls": [
    "https://example.com/photo.jpg"
  ],
  "model_params": {
    "speed": "fast"
  }
}
```

## Required inputs
- `prompt`: target texture or style description
- `image_urls`: one input image URL
- `model_params.speed`: optional speed tier

## Notes
Use retexture when composition should stay recognizable but material, finish, or visual style should change.
