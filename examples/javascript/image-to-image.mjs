const apiKey = process.env.EVOLINK_API_KEY;

const response = await fetch('https://api.evolink.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'mj-v7',
    prompt: 'https://example.com/reference.jpg luxury product photo on marble table --ar 4:5 --iw 1.8',
    model_params: {
      speed: 'fast'
    }
  })
});

console.log(await response.json());
