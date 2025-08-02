import { test, expect } from 'vitest';
import { maxProfit } from './BestTimeToBuyAndSellStockWithTransactionFee';

test('test1', () => {
  const prices = [1, 3, 2, 8, 4, 9];
  const fee = 2;
  expect(maxProfit(prices, fee)).toBe(8);
});
