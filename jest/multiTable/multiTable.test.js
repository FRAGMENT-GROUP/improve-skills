const { multiTable } = require('../../tasks/multiTable/multiTable');

describe('multiTable', () => {
  it('should not be empty', () => {
    expect(multiTable(3).Empty).toBeFalsy();
  });
  it('should not contains \\n in the end', () => {
    expect(multiTable(4).endsWith('\n')).toBeFalsy();
  });
  it('should return a table for 5', () => {
    expect(multiTable(5)).toEqual('1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
  });
  it('should return a table for 6', () => {
    expect(multiTable(6)).toEqual('1 * 6 = 6\n2 * 6 = 12\n3 * 6 = 18\n4 * 6 = 24\n5 * 6 = 30\n6 * 6 = 36\n7 * 6 = 42\n8 * 6 = 48\n9 * 6 = 54\n10 * 6 = 60');
  });
});
