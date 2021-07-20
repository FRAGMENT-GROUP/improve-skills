function isivideBy(number, a, b) {
  if ((number % a === 0) && (number % b === 0)) {
    return true;
  }
  return false;
}
module.exports = isivideBy;
