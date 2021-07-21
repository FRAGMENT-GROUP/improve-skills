module.exports.drinkAbout = (old) => {
  if (old === '' || old < 0 || old > 110) return 'Invalid value';
  if (old >= 21) return 'drink whisky';
  if (old >= 18) return 'drink beer';
  if (old >= 14) return 'drink coke';
  return 'drink toddy';
};
