const { stringy } = require('../../tasks/0011-CW-stringy-strings/stringyStrings');

describe('simple Jest tests for task Stringy string', () => {
  it('should return correct string - "10101"', () => { expect(stringy(5)).toBe('10101'); });
  it('should return correct string - "1"', () => { expect(stringy(1)).toBe('1'); });
  it('should return error message "ValueError"', () => { expect(stringy(-7)).toBe('ValueError'); });
  it('should return error message "ValueError"', () => { expect(stringy(0)).toBe('ValueError'); });
});
