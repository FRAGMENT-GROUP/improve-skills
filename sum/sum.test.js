const sum = require('./sum');

describe('simple tests', () => {
  it('should return 3', () => {
    expect(sum([1, 2])).toBe(3);
  });
});
