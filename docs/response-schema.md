# Midjourney API Response Schema

## Create Task Response

```json
{
  "id": "task-unified-xxx",
  "object": "image.generation.task",
  "model": "mj-v7",
  "status": "pending",
  "progress": 0,
  "type": "image"
}
```

## Completed Task Response

```json
{
  "id": "task-unified-xxx",
  "status": "completed",
  "progress": 100,
  "model": "mj-v7",
  "results": [
    "https://media.evolink.ai/..."
  ]
}
```

A Midjourney V7 generation request targets four images, but moderation may reduce the number of returned outputs.

## Failed Task Response

```json
{
  "id": "task-unified-xxx",
  "status": "failed",
  "error": {
    "code": "invalid_request",
    "message": "Explain what went wrong."
  }
}
```

Generated image URLs are temporary. Save completed results promptly.
