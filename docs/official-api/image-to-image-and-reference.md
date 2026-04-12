# Midjourney V7 Image-to-Image and Reference

## Summary
According to the official Midjourney V7 references used for this repository, image-to-image and reference workflows are handled inside the `mj-v7` prompt syntax.

## Image-to-image rules
- place image URLs at the beginning of the prompt
- maximum 20 image prompts
- supported formats: png, gif, webp, jpg, jpeg
- one image with no text is invalid
- one image plus text is valid
- two or more images with no text is valid

## Reference-related parameters
- `--iw` controls image prompt influence
- `--sref` applies style reference
- `--sw` controls style reference strength
- `--sv` controls style reference version
- `--oref` applies object reference in V7
- `--ow` controls object reference strength

## Example prompt
```text
https://example.com/ref.jpg luxury product photo on marble table --ar 4:5 --iw 1.8 --sref https://example.com/style.jpg
```
