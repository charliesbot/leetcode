import { test, expect } from 'vitest';
import { reverse } from './ReverseInteger';

test("Reverse Integer 1", () => {
  const input = 123;
  const output = 321;

  expect(reverse(input)).toBe(output);
});

test("Reverse Integer 2", () => {
  const input = -123;
  const output = -321;

  expect(reverse(input)).toBe(output);
});

test("Reverse Integer 3", () => {
  const input = 120;
  const output = 21;

  expect(reverse(input)).toBe(output);
});

test("Reverse Integer 4", () => {
  const input = 0;
  const output = 0;

  expect(reverse(input)).toBe(output);
});
