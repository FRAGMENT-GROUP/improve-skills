const assert = require('assert');
const simpleMultiplication = require('./simple_multiplication');

describe('#simpleMultiplication()', () => {
  it('Should return double given argument', () => {
    assert.strictEqual(simpleMultiplication(2), 16);
  });
  it('Should return double given argument', () => {
    assert.strictEqual(simpleMultiplication(1), 9);
  });
  it('Should return given argument times eight', () => {
    assert.strictEqual(simpleMultiplication(8), 64);
  });
  it('Should return given argument times eight', () => {
    assert.strictEqual(simpleMultiplication(4), 32);
  });
  it('Should return given argument times nine', () => {
    assert.strictEqual(simpleMultiplication(5), 45);
  });
});
