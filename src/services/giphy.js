import GiphyApiClient from 'giphy-js-sdk-core';

const client = GiphyApiClient('gAGhXnlIBtr0TVNX92DfSjvwOanzy4c3');

export default async function searchGif(query){
    const response = await client.search('gifs', { q: query });
    if (response.data.length > 0) {
      return response.data[0].images.downsized_medium;
    }
    return null;
  }
  