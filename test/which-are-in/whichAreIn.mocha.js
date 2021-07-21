const assert = require('assert');
const inArray = require('../../tasks/which-are-in/whichAreIn');

const arr1 = ['xyz', 'live', 'strong'];
const arr2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
const arr3 = ['live', 'strong', 'arp'];

describe('Simple tests for task: Which are in?', () => {
  it('should return ["live", "strong"]', () => {
    assert.deepStrictEqual(inArray(arr1, arr2), ['live', 'strong']);
  });
  it('should return ["arp", "live", "strong"]', () => {
    assert.deepStrictEqual(inArray(arr3, arr2), ['arp', 'live', 'strong']);
  });
  it('shouldn`t return undefined', () => {
    assert.notDeepStrictEqual(inArray(arr1, arr2), undefined);
  });
  it('shouldn`t return ["strong", "arp", "sharp"]', () => {
    assert.notDeepStrictEqual(inArray(arr3, arr2), ['strong', 'arp', 'sharp']);
  });
});
