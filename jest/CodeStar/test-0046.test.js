const { DNAStrand } = require('../../tasks/CodeStar/task-0046');

describe('Simple tests for task:Complymentary DNK, function: DNK', () => {
  it('should return TAACG', () => {
    expect(DNAStrand('ATTGC')).toBe('TAACG');
  });
  it('should return CATA', () => {
    expect(DNAStrand('GTAT')).toBe('CATA');
  });
  it('shouldn`t return CATA', () => {
    expect(DNAStrand('A')).not.toBe('CATA');
  });
  it('shouldn`t return CATA', () => {
    expect(DNAStrand('CATA')).not.toBe('CATA');
  });
});
