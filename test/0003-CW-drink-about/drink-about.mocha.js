const assert = require('assert');
const { drinkAbout } = require('../../tasks/0003-CW-drink-about/drink_about');

describe('simple Mocha tests for task Drink about', () => {
  it('should return message "drink toddy"', () => { assert.strictEqual(drinkAbout(2), 'drink toddy'); });
  it('should return message "drink beer"', () => { assert.strictEqual(drinkAbout(18), 'drink beer'); });
  it('should return error message "Invalid value"', () => { assert.strictEqual(drinkAbout(190), 'Invalid value'); });
  it('should return error message "Invalid value"', () => { assert.strictEqual(drinkAbout(-15), 'Invalid value'); });
});
