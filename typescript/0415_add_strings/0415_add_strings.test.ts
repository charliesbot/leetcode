import { addStrings } from "./0415_add_strings";

test("test1", () => {
  const num1 = "1";
  const num2 = "1";
  expect(addStrings(num1, num2)).toBe("2");
});
