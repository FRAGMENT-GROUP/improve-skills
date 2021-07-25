const luckyTicket = require('./LuckyTicketSol');

describe('Simple test for task:Simle Fun #300: Lucky Ticket', () => {
  test('should be return 2', () => {
    expect(luckyTicket('book')).toEqual(2);
  });
  test('should be return 0', () => {
    expect(luckyTicket('mewmwe')).toEqual(0);
  });
  test('should not return NaN', () => {
    expect(luckyTicket('book')).not.toBeNaN();
  });
  test('should not return Undefined', () => {
    expect(luckyTicket('bbaaaa')).not.toBeUndefined();
  });
});
