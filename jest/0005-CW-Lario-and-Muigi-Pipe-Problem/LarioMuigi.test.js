const { pipeFix } = require('../../tasks/0005-CW-Lario-and-Muigi-Pipe-Problem/LarioMuigi');

describe('pipeFix mocha', () => {
  test('should return correct array', () => { expect(pipeFix([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]); });
  test('should return correct array', () => { expect(pipeFix([6, 9])).toEqual([6, 7, 8, 9]); });
  test('should return correct array', () => { expect(pipeFix([-1, 0, 5])).toEqual([-1, 0, 1, 2, 3, 4, 5]); });
  test('should return correct array', () => { expect(pipeFix([1, 2, 3])).toEqual([1, 2, 3]); });
});
