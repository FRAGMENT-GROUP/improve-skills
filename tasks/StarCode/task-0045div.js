function getDivisorsCnt(n) {
  let count = 0;
  for (i = n; i > 0; i -= 1) {
    if (n % i === 0) count += 1;
  }
  return count;
}
module.exports.getDivisorsCnt = getDivisorsCnt;
