const arrange = require('../task/up-and-down');

describe('simple tests', () => {
  it('Should return who RETAINING hit THAT a THE we TAKEN', () => {
    expect(arrange(['who hit retaining The That a we taken'])).toBe('who RETAINING hit THAT a THE we TAKEN');
  });
  it('Should return i CAME on WERE up GRANDMOTHERS so', () => {
    expect(arrange(['on I came up were so grandmothers'])).toBe('i CAME on WERE up GRANDMOTHERS so');
  });
  it('Should not return NaN', () => {
    expect(arrange(['who hit retaining The That a we taken'])).not.toBeNaN();
  });
  it('Should not return undefined', () => {
    expect(arrange(['on I came up were so grandmothers'])).not.toBeUndefined();
  });
});
