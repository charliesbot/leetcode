import { test, expect } from 'vitest';
import { lemonadeChange } from './LemonadeChange';

test('lemonadeChange1', () => {
  const input = [5, 5, 5, 10, 20];
  expect(lemonadeChange(input)).toBeTruthy();
});

test('lemonadeChange2', () => {
  const input = [5, 5, 10];
  expect(lemonadeChange(input)).toBeTruthy();
});

test('lemonadeChange3', () => {
  const input = [10, 10];
  expect(lemonadeChange(input)).toBeFalsy();
});

test('lemonadeChange4', () => {
  const input = [5, 5, 10, 10, 20];
  expect(lemonadeChange(input)).toBeFalsy();
});

test('lemonadeChange5', () => {
  const input = [5, 5, 5, 5, 20, 20, 5, 5, 20, 5];
  expect(lemonadeChange(input)).toBeFalsy();
});
