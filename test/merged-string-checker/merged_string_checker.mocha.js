const assert = require('assert').strict;

const { isMerge } = require('../../tasks/merged-string-checker/merged_string_checker');

describe('#isMerge()', () => {
  it('Should return true', () => {
    assert.strictEqual(isMerge('codewars', 'code', 'wars'), true);
  });

  it('Should return true', () => {
    assert.strictEqual(isMerge('codewars', 'cdw', 'oears'), true);
  });

  it('Should return false', () => {
    assert.strictEqual(isMerge('codewars', 'cdw', 'oearss'), false);
  });

  it('Should return false', () => {
    assert.strictEqual(isMerge('codewars', 'code', 'code'), false);
  });

  it('Should return false', () => {
    assert.strictEqual(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am'), true);
  });
});
