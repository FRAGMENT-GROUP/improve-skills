const moveZeros = require('../../tasks/moving-zeros-to-the-end/MovingZeros');

const arr1 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
const resultArr1 = [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
const arr2 = [false, 1, 1, 2, 1, 3, 'a', 0, 0];
const resultArr2 = [false, 1, 1, 2, 1, 3, 'a', 0, 0];

describe('Simple test for task:Moving zeros to the end', () => {
  it('should be return [1,2,1,1,3,1,0,0,0,0]', () => {
    assert.strictEqual(moveZeros(arr1), resultArr1);
  });
  test('should be return [false,1,0,1,2,0,1,3,"a"]', () => {
    assert.strictEqual(moveZeros(arr2), resultArr2);
  });
  test('should not return NaN', () => {
    assert.notStrictEqual(moveZeros(arr1), NaN);
  });
  test('should not return Undefined', () => {
    assert.notStrictEqual(moveZeros(arr2), Undefined);
  });
});
