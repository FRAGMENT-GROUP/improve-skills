const { factorial } = require('../../tasks/StarCode/task-0043-factorial');

describe('Simple tests for task:Factorial, function: factorial', () => {
  it('should return 120', () => {
    expect(factorial(5)).toBe(120);
  });
  it('should return 6', () => {
    expect(factorial(3)).toBe(6);
  });
  it('shouldn`t return 2', () => {
    expect(factorial(4)).not.toBe(2);
  });
  it('shouldn`t return 2048', () => {
    expect(factorial(5)).not.toBe(2048);
  });
});
