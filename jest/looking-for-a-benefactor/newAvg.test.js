const newAvg = require('../../tasks/looking-for-a-benefactor/newAvg');

describe('Simple tests for task:looking for a benefactor', () => {
  test('should return 628', () => {
    expect(newAvg([14, 30, 5, 7, 9, 11, 16], 90)).toBe(628);
  });

  test('should return 645', () => {
    expect(newAvg([14, 30, 5, 7, 9, 11, 15], 92)).toBe(645);
  });

  test('should return error', () => {
    const anyErrorMessage = '';
    function negativeValue() {
      if (newAvg([1, 2, 3, 4, 5, 6, 7, 8], 3) <= 0) throw anyErrorMessage;
    }

    expect(negativeValue).toThrowError(anyErrorMessage);
  });

  test('should be rounded up to the next integer', () => {
    expect(newAvg([1, 2, 3, 4, 5, 6, 7, 8.4], 5)).not.toBe(8.600000000000001);
  });
});
