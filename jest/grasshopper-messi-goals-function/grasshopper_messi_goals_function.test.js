const { goals } = require('./grasshopper_messi_goals_function');

describe('$goals()', () => {
  it('Should return 0', () => {
    expect(goals(0, 0, 0)).toBe(0);
  });
  it('Should return 58', () => {
    expect(goals(43, 10, 5)).toBe(58);
  });
  it('Should not return -1', () => {
    expect(goals(0, 0, 0)).not.toBe(-1);
  });
  it('Should not return 0', () => {
    expect(goals(6, 0, 0)).not.toBe(0);
  });
});
