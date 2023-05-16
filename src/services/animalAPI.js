const apiKey = 'FJLr12qfauX+czbUc2mdLw==iuCiM86qEcVtKUTV';

export function getAnimalData(name) {
  const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${name}`;
  return fetch(apiUrl, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
}
