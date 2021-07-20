const assert = require('assert');
const john = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');
const ann = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');
const sumJohn = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');
const sumAnn = require('../../tasks/John-and-Ann-sign-up-for-Codewars/johnAndAnn');

describe('Simple tests for task: John and Ann sign up for Codewars', () => {
  it('should return 38', () => {
    assert.strictEqual(john(11), 38);
  });
  it('should return 12', () => {
    assert.strictEqual(ann(6), 12);
  });
  it('should return 1729', () => {
    assert.strictEqual(sumJohn(75), 1729);
  });
  it('should return 6930', () => {
    assert.strictEqual(sumAnn(150), 6930);
  });
});
