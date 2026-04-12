const apiKey = process.env.EVOLINK_API_KEY;

const response = await fetch('https://api.evolink.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'mj-v7-upscale',
    model_params: {
      task_id: 'task-unified-xxx',
      image_number: 1,
      type: 'standard'
    }
  })
});

console.log(await response.json());
