const assert = require('assert');
const { sumPPG } = require('../../tasks/StarCode/sumPPGagain');

describe('Simple tests for task:All Star Code Challenge #1, function: sumPPG', () => {
  it('should return 75', () => {
    assert.strictEqual(sumPPG({ ppg: 50 }, { ppg: 25 }), 75);
  });
  it('should return 4', () => {
    assert.strictEqual(sumPPG({ ppg: 2 }, { ppg: 2 }), 4);
  });
  it('shouldn`t return 25', () => {
    assert.notStrictEqual(sumPPG({ ppg: 12 }, { ppg: 12 }), 25);
  });
  it('shouldn`t return 5', () => {
    assert.notStrictEqual(sumPPG({ ppg: 12 }, { ppg: 1 }), 5);
  });
});
