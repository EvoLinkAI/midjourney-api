const apiKey = process.env.EVOLINK_API_KEY;

const response = await fetch('https://api.evolink.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'mj-v7',
    prompt: 'A cinematic fashion editorial portrait --ar 2:3 --s 400',
    model_params: {
      speed: 'fast'
    }
  })
});

const data = await response.json();
console.log(JSON.stringify(data, null, 2));
