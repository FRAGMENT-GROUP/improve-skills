const { converter } = require('../../tasks/0004-CW-miles-per-gallon-to-kilometers-per-liter/miles');

describe('simple Jest tests for task Miles per gallon to kilometers per liter', () => {
  it('should return a number - 3.54', () => { expect(converter(10)).toBe(3.54); });
  it('should return a number - 1.06', () => { expect(converter(3)).toBe(1.06); });
  it('should return \'NaN\' if the value is not a number', () => { expect(converter('aaa')).toBe(NaN); });
  it('should return message "the number cant be negative"', () => { expect(converter('')).toBe('the number cant be negative'); });
});
