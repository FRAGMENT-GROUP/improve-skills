const numberOfTerms = require('../../tasks/fibo-akin/fiboAkin');
const quantitySmallerNumbers = require('../../tasks/fibo-akin/fiboAkin');

describe('Simple tests for task:Fibo akin, function: lengthSupUk', () => {
  test('should return 6', () => {
    expect(numberOfTerms(50, 25)).toBe(6);
  });
  test('should return 1559', () => {
    expect(numberOfTerms(3332, 973)).toBe(1559);
  });
  test('shouldn`t return 1247', () => {
    expect(numberOfTerms(3332, 973)).not.toBe(1247);
  });
  test('shouldn`t return 2048', () => {
    expect(numberOfTerms(3177, 573)).not.toBe(2048);
  });
});

describe('Simple tests for task:Fibo akin, function: quantitySmallerNumbers', () => {
  test('should return 37128', () => {
    expect(quantitySmallerNumbers(74626)).toBe(37128);
  });
  test('should return 35692', () => {
    expect(quantitySmallerNumbers(71749)).toBe(35692);
  });
  test('shouldn`t return 28282', () => {
    expect(quantitySmallerNumbers(56890)).not.toBe(28282);
  });
  test('shouldn`t return 30055', () => {
    expect(quantitySmallerNumbers(60441)).not.toBe(30055);
  });
});
