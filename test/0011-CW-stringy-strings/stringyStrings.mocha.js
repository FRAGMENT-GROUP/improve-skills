const assert = require('assert');
const { stringy } = require('../../tasks/0011-CW-stringy-strings/stringyStrings');

describe('simple Mocha tests for task Stringy string', () => {
  it('should return correct string - "10101010101010101010101010101010101010101010101010101010"', () => { assert.strictEqual(stringy(56), '10101010101010101010101010101010101010101010101010101010'); });
  it('should return correct string - "1010101"', () => { assert.strictEqual(stringy(7), '1010101'); });
  it('should return error message - "ValueError"', () => { assert.strictEqual(stringy(''), 'ValueError'); });
  it('should return correct string - "ValueError"', () => { assert.strictEqual(stringy(-5), 'ValueError'); });
});
