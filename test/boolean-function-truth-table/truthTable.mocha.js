const assert = require('assert');
const truthTable = require('../../tasks/boolean-function-truth-table/truthTable');

const AND = (A, B) => A && B;
const OR = (A, B) => A || B;
const NOT = (A) => !A;
const NOR = (A, B) => !(A || B);

describe('Simple tests for task: Salesman Travel', () => {
  it('should return correct table for AND', () => {
    assert.strictEqual(truthTable(AND), 'A B\t\tAND(A,B)\n\n0 0\t\t0\n0 1\t\t0\n1 0\t\t0\n1 1\t\t1\n');
  });
  it('should return correct table for OR', () => {
    assert.strictEqual(truthTable(OR), 'A B\t\tOR(A,B)\n\n0 0\t\t0\n0 1\t\t1\n1 0\t\t1\n1 1\t\t1\n');
  });
  it('shouldn`t return wrong table for NOT', () => {
    assert.notStrictEqual(truthTable(NOT), 'A\t\tNOT(A)\n\n0\t\t1\n1\t\t1\n');
  });
  it('shouldn`t return wrong table for NOR', () => {
    assert.notStrictEqual(truthTable(NOR), 'A B\t\tNOR(A,B)\n\n0 0\t\t1\n1 1\t\t0\n1 0\t\t0\n1 1\t\t0\n');
  });
});
