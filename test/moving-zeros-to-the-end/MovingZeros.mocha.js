const assert = require('assert');
const moveZeros = require('../../tasks/moving-zeros-to-the-end/MovingZeros');

const arr1 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
const resultArr1 = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
const arr2 = [false, 1, 1, 2, 1, 3, 'a', 0, 0];
const resultArr2 = [false, 1, 1, 2, 1, 3, 'a', 0, 0];

describe('Simple test for task:Moving zeros to the end', () => {
  it('should be return [1,2,1,1,3,1,0,0,0,0]', () => {
    assert.deepStrictEqual(moveZeros(arr1), resultArr1);
  });
  it('should be return [false,1,0,1,2,0,1,3,"a"]', () => {
    assert.deepStrictEqual(moveZeros(arr2), resultArr2);
  });
  it('should not return NaN', () => {
    assert.notStrictEqual(moveZeros(arr1), NaN);
  });
  it('should not return undefined', () => {
    assert.notStrictEqual(moveZeros(arr2), undefined);
  });
});
