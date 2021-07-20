const { sumPPG } = require('../../tasks/StarCode/sumPPGagain');

describe('Simple tests for task:All Star Code Challenge #1, function: sumPPG', () => {
  it('should return 4', () => {
    expect(sumPPG({ ppg: 2 }, { ppg: 2 })).toBe(4);
  });
  it('should return 52', () => {
    expect(sumPPG({ ppg: 50 }, { ppg: 2 })).toBe(52);
  });
  it('shouldn`t return 5', () => {
    expect(sumPPG({ ppg: 50 }, { ppg: 50 })).not.toBe(5);
  });
  it('shouldn`t return 2048', () => {
    expect(sumPPG({ ppg: 50 }, { ppg: 50 })).not.toBe(2048);
  });
});
