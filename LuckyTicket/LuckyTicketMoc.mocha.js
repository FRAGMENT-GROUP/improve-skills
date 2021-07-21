const assert = require('assert');
const luckyTicket = require('./LuckyTicketSol');

describe('Simple test for task:Simle Fun #300: Lucky Ticket', () => {
  it('should be return 2', () => {
    assert.deepStrictEqual(luckyTicket('book'), 2);
  });
  it('should be return 0', () => {
    assert.deepStrictEqual(luckyTicket('mewmwe'), 0);
  });
  it('should not return NaN', () => {
    assert.notStrictEqual(luckyTicket('book'), NaN);
  });
  it('should not return Undefined', () => {
    assert.notStrictEqual(luckyTicket('bbaaaa'), undefined);
  });
});
