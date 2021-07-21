function alphabetPosition(text) {
  const result = [];
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
  const textExample = text.replace(/\W*\d+/g, '').toLowerCase().split('');
  for (let i = 0; i < textExample.length; i += 1) {
    const j = alphabet.indexOf(textExample[i]) + 1;
    if (j) result.push(j);
  }
  return result.join(' ');
}
module.exports = alphabetPosition;
