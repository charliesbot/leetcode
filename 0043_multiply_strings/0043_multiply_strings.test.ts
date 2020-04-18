import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { multiply } from "./0043_multiply_strings.ts";

Deno.test(function multiply1() {
  assertEquals(multiply("2", "3"), "6");
});

Deno.test(function multiply2() {
  assertEquals(multiply("589", "24"), "14136");
});

Deno.test(function multiply3() {
  assertEquals(multiply("5891", "243"), "1431513");
});

Deno.test(function multiply4() {
  assertEquals(multiply("123", "456"), "56088");
});

Deno.test(function multiply5() {
  assertEquals(multiply("0", "0"), "0");
});
