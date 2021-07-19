const assert = require('assert');
const { spEng } = require('../../tasks/0002-CW-do-you-speak-english/do_you_speak_english');

describe('spEng', () => {
  it('should return true', () => { assert.ok(spEng('englishassdsa')); });
  it('should return true', () => { assert.ok(spEng('LiaEnGLiShAA')); });
  it('should return false', () => { assert.strictEqual(spEng('engiolish'), false); });
  it('should return false', () => { assert.strictEqual(spEng('London'), false); });
});
