module.exports.drinkAbout = (old) => {
  if (old === '' || old < 0 || old > 110) return 'Invalid value';
  switch (true) {
    case (old >= 21):
      return 'drink whisky';
    case (old >= 18):
      return 'drink beer';
    case (old >= 14):
      return 'drink coke';
    default: return 'drink toddy';
  }
};
