import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { asteroidCollision } from "./0735_asteroid_collision.ts";

Deno.test(function test1() {
  const asteroids = [5, 10, -5];
  const output = [5, 10];
  assertEquals(asteroidCollision(asteroids), output);
});

Deno.test(function test2() {
  const asteroids = [10, 2, -5];
  const output = [10];
  assertEquals(asteroidCollision(asteroids), output);
});

Deno.test(function test3() {
  const asteroids = [-2, -1, 1, 2];
  const output = [-2, -1, 1, 2];
  assertEquals(asteroidCollision(asteroids), output);
});
