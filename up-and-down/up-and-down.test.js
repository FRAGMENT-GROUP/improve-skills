const arrange = require('./arrange')

describe('simple tests', () => {
    it('write up and down to pass!', () => {
  	expect(arrange(['who hit retaining The That a we taken'])).toBe('who RETAINING hit THAT a THE we TAKEN')
    })
})
