const assert = require('assert');
const { century } = require('../../tasks/0018-CW-Centry-from-year/0018-CW-Centry-from-year');

describe('Simple tests for task #0018 Centry from year, should return centry instead of year', () => {
  it('should return 16000', () => {
    assert.strictEqual(century(1600000), 16000);
  });
  it('should return 1', () => {
    assert.strictEqual(century(100), 1);
  });
  it('shouldn`t return 25', () => {
    assert.notStrictEqual(century(1625), 25);
  });
  it('shouldn`t return 5555', () => {
    assert.notStrictEqual(century(625), 5555);
  });
});
