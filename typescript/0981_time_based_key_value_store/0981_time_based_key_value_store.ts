/*
 * Create a timebased key-value store class TimeMap, that supports two operations.
 *
 * 1. set(string key, string value, int timestamp)
 *    - Stores the key and value, along with the given timestamp.
 *  2. get(string key, int timestamp)
 *    - Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
 *    - If there are multiple such values, it returns the one with the largest timestamp_prev.
 *    - If there are no values, it returns the empty string ("").
 */

type Entry = {
  value: string;
  timestamp: number;
};

export class TimeMap {
  hash: { [key: string]: Entry[] } = {};

  set = (key: string, value: string, timestamp: number): void => {
    this.hash[key] = this.hash[key] ?? [];
    this.hash[key].push({ value, timestamp });
  };

  get = (key: string, timestamp: number): string => {
    const helper = this.hash[key];
    const tail = helper.length - 1;

    if (!helper || timestamp < helper[0].timestamp) {
      return "";
    }

    if (timestamp >= helper[tail].timestamp) {
      return helper[tail].value;
    }

    let left = 0;
    let right = helper.length - 1;
    let pivot: number;

    while (left < right) {
      pivot = Math.floor((left + right) / 2);

      const currentTimeStamp = helper[pivot].timestamp;

      if (currentTimeStamp === timestamp) {
        return helper[pivot].value;
      }

      timestamp > currentTimeStamp ? right-- : left++;
    }

    return helper[left].value;
  };
}
