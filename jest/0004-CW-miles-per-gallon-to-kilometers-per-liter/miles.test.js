const { converter } = require('../../tasks/0004-CW-miles-per-gallon-to-kilometers-per-liter/miles');

describe('converter Jest', () => {
  it('should return number', () => { expect(converter(10)).toBe(3.54); });
  it('should return number', () => { expect(converter(20)).toBe(7.08); });
  it('should return number', () => { expect(converter(0)).toBe(0); });
  it('should return number', () => { expect(converter(30)).toBe(10.62); });
});
