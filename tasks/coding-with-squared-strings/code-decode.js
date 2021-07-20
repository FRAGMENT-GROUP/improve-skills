function code(s) {
  const str = s.replace(/\n/g, '');
  const len = str.length;
  let res = '';

  const n = Math.ceil(Math.sqrt(len));
  const m = n * (n - 1);

  for (let i = 0; i < n; i += 1) {
    res += '\n';
    for (let j = 0; j < n; j += 1) { res += str[m + i - n * j] || '\v'; }
  }
  return res.slice(1);
}

function decode(s) {
  const res = code(code(code(s)));
  return res.replace(/(\n|\v)/g, '');
}

module.exports = code;
module.exports = decode;
