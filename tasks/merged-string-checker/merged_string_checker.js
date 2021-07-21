// https://www.codewars.com/kata/54c9fcad28ec4c6
/* eslint-disable */

function isOrderCorrect(s, part) {
  let o = -1;
  return part.split('').every((c) => (o = s.indexOf(c, o + 1)) !== -1);
}

function isMerge(s, part1, part2) {
  let boolResult = true;
  const resultString = [];
  const splittedPart1 = part1.split('');
  const splittedPart2 = part2.split('');
  if (part1.length + part2.length != s.length || !isOrderCorrect(s, part1) || !isOrderCorrect(s, part2)) return false;
  s.split('').forEach((letter) => {
    if (splittedPart1.includes(letter)) return;
    if (splittedPart2.includes(letter)) return;
    boolResult = false;
  });
  return boolResult;
}

module.exports.isMerge = isMerge;
