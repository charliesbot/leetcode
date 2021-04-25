/*
 * Given an array A of non-negative integers,
 * return the maximum sum of elements in two non-overlapping (contiguous) subarrays,
 * which have lengths L and M.
 *
 * (For clarification, the L-length subarray could occur before or after the M-length subarray.)
 *
 * Formally, return the largest V for which V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:
 *     0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
 *     0 <= j < j + M - 1 < i < i + L - 1 < A.length.
 */

const maxSumTwoNoOverlap = (A: number[], L: number, M: number): number => {
  for (let i = 1; i < A.length; i++) {
    A[i] += A[i - 1];
  }

  let mMax = A[M - 1];
  let lMax = A[L - 1];
  let res = A[L + M - 1];

  for (let i = L + M; i < A.length; i++) {
    lMax = Math.max(lMax, A[i - M] - A[i - L - M]);
    mMax = Math.max(mMax, A[i - L] - A[i - L - M]);
    res = Math.max(res, lMax + A[i] - A[i - M], mMax + A[i] - A[i - L]);
  }

  return res;
};

export { maxSumTwoNoOverlap };
