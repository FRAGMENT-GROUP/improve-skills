const en = require('../../tasks/0002-CW-do-you-speak-english/Do-you-speak-English');

describe('simple tests', () => {
    it('should return true', () => {
      expect(en("englishassdsa")).toBe(true);
    });
    it('should return true', () => {
      expect(en("LiaEnGLiShAA")).toBe(true);
    });
    it('should return false', () => {
      expect(en("engiolish")).toBe(false);
  });
    it('should return false', () => {
      expect(en("London")).toBe(false);
    });
  });
  
