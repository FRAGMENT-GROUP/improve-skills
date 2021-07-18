const simpleMultiplication = require('./simple_multiplication');

describe('#simpleMultiplication()', () => {
  it('Should return double given argument', () => {
    expect(simpleMultiplication(2)).toBe(16);
  });
  it('Should return double given argument', () => {
    expect(simpleMultiplication(1)).toBe(9);
  });
  it('Should return given argument times eight', () => {
    expect(simpleMultiplication(8)).toBe(64);
  });
  it('Should return given argument times eight', () => {
    expect(simpleMultiplication(4)).toBe(32);
  });
  it('Should return given argument times nine', () => {
    expect(simpleMultiplication(5)).toBe(45);
  });
});
