import { productExceptSelf } from "./0238_product_of_array_except_self";

test("productExceptSelf1", () => {
  const input = [1, 2, 3, 4];
  const output = [24, 12, 8, 6];
  expect(productExceptSelf(input)).toStrictEqual(output);
});
