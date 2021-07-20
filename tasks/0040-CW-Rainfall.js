function parseNumber(n) {
  return n.replace(/[^0-9-.,]/g, '');
}
function mean(town, string) {
  string1 = string.split('\n');
  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i].substring(0, string1[i].indexOf(':')) === town) {
      string1[i] = parseNumber(string1[i]);
      string1[i] = string1[i].split(',');
      return string[i].reduce((a, b) => Number(a) + Number(b)) / 12;
    }
  }
  return -1;
}
function variance(town, string) {
  data = string;
  string1 = String(string).split('\n');
  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i].substring(0, string1[i].indexOf(':')) === town) {
      string1[i] = parseNumber(string1[i]);
      string1[i] = string1[i].split(',');
      let sum = 0;
      for (let j = 0; j < string1[i].length; j += 1) {
        sum += (string[i][j] - mean(town, data)) ** 2;
      }
      return sum / 12;
    }
  }
  return -1;
}
variance('London', 'Random_string');
