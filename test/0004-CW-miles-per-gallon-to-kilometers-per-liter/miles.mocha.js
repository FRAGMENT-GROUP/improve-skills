const assert = require('assert');
const { converter } = require('../../tasks/0004-CW-miles-per-gallon-to-kilometers-per-liter/miles');

describe('converter Mocha', () => {
  it('should return number', () => { assert.strictEqual(converter(10), 3.54); });
  it('should return number', () => { assert.strictEqual(converter(20), 7.08); });
  it('should return number', () => { assert.strictEqual(converter(0), 0); });
  it('should return number', () => { assert.strictEqual(converter(30), 10.62); });
});
