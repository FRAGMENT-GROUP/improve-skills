const lengthSupUK = require('../../tasks/fibo-akin/fiboAkin');
const comp = require('../../tasks/fibo-akin/fiboAkin');
describe('Simple tests for task:Fibo akin, function: lengthSupUk', () => {
  test('should return 6', () => {
    assert.strictEqual(lengthSupUK(50, 25), 6);
  });
  test('should return 1559', () => {
    assert.strictEqual(lengthSupUK(3332, 973), 1559);
  });
  test('shouldn`t return 1247', () => {
    assert.notStrictEqual(lengthSupUK(3332, 973), 1247);
  });
  test('shouldn`t return 2048', () => {
    assert.notStrictEqual(lengthSupUK(3177, 573), 2048);
  });
});
describe('Simple tests for task:Fibo akin, function: comp', () => {
  it('should return 37128', () => {
    assert.strictEqual(comp(74626), 37128);
  });
  test('should return 35692', () => {
    assert.strictEqual(comp(71749), 35692);
  });
  test('shouldn`t return 28282', () => {
    assert.notStrictEqual(comp(56890), 28282);
  });
  test('shouldn`t return 30055', () => {
    assert.notStrictEqual(comp(60441), 30055);
  });
});
