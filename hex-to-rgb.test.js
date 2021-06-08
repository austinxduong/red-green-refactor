import getName from './hex-to-rgb.js';



describe('getName', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toBe('spot');
  });
  // it('returns name property of Aang', () => {
  //     const character = { _id: '5cf5679a915ecad153ab68c9', 
  //     name: 'Aang '};
  //     const name = getName(character);
  //     expect(name).toBe('Aang');
  //     });
});  


// describe('copyPush', () => {
//   it('returns new array with all the items in the original array, and a new item pushed to the end', () => {
//     const numbers = [1, 2, 3];
//     const newArray = copyPush(numbers, 4);
//     expect(newArray). toEqual([1, 2, 3, 4]);
//     // expect(numbers). toEqual([1, 2, 3]);
//   });
// }); 
