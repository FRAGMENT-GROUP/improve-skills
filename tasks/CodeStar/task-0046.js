function DNAStrand(dna) {
  let str = '';
  const dnaKey = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  for (let i = 0; i < dna.length; i += 1) str += dnaKey[dna[i]];
  return str;
}
module.exports.DNAStrand = DNAStrand;
