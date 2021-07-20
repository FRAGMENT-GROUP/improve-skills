const { spEng } = require('../../tasks/0002-CW-do-you-speak-english/do_you_speak_english');

describe('simple tests', () => {
  it('should return true', () => {
    expect(spEng('englishassdsa')).toBe(true);
  });

  it('should return true', () => {
    expect(spEng('LiaEnGLiShAA')).toBe(true);
  });

  it('should return false', () => {
    expect(spEng('engiolish')).toBe(false);
  });

  it('should return false', () => {
    expect(spEng('London')).toBe(false);
  });
});
