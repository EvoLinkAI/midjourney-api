# Midjourney API Pricing

This pricing summary separates the latest V8.1 multiplier-based guidance from the preserved V7 fixed-price reference already present in this repository.

## Midjourney V8.1 pricing notes

The V8.1 official docs describe billing through speed and quality multipliers. This repository does not invent fixed dollar prices for V8.1.

| Setting | Values | Billing note |
|---|---|---|
| `model_params.speed` | `draft`, `fast`, `turbo` | `draft` and `fast` use the same speed multiplier; `turbo` is about 2x fast |
| `quality` | `standard`, `hd` | `standard` is 1x; `hd` is 1.5x |
| Combined cost | speed x quality | for example, `turbo` + `hd` is about 3x the base |

V8.1 `draft` returns 24 lightweight 0.5K sketch images in one run and cannot be combined with `quality: "hd"`. Fast and turbo modes return 4 images per generation.

## Preserved Midjourney V7 generation pricing

| Model | Speed | Price per request | Approx. credits | Notes |
|---|---|---:|---:|---|
| `mj-v7` | draft | $0.040 | 2.7 | economy mode |
| `mj-v7` | fast | $0.079 | 5.4 | default recommendation |
| `mj-v7` | turbo | $0.159 | 10.8 | priority speed |

## Billing rules

- each generation request aims to generate multiple images; V8.1 draft returns lightweight sketches for exploration
- returned image count may be lower because of Midjourney moderation filtering
- billing is per request, not per image
- V8.1 speed selection is controlled with `model_params.speed`
- V8.1 output resolution is controlled with top-level `quality`
- preserved V7 object reference workflows may increase cost and processing time
