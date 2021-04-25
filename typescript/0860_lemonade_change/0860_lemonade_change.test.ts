import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { lemonadeChange } from "./0860_lemonade_change.ts";

Deno.test(function lemonadeChange1() {
  const input = [5, 5, 5, 10, 20];
  assertEquals(lemonadeChange(input), true);
});

Deno.test(function lemonadeChange2() {
  const input = [5, 5, 10];
  assertEquals(lemonadeChange(input), true);
});

Deno.test(function lemonadeChange3() {
  const input = [10, 10];
  assertEquals(lemonadeChange(input), false);
});

Deno.test(function lemonadeChange4() {
  const input = [5, 5, 10, 10, 20];
  assertEquals(lemonadeChange(input), false);
});

Deno.test(function lemonadeChange5() {
  const input = [5, 5, 5, 5, 20, 20, 5, 5, 20, 5];
  assertEquals(lemonadeChange(input), false);
});
