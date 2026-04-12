# Midjourney API FAQ

## How is Midjourney API billed?
Billing is per request. A generation request targets 4 images, but Midjourney moderation can reduce how many are returned.

## How do I do image-to-image?
Put one or more image URLs at the beginning of the prompt, then add your text prompt and optional Midjourney parameters.

## Why do some workflows require a task ID?
Workflows like upscale, inpaint, outpaint, pan, remix, enhance, and canvas edit operate on one selected image from a completed generation task.

## Can I use `--draft`, `--fast`, or `--turbo` in the prompt?
No. Speed is controlled through `model_params.speed`.

## Does remove background require a prompt?
No. According to the official reference, `mj-v7-remove-bg` only needs one input image URL.
