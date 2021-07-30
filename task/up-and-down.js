function arrange(strng) {
  const fakeString = `${strng}`;
  const arr = fakeString.split(' ');
  const arrLen = arr.length;
  const comparer = [(a, b) => a.length > b.length,
    (a, b) => a.length < b.length];
  for (let i = 0; i < arrLen - 1; i += 1) {
    if (comparer[i % 2](arr[i], arr[i + 1])) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr.map((e, i) => ((i % 2) ? e.toUpperCase() : e.toLowerCase())).join(' ');
}
module.exports = arrange;
