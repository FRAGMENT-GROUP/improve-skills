const assert = require('assert').strict;

const { isValidIP } = require('../../tasks/ip-validation/ip_validation');

const taskName = 'IP Validation task';

describe(`Testing ${taskName}`, () => {
  describe('#isValidIP()', () => {
    it('Should return true', () => {
      assert.strictEqual(isValidIP('0.0.0.0'), true);
    });

    it('Should return true', () => {
      assert.strictEqual(isValidIP('12.255.56.1'), true);
    });

    it('Should return true', () => {
      assert.strictEqual(isValidIP('137.255.156.100'), true);
    });

    it('Should return false', () => {
      assert.strictEqual(isValidIP('abc.def.ghi.jkl'), false);
    });

    it('Should return false', () => {
      assert.strictEqual(isValidIP('123.456.789.0'), false);
    });

    it('Should return false', () => {
      assert.strictEqual(isValidIP('\n1.2.3.4'), false);
    });
  });
});
