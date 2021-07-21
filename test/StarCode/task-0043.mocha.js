const assert = require('assert');
const { factorial } = require('../../tasks/StarCode/task-0043-factorial');

describe('Simple tests for task:All Star Code Challenge #1, function: factorial', () => {
  it('should return 6', () => {
    assert.strictEqual(factorial(3), 6);
  });
  it('should return 120', () => {
    assert.strictEqual(factorial(5), 120);
  });
  it('shouldn`t return 25', () => {
    assert.notStrictEqual(factorial(2), 25);
  });
  it('shouldn`t return 5', () => {
    assert.notStrictEqual(factorial(5), 5);
  });
});
