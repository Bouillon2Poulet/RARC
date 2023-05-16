const DEFAULT_PARAMS = {
  "model": "text-davinci-003",
  "temperature": 0.7,
  "max_tokens": 1500,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}

// Envoyez la requête à l'API
export default async function gptRequest (params){
  const params_ = { ...DEFAULT_PARAMS, "prompt":params };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String('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')
    },
    body: JSON.stringify(params_)
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  const data = await response.json();
  console.log(data.choices[0].text);
  return data.choices[0].text;
}

