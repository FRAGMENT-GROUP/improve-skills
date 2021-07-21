const assert = require('assert');
const {
  john,
  ann,
  sumJohn,
  sumAnn,
} = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');

describe('Simple tests for task: John and Ann sign up for Codewars', () => {
  it('should return [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]', () => {
    assert.deepStrictEqual(john(11), [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });
  it('should return [1, 1, 2, 2, 3, 3]', () => {
    assert.deepStrictEqual(ann(6), [1, 1, 2, 2, 3, 3]);
  });
  it('should return 1720', () => {
    assert.strictEqual(sumJohn(75), 1720);
  });
  it('should return 6930', () => {
    assert.strictEqual(sumAnn(150), 6930);
  });
});
