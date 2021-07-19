const { drinkAbout } = require('../../tasks/0003-CW-drink-about/drink_about');

describe('drinkAbout Jest', () => {
  it('should return drink toddy', () => { expect(drinkAbout(2)).toBe('drink toddy'); });
  it('should return drink beer', () => { expect(drinkAbout(18)).toBe('drink beer'); });
  it('should return drink whisky', () => { expect(drinkAbout(67)).toBe('drink whisky'); });
  it('should return drink coke', () => { expect(drinkAbout(17)).toBe('drink coke'); });
});
