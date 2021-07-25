const { century } = require('../../tasks/0018-CW-Centry-from-year/0018-CW-Centry-from-year');

describe('Simple tests for task #0018 Centry from year, should return centry instead of year', () => {
  it('should return 18000', () => {
    expect(century(1700000)).toBe(17000);
  });
  it('should return 2', () => {
    expect(century(123)).toBe(2);
  });
  it('shouldn`t return 200', () => {
    expect(century(121)).not.toBe(200);
  });
  it('shouldn`t return 9', () => {
    expect(century(2001)).not.toBe(9);
  });
});
