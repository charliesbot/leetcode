import { gcdOfStrings } from "./1071_greatest_common_divisor_of_strings";

test("gcdOfStrings1", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
});

test("gcdOfStrings2", () => {
  expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
});

test("gcdOfStrings3", () => {
  expect(gcdOfStrings("LEET", "CODE")).toBe("");
});
