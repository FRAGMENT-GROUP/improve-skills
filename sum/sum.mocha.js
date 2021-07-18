const assert = require('assert');
const sum = require('./sum');

describe('simple tests', () => {
  it('should return 3', () => {
    assert.strictEqual(sum([1, 2]), 3);
  });

  it('should return 6', () => {
    assert.strictEqual(sum([4, 2]), 6);
  });
});
