const assert = require('assert');
const { bonusTime } = require('../../tasks/0017-CW-Do-i-get-bonus/0017-CW-Do-i-get-bonus');

describe('Simple tests for task 0017 Do i get bonus, should return improved salary which depends on bonus', () => {
  it('should return 15000000', () => {
    assert.strictEqual(bonusTime(1500000, false), '£1500000');
  });
  it('should return 15', () => {
    assert.strictEqual(bonusTime(15, false), '£15');
  });
  it('shouldn`t return 15000001', () => {
    assert.notStrictEqual(bonusTime(1501, true), '£15000001');
  });
  it('shouldn`t return 5555', () => {
    assert.notStrictEqual(bonusTime(151, true), '£5555');
  });
});
