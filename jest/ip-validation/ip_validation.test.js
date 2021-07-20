const { isValidIP } = require('../../tasks/ip-validation/ip_validation');

describe('#isValidIP()', () => {
  it('Should return true', () => new Promise((resolve) => resolve(isValidIP('0.0.0.0'))).then((data) => {
    expect(data).toBe(true);
  }));

  it('Should return true', async () => {
    await expect(isValidIP('12.255.56.1')).toBe(true);
  });

  it('Should return true', () => {
    expect(isValidIP('137.255.156.100')).toBe(true);
  });

  it('Should return false', () => {
    expect(isValidIP('abc.def.ghi.jkl')).toBe(false);
  });

  it('Should return false', () => {
    expect(isValidIP('123.456.789.0')).toBe(false);
  });

  it('Should return false', () => {
    expect(isValidIP('\n1.2.3.4')).toBe(false);
  });
});
