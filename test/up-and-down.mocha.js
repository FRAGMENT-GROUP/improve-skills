const assert = require('assert');
const arrange = require('../task/up-and-down');

describe('simple tests', () => {
  it('Should return who RETAINING hit THAT a THE we TAKEN', () => {
    assert.strictEqual(arrange(['who hit retaining The That a we taken']), 'who RETAINING hit THAT a THE we TAKEN');
  });
  it('Should return i CAME on WERE up GRANDMOTHERS so', () => {
    assert.strictEqual(arrange(['on I came up were so grandmothers']),'i CAME on WERE up GRANDMOTHERS so');
  });
  it('Should not return NaN', () => {
    assert.notStrictEqual(arrange(['who hit retaining The That a we taken']),NaN);
  });
  it('Should not return undefined', () => {
    assert.notStrictEqual(arrange(['on I came up were so grandmothers']), undefined);
  });
});
