const { stringy } = require('../../tasks/0011-CW-stringy-strings/stringyStrings');

describe('stringyString mocha', () => {
  it('should return correct string', () => { expect(stringy(5)).toBe('10101'); });
  it('should return correct string', () => { expect(stringy(1)).toBe('1'); });
  it('should return correct string', () => { expect(stringy(-7)).toBe('ValueError'); });
  it('should return correct string', () => { expect(stringy(0)).toBe('ValueError'); });
});
