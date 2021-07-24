const { getDivisorsCnt } = require('../../tasks/StarCode/task-0045div');

describe('Simple tests for task: Count the divisors of a number, function: getDivisorsCnt', () => {
  it('should return 2', () => {
    expect(getDivisorsCnt(5)).toBe(2);
  });
  it('should return 2', () => {
    expect(getDivisorsCnt(3)).toBe(2);
  });
  it('shouldn`t return 120', () => {
    expect(getDivisorsCnt(4)).not.toBe(120);
  });
  it('shouldn`t return 2048', () => {
    expect(getDivisorsCnt(5)).not.toBe(2048);
  });
});
