const digitize = require('../../tasks/digitize/digitize');

describe('#digitize', () => {
  it('should return reversed array [1, 3, 2, 5, 3]', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });
  it('should return reversed array [0]', () => {
    expect(digitize(0)).toEqual([0]);
  });
  it('shouldn\'t throw any errors for not number', () => {
    expect(digitize('!')).toEqual([NaN]);
  });
  it('shouldn\'t throw any errors for empty string', () => {
    expect(digitize('')).toEqual([]);
  });
});
