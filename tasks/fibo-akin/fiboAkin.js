function getArray(number) {
  const arr = [1, 1];
  while (arr.length < number) {
    const firstDigit = arr.length;
    const secondDigit = arr[firstDigit - arr[firstDigit - 1]];
    const thirdDigit = arr[firstDigit - arr[firstDigit - 2]];
    arr.push(secondDigit + thirdDigit);
  }
  return arr;
}

const numberOfTerms = (first, second) => getArray(first).filter((v) => v >= second).length;

const quantitySmallerNumbers = (digit) => getArray(digit).filter((v, i, a) => v < a[i - 1]).length;

module.exports = numberOfTerms;
module.exports = quantitySmallerNumbers;
