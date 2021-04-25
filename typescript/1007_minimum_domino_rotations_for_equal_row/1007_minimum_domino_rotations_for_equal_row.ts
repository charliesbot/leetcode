/*
 * In a row of dominoes, A[i] and B[i] represent
 * the top and bottom halves of the i-th domino.
 *
 * (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
 *
 * We may rotate the i-th domino, so that A[i] and B[i] swap values.
 *
 * Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.
 *
 * If it cannot be done, return -1.
 */

const countSwaps = (target: number, A: number[], B: number[]): number => {
  let swaps = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== target) {
      if (B[i] !== target) {
        return Infinity;
      }

      swaps++;
    }
  }

  return swaps;
};

const minDominoRotations = (A: number[], B: number[]): number => {
  const min = Math.min(
    countSwaps(A[0], A, B),
    countSwaps(B[0], A, B),
    countSwaps(A[0], B, A),
    countSwaps(B[0], B, A)
  );

  return min < Infinity ? min : -1;
};

export { minDominoRotations };
