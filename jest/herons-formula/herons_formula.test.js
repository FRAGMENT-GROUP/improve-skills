const { heron } = require('../../tasks/herons-formula/herons_formula');

describe('heron', () => {
  it('should return 12', () => {
    expect(heron(6, 5, 5)).toBe(12);
  });
});
