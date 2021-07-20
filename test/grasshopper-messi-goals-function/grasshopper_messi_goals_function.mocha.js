const assert = require('assert');

const { goals } = require('./grasshopper_messi_goals_function');

describe('#goals()', () => {
  it('Should return 0', () => {
    assert.strictEqual(goals(0, 0, 0), 0);
  });
  it('Should return 58', () => {
    assert.strictEqual(goals(43, 10, 5), 58);
  });
  it('Should not return -1', () => {
    assert.notStrictEqual(goals(0, 0, 0), -1);
  });
  it('Should not return 0', () => {
    assert.notStrictEqual(goals(6, 0, 0), 0);
  });
});
