/**
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 */
export function countBits(n: number): number[] {
  const result = Array(n + 1).fill(0)
  const l = result.length
  for (let i = 0; i < l; i++)
    result[i] = result[i >> 1] + (i & 1)
  return [...result]
}
