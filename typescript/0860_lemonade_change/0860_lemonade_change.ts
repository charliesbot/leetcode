/*
 * At a lemonade stand, each lemonade costs $5.
 *
 * Customers are standing in a queue to buy from you,
 * and order one at a time (in the order specified by bills).
 *
 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
 * You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
 *
 * Note that you don't have any change in hand at first.
 * Return true if and only if you can provide every customer with correct change.
 */

export const lemonadeChange = (bills: number[]) => {
  const hash = { 5: 0, 10: 0 };
  for (let i = 0; i < bills.length; i++) {
    const current = bills[i];
    if (current === 5) {
      hash[5]++;
      continue;
    }

    if (current === 10 && hash[5] > 0) {
      hash[5]--;
      hash[10]++;
      continue;
    }

    if (current === 20) {
      if (hash[10] >= 1 && hash[5] >= 1) {
        hash[10]--;
        hash[5]--;
        continue;
      }

      if (hash[5] >= 3) {
        hash[5] -= 3;
        continue;
      }
    }

    return false;
  }

  return true;
};

/*
 *  1. Loop array
 *  2. verify value
 *      if === 5 -> store
 *      if === 10 -> remove a 5 from bucket
 *      if === 20 -> try to remove a 10 or 2 fives
 *      if any case fails, returns false
 *
 */
