const assert = require('assert');
const digitize = require('../../tasks/digitize/digitize');

describe('#digitize', () => {
  it('should return reversed array [1, 3, 2, 5, 3]', () => {
    assert.deepStrictEqual(digitize(35231), [1, 3, 2, 5, 3]);
  });
  it('should return reversed array [0]', () => {
    assert.deepStrictEqual(digitize(0), [0]);
  });
  it('shouldn\'t throw any errors for not number', () => {
    assert.notStrictEqual(digitize('!'), [NaN]);
  });
  it('shouldn\'t throw any errors for empty string', () => {
    assert.notStrictEqual(digitize(''), [NaN]);
  });
});
