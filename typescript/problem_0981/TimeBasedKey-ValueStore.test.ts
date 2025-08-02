import { test, expect } from 'vitest';
import { TimeMap } from './TimeBasedKey-ValueStore';

const runner = (actions: string[], args: (string | number)[][]) => {
  let timeMap: any;
  const output: (null | string)[] = [];

  actions.forEach((action, index) => {
    if (action === "TimeMap") {
      timeMap = new TimeMap();
      output.push(null);
      return;
    }

    output.push(timeMap[action].apply(null, args[index]) ?? null);
  });

  return output;
};

test("timeMap1", () => {
  const actions = ["TimeMap", "set", "get", "get", "set", "get", "get"];
  const args = [
    [],
    ["foo", "bar", 1],
    ["foo", 1],
    ["foo", 3],
    ["foo", "bar2", 4],
    ["foo", 4],
    ["foo", 5],
  ];

  const expectedOutput = [null, null, "bar", "bar", null, "bar2", "bar2"];

  expect(runner(actions, args)).toStrictEqual(expectedOutput);
});

test("timeMap2", () => {
  const actions = ["TimeMap", "set", "set", "get", "get", "get", "get", "get"];
  const args = [
    [],
    ["love", "high", 10],
    ["love", "low", 20],
    ["love", 5],
    ["love", 10],
    ["love", 15],
    ["love", 20],
    ["love", 25],
  ];

  const expectedOutput = [null, null, null, "", "high", "high", "low", "low"];

  expect(runner(actions, args)).toStrictEqual(expectedOutput);
});
