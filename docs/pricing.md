# Midjourney API Pricing

This pricing summary is based on the Midjourney V7 pricing and product reference materials provided in this repository.

## Midjourney V7 generation pricing

| Model | Speed | Price per request | Approx. credits | Notes |
|---|---|---:|---:|---|
| `mj-v7` | draft | $0.040 | 2.7 | economy mode |
| `mj-v7` | fast | $0.079 | 5.4 | default recommendation |
| `mj-v7` | turbo | $0.159 | 10.8 | priority speed |

## Billing rules

- each request aims to generate 4 images
- returned image count may be lower because of Midjourney moderation filtering
- billing is per request, not per image
- object reference workflows may increase cost and processing time
- speed selection is controlled with `model_params.speed`
