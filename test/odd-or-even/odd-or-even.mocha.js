const assert = require('assert');
const  oddOrEven  = require('../../tasks/odd-or-even/add_or_even');

describe('#oddOrEven()', () => {
    it('should return odd', () => { assert.strictEqual(oddOrEven([1, 2]), 'odd'); });
    it('should return odd', () => { assert.strictEqual(oddOrEven([1]), 'odd'); });
    it('should not return even', () => { assert.strictEqual(oddOrEven([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 'odd'); });
    it('should not return even', () => { assert.strictEqual(oddOrEven([1840357, 2, 2, 4, 1, 2, 1]), 'odd'); });
    it('should return even', () => { assert.strictEqual(oddOrEven([1, 2, 3, 4, 5, 6, 7]), 'even'); });
    it('should return even', () => { assert.strictEqual(oddOrEven([0]), 'even'); });
});
