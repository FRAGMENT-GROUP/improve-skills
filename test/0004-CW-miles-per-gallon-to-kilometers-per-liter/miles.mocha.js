const assert = require('assert');
const { converter } = require('../../tasks/0004-CW-miles-per-gallon-to-kilometers-per-liter/miles');

describe('simple Mocha tests for task Miles per gallon to kilometers per liter', () => {
  it('should return message "the number cant be negative"', () => { assert.strictEqual(converter(-10), 'the number cant be negative'); });
  it('should return a number - 1416024176000000', () => { assert.strictEqual(converter(4000000000000000), 1416024176000000); });
  it('should return a number - 7.43', () => { assert.strictEqual(converter(21), 7.43); });
  it('should return "NaN" if the value is not a number', () => { assert.strictEqual(converter('aaa'), NaN); });
});
