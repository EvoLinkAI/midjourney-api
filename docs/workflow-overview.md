# Midjourney API Workflow Overview

This document summarizes when to use each official Midjourney V7 workflow.

| Workflow | Model | Use it when... |
|---|---|---|
| Image Generation | `mj-v7` | you want text-to-image or image-to-image generation |
| Upscale | `mj-v7-upscale` | you selected one output image and want a larger result |
| Inpaint | `mj-v7-inpaint` | you only want to change a masked region |
| Outpaint | `mj-v7-outpaint` | you want a larger canvas around the original result |
| Pan | `mj-v7-pan` | you want to extend the scene in one direction |
| Remix | `mj-v7-remix` | you want a new prompt-driven version of one selected image |
| Retexture | `mj-v7-retexture` | you want to keep structure but change material, finish, or surface look |
| Canvas Edit | `mj-v7-edit` | you want to reposition an image and fill new space |
| Enhance | `mj-v7-enhance` | you want to improve a selected result |
| Remove Background | `mj-v7-remove-bg` | you want a transparent subject cutout |
| Upload Paint | `mj-v7-upload-paint` | you want advanced painting, masking, and canvas control starting from an uploaded image |
