const assert = require('assert');
const newAvg = require('./newAvg');

describe('Simple tests for task:looking for a benefactor', () => {

    it('should return 628', () => {
        assert.strictEqual(newAvg([14, 30, 5, 7, 9, 11, 16], 90), 628)
    });

    it('should return 645', () => {
        assert.strictEqual(newAvg([14, 30, 5, 7, 9, 11, 15], 92), 645)
    });

    it('shouldn`t return 0', () => {
        assert.notStrictEqual(newAvg([1, 2, 3, 4, 5, 6, 7, 8], 4), 0)
    });

    it('should be rounded up to the next integer', () => {
        assert.notStrictEqual(newAvg([1, 2, 3, 4, 5, 6, 7, 8.4], 5), 8.600000000000001)
    });

});