const assert = require('assert');
const arrange = require('../task/replace-alphabet');

describe('simple tests', () => {
  it('Should return 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11', () => {
    assert.strictEqual(arrange(["The sunset sets at twelve o' clock"]), '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');
  });
  it('Should return 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20', () => {
    assert.strictEqual(arrange(['The narwhal bacons at midnight.']), '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20');
  });
  it('Should not return NaN', () => {
    assert.notStrictEqual(arrange(["The sunset sets at twelve o' clock"]), NaN);
  });
  it('Should not return undefined', () => {
    assert.notStrictEqual(arrange(['The narwhal bacons at midnight.']), undefined);
  });
});
