const sum = require('../../tasks/sum/index');

describe('simple tests', () => {
  it('should return 3', () => {
    expect(sum([1, 2])).toBe(3);
  });
});
