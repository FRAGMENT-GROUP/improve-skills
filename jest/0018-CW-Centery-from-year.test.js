const { century } = require('../tasks/0018-CW-Centry-from-year');

describe('Simple tests for task 0018 Centry from year, should return centry instead of year', () => {
  it('should return 18', () => {
    expect(century(1701)).toBe(18);
  });
  it('should return 8', () => {
    expect(century(788)).toBe(8);
  });
  it('shouldn`t return 200', () => {
    expect(century(121)).not.toBe(200);
  });
  it('shouldn`t return 9', () => {
    expect(century(2001)).not.toBe(9);
  });
});
