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
 * */

