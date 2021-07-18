const assert = require('assert');
const sum = require('../../tasks/sum');

describe('simple tests', () => {
  it('should return 3', () => {
    assert.strictEqual(sum([1, 2]), 3);
  });
});
