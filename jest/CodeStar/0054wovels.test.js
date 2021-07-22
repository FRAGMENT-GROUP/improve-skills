const { sortVowels } = require('../../tasks/CodeStar/0054wovels');

describe('Simple tests for task:Complymentary DNK, function: DNK', () => {
  it('should return TAACG', () => {
    expect(sortVowels('Codewars')).toBe('C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
  });
  it('should return CATA', () => {
    expect(sortVowels(152)).toBe('');
  });
  it('shouldn`t return CATA', () => {
    expect(sortVowels('AAS')).not.toBe('CATA');
  });
  it('shouldn`t return CATA', () => {
    expect(sortVowels('CA')).not.toBe('CATA');
  });
});
