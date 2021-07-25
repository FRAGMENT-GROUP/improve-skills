const assert = require('assert');

const { arrayDiff } = require('../../tasks/array-diff/array_diff');

describe('#arrayDiff()', () => {
  describe('Should pass basic tests', () => {
    it('Should return [4]', () => {
      assert.deepStrictEqual(arrayDiff([3, 4], [3]), [4]);
    });
    it('Should return [1, 8, 2]', () => {
      assert.deepStrictEqual(arrayDiff([1, 8, 2], []), [1, 8, 2]);
    });
    it('Should not return [1]', () => {
      assert.notStrictEqual(arrayDiff([1, 2, 3], [1, 2]), [1]);
    });
    it('Should not return [5]', () => {
      assert.notDeepStrictEqual(arrayDiff([3, 4], [3]), [5]);
    });
  });
  describe('Should work with long numbers', () => {
    it('Should return [243546576, 573645246, 356363]', () => {
      const firstArray = [333, 243546576, 573645246, 356363];
      const secondArray = [333];
      assert.deepStrictEqual(arrayDiff(firstArray, secondArray), [243546576, 573645246, 356363]);
    });
    it('Should return [666]', () => {
      const firstArray = [7897087, 797897769, 9999999, 8973270, 666];
      const secondArray = [7897087, 797897769, 9999999, 8973270];
      assert.deepStrictEqual(arrayDiff(firstArray, secondArray), [666]);
    });
  });
});
