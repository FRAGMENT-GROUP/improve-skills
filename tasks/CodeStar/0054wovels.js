function sortVowels(s) {
  if (typeof (s) !== 'string') return '';
  const arr = s.split('');
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 'a' || arr[i] === 'A'
          || arr[i] === 'e' || arr[i] === 'E'
          || arr[i] === 'i' || arr[i] === 'I'
          || arr[i] === 'o' || arr[i] === 'O'
          || arr[i] === 'u' || arr[i] === 'U') arr[i] = `|${arr[i]}`;
    else arr[i] = `${arr[i]}|`;
  }
  const str = arr.join('\n');
  return str;
}
module.exports.sortVowels = sortVowels;
