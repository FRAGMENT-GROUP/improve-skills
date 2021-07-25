const { arrayDiff } = require('../../tasks/array-diff/array_diff');

describe('#arrayDiff()', () => {
  describe('Should pass basic tests', () => {
    it('Should return [3]', () => {
      expect(arrayDiff([2, 3, 7], [2, 7])).toStrictEqual([3]);
    });
    it('Should return [7]', () => {
      expect(arrayDiff([2, 3, 7], [2, 3])).toStrictEqual([7]);
    });
    it('Should not return [1]', () => {
      expect(arrayDiff([2, 3, 7], [2, 3, 7])).not.toStrictEqual([1]);
    });
    it('Should not return [10]', () => {
      expect(arrayDiff([2, 3, 7], [2, 7])).not.toStrictEqual([10]);
    });
  });
  describe('Should work with long numbers', () => {
    it('Should return [243546576, 573645246, 356363]', () => {
      const firstArray = [333, 243546576, 573645246, 356363];
      const secondArray = [333];
      expect(arrayDiff(firstArray, secondArray)).toStrictEqual([243546576, 573645246, 356363]);
    });
    it('Should return [666]', () => {
      const firstArray = [7897087, 797897769, 9999999, 8973270, 666];
      const secondArray = [7897087, 797897769, 9999999, 8973270];
      expect(arrayDiff(firstArray, secondArray)).toStrictEqual([666]);
    });
  });
});
