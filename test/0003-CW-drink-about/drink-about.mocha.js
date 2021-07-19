const assert = require('assert');
const { drinkAbout } = require('../../tasks/0003-CW-drink-about/drink_about');

describe('drinkAbout Mocha', () => {
  it('should return drink toddy', () => { assert.strictEqual(drinkAbout(2), 'drink toddy'); });
  it('should return drink beer', () => { assert.strictEqual(drinkAbout(18), 'drink beer'); });
  it('should return drink whisky', () => { assert.strictEqual(drinkAbout(67), 'drink whisky'); });
  it('should return drink coke', () => { assert.strictEqual(drinkAbout(17), 'drink coke'); });
});
