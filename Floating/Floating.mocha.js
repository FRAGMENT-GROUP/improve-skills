const assert = require('assert');
const f = require('./Floating');

describe('Simple test for task Floating-point Approximation (I)', () => {
  it('should be return 8.499999999999996e-16', () => {
    assert.deepStrictEqual(f(1.7e-15), 8.499999999999996e-16);
  });
  it('should be return 1.049999944875e-07', () => {
    assert.deepStrictEqual(f(2.1e-07), 1.049999944875e-07);
  });
  it('should not return NaN', () => {
    assert.notStrictEqual(f(1.7e-15), NaN);
  });
  it('should not return Undefined', () => {
    assert.notStrictEqual(f(2.1e-07), undefined);
  });
});
