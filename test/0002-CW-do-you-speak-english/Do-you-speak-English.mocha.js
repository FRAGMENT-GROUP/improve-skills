const assert = require('assert');
const en = require('../../tasks/0002-CW-do-you-speak-english');

describe('simple tests',()=>{
    it('should return true',()=>{assert.strictEqual(en("englishassdsa"), true)});
    it('should return true',()=>{assert.strictEqual(en("LiaEnGLiShAA"),true)});
    it('should return false',()=>{ assert.strictEqual(en("engiolish"),false)});
    it('should return false',()=>{assert.strictEqual(en("London"),false)});
  });

