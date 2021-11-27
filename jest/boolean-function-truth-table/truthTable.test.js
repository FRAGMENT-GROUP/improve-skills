const truthTable = require('../../tasks/boolean-function-truth-table/truthTable');

const AND = (A, B) => A && B;
const OR = (A, B) => A || B;
const NOT = (A) => !A;
const NOR = (A, B) => !(A || B);

describe('Simple tests for task: Salesman Travel', () => {
  test('should return correct table for AND', () => {
    expect(truthTable(AND)).toEqual('A B\t\tAND(A,B)\n\n0 0\t\t0\n0 1\t\t0\n1 0\t\t0\n1 1\t\t1\n');
  });
  test('should return correct table for OR', () => {
    expect(truthTable(OR)).toEqual('A B\t\tOR(A,B)\n\n0 0\t\t0\n0 1\t\t1\n1 0\t\t1\n1 1\t\t1\n');
  });
  test('shouldn`t return wrong table for NOT', () => {
    expect(truthTable(NOT)).not.toEqual('A\t\tNOT(A)\n\n0\t\t1\n1\t\t1\n');
  });
  test('shouldn`t return wrong table for NOR', () => {
    expect(truthTable(NOR)).not.toEqual('A B\t\tNOR(A,B)\n\n0 0\t\t1\n1 1\t\t0\n1 0\t\t0\n1 1\t\t0\n');
  });
});
