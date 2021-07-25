const assert = require('assert');

const { dirReduc } = require('../../tasks/directions-reduction/directions_reduction');

describe('direction reduction', () => {
  it('Should return ["WEST"]', () => {
    assert.deepStrictEqual(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']), ['WEST']);
  });
  it('Should return ["NORTH", "WEST", "SOUTH", "EAST"]', () => {
    assert.deepStrictEqual(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), ['NORTH', 'WEST', 'SOUTH', 'EAST']);
  });
  it('Should return []', () => {
    assert.deepStrictEqual(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
  });
});
