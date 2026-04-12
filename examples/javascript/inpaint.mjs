const apiKey = process.env.EVOLINK_API_KEY;

const response = await fetch('https://api.evolink.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'mj-v7-inpaint',
    prompt: 'Add a cherry blossom tree',
    model_params: {
      task_id: 'task-unified-xxx',
      image_number: 0,
      mask: {
        areas: [
          {
            width: 200,
            height: 200,
            points: [50, 50, 50, 250, 250, 250, 250, 50]
          }
        ]
      }
    }
  })
});

console.log(await response.json());
