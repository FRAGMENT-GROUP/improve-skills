module.exports = (humanYears) => {
  const animalYear = (addYears) => (humanYears >= 2 ? (humanYears - 2) * addYears + 24 : 15);
  return [humanYears, animalYear(4), animalYear(5)];
};
