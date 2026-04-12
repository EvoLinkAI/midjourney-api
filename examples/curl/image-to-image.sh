#!/usr/bin/env bash

curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header "Authorization: Bearer ${EVOLINK_API_KEY}" \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "mj-v7",
    "prompt": "https://example.com/reference.jpg luxury product photo on marble table --ar 4:5 --iw 1.8",
    "model_params": {
      "speed": "fast"
    }
  }'
