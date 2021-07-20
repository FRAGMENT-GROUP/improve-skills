const assert = require('assert');

const { arrayDiff } = require('../../tasks/array-diff/array_diff');

describe('#arrayDiff()', () => {
  it('Shold return [4]', () => {
    assert.deepStrictEqual(arrayDiff([3, 4], [3]), [4]);
  });
  it('Shold return [1, 8, 2]', () => {
    assert.deepStrictEqual(arrayDiff([1, 8, 2], []), [1, 8, 2]);
  });
  it('Shold not return [1]', () => {
    assert.notStrictEqual(arrayDiff([1, 2, 3], [1, 2]), [1]);
  });
  it('Shold not return [5]', () => {
    assert.notDeepStrictEqual(arrayDiff([3, 4], [3]), [5]);
  });
});
