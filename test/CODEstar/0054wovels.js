const assert = require('assert');
const { sortVowels } = require('../../tasks/CodeStar/0054wovels');

describe('Simple tests for task:Sort Vowels!, function: sortVowels', () => {
  it('should return C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|', () => {
    assert.strictEqual(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
  });
  it('should return \'\'', () => {
    assert.strictEqual(sortVowels(1337), '');
  });
  it('shouldn`t return CATA', () => {
    assert.notStrictEqual(sortVowels('AAAA'), '');
  });
  it('shouldn`t return CATA', () => {
    assert.notStrictEqual(sortVowels('AAAA'), '');
  });
});
