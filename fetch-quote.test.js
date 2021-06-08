import { fetchQuotes } from './fetch-quote.js';

describe('fetchQuotes', () => {
  it('returns/fetches quote, name, txt, and image',
    async () => {
      const quote = await fetchQuotes(1);
      expect(quote).toEqual(
        {
          name: expect.any(String),
          text: expect.any(String),
          image: expect.any(String),
        }
      );
    });
});
