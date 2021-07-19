const lengthSupUK = require('../../tasks/fibo-akin/fiboAkin');
const comp = require('../../tasks/fibo-akin/fiboAkin');

describe('Simple tests for task:Fibo akin, function: lengthSupUk', () => {
  test('should return 6', () => {
    expect(lengthSupUK(50, 25)).toBe(6);
  });
  test('should return 1559', () => {
    expect(lengthSupUK(3332, 973)).toBe(1559);
  });
  test('shouldn`t return 1247', () => {
    expect(lengthSupUK(3332, 973)).not.toBe(1247);
  });
  test('shouldn`t return 2048', () => {
    expect(lengthSupUK(3177, 573)).not.toBe(2048);
  });
});

describe('Simple tests for task:Fibo akin, function: comp', () => {
  test('should return 37128', () => {
    expect(comp(74626)).toBe(37128);
  });
  test('should return 35692', () => {
    expect(comp(71749)).toBe(35692);
  });
  test('shouldn`t return 28282', () => {
    expect(comp(56890)).not.toBe(28282);
  });
  test('shouldn`t return 30055', () => {
    expect(comp(60441)).not.toBe(30055);
  });
});
