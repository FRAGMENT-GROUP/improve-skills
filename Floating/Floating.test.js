const f = require('./Floating');

describe('Simple test for task Floating-point Approximation (I)', () => {
  test('should be return 8.499999999999996e-16', () => {
    expect(f(1.7e-15)).toEqual(8.499999999999996e-16);
  });
  test('should be return 1.049999944875e-07', () => {
    expect(f(2.1e-07)).toEqual(1.049999944875e-07);
  });
  test('should not return NaN', () => {
    expect(f(1.7e-15)).not.toBeNaN();
  });
  test('should not return Undefined', () => {
    expect(f(2.1e-07)).not.toBeUndefined();
  });
});
