const { arrayDiff } = require('../../tasks/array-diff/array_diff');

describe('#arrayDiff()', () => {
  it('Should return 3', () => {
    expect(arrayDiff([2, 3, 7], [2, 7])).toStrictEqual([3]);
  });
  it('Should return 7', () => {
    expect(arrayDiff([2, 3, 7], [2, 3])).toStrictEqual([7]);
  });
  it('Should notreturn [1]', () => {
    expect(arrayDiff([2, 3, 7], [2, 3, 7])).not.toStrictEqual([1]);
  });
  it('Should not return 10', () => {
    expect(arrayDiff([2, 3, 7], [2, 7])).not.toStrictEqual([10]);
  });
});
