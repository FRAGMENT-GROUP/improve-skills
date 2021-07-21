module.exports.converter = (mpg) => {
  if (mpg <= 0) return 'the number cant be negative';
  return Math.round(mpg * 35.4006044) / 100;
};
