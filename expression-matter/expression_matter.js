/**
 * Expressions Matter
 * @link https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
 * @level 8kyu
 * @author Andrey Komarovsky
 * @param a Integer
 * @param b Integer
 * @param c Integer
 */

module.exports.expressionMatter = (a, b, c) => {
  const variants = [a + b + c, (a + b) * c, a * (b + c), a * b * c];
  return Math.max(...variants);
};
