function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      count += 1;
      i -= 1;
    }
  }
  for (let k = 0; k < count; k += 1) {
    arr.push(0);
  }
  return arr;
}
module.exports = moveZeros;
