/*
 * Your are given an array of integers prices,
 * for which the i-th element is the price of a given stock on day i;
 * and a non-negative integer fee representing a transaction fee.
 *
 * You may complete as many transactions as you like,
 * but you need to pay the transaction fee for each transaction.
 *
 * You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)
 *
 * Return the maximum profit you can make.
 */

const maxProfit = (prices: number[], fee: number): number => {
  let buy = -prices[0];
  let sell = 0;
  let preSell = 0;
  let preBuy = 0;

  prices.forEach((price) => {
    preBuy = buy;
    buy = Math.max(preBuy, preSell - price);
    sell = Math.max(preBuy + price - fee, preSell);
    preSell = sell;
  });

  return sell;
};

export { maxProfit };
