const assert = require('assert');

const { heron } = require('../../tasks/herons-formula/herons_formula');

describe('goals()', () => {
  it('Should return 12', () => {
    assert.strictEqual(heron(6, 5, 5), 12);
  });
});
