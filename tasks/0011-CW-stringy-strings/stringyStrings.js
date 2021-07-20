module.exports.stringy = (size) => {
  if (size <= 0) return 'ValueError';
  let str = '1';
  for (let i = 0; i < size - 1; i += 1) {
    if (i % 2 === 0) { str += '0'; } else { str += '1'; }
  }
  return str;
};
