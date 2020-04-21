import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { calculate } from "./0224_basic_calculator.ts";

Deno.test(function test1() {
  const input = "1 + 1";
  assertEquals(calculate(input), 2);
});

Deno.test(function test2() {
  const input = " 2-1 + 2 ";
  assertEquals(calculate(input), 3);
});

Deno.test(function test3() {
  const input = "(1+(4+5+2)-3)+(6+8)";
  assertEquals(calculate(input), 23);
});

