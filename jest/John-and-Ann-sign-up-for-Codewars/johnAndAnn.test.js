const {
  john,
  ann,
  sumJohn,
  sumAnn,
} = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');

describe('Simple tests for task: John and Ann sign up for Codewars', () => {
  test('should return [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]', () => {
    expect(john(11)).toEqual([0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]);
  });
  test('should return [1, 1, 2, 2, 3, 3]', () => {
    expect(ann(6)).toEqual([1, 1, 2, 2, 3, 3]);
  });
  test('should return 1729', () => {
    expect(sumJohn(75)).toEqual(1720);
  });
  test('should return 1729', () => {
    expect(sumAnn(150)).toEqual(6930);
  });
});
