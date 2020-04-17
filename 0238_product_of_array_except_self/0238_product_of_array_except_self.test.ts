import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { productExceptSelf } from "./0238_product_of_array_except_self.ts";

Deno.test(function productExceptSelf1() {
  const input = [1, 2, 3, 4];
  const output = [24, 12, 8, 6];
  assertEquals(productExceptSelf(input), output);
});
