module.exports.pipeFix = (numbers) => {
  const start = numbers[0];
  const end = numbers[numbers.length - 1];
  const array = [];
  for (let i = start; i <= end; i += 1) {
    array.push(i);
  }
  return array;
};
