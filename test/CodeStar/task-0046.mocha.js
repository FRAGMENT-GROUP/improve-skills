const assert = require('assert');
const { DNAStrand } = require('../../tasks/CodeStar/task-0046');

describe('Simple tests for task:DNAStrand, function: DNC', () => {
  it('should return TAACG', () => {
    assert.strictEqual(DNAStrand('ATTGC'), 'TAACG');
  });
  it('should return CATA', () => {
    assert.strictEqual(DNAStrand('GTAT'), 'CATA');
  });
  it('shouldn`t return CATA', () => {
    assert.notStrictEqual(DNAStrand('AAAA'), 'CATA');
  });
  it('shouldn`t return CATA', () => {
    assert.notStrictEqual(DNAStrand('CAAT'), 'CATA');
  });
});
