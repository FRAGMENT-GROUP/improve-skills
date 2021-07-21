const { isMerge } = require('../../tasks/merged-string-checker/merged_string_checker');

describe('#isMerge()', () => {
  it('Should not return false', () => {
    expect(isMerge('codewars', 'code', 'wars')).not.toBe(false);
  });

  it('Should  return true', () => {
    expect(isMerge('codewars', 'cdw', 'oears')).toBe(true);
  });

  it('Should return false', () => {
    expect(isMerge('codewars', 'cdw', 'oearss')).toBe(false);
  });

  it('Should return false', () => {
    expect(isMerge('codewars', 'code', 'code')).toBe(false);
  });

  it('Should return false', () => {
    expect(isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am')).toBe(true);
  });
});
