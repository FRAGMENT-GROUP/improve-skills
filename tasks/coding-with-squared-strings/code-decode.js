function code(s) {
  const string = s.replace(/\n/g, '');
  const length = string.length;
  let result = '';

  const change = Math.ceil(Math.sqrt(length));
  const swap = change * (change - 1);

  for (let i = 0; i < change; i += 1) {
    result += '\n';
    for (let j = 0; j < change; j += 1) { result += string[swap + i - change * j] || '\v'; }
  }
  return result.slice(1);
}

function decode(s) {
  const res = code(code(code(s)));
  return res.replace(/(\n|\v)/g, '');
}

module.exports = code;
module.exports = decode;
