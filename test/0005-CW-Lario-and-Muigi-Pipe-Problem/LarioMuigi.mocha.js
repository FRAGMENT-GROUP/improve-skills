const assert = require('assert');
const { pipeFix } = require('../../tasks/0005-CW-Lario-and-Muigi-Pipe-Problem/LarioMuigi');

describe('pipeFix mocha', () => {
  it('should return correct array', () => { assert.deepEqual(pipeFix([1, 2, 3, 5, 6, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]); });
  it('should return correct array', () => { assert.deepEqual(pipeFix([6, 9]), [6, 7, 8, 9]); });
  it('should return correct array', () => { assert.deepEqual(pipeFix([-1, 0, 5]), [-1, 0, 1, 2, 3, 4, 5]); });
  it('should return correct array', () => { assert.deepEqual(pipeFix([1, 2, 3]), [1, 2, 3]); });
});
