#!/usr/bin/env bash

curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v7-inpaint",
    "prompt": "Add a cherry blossom tree",
    "model_params": {
      "task_id": "task-unified-xxx",
      "image_number": 0,
      "mask": {
        "areas": [
          {
            "width": 200,
            "height": 200,
            "points": [50, 50, 50, 250, 250, 250, 250, 50]
          }
        ]
      }
    }
  }'
