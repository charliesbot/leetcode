/*
 * We are given an array asteroids of integers representing asteroids in a row.
 *
 * For each asteroid, the absolute value represents its size,
 * and the sign represents its direction (positive meaning right,
 * negative meaning left). Each asteroid moves at the same speed.
 *
 * Find out the state of the asteroids after all collisions.
 *    - If two asteroids meet, the smaller one will explode.
 *    - If both are the same size, both will explode.
 *
 * Two asteroids moving in the same direction will never meet.
 */

const asteroidCollision = (asteroids: number[]): number[] => {
  const result: number[] = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      result.push(asteroid);
      continue;
    }

    while (
      result.length > 0 &&
      result[result.length - 1] > 0 &&
      result[result.length - 1] < -asteroid
    ) {
      result.pop();
    }

    if (result.length === 0 || result[result.length - 1] < 0) {
      result.push(asteroid);
    }

    if (
      result[result.length - 1] > 0 &&
      result[result.length - 1] === -asteroid
    ) {
      result.pop();
    }
  }

  return result;
};

export { asteroidCollision };
