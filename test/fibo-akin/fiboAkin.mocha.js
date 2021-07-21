const assert = require('assert');
const numberOfTerms = require('../../tasks/fibo-akin/fiboAkin');
const quantitySmallerNumbers = require('../../tasks/fibo-akin/fiboAkin');

describe('Simple tests for task:Fibo akin, function: numberOfTerms', () => {
  it('should return 6', () => {
    assert.strictEqual(numberOfTerms(50, 25), 6);
  });
  it('should return 1559', () => {
    assert.strictEqual(numberOfTerms(3332, 973), 1559);
  });
  it('shouldn`t return 1247', () => {
    assert.notStrictEqual(numberOfTerms(3332, 973), 1247);
  });
  it('shouldn`t return 2048', () => {
    assert.notStrictEqual(numberOfTerms(3177, 573), 2048);
  });
});

describe('Simple tests for task:Fibo akin, function: quantitySmallerNumbers', () => {
  it('should return 37128', () => {
    assert.strictEqual(quantitySmallerNumbers(74626), 37128);
  });
  it('should return 35692', () => {
    assert.strictEqual(quantitySmallerNumbers(71749), 35692);
  });
  it('shouldn`t return 28282', () => {
    assert.notStrictEqual(quantitySmallerNumbers(56890), 28282);
  });
  it('shouldn`t return 30055', () => {
    assert.notStrictEqual(quantitySmallerNumbers(60441), 30055);
  });
});
