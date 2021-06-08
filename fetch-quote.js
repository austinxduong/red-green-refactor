import fetch from 'node-fetch';

export async function fetchQuotes(number) {
  const response = await fetch('futuramaapi.herokuapp.com/api/quotes');

  const quote = await response.json();
  return {
    name: quote[0].character,
    text: quote[0].quote,
    image: quote[0].image
  };
}
