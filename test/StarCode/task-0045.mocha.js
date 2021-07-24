const assert = require('assert');
const { getDivisorsCnt } = require('../../tasks/StarCode/task-0045div');

describe('Simple tests for task:Count the divisors of a number, function: getDivisorsCnt', () => {
  it('should return 2', () => {
    assert.strictEqual(getDivisorsCnt(3), 2);
  });
  it('should return 2', () => {
    assert.strictEqual(getDivisorsCnt(5), 2);
  });
  it('shouldn`t return 25', () => {
    assert.notStrictEqual(getDivisorsCnt(2), 25);
  });
  it('shouldn`t return 5', () => {
    assert.notStrictEqual(getDivisorsCnt(5), 5);
  });
});
