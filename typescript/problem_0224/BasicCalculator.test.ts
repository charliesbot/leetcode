import { test, expect } from 'vitest';
import { calculate } from './BasicCalculator';

test('test1', () => {
  const input = '1 + 1';
  expect(calculate(input)).toEqual(2);
});

test('test2', () => {
  const input = ' 2-1 + 2 ';
  expect(calculate(input)).toEqual(3);
});

test('test3', () => {
  const input = '(1+(4+5+2)-3)+(6+8)';
  expect(calculate(input)).toEqual(23);
});
