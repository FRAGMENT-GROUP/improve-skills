module.exports.multiTable = (number) => {
  const sequence = Array.from(Array(11).keys());
  const multiTable = sequence.reduce((accum, curValue) => String(accum).concat(`${curValue} * ${number} = ${curValue * number}\n`));
  return multiTable.substring(1, multiTable.length - 1);
};
