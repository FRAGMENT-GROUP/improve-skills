function johnAndAnn(day) {
  const johnSum = [0];
  const annSum = [1];
  let i = 1;
  while (i < day) {
    johnSum.push(i - annSum[johnSum[i - 1]]);
    annSum.push(i - johnSum[annSum[i++ - 1]]);
  }
  return [johnSum, annSum];
}
function john(day) {
  return johnAndAnn(day)[0];
}
function ann(day) {
  return johnAndAnn(day)[1];
}

function sumJohn(day) {
  return john(day).reduce((a, b) => a + b, 0);
}

function sumAnn(day) {
  return ann(day).reduce((a, b) => a + b, 0);
}

module.exports = john;
module.exports = ann;
module.exports = sumJohn;
module.exports = sumAnn;
