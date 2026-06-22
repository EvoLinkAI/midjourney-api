# Midjourney API Workflow Overview

This document summarizes when to use the latest Midjourney V8.1 workflows and the preserved Midjourney V7 workflows.

## Latest V8.1 workflows

| Workflow | Model | Use it when... |
|---|---|---|
| Image Generation | `mj-v8.1` | you want the latest text-to-image or image-to-image generation |
| Variation | `mj-v8.1-variation` | you want subtle or strong variants from a completed V8.1 task |
| Remix | `mj-v8.1-remix` | you want to reinterpret a completed result with a required new prompt |
| Retexture | `mj-v8.1-retexture` | you want to change texture or style directly from an input image URL |
| Upload Paint | `mj-v8.1-upload-paint` | you want advanced painting, masking, and canvas control starting from an uploaded image |
| Canvas Edit | `mj-v8.1-edit` | you want to reposition a completed task image on a canvas and fill blank space |
| Remove Background | `mj-v8.1-remove-bg` | you want a transparent subject cutout from one input image URL |

## Preserved V7 workflows

| Workflow | Model | Use it when... |
|---|---|---|
| Image Generation | `mj-v7` | you need an existing V7 text-to-image or image-to-image integration |
| Upscale | `mj-v7-upscale` | you selected one output image and want a larger result |
| Inpaint | `mj-v7-inpaint` | you only want to change a masked region |
| Outpaint | `mj-v7-outpaint` | you want a larger canvas around the original result |
| Pan | `mj-v7-pan` | you want to extend the scene in one direction |
| Remix | `mj-v7-remix` | you want a V7 prompt-driven version of one selected image |
| Retexture | `mj-v7-retexture` | you want to keep structure but change material, finish, or surface look |
| Canvas Edit | `mj-v7-edit` | you want to reposition an image and fill new space |
| Enhance | `mj-v7-enhance` | you want to improve a selected result |
| Remove Background | `mj-v7-remove-bg` | you want a transparent subject cutout |
| Upload Paint | `mj-v7-upload-paint` | you want advanced painting, masking, and canvas control starting from an uploaded image |
