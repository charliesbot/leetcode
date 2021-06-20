import { maxProfit } from "./0714_best_time_to_buy_and_sell_stock_with_transaction_fee";

test("test1", () => {
  const prices = [1, 3, 2, 8, 4, 9];
  const fee = 2;
  expect(maxProfit(prices, fee)).toBe(8);
});
