function factorial(n) {
  if (n > 12 || n < 0) throw new RangeError();
  else return n ? n * factorial(n - 1) : 1;
}
module.exports.factorial = factorial;
