#!/usr/bin/env bash

curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v7-upscale",
    "model_params": {
      "task_id": "task-unified-xxx",
      "image_number": 1,
      "type": "standard"
    }
  }'
