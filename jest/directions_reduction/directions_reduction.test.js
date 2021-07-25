const { dirReduc } = require('../../tasks/directions-reduction/directions_reduction');

describe('direction reduction', () => {
  it('Should return ["WEST"] ', () => {
    expect(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])).toStrictEqual(['WEST']);
  });
  it('Should return ["NORTH", "WEST", "SOUTH", "EAST"]', () => {
    expect(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])).toStrictEqual(['NORTH', 'WEST', 'SOUTH', 'EAST']);
  });
  it('Should return []', () => {
    expect(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])).toStrictEqual([]);
  });
});
