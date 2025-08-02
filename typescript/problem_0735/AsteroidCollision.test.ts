import { test, expect } from 'vitest';
import { asteroidCollision } from './AsteroidCollision';

test('test1', () => {
  const asteroids = [5, 10, -5];
  const output = [5, 10];
  expect(asteroidCollision(asteroids)).toStrictEqual(output);
});

test('test2', () => {
  const asteroids = [10, 2, -5];
  const output = [10];
  expect(asteroidCollision(asteroids)).toStrictEqual(output);
});

test('test3', () => {
  const asteroids = [-2, -1, 1, 2];
  const output = [-2, -1, 1, 2];
  expect(asteroidCollision(asteroids)).toStrictEqual(output);
});
