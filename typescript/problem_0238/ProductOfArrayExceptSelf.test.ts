import { test, expect } from 'vitest';
import { productExceptSelf } from './ProductOfArrayExceptSelf';

test('productExceptSelf1', () => {
  const input = [1, 2, 3, 4];
  const output = [24, 12, 8, 6];
  expect(productExceptSelf(input)).toStrictEqual(output);
});
