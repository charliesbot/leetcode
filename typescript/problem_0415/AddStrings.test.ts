import { test, expect } from 'vitest';
import { addStrings } from './AddStrings';

test("test1", () => {
  const num1 = "1";
  const num2 = "1";
  expect(addStrings(num1, num2)).toBe("2");
});
