const assert = require('assert');
const { stringy } = require('../../tasks/0011-CW-stringy-strings/stringyStrings');

describe('stringyString mocha', () => {
  it('should return correct string', () => { assert.strictEqual(stringy(5), '10101'); });
  it('should return correct string', () => { assert.strictEqual(stringy(1), '1'); });
  it('should return correct string', () => { assert.strictEqual(stringy(-7), 'ValueError'); });
  it('should return correct string', () => { assert.strictEqual(stringy(0), 'ValueError'); });
});
