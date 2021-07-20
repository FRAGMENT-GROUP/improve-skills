const createArray = require('../../tasks/unfinished-loop-bug-fixing-1/unfinished_loop_bug_fixing_1');

describe('#createArray()', () => {
  it('Should return array [1]', () => {
    expect(createArray(1)).toEqual([1]);
  });
  it('Should return array [1, 2]', () => {
    expect(createArray(2)).toEqual([1, 2]);
  });
  it('Should not return array[1, 2]', () => {
    expect(createArray(1)).not.toEqual([1, 2]);
  });
  it('Should return array[2]', () => {
    expect(createArray(1)).not.toEqual([1, 2, 3]);
  });
});
