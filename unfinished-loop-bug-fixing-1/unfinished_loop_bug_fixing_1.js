/**
 * Unfinished Loop - Bug Fixing #1
 * @link https://www.codewars.com/kata/55c28f7304e3eaebef0000da
 * @level 8kyu
 * @author Andrey Komarovsky
 * @param number Array of numbers
 * @name createArray
*/

module.exports = (number) => {
  const newArray = [];
  for (let i = 1; i <= number; i + 1) {
    newArray.push(i);
  }
  return newArray;
};
