const { expressionMatter } = require('./expression_matter');

const smallValues = [
  { args: [2, 1, 2], expected: 6 },
  { args: [2, 1, 1], expected: 4 },
  { args: [1, 1, 1], expected: 3 },
];

const mediumValues = [
  { args: [5, 1, 3], expected: 20 },
  { args: [3, 5, 7], expected: 105 },
  { args: [5, 6, 1], expected: 35 },
];

const mixedValues = [
  { args: [2, 10, 3], expected: 60 },
  { args: [1, 8, 3], expected: 27 },
  { args: [9, 7, 2], expected: 126 },
];

const testFunction = (describeName, values, description) => {
  describe(describeName, () => values.forEach(({ args, expected }) => {
    it(description, () => expect(expressionMatter(...args)).toBe(expected));
  }));
};

describe('#expressionMatter()', () => {
  testFunction('Small values', smallValues, 'Should work with small values');
  testFunction('Medium values', mediumValues, 'Should work with medium values');
  testFunction('Mixed values', mixedValues, 'Should work with mixed values');
});
