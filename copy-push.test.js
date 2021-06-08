import copyPush from './copy-push';

describe('copyPush', () => {
  it('returns new array with all the items in the original array, and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArray = copyPush(numbers, 4);
    expect(newArray). toEqual([1, 2, 3, 4]);
    // expect(numbers). toEqual([1, 2, 3]);
  });
}); 
