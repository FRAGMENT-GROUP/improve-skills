function isVow(a) {
  for (let i = 0; i < b.length; i += 1) {
    b = a;
    switch (b[i]) {
      case 101:
        b[i] = 'e';
        break;
      case 117:
        b[i] = 'u';
        break;
      case 97:
        b[i] = 'a';
        break;
      case 105:
        b[i] = 'i';
        break;
      case 111:
        b[i] = 'o';
        break;
      default:
    }
  }
  return a;
}
module.exports = isVow;
