const assert = require('assert')
const arrange = require('./arrange')


describe('simple tests', () => {
    it('write up and down to pass!', () => {
  	assert.strictEqual(arrange(['who hit retaining The That a we taken']),'who RETAINING hit THAT a THE we TAKEN')
    })
})

