function oddOrEven(arr) {
  let sum = 0;
  for (let i = 0; i !== arr.length; i += 1) {
    sum += arr[i];
  }
  if (sum % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
module.exports = oddOrEven;
