const assert = require('assert');
const code = require('../../tasks/coding-with-squared-strings/code-decode');
const decode = require('../../tasks/coding-with-squared-strings/code-decode');

const code1 = "Omg, it's a test!";
const code2 = "  s,seg'tmt !Oiat";
const code3 = 'The lifeline became my loop';
const code4 = 'iemllna  icyelempheb oTf eo';

describe('Simple tests for task:Coding with Squared Strings, function: code', () => {
  it('should return new string', () => {
    assert.strictEqual(code(code1), code2);
  });

  it('should return new string', () => {
    assert.strictEqual(code(code3), code4);
  });

  it('shouldn`t return 0', () => {
    assert.notStrictEqual(code(''), 0);
  });

  it('shouldn`t return undefined', () => {
    assert.notStrictEqual(code(''), undefined);
  });
});

describe('Simple tests for task:Coding with Squared Strings, function:decode', () => {
  it('should return old string', () => {
    assert.strictEqual(decode(code1), code2);
  });

  it('should return old string', () => {
    assert.strictEqual(decode(code3), code4);
  });

  it('shouldn`t return 0', () => {
    assert.notStrictEqual(decode(''), 0);
  });

  it('shouldn`t return undefined', () => {
    assert.notStrictEqual(decode(''), undefined);
  });
});
