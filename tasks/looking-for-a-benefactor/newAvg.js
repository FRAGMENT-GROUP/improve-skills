function newAvg(arr, average) {
  const result = average * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
  if (result <= 0) throw new Error('error');
  return Math.ceil(result);
}

module.exports = newAvg;
