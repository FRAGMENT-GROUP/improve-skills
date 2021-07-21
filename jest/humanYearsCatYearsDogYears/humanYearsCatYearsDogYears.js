const assert = require('assert');
const humanYearsCatYearsDogYears = require('../../tasks/humanYearsCatYearsDogYears/humanYearsCatYearsDogYears');

describe('#humanYearsCatYearsDogYears', () => {
  it("shouldn't return empty array", () => { assert.notStrictEqual(humanYearsCatYearsDogYears(10).Empty, false); });
  it("animal year shouldn't be equal human year", () => { assert.notStrictEqual(humanYearsCatYearsDogYears(1), [1, 1, 1]); });
  it('dogs and cats years for 1 human year', () => { assert.deepStrictEqual(humanYearsCatYearsDogYears(1), [1, 15, 15]); });
  it('dogs and cats years for 2 human years', () => { assert.deepStrictEqual(humanYearsCatYearsDogYears(2), [2, 24, 24]); });
  it('dogs and cats years for 10 human years', () => { assert.deepStrictEqual(humanYearsCatYearsDogYears(10), [10, 56, 64]); });
});
