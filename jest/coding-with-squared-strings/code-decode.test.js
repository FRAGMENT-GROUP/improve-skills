const code = require('../../tasks/coding-with-squared-strings/code-decode');
const decode = require('../../tasks/coding-with-squared-strings/code-decode');

const code1 = "Omg, it's a test!";
const code2 = "  s,seg'tmt !Oiat";
const code3 = 'The lifeline became my loop';
const code4 = 'iemllna  icyelempheb oTf eo';

describe('Simple tests for task:Coding with Squared Strings, function: code', () => {
  test('should return new string', () => {
    expect(code(code1)).toBe(code2);
  });

  test('should return new string', () => {
    expect(code(code3)).toBe(code4);
  });

  test('shouldn`t return 0', () => {
    expect(code('')).not.toBe(0);
  });

  test('shouldn`t return NaN', () => {
    expect(code('')).not.toBeNaN();
  });
});

describe('Simple tests for task:Coding with Squared Strings, function:decode', () => {
  test('should return old string', () => {
    expect(decode(code1)).toBe(code2);
  });

  test('should return old string', () => {
    expect(decode(code3)).toBe(code4);
  });

  test('shouldn`t return 0', () => {
    expect(decode('')).not.toBe(0);
  });

  test('shouldn`t return undefined', () => {
    expect(decode('')).not.toBeUndefined();
  });
});
