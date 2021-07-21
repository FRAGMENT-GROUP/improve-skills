const inArray = require('../../tasks/which-are-in/whichAreIn');

const arr1 = ['xyz', 'live', 'strong'];
const arr2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
const arr3 = ['live', 'strong', 'arp'];

describe('Simple tests for task: Which are in?', () => {
  test('should return ["live", "strong"]', () => {
    expect(inArray(arr1, arr2)).toEqual(['live', 'strong']);
  });
  test('should return ["arp", "live", "strong"]', () => {
    expect(inArray(arr3, arr2)).toEqual(['arp', 'live', 'strong']);
  });
  test('shouldn`t return undefined', () => {
    expect(inArray(arr1, arr2)).not.toBeUndefined();
  });
  test('shouldn`t return ["strong", "arp", "sharp"]', () => {
    expect(inArray(arr3, arr2)).not.toEqual(['strong', 'arp', 'sharp']);
  });
});
