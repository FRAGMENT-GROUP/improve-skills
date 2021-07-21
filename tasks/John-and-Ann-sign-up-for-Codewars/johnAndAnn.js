function johnAndAnn(day) {
  const johnSum = [0];
  const annSum = [1];
  let i = 1;
  while (i < day) {
    johnSum.push(i - annSum[johnSum[i - 1]]);
    // eslint-disable-next-line no-plusplus
    annSum.push(i - johnSum[annSum[i++ - 1]]);
  }
  return [johnSum, annSum];
}
const john = (day) => johnAndAnn(day)[0];
const ann = (day) => johnAndAnn(day)[1];
const sumJohn = (day) => john(day).reduce((a, b) => a + b, 0);
const sumAnn = (day) => ann(day).reduce((a, b) => a + b, 0);

module.exports = {
  john,
  ann,
  sumJohn,
  sumAnn,
};
