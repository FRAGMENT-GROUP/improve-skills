const { drinkAbout } = require('../../tasks/0003-CW-drink-about/drink_about');

describe('simple Jest tests for task Drink about', () => {
  it('should return message "drink toddy"', () => { expect(drinkAbout(2)).toBe('drink toddy'); });
  it('should return message "drink beer"', () => { expect(drinkAbout(18)).toBe('drink beer'); });
  it('should return error message "Invalid value"', () => { expect(drinkAbout(-3)).toBe('Invalid value'); });
  it('should return error message "Invalid value"', () => { expect(drinkAbout('')).toBe('Invalid value'); });
});
