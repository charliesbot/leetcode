import { test, expect } from 'vitest';
import { multiply } from './MultiplyStrings';

test('multiply1', () => {
  expect(multiply('2', '3')).toEqual('6');
});

test('multiply2', () => {
  expect(multiply('589', '24')).toBe('14136');
});

test('multiply3', () => {
  expect(multiply('5891', '243')).toBe('1431513');
});

test('multiply4', () => {
  expect(multiply('123', '456')).toEqual('56088');
});

test('multiply5', () => {
  expect(multiply('0', '0')).toEqual('0');
});
