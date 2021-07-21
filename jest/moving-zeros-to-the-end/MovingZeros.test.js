const moveZeros = require('../../tasks/moving-zeros-to-the-end/MovingZeros');

const arr1 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
const resultArr1 = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
const arr2 = [false, 1, 1, 2, 1, 3, 'a', 0, 0];
const resultArr2 = [false, 1, 1, 2, 1, 3, 'a', 0, 0];

describe('Simple test for task:Moving zeros to the end', () => {
  test('should be return [1,2,1,1,3,1,0,0,0,0]', () => {
    expect(moveZeros(arr1)).toEqual(resultArr1);
  });
  test('should be return [false,1,1,2,1,3,"a",0,0]', () => {
    expect(moveZeros(arr2)).toEqual(resultArr2);
  });
  test('should not return NaN', () => {
    expect(moveZeros(arr1)).not.toBeNaN();
  });
  test('should not return Undefined', () => {
    expect(moveZeros(arr2)).not.toBeUndefined();
  });
});
