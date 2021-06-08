import capitalizeAndFilter from './capitalize-filter.js';

describe('capitalizeAndFilter', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
    const stringArray = ['favorite', 'clear', 'monkey', 'Frank', false, []];
    expect(capitalizeAndFilter(stringArray)).toEqual(['CLEAR', 'MONKEY', false, []]);
  });
}); 
