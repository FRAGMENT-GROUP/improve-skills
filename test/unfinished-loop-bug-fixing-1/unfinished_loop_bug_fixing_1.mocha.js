const assert = require('assert');

const createArray = require('./unfinished_loop_bug_fixing_1');

describe('#createArray()', () => {
  it('Should return array [1]', () => {
    assert.deepStrictEqual(createArray(1), [1]);
  });
  it('Should return [1, 2]', () => {
    assert.deepStrictEqual(createArray(2), [1, 2]);
  });
  it('Should not return  [1, 2, 3]', () => {
    assert.notDeepStrictEqual(createArray(2), [1, 2, 3]);
  });
  it('Should not return [1, 2]', () => {
    assert.notDeepStrictEqual(createArray(3), [1, 2]);
  });
});
