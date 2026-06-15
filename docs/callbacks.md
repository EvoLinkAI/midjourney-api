# Midjourney API Callback / Webhook

Pass `callback_url` in the create request if you want EvoLink to notify your server when a Midjourney task completes or fails.

```json
{
  "callback_url": "https://your-server.example.com/evolink-webhook"
}
```

Requirements:

- Use HTTPS.
- Do not target private IP addresses or localhost in production.
- Respond within 10 seconds.
- Expect up to 3 delivery attempts.
- Store the task ID so you can poll `GET /v1/tasks/{task_id}` as a fallback.

Example callback payload:

```json
{
  "id": "task-unified-xxx",
  "status": "completed",
  "model": "mj-v7",
  "results": [
    "https://media.evolink.ai/..."
  ]
}
```
