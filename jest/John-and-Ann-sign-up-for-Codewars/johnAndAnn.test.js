const john = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');
const ann = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');
const sumJohn = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');
const sumAnn = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');

describe('Simple tests for task: John and Ann sign up for Codewars', () => {
  test('should return 38', () => {
    expect(john(11)).toBe(38);
  });
  test('should return 12', () => {
    expect(ann(6)).toBe(12);
  });
  test('should return 4070', () => {
    expect(sumJohn(115)).toBe(4070);
  });
  test('should return 1729', () => {
    expect(sumAnn(75)).toBe(1729);
  });
});
