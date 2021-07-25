const { bonusTime } = require('../../tasks/0017-CW-Do-i-get-bonus/0017-CW-Do-i-get-bonus');

describe('Simple tests for task 0017 Task should return x10 salary if bonus === True and salary without changes if bonus === False', () => {
  it('should return 10', () => {
    expect(bonusTime(1, true)).toBe('£10');
  });
  it('should return 19000000', () => {
    expect(bonusTime(1900000, true)).toBe('£19000000');
  });
  it('shouldn`t return 200', () => {
    expect(bonusTime(190, false)).not.toBe('£200');
  });
  it('shouldn`t return 9', () => {
    expect(bonusTime(190, false)).not.toBe('£9');
  });
});
