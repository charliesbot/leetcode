import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { addStrings } from "./0415_add_strings.ts";

Deno.test(function test1() {
  const num1 = "1";
  const num2 = "1";
  assertEquals(addStrings(num1, num2), "2");
});
